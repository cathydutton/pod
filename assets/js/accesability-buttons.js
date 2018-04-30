/*
  Accesability buttons
  Controll buttons for text size, theme and font 
  ----------------------------------- */

// GLOBAL
const body = document.body
const root = document.querySelector(':root')
const rootStyles = getComputedStyle(root)


// TEXT SIZE

// If no local storage value exists create one
if (!fontSize) {
  body.style.setProperty('--font-size', localStorage.getItem('fontSize'));
}

// Get current value
var fontSize = getComputedStyle(body).getPropertyValue('--font-size');

// Set buttons
const increaseFont = document.getElementById('increase-font');
const decreaseFont = document.getElementById('decrease-font');

// Increase text size
increaseFont.addEventListener('click', function (e) {
// increaseFont.onclick = function(){
  var number = parseFloat(fontSize) 
  number += 0.2
  fontSize = number;
  body.style.setProperty('--font-size', number + 'em');
  localStorage.setItem('fontSize', number + 'em');
});

// Decrease text size
decreaseFont.addEventListener('click', function (e) {
// decreaseFont.onclick = function(){
  var number = parseFloat(fontSize) 
  number -= 0.2
  fontSize = number;   
  body.style.setProperty('--font-size', number + 'em');
  localStorage.setItem('fontSize', number + 'em');
});


// FONT

// If no local storage value exists create one
if (!fontFamily) {
    body.style.setProperty('--font-family', localStorage.getItem('fontFamily'));
}

// Get current value
var fontFamily = getComputedStyle(body).getPropertyValue('--font-family');

// Set buttons
var dyslexicFont = document.getElementById('dyslexic-font');
var defaultFont = document.getElementById('default-font');

// Dyslexic font family
dyslexicFont.addEventListener('click', function (e) {
// dyslexicFont.onclick = function(){
  body.style.setProperty('--font-family', '"Comic Sans MS", "Comic Sans", cursive');
  localStorage.setItem("fontFamily", '"Comic Sans MS", "Comic Sans", cursive');
});

// Default font family
defaultFont.addEventListener('click', function (e) {
// defaultFont.onclick = function(){
  body.style.setProperty('--font-family', rootStyles.getPropertyValue('--font-family'));
  localStorage.setItem('fontFamily', rootStyles.getPropertyValue('--font-family'));
});


// THEME

// Set buttons
const themeDefault = document.getElementById('theme-default');
const themeDark = document.getElementById('theme-dark');
const themeMonochrome = document.getElementById('theme-monochrome');

body.className = localStorage.getItem('currentTheme');

themeDefault.addEventListener('click', function (e) {
//themeDefault.onclick = function(){
  body.className = 'theme-default';
  localStorage.setItem("currentTheme", 'theme-default');
});

themeDark.addEventListener('click', function (e) {
//themeDark.onclick = function(){
  body.className = 'theme-dark';
  localStorage.setItem('currentTheme', 'theme-dark');
});

themeMonochrome.addEventListener('click', function (e) {
//themeMonochrome.onclick = function(){
  body.className = 'theme-monochrome';
  localStorage.setItem('currentTheme', 'theme-monochrome');
});

