var doFn= {
	img: [],bar:!1,send:!1,barTimer:null,scrollFn:function(){function n(){e=event||window.event,d||(d=!0,s=setTimeout(function(){d=!1,s=null
},500),e.wheelDelta<0||40==e.keyCode?(l=$(window).height(),c>4*-l&&r++):(e.wheelDelta>0||38==e.keyCode)&&0>c&&r--,t())
}

function t() {
o(),i(),0!=r&&(doFn.bar===!0&&(clearInterval(doFn.barTimer),$(".barrageBox").hide(),$(".tabTxt").text("开启弹幕"),doFn.bar=!1),doFn.send===!0&&($(".bar-send").slideUp(200),$(".sendTxt").text("发送弹幕"),doFn.send=!1)),1!==r||p||($(".f2 area").each(function(n){doFn.img[n]=new Image,doFn.img[n].src=$(this).attr("data-url")
}),p=!0),3!==r||f||($(".popup-content").find("video").attr("src","http://videogame.ztgame.com.cn/xx2/20160927/xx2-147495913984.mp4"),f=!0),1!=r&&3!=r&&($(".popup-content").find("video")[0].pause(),$(".popup-bg").hide())
}

function a() {
u?$(".news-left").animate({marginLeft: 0
},300):$(".news-left").animate( {
marginLeft: "-269px"
},300)
}

function o() {
0===r?(u=!0,$(".news-left").fadeIn(300),a()): (u=!1,a(),$(".news-left").fadeOut(300))
}

function i() {
function n(n){switch($(n).removeClass("on"),r){case 0: $(n).eq(0).addClass("on");
break;case 1: $(n).eq(1).addClass("on");
break;case 2: $(n).eq(2).addClass("on");
break;case 3: $(n).eq(3).addClass("on");
break;case 4: $(n).eq(4).addClass("on")
}}

l=$(window).height(),c=-l*r,$(".container").stop(!0,!1).animate( {
"margin-top"
:c
},500,function() {
n(".column"),n(".item")
})}

var r=0,c=0,d=!1,s=null,l=734,u=!0,p=!1,f=!1;$(".news-btn").click(function() {
u=!u,a()
}),$(window).resize(function() {
i()
}),$(".nav-right > a").each(function(n) {
$(this).click(5===n?function(){u=!u,$(".news-left").fadeIn(300),a()
}

:function() {
r=n,t()
})}),$(document).on( {
"mousewheel keydown"
:n
})},petalsFn:function() {
function n(){a=event.pageX,o=event.pageY,$(".petals>div").each(function(n){var i=$(this);i.css(n%2===0?{left: e[n]+a/20,top:t[n]+o/20
}

: {
left: e[n]-a/20,top:t[n]-o/20
})})}

var e=[],t=[],a=0,o=0;$(".petals>div").each(function(n) {
var a=$(this);e[n]=parseInt(a.css("left")),t[n]=parseInt(a.css("top"))
}),$(document).on("mousemove",n)
},f4VideoFn:function() {
$(".f4-btn1").click(function(n){n.preventDefault(),$(".page4 .popup-bg").show(),$(".popup-content").find("video")[0].play()
}),$(".close-btn").click(function() {
event.preventDefault(),$(".popup-content").find("video")[0].pause(),$(".page4 .popup-bg").hide()
})},f2PictureFn:function() {
function n(){var n=doFn.img[rel].src;$(".popup-content").find("img").eq(0).attr("src",n)
}

var e=$(".f2 > ul"),t=0;$(".tab-btn1").click(function() {
t>=-1036&&0>t&&(e.animate({marginLeft: "+=518"
},500),t+=518)
}),$(".tab-btn2").click(function() {
0>=t&&t>-1036&&(e.animate({marginLeft: "-=518"
},500),t-=518)
}),$(".f2 area").click(function() {
rel=$(this).attr("rel"),$(".page2 .popup-bg").show(),n(),$(".left-tab").click(function(){rel>0?rel--: rel=doFn.img.length-1,n()
}),$(".right-tab").click(function() {
rel<doFn.img.length-1?rel++: rel=0,n()
})}),$(".close-btn").click(function() {
$(".page2 .popup-bg").hide()
})},barFn: {
init: function(){function n(){$(".barrageBox").show(),$(".tabTxt").text("关闭弹幕");
var n=t.barTxtArr[t.aIndex];t.randomBar(n),clearInterval(doFn.barTimer),doFn.barTimer=setInterval(function(){n=t.barTxtArr[t.aIndex],t.randomBar(n)
},2e3)
}

function e() {
var n=$(".input-value").val();""===n||"弹幕不能为空！"===n?$(".input-value").val("弹幕不能为空！").blur(): (t.randomBar(n),$(".input-value").val(""))
}

var t=this;t.prea=0,t.preb=0,t.aIndex=0,t.barTxtArr=["来啊~造作啊~一起摇摆啊~","小姐姐~一起上天吧~","看，天上有猪在飞~","厉害了我的哥！ 抖得累不累","谁来玩  组队 组队","答题好难啊    姨妈难求！！！！","无限飞行？ 加速飞 会御剑吗！","我是仙 修炼多久可以成仙","答题好难  智商不在线啊啊啊啊  跪求鸡和马","前方高能预警，飞行战队准备，非战斗人员撤离","【哔】喘等等福利","辣么大，这不科学","如果XX更大就是神作了","听说，玩这个游戏的汉子女朋友胸都很大","你那么厉害，咋不上天呢~ ","恩，我上了","迷之抖动，简直鬼畜，23333","游戏我玩还不行吗，您老别晃了","你上你的班，我成我的仙","能玩游戏 就少吵吵 消停点行吗","大哥 干哈呢 来玩会嘛","梦想,就是坚持让你觉得幸福","仙2,就是你圆梦的新手村","神仙 妖怪 ~~~","吃饭睡觉打怪怪~","5555 这游戏什么时候能玩儿？我也要飞！","大哥 天上的风景好么？","大哥你好帅 求带我一起飞","历害了我的仙哥","吓得我不要不要的","这真是太萝莉啦！","羞耻play","弹幕护体","玩个游戏强行上天，心疼天上的兄弟","前方高能预警，这不是演习 ，有仙！","要是仙侠出2就神作了","摄像师晚饭加鸡腿","这边的弹幕由我来承包 求官方给工作","什么东西在天上飞？66666666","这画面我能看一天","你们只多了个游戏 而我们却多了一帮神仙","我上仙班。。"],$(".startBar").on("click",function() {
console.log("ds"),doFn.bar?(clearInterval(doFn.barTimer),$(".barrageBox").hide(),$(".tabTxt").text("开启弹幕")): n(),doFn.bar=!doFn.bar
}),$(".sendBar").on("click",function() {
doFn.bar||doFn.send||(n(),doFn.bar=!doFn.bar),doFn.send?($(".bar-send").slideUp(200),$(".sendTxt").text("发送弹幕")): ($(".bar-send").slideDown(200),$(".sendTxt").text("隐藏弹框")),doFn.send=!doFn.send
}),$(".input-value").on( {
focus: function(){$(this).val("")
},keyup:function(n) {
13===n.keyCode&&e()
}}),$(".inputBar").on( {
click: e
})},randomBar:function(n) {
function e(n,e){return parseInt(Math.random()*n+e)
}

function t(n,t) {
var a=0;do a=e(n,t);while(a===o.prea);return o.prea=a,a
}

function a(n,t) {
var a=0;do a=e(n,t);while(a===o.preb);return o.preb=a,a
}

var o=this,i=document.documentElement.clientWidth,r=$("<div class='barrage'><span class='jianjian'></span><span class='txt'></span><span class='jianbing'></span></div>"),c=e(5e3,5e3),d=t(3,1),s=a(4,0);$(".barrageBox").append(r),r.find(".txt").text(n),r.addClass("j"+d).css("bottom",60*s+10).animate( {
right: i
},c,"linear",function() {
this.remove()
}),o.aIndex>=o.barTxtArr.length-1?o.aIndex=0:o.aIndex++
}}};

doFn.scrollFn(),doFn.petalsFn(),doFn.f4VideoFn(),doFn.f2PictureFn(),doFn.barFn.init();