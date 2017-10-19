var cd="";//记录
var cdpath="http://assorted.pw/tree/su/";//目录src
var mdpath="http://assorted.pw/tree/md/";//files src sub
var lis=new Array();
/*
*index0:title
*index1:20160721 date
*index2:dictionary
*index3:aha? question
*index4:pw password
*index5:pw crypt
*index6:path crypt
*/
$(document).ready(function(){
	var cdp=({"iv":"h9pbyqCKGVn7BMV91sW2GQ","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"ah/3ruYGg18","ct":"JGvoeHwiMt+FaH6hFArHHrJ55g"});
    $("#l").load(cdpath+sjcl.decrypt("yume",cdp)+".cd",function(r,s,x){
	  cd=r;
	lo_li();
  });
});
function lo_li()
{
	var lol_i=cd.split('\n');
	for(var loli in lol_i)
	{
		var lolitas=lol_i[loli].split('| |');
		lis.push(lolitas);
		var lisl=$("<div>");
		lisl.html("<div>"+lolitas[0]+"</div>"+
							"<small>"+lolitas[1]+"</small>");
		lisl.attr("loli",loli);
		$(lisl).click(function(){
			futa(this);
		});
		$("#ls").append(lisl);
	}
}
function futa(j){
	k=$(j).attr("loli");
	alert(k);
	var l=lis[k];
	if(l[3]!="null")
	{
		var key=prompt(l[3],"****");
		var cjcl=sjcl.decrypt(key,l[5]);
		if(cjcl!=l[4]){
			alert("en...something wrong");
		}else{
		  sasa(sjcl.decrypt(key,l[6]));
		}
	}else{
		sasa(l[6]);
	}
}
function sasa(j){
	$("#l").load(mdpath+j+".md",function(r,s,x){
		$("#coc").html(markdown.toHTML(r));
	});
}