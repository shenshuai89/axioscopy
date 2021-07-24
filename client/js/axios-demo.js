import axios from 'axios';
import nxios from './nxios';


// nxios.defaults.adaptor = function(configs){
//     return nodeHttp(configs);
// }



// 请求拦截器
nxios.interceptors.request.use((config)=>{
    console.log("request config111");
    return config;
},(err)=>{
    console.log("err");
})
console.log(nxios);

console.log(nxios.interceptors.request, "interceptors");
// 响应拦截器
nxios.interceptors.response.use((config)=>{
    console.log("response config222");
    return config;
},(err)=>{
    console.log("err");
})

nxios.get('/', {
    url: '/',
    method: 'GET',
    headers: {
        'myname': "buneng zhongwen"
    }
}).then(res => {
    console.log(res, "res");
})
