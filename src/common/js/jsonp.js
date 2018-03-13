let count = 0
const defalutOpt = {
    prefix: 'jsp_',
    name: 'callback'
}
const enc = encodeURIComponent
function noop(){}
let jsonp = function(opt){
    if (!opt || !opt.url) return
    let timer // 计时器，超时处理
    let script // 生成的script标签
    let option = Object.assign({}, defalutOpt, opt)
    let id = option.prefix + count++ // 方法的唯一标识
    option.timeout = option.timeout === null? 60000 : option.timeout
    let url = option.url
    let node = document.getElementsByTagName('script')[0] || document.body
    if(url.includes('?')) {
        url = url.endWidth('?')? url : url + '&'
    }else {
        url += '?'
    }
    url = url + paramJoin(option.param) + `&${option.name}=${id}`
    window[id] = function(data){
        cleanup()
        option.success(data)
    }
    timer = setTimeout(function(){}, option.timeout)
    let cleanup = function() {
        if(script.parentNode) script.parentNode.removeChild(script)
        window[id] = noop;
        if(timer) {
            clearTimeout(timer)
            opt.failuer(new Error('time out'))
        }
    }
    script = document.createElement('script')
    script.src = url
    node.parentNode.insertBefore(script, node)
}

let paramJoin = function(param){
    if (!param) return ''
    let url = ''
    for (let key in param) {
        url += `&${key}=${param[key]}`
    }
    url = url.substring(1)
    return enc(url)
}

export default jsonp
