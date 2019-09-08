var rc="";//data
$(document).ready(pld);
function pld(){
	var i=1;
    rc=mon;
    rc=rc.replace(/\>([\u4e00-\u9fa5]|[a-zA-Z])+\</g,"><");
    $(".markdown-body").html(markdown.toHTML(rc));
    console.log(rc);
}
