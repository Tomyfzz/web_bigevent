//每次调用$.ajax()$.get()$.post()会先效用这个函数进行拼接
//这个函数可以拿到给AJAX的提供的配置对象
$.ajaxPrefilter(function(options){
    //发送真正的ajax亲统一拼接路径
    options.url='http://api-breakingnews-web.itheima.net' +options.url
})