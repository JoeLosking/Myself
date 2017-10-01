window.onload = function () {
	var mySwiper = $('.banner1').swiper({
		pagination : '.banner1 .swiper-pagination',
		paginationElement : 'li',
		paginationClickable :true,
		autoplay: 3000,							//可选选项，自动滑动
		autoplayDisableOnInteraction : false,	
		autoWidth: true,					
	});

	var mySwiper = $('.banner2').swiper({
		pagination : '.banner2 .swiper-pagination',
		slidesPerView : 5,
		autoplay: 3000,							//可选选项，自动滑动
		autoplayDisableOnInteraction : false,		
		// loop : true,
		prevButton:'.play .swiper-button-prev',
		nextButton:'.play .swiper-button-next',	
		autoWidth: true,			
	});
}


