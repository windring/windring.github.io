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
	activesa.save(null,{success:function(object){alert("����ok"+object.id);},error:function(model,erro){alert("����ʧ��");}});
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
	//��ʽ
	var enterTime=Date();//����ʱ��
	var enterIP=returnCitySN["cip"];//ip����Ҫ�Ѻ��ӿ�
	var enterIa=returnCitySN["cname"];//ip�����ַ
	//�������Ϣ
	var lCn=navigator.appCodeName;//�����������
	var lMv=navigator.appMinorVersion;//������μ�������
	var lN=navigator.appName;//���������
	var lV=navigator.appVersion;//�����ƽ̨�Ͱ汾��Ϣ
	var lBl=navigator.browserLanguage;//���������
	var lP=navigator.platform;//����ϵͳƽ̨
	var lSl=navigator.systemLanguage;//����ϵͳĬ������
	var lUa=navigator.userAgent;//user-agentͷ��ֵ
	var lUl=navigator.userLanguage;//����ϵͳ�û�����
	//�öడ�������о�����
	var wW=window.outerwidth;//���ڿ�
	var wH=window.outerheight;//���ڸ�
	var sW=screen.availWidth;//��Ļ��
	var sH=screen.availHeight;//��Ļ��
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
	//�������
}
function AOut()
{
	var outTime=new Date();
	set("outTime",outTime);
}
window.onload=AStart();
window.onunload=AOut();