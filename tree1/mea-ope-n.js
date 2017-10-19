var Tom=new Array();//创世大神
var Sam=new Array();
function mess()
{
	alert("这是mea-ope-n"+"\n"+
	  "mon是一个还不完善的近音乐伪游戏，你可以选择本地的音乐文件进行游戏。说明：当提示符块变换时点击屏幕或按下按键。现阶段：预加载时间较长，没有音符预览。嗯，用于观赏的成分更大一些。"+"\n"+
	  "enjoy?"+"\n"+
	  "mon的下一次更新，嗯，要很久。");
}
function doli()
{
	for(y in "abc")
	{
	  for(x in "1234567")
	  {
		$("body").append($("<div>").attr({"id":"doli"+(7*y+x*1)*1,"class":"doli"+y}));
	  }
	}
}
var file;//存放音乐
var fileResult;//音乐解码后的ArryBuffer数据
var con;//AudioContext
var absn;//AudioBufferSourceNode
var als;//Analyser
var Farray;//频率-能量数据
var Tarray;//T-Y数据
var tk=Date.parse(new Date());//t()
function t()
{
	var otk=tk;
	tk=(new Date()).getTime();
	return tk+",spend:"+(tk-otk);
}
function loadcon()//初始化AudioContext
{
  try{
    con=new (window.AudioContext||window.webkitAudioContext||windw.mozAudioContext||window.msAudioContext);
    //初始化AudioContex对象
	//loadrc("init.pm3");
  }catch(e){
    alert("wrong:"+e);
	//浏览器都不支持，玩完
  }
}
function loadrc(res)//通过ajax方式加载音乐
{
	$.ajax({
		url:res,
		responseType:'arraybuffer',
		success:function(r,s,x){}
	})
}
function loadrc2(r)//通过选择文件对话框input选择文件<input type="file" onchange=loadrc2(this.files) />
{
    if(r.files.length!=0)
	{
		//当选择了文件
		tok.bmobInit();
		doli();
		console.log("click,loading file,time:"+t());
		file=r.files[0];
		console.log("File get,starting FileReader,time:"+t());
		var ar=new FileReader(file);
		ar.onload=function(e){decodeaudio(e)};
		ar.readAsArrayBuffer(file);
	}
}
function decodeaudio(e)//decodeAudioData
{
	console.log("FileReader onload,getting fileResule(file.target.result),time:"+t());
	fileResult=e.target.result;
	console.log("fileResult get,loading AudioContext,time:"+t());
	loadcon();
	console.log("AudioContext get,decoding AudioData,time:"+t());
	con.decodeAudioData(fileResult,
			            function(buffer){loadbuffer(buffer);
					    //下一步分析
						},
						function(e){alert("解码失败:"+e);
						//解码失败
						}
						);
}
function loadbuffer(buffer)
{
	console.log("AudioData decoded,connecting,time:"+t());
	absn=con.createBufferSource();
	als=con.createAnalyser();
	//als.fftSize=256;//傅里叶变换规模
	absn.connect(als);//中转到分析器进行分析
	als.connect(con.destination);
	console.log("connect over,loading buffer,time:"+t());
	absn.buffer=buffer;
	console.log("buffer get,time:"+t())
	$("#lf").css("display","none");
	
	caninit();
	absn.start(0);//播放音乐
	mt1=(new Date()).getTime();
	mon.init();
	console.log("start music,time:"+t());
	updata();
	absn.onended=function(){
		alert("score:"+mon.score);
		tok.gameSuccess(mon.score);
	}
}
function getFdata()
{
	Farray=new Uint8Array(als.frequencyBinCount);
	als.getByteFrequencyData(Farray);
}
function getTdata()
{
	Tarray=new Uint8Array(als.fftSize);
	als.getByteTimeDomainData(Tarray);
}

