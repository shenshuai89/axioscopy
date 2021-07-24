import {deepCopy, merge} from './utils'
import interceptorManager from './interceptorManager';
import ajax from './ajax';

class Nxios{
    constructor(config){
        // this.defaults = config;
        this.defaults = deepCopy(config);
        this.interceptors = {
            request: new interceptorManager,
            response: new interceptorManager
        }
    }
    get(url, config){
        let configs = merge(this.defaults, config);
        configs.url = url;
        // console.log(configs)

        let promise = Promise.resolve(configs);

        this.interceptors.request.handlers.forEach((handler)=>{
            promise = promise.then(
                handler.fulfilled,
                handler.rejected
            )
        })

        promise = promise.then(this.dispatch, undefined);

        this.interceptors.response.handlers.forEach(function(handler){
            promise = promise.then(
                handler.fulfilled,
                handler.rejected
            )
            return promise
        })

        return promise
    }

    dispatch(configs){
        // 为了添加适配器adaptor，适配node服务端环境和web环境
        return configs.adaptor(configs)
    }

}

export default Nxios;