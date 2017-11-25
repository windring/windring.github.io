var r1="";//links data
$(document).ready(lldload);
function lldload(){
		r1=llinks.split("\n");
		for(e in r1){
			var x=r1[e];
			var alink=$("<a>");
			alink.attr({
				"class":"links-a",
				"target":"_blank",
				"href":x.split("||")[0]
			});
			alink.text(x.split("||")[1]);
			$("#links").append(alink);
			}
}