var can;//canvas
var cox;//canvas context
var rap;//array.length
var wid;
var hei;
/**/
var mt1;//ti1
var mt2=100;//采样步长
//机制暂定
/**/
var pt1=20;//BPM相关
function caninit(){
	can=$("<canvas>");
	can.attr("id","can");
	$("body").append(can);
	wid=can.css("width").split("px")[0];
	hei=can.css("height").split("px")[0];
	can.attr({"width":wid,"height":hei});
	//rap=array.length;
	cox=can[0].getContext("2d");
	cox.strokeStyle="#66ccff";
}
function updata(){
    cox.clearRect(0,0,can.attr("width"),can.attr("height"));
	draw_1();
	requestAnimationFrame(updata);
}
function draw_1(){
	getFdata();
	/*绘制开始*/
	dea_4();
	for(i=0;i<Farray.length;i+=100)
	{
		cox.strokeStyle=mon.strokeStyle;
		cox.beginPath();
		cox.arc(wid/2,hei/2,Farray[i],0,2*Math.PI);
		cox.stroke();	
	    cox.closePath();
		cox.beginPath();
		cox.arc(wid,hei/2,i/5,-Math.PI/2,Farray[i]/200*Math.PI);
		cox.stroke();	
	    cox.closePath();
	}
	/*绘制结束*/
}
function draw_2(){
	getTdata();
	cox.beginPath();
	cox.arc(wid/2,hei/2,Tarray[0],0,Math.PI*2);
	console.log(Tarray[0]+","+t());
	cox.stroke();	
    cox.closePath();
}
function dea_1()//第一个解决方案，并不理想
{
	if(((new Date()).getTime()-mt1)>mt2)
	{
		var dea=[
	         [Farray[131],Farray[147],Farray[165],Farray[175],Farray[196],Farray[220],Farray[247]],//低音区
			 [Farray[262],Farray[294],Farray[330],Farray[350],Farray[392],Farray[440],Farray[494]],
			 [Farray[524],Farray[588],Farray[660],Farray[700],Farray[784],Farray[880],Farray[988]]//高音区
			 ];
		if(Tom.length!=0){
			var cea=Tom[Tom.length-1].slice(0);
			dea.map(function(e,i){
		      var f=e.slice(0);
		      f.sort(sortnumber);
			  //console.log(f);
		      for(yyy in "a")
		      {
		        if(Math.pow((f[yyy]-cea[i][e.indexOf(f[yyy])]),2)>(pt1*pt1))
			    {
				  $(".doli"+i+"").css("background","#fff");
				  cea[i][e.indexOf(f[yyy])]=f[yyy];
				  mon.cColor();
				  lg((i*7+e.indexOf(f[yyy]))*1);
			    }
		      }
		    });
			Tom.push(cea);
		}else{
		    Tom.push(dea);
		}
	    mt1=(new Date()).getTime();
	}	
}
function dea_2()//不~行
{
	var dea=[
	         Farray[131],Farray[147],Farray[165],Farray[175],Farray[196],Farray[220],Farray[247],
			 Farray[262],Farray[294],Farray[330],Farray[350],Farray[392],Farray[440],Farray[494],
			 Farray[524],Farray[588],Farray[660],Farray[700],Farray[784],Farray[880],Farray[988]
			 ];
	Tom.push(eval(dea.join("+")));
	var T=eval(Tom.slice(-6).join('+'))-eval(Tom.slice(-12,-6).join('+'));
	if(T>1000)console.log("beat");
}
function dea_3()
{
	var dea=0;
	for(i=0;i<Farray.length;i+=100)
	{
		dea+=Farray[i];
	}
	Tom.push(dea);
	var cea=Tom.slice(-12);
	cea[12]=0;
	for(i=1;i<12;i++)
	{
		if(cea[i]>cea[i-1])cea[12]+=1;
	}
	if(cea[12]>5){
		Sam.push(1);
	}else{
		Sam.push(0);
	}
	if(eval(Sam.slice(-5).join('+'))>4)
	{
		console.log("beat");
		Sam=[0];
	}
}
function dea_4()
{
	var l=10;//敏度
	var dea=new Array();
	for(i=0;i<Farray.length;i++)
		dea.push(Farray[i]);
	Tom.push(dea);
	var cea=Tom.slice(-l);
	cea[cea.length]=new Array(dea.length);
	var eea=0;
	if(cea.length>l)for(y=0;y<dea.length;y++)
	{
		cea[l][y]=0;
		for(x=1;x<l;x++)
		{
			if(cea[x][y]-cea[x-1][y]>0)cea[l][y]+=1;
		}
		if(cea[l][y]>3)eea++;
	}
	if(eea>dea.length/2)
	{
		console.log("beat");
		Tom=[];
		for(x in "abc")$(".doli"+x).css("background","#fff");
		mon.cColor();
		lg(eea%21);
	}
}
function sortnumber(a,b)
{
	return b-a;
}
function lg(lg)
{
	$("#doli"+lg).css("background","#"+(Array(6).join(0)+((lg+1)<<20)%(1<<24)).slice(-6));
}
var mon={
	startTime:0,
	nowTime:0,
	allowTime:50,
	tickTime:0,//当使用cColor时
	strokeStyle:"#66ccff",
	score:0,
	cColor:function(){
		this.strokeStyle="#"+(Array(6).join(0)+(this.gt()%(1<<24)).toString(16)).slice(-6);
		this.tickTime=this.gt();
	},
	init:function(){
		this.startTime=this.gt();
	},
	gt:function(){
		return (new Date()).getTime();
	},
	pd:function(){
		var tick=this.gt()-this.tickTime;
		switch(true)
		{
			case (tick>=0)&&(tick<this.allowTime):
			  this.score+=400*1000/this.allowTime;
			  break;
			case (tick>=this.allowTime)&&(tick<this.allowTime*2):
			  this.score+=300*1000/this.allowTime;
			  break;
			case (tick>=this.allowTime*2)&&(tick<this.allowTime*3):
			  this.score+=200*1000/this.allowTime;
			  break;
			case (tick>=this.startTime*3)&&(tick<this.allowTime*4):
			  this.score+=200*1000/this.allowTime;
			  break;
			default:
			  this.score-=tick;
			  break;
		}
		console.log(this.score);
		this.shs();
	},
	shs:function()
	{
		var t=(this.score*1-1*$("#shs").text().split(">")[1])*1;
		$("#shs").text("+/-:"+t+">"+this.score);
	},
	re:function()
	{
		this.score=0;
		this.startTime=0;
		this.tickTime=0;
		this.strokeStyle="#66ccff";
	}
};