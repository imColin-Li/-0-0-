# -0-0-
微信小程序:课下

这是个专注于丰富课下时光的微信小程序。
主要实现了各类api的调用,其中包含
聚合数据api——用于请求头条数据与新闻内容
腾讯地图api——用于请求当前位置
和天气api————用于请求天气情况
百度地图api——用于请求当前天气,以及周围的生活服务,包括周围酒店,周围餐馆,周围服务场所(服务中心,照相馆,手表维修中心,公厕等等) 
豆瓣api——用于请求当前热映电影,新片,豆瓣评分,与电影评论,
在资讯板块中,通过请求url展示新闻。 
这个微信小程序整体来看有些粗略,部分排版不够完美,实现的功能也比较简单。 
在写小程序的过程,引用,寻求了很多文件的帮助,最终实现了若干功能。
目录结构——images存放照片
       ———unitls存放全局设置
       ——pages——存放首页  ——地图周边服务
                         ——当前热映  
                         ——新闻
                         ——天气天气 
                         —— switchcity更改定位 
                         ———电影-细节电影详情页 
        ——wxPares微信小程序实现html显示
非常感谢：
https://github.com/winterfeel/Wxapp_Toutiao
https://github.com/fozero/zhihudaily-weapp
https://www.juhe.cn/docs/api/id/94//聚合数据API
https://codeload.github.com/imcy/MyWeixin
