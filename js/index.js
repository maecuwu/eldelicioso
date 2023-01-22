//--------------------------------- On mouse move functions ---------------------------------

document.getElementsByTagName('body')[0].onmousemove = function() {

    var windowidth = window.screen.availWidth;
    windowidth = windowidth / 2;
    var x = event.clientX; // Get the horizontal coordinate
    var y = event.clientY; // Get the vertical coordinate
    x = x - windowidth;
    var xm = x * 0.025;
    var ym = y * 0.025;
    xm = xm;
    main_logo.style.transform = 'translate(' + xm + 'px,' + ym + 'px)';
};


//---------------------------------------------------------------------------------------------------