var helloworld=function(){
  var code
    =document
      .querySelector
        ("#code");/*hello world*/
      code.innerHTML
    =helloworld
  .toString();
};
helloworld();
(function(nya_global){
  var nya=function(nya_name){
    return Array.prototype.slice.call(document.querySelectorAll(nya_name));
  };
  var urListener=function(){
    var nya_section=location.hash.substr(3);
    console.log(nya_section),
    0===nya(`.sections[nav-id="${nya_section}"]`).length?
      location.hash="#!/home":
      document.body.id=`nya-${nya_section}`;
  };
  nya_global.onhashchange=urListener;
  urListener();
})(this);
