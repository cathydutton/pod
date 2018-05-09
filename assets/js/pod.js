/*
  Base and Global scripts
  ----------------------------------- */

  (function() {
    'use strict';
  

  // Sidebar
  // Set tab index!!!!!
  // Animate arrows in SVG
  // Browser check
  // Skip link check works
  
    var wrapper = document.getElementById('js-wrapper');
    var sidebar = document.getElementById('js-sidebar');
    var navigation = document.getElementById('js-navigation__list');
    var toggleNav = document.getElementById('js-sidebar__button');
    
    toggleNav.focus();
  
    function changeClass() {
      if ( wrapper.className.match(/(?:^|\s)sidebar-closed(?!\S)/) ) {
           wrapper.className = wrapper.className.replace( /(?:^|\s)sidebar-closed(?!\S)/g , ' sidebar-open' );
           sidebar.setAttribute('hidden', 'false');
           sidebar.setAttribute('aria-hidden', 'false');
           navigation.setAttribute('tabindex', '1');
           navigation.setAttribute('hidden', 'false');
           navigation.setAttribute('aria-hidden', 'false');
           toggleNav.innerHTML = "Close menu";
           //navigation.focus();
           //mainContent.setAttribute('tabindex', '-1');
        }
        else if ( wrapper.className.match(/(?:^|\s)sidebar-open(?!\S)/) ) {
          wrapper.className = wrapper.className.replace( /(?:^|\s)sidebar-open(?!\S)/g , ' sidebar-closed' );
          sidebar.setAttribute('aria-hidden', 'true');
          sidebar.setAttribute('hidden', 'true');
          navigation.setAttribute('aria-hidden', 'true');
          navigation.setAttribute('hidden', 'true');
          toggleNav.innerHTML = "Open menu";
          //sidebar.setAttribute('tabIndex', '-1');
        }
  
    }
    
    toggleNav.addEventListener( 'click' , changeClass );
    
    
   
  })();
  
  
  