//nav fixed on scroll
var nav = document.getElementById('navbar');
var nav_logo_img = document.getElementById('nav_logo_img');
var nav_links = document.getElementsByClassName('nav-link');
var nav_dropdown_arrow = document.getElementById('nav_dropdown_arrow');
var main_logo = document.getElementById('main_logo');
var frontpage_video = document.getElementById('frontpage_video');
var collapse = document.getElementsByClassName('collapse');
var nav_bar = document.getElementsByClassName('bar');

var reveals = document.getElementsByClassName('reveal');
var revealsi = document.getElementsByClassName('reveali');
var revealsd = document.getElementsByClassName('reveald');











//--------------------------------- function change button menu ---------------------------------


function changeButtonToggle(x) {
    x.classList.toggle('change');
}

//---------------------------------------------------------------------------------------------------



//-------------------------------------LOADING----------------------------------------------------

let $ = (e) => document.querySelector(e);

// Dots
// ====
let dots = $('.dots');

// Function
// ========
function animate(element, className) {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
        setTimeout(() => {
            animate(element, className);
        }, 500);
    }, 2500); //2500
}

// Execution
// =========
animate(dots, 'dots--animate');



window.onload = function() {

    setTimeout(hideloading, 2800); //2800
    revealonScroll();
    scrollDownChangeNavbarCss();
};


function hideloading() {
    var loading = document.getElementById('loading');
    loading.style.display = 'none';
    document.body.style.overflowY = 'scroll';
    comprbarNav();
}



//---------------------------------------------------------------------------------------------------


function comprbarNav() {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 0) {

        scrollDownChangeNavbarCss();

    } else {

        scrollUpChangeNavbarCss();

    }
}






function revealonScroll() {



    for (var i = 0; i < reveals.length; i++) {

        var wheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < wheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }

    }

    for (var i = 0; i < revealsi.length; i++) {

        var wheight = window.innerHeight;
        var revealtop = revealsi[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < wheight - revealpoint) {
            revealsi[i].classList.add('activei');
        } else {
            revealsi[i].classList.remove('activei');
        }

    }

    for (var i = 0; i < revealsd.length; i++) {

        var wheight = window.innerHeight;
        var revealtop = revealsd[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < wheight - revealpoint) {
            revealsd[i].classList.add('actived');
        } else {
            revealsd[i].classList.remove('actived');
        }

    }
}




function scrollDownChangeNavbarCss() {

    //Scroll Down

    nav.style.backgroundColor = 'rgb(245,242,229)';
    nav.style.height = '80px';
    nav_logo_img.src = 'images/logo_small.png';
    nav_logo_img.style.height = '50px';
    nav_logo_img.style.marginTop = '0px';
    nav.style.color = '#402e2a';
    nav_dropdown_arrow.style.fill = '#402e2a';

    var nav_links_array = Array.prototype.slice.call(nav_links);
    nav_links_array.forEach(e => {
        e.style.color = '#402e2a';
        e.classList.remove('nav_link_after_white');
        e.classList.add('nav_link_after_black');
    });
    if (outerWidth < 1000) {
        var collapse_array = Array.prototype.slice.call(collapse);
        collapse_array.forEach(e => {
            e.style.backgroundColor = 'rgb(245,242,229)';

        });
    } else {
        var collapse_array = Array.prototype.slice.call(collapse);
        collapse_array.forEach(e => {

            e.style.backgroundColor = 'transparent';

        });
    }
    var nav_bar_array = Array.prototype.slice.call(nav_bar);
    nav_bar_array.forEach(e => {
        e.style.backgroundColor = 'black';

    });


}


//---------------------------------------------------------------------------------------------------
let botonCarta = document.getElementById('botonCarta');

botonCarta.addEventListener('click', function() {
    document.getElementById('menu_pdf').classList.toggle('menu_pdf_height');
});