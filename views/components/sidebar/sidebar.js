/*
  Sidebar
  ----------------------------------- */
  

(function() {
  'use strict';

  // Set tab index!!!!!
// Change cross to arrow and animate
// colors and nav styling active etc
// Page order titles ets 
// Browser check
// Skip link check works

console.log("innnn")

	var toggleNav = document.getElementById('js-sidebar__button');
  var sidebar = document.getElementById('js-sidebar');

  
  toggleNav.focus();

	function changeClass() {
		if ( sidebar.className.match(/(?:^|\s)closed(?!\S)/) ) {
	       sidebar.className = sidebar.className.replace( /(?:^|\s)closed(?!\S)/g , ' open' );
         //mainContent.setAttribute('tabindex', '-1');
  		   sidebar.setAttribute('tabindex', '1');
         sidebar.setAttribute('hidden', 'false');
         sidebar.setAttribute('aria-hidden', 'false');
         //sidebar.focus();
         toggleNav.innerHTML = "Close menu";
	    }
	    else if ( sidebar.className.match(/(?:^|\s)open(?!\S)/) ) {
	      sidebar.className = sidebar.className.replace( /(?:^|\s)open(?!\S)/g , ' closed' );
        sidebar.setAttribute('aria-hidden', 'true');
        sidebar.setAttribute('hidden', 'true');
        toggleNav.innerHTML = "Open menu";
	    }

	}
	
	toggleNav.addEventListener( 'click' , changeClass );
  
  
 
})();


