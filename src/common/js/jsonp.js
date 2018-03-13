let count = 0
const defalutOpt = {
    prefix: '_jp',
    name: 'callback'
}
const enc = encodeURIComponent
function noop(){}
let jsonpBilder = function(opt){
    if (!opt || !opt.url) return
    let timer // 计时器，超时处理
    let script // 生成的script标签
    let option = Object.assign({}, defalutOpt, opt)
    let id = option.prefix + count++ // 方法的唯一标识
    option.timeout = option.timeout == null? 60000 : option.timeout
    let url = option.url
    let node = document.getElementsByTagName('script')[0] || document.body
    if(url.includes('?')) {
        url = url.endWidth('?')? url : url + '&'
    }else {
        url += '?'
    }
    url = url + paramJoin(option.param) + `&${option.name}=${enc(id)}`
    window[id] = function(data){
        cleanup()
        option.callback(null, data)
    }
    timer = setTimeout(function(){
        cleanup()
        option.callback(new Error('time out'))
    }, option.timeout)
    let cleanup = function() {
        if(script.parentNode) script.parentNode.removeChild(script)
        window[id] = noop
        if(timer) {
            clearTimeout(timer)
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
        url += `&${enc(key)}=${param[key]===undefined? '' : enc(param[key])}`
    }
    url = url.substring(1)
    return url
}

export default function jsonp(opt){
    return new Promise((resolve, reject) => {
        opt.callback = function(err, data) {
            if(err){
                reject(err)
            }else {
                resolve(data)
            }
        }
        jsonpBilder(opt)
    })
}
