var http=require("http");//利用require指令载入http模块，并将实例化的HTTP赋值给变量http
http.createServer(function (request,response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    // 发送响应数据 "Hello World"
    response.end('Hello World\n');}
).listen(8888);// listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');