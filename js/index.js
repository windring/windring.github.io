(function (nya_global) {
  const nya = function (nya_name) {
    return Array.prototype.slice.call(document.querySelectorAll(nya_name));
  };
  const urListener = function () {
    var nya_section = location.hash.substr(3);
    console.log(window.scrollTo(0, 0) === undefined, nya_section),
      0 === nya(`.sections[nav-id="${nya_section}"]`).length ?
      location.hash = "#!/home" :
      document.body.id = `nya-${nya_section}`;
  };
  nya_global.onhashchange = urListener;
  urListener();
})(this);
