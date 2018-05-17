/*
  Toggle
  ----------------------------------- */

(function() {
  'use strict';


// Animate arrows in SVG

  var toggleNav = document.getElementById('js-toggle');

  function changeClass() {
    if ( toggleNav.className.match(/(?:^|\s)toggle-closed(?!\S)/) ) {
      toggleNav.className = toggleNav.className.replace( /(?:^|\s)toggle-closed(?!\S)/g , ' toggle-open' );
      toggleNav.innerHTML = "Close menu";
      }
      else if ( toggleNav.className.match(/(?:^|\s)toggle-open(?!\S)/) ) {
        toggleNav.className = toggleNav.className.replace( /(?:^|\s)toggle-open(?!\S)/g , ' toggle-closed' );
        toggleNav.innerHTML = "Open menu";
      }

  }
  
  toggleNav.addEventListener( 'click' , changeClass );
  
  
 
})();

