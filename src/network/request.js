import axios from 'axios'

export function request(config){
//1.创建axios实例
 const instance = axios.create({
  //  baseURL:'http://152.136.185.210:8000/api/z8/subcategory/detail?miniWallkey=50003&type=pop',
   baseURL:'http://152.136.185.210:8000/api/w6',
   timeout: 5000 

 })

//axios拦截器

instance.interceptors.request.use(config=>{
return config
}, err=>{

})
instance.interceptors.response.use(res=>{
  return res.data
},err => {
  console.log(err);
})

 //发送真正的网络请求
 return instance(config)
}

