$( function() {
    $.vegas('slideshow', {
	backgrounds:[
	    { src:'/img/slider/bg1.jpg', fade:1000 },
	    { src:'/img/slider/bg2.jpg', fade:1000 },
	    { src:'/img/slider/bg3.jpg', fade:1000 },
	    { src:'/img/slider/bg4.jpg', fade:1000 }
	]
    })('overlay', {
	src:'/img/overlays/03.png'
    });
});
