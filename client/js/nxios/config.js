import ajax from "./ajax";
import nodeHttp from "./nodeHttp";

export default {
    baseUrl:'http://localhost:4321',
    method:'get',
    url:'/',
    headers:{
        'content-type':'application/json',
    },
    adaptor(config) {
        if(typeof window === "object"){
            console.log("web")
            return ajax(config)
        }else{
            console.log('node');
            return nodeHttp(config)
        }
    }
}