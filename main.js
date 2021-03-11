// TEKSTI ROTAATIO
var text = document.getElementById("text");
var word = text.getElementsByTagName("span");

var i = 0;

function rotator(){
    word[i].style.display = 'none';
    i = (i + 1) % word.length;
    word[i].style.display = 'initial';
}
setInterval(rotator, 900);


// SIVU MENU ANIMAATIO
var $page = $('.page');

$('.menu_toggle').on('click', function(){
  $page.toggleClass('shazam');
});
$('.content').on('click', function(){
  $page.removeClass('shazam');
});


// HAMBURGER
const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});