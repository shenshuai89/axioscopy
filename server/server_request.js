// import axios from 'axios';
import nxios from '../client/js/nxios/index.js'

// 在node环境中使用ECMA语法，需要使用实验配置node --experimental-specifier-resolution=node server_request.js 
nxios.get('/')
.then(response =>{
    console.log('object', response);
})