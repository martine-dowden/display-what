
window.onload = function () {
  
  "use strict";
  
  var html = Array.from(document.getElementsByClassName('html'));
  var css = Array.from(document.getElementsByClassName('css'));
  var iframe = document.getElementById('iframe');
  showHtml();
  
  window.toggleTable = function(val) {
    switch(val) {
      case 'css':
        showCss();
      break;
      case 'html':
        showHtml();
      break;
    }
  }

  function showCss () {
    html.forEach(function(element) {
      element.classList.add("hidden");
    });
    css.forEach(function(element) {
      element.classList.remove("hidden");
    })
    iframe.src = './css-table.css';
  }

  function showHtml () {
    html.forEach(function(element) {
      element.classList.remove("hidden");
    });
    css.forEach(function(element) {
      element.classList.add("hidden");
    })
    iframe.src = './html-table.css';
  }

}
