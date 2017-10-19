var rc="";//data
$(document).ready(pld);
function pld(){
  var i=1;
  var k=$("<div>");
  k.load("js/plug/pokemonmonmon.js",function(r,s,x){
    rc=r;
    rc=rc.replace(/\>([\u4e00-\u9fa5]|[a-zA-Z])+\</g,"><");
    [].forEach.call($(".markdown-body"),function(a){
		$(a).html(markdown.toHTML(rc.split("==||><||==\n")[i++]));
        console.log(rc.split("==||><||==\n")[i]);
		});
	k.remove();
  });
}
