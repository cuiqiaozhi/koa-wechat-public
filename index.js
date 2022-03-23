const Koa = require('koa') 
const XmlParser = require ('koa-xml-body') 
const Wetchat = require('koa-wechat-public')
const app = new Koa()

//配置你的公众号参数
const wechatApp = new Wetchat({
token: TOKEN,
appId: APPID,
appSecret: APPSECRET
})

//编写一个接受消息的处理器
wechatApp.text('你好', async acc=>{ 
acc.send.sendTxtMsg("你也好")
})


app.use(new XmlParser()) 
app.use(wechatApp.start()) 
app.listen(process.env.PORT || 3001)
