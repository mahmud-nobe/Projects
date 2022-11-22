//var w = window.innerWidth;
//var h = window.innerHeight;
//console.log(w, h);


window.addEventListener('resize', function() {
    //console.log(window.innerWidth);
    carousel = d3.select('.carousel');
    if (window.innerWidth < 575) {
        carousel.attr("data-mdb-interval", 16000)
    }
    else {
        carousel.attr("data-mdb-interval", 8000)
    }
    //console.log(carousel.attr('data-mdb-interval'));
})