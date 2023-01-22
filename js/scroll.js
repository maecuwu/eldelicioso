//--------------------------------- On scroll Functions ---------------------------------
var nav = document.getElementById('navbar');
var nav_logo_img = document.getElementById('nav_logo_img');
var nav_links = document.getElementsByClassName('nav-link');
var nav_dropdown_arrow = document.getElementById('nav_dropdown_arrow');
var main_logo = document.getElementById('main_logo');
var frontpage_video = document.getElementById('frontpage_video');
var collapse = document.getElementsByClassName('collapse');
var nav_bar = document.getElementsByClassName('bar');

document.getElementsByTagName('body')[0].onscroll = function() {

    var top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 0) {

        scrollDownChangeNavbarCss();

    } else {

        scrollUpChangeNavbarCss();

    }

    var value = window.scrollY;
    value = value * 0.3;
    // console.log(value);
    frontpage_video.style.transform = "translateY(-" + value + "px)";

    //reveal
    revealonScroll();
};

//---------------------------------------------------------------------------------------------------


//---------------------------------function change navbar css ---------------------------------

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
            e.style.backgroundColor = "rgb(245,242,229)";

        });
    } else {
        var collapse_array = Array.prototype.slice.call(collapse);
        collapse_array.forEach(e => {

            e.style.backgroundColor = "transparent";

        });
    }
    var nav_bar_array = Array.prototype.slice.call(nav_bar);
    nav_bar_array.forEach(e => {
        e.style.backgroundColor = "black";

    });


}

function scrollUpChangeNavbarCss() {

    //Scroll Up

    nav.style.backgroundColor = 'transparent';
    nav.style.height = '140px';
    nav_logo_img.src = 'images/transparent_logo.png';
    nav_logo_img.style.height = '150px';
    nav_logo_img.style.marginTop = '30px';
    nav_dropdown_arrow.style.fill = 'white';

    var nav_links_array = Array.prototype.slice.call(nav_links)
    nav_links_array.forEach(e => {
        e.style.color = 'white';
        e.classList.remove('nav_link_after_black');
        e.classList.add('nav_link_after_white');
    });
    if (outerWidth < 1000) {
        var collapse_array = Array.prototype.slice.call(collapse);
        collapse_array.forEach(e => {
            e.style.backgroundColor = "black";

        });
    } else {
        var collapse_array = Array.prototype.slice.call(collapse);
        collapse_array.forEach(e => {
            e.style.backgroundColor = "transparent";

        });
    }

    var nav_bar_array = Array.prototype.slice.call(nav_bar);
    nav_bar_array.forEach(e => {
        e.style.backgroundColor = "white";

    });
}

//---------------------------------------------------------------------------------------------------