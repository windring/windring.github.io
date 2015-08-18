
//
//midi播放器部分start
//
var au_tick=2;
var iniofp=1;
var path="http://7sbxv9.com1.z0.glb.clouddn.com/";//伟大的七牛的前缀
var mstring="http://7sbxv9.com1.z0.glb.clouddn.com/1.midi";
window.onload=function(){
  autoUI();
  oncl1();
}
$(window).resize(autoUI);
function autoUI()
{
  //自适应start
  if(window.innerWidth<=1000)
  {
	$(".tagmsgs").fadeOut(1000);
	$("#tagmsg").fadeOut(1000);
  }else{
	$(".tagmsgs").fadeIn(1000);
	$("#tagmsg").fadeIn(1000);
  }
  if(window.innerWidth<=600)
  {
    $(".bara").fadeOut();
  }
  else{
	$(".bara").fadeIn();
  }
  if(window.innerHeight<=426)
  {
    $("#bet1").fadeOut(1000);
	$("#bet2").fadeIn(1000).html('<div style="text-align:center;position:fixed;width:100%;height:20px;top:50%;margin-top:-10px;line-height:20px;font-size:20px;color:#fff;">error：你的高度真的太……看不到的啦</div>');
  }else{
	$("#bet2").fadeOut(1000).text("");
	$("#bet1").fadeIn(1000);
  }
  //自适应over
}
function oncl1()
{
  if(iniofp==0)
  {
    document.getElementById("l1").innerHTML=">";
    if(iniofp==0){iniofp=1;MIDIjs.stop();}
    iniofp=1;
  }else{
    document.getElementById("l1").innerHTML="II";
	MIDIjs.play(mstring);
    iniofp=0;
  }
}function nextm(){
  if(au_tick<=4)
	{	
	  if(iniofp==0){iniofp=1;MIDIjs.stop();}
	  mstring=path+(au_tick++)+".midi";
	  MIDIjs.play(mstring);
	}else{
      alert("full");
	  au_tick=1;
	  if(iniofp==0){iniofp=1;MIDIjs.stop();}
	  mstring=path+(au_tick++)+".midi";
	  MIDIjs.play(mstring);
	}
}function backm(){
  if(au_tick>1)
	{	
	  if(iniofp==0){iniofp=1;MIDIjs.stop();}
	  mstring=path+(au_tick--)+".midi";
	  MIDIjs.play(mstring);
	}else{
	  alert("full");
	  au_tick=4;
	  if(iniofp==0){iniofp=1;MIDIjs.stop();}
	  mstring=path+(au_tick--)+".midi";
	  MIDIjs.play(mstring);
	}
}
//一些ui设计
function conft(){
  var confta=document. getElementById("tagmsg");
  if(confta.style.right=="0px")
  {
    confta.style.right="-100%";
  }else{
    confta.style.right="0px";
  }
}function closethis(){
  this.style.display="none";
}
//over
//
//midi播放器部分over
//

//
//类似屏保的动画（colorfactory）start
//
function fin(shiliu)
{
  if(document.getElementById("bet2").style.display=="none")
  {
    $("#bet2").css("background",shiliu);
    $("#bet1").fadeToggle(500,function(){$("#bet2").fadeToggle(500);});
  }else{
  $("#bet2").fadeToggle(500,function(){$("#bet1").fadeToggle(500);});
  }
}
function fout()
{
  $("#bet2").fadeOut(500,function(){$("#bet1").fadeIn(500);});
}
//
//colorfactory over
//