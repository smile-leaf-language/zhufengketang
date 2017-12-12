const HOST = "http://localhost:3000"

//想服务器发送get请求 获取相应
export function get(url) {
    return fetch(HOST+url,{
        method:"GET",
        "credentials":"include",
        headers:{
            "Accept":"application/json"
            // "credentials":"include"尽量不要写在里面而是写在外面
        }
    }).then(res=>res.json())
}
export function post(url,data) {
    return fetch(HOST+url,{
        method:"POST",
        "credentials":"include",
        headers:{
            "Accept":"application/json"
        },
        body:JSON.string(data)//想服务器传请求体
    })
}