$('.team-carousel').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	mobileFirst: true,
    autoplaySpeed: 1000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		
	],
})
