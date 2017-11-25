var activesa;
function init(keya,keyb)
{
	Bmob.initialize(keya,keyb);
	var ActiveSa=Bmob.Object.extend("ActiveSa");
	activesa= new ActiveSa();
}
function setT(word,value)
{
	activesa.set(word,value);
	activesa.save(null,{success:function(object){alert("设置ok"+object.id);},error:function(model,erro){alert("设置失败");}});
}
function set(word,value)
{
	activesa.set(word,value);
	activesa.save();
}
function showT(keya){
	activesa.get(activesa.id,{success:function(object){alert(object.get(keya));},erro:function(object,erro){alert("query fail");}});
}
function AStart()
{
	init("0536c4331ac2a219f4fb4b678a154ed7","a602f043c9146cf58f1443cb6fb0a02a")
	//正式
	var enterTime=Date();//进入时间
	var enterIP=returnCitySN["cip"];//ip，需要搜狐接口
	var enterIa=returnCitySN["cname"];//ip地理地址
	//浏览器信息
	var lCn=navigator.appCodeName;//浏览器代码名
	var lMv=navigator.appMinorVersion;//浏览器次级代码名
	var lN=navigator.appName;//浏览器名称
	var lV=navigator.appVersion;//浏览器平台和版本信息
	var lBl=navigator.browserLanguage;//浏览器语言
	var lP=navigator.platform;//操作系统平台
	var lSl=navigator.systemLanguage;//操作系统默认语言
	var lUa=navigator.userAgent;//user-agent头部值
	var lUl=navigator.userLanguage;//操作系统用户语言
	//好多啊。。。感觉不好
	var wW=window.outerwidth;//窗口宽
	var wH=window.outerheight;//窗口高
	var sW=screen.availWidth;//屏幕宽
	var sH=screen.availHeight;//屏幕高
	set("enterTime",enterTime);
	set("enterIP",enterIP);
	set("enterIa",enterIa);
	set("wW",wW);
	set("wH",wH);
	set("sW",sW);
	set("sH",sH);
	set("lCn",lCn);
	set("lMv",lMv);
	set("lN",lN);
	set("lV",lV);
	set("lBl",lBl);
	set("lP",lP);
	set("lSl",lSl);
	set("lUa",lUa);
	set("lUl",lUl);
	//设置完毕
}
function AOut()
{
	var outTime=new Date();
	set("outTime",outTime);
}
window.onload=AStart();
window.onunload=AOut();