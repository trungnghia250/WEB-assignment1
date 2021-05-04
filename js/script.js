/* PHáº¦N CHUNG */

/* 0.1 Navbar */

$(window).resize(function () {
	//update stuff
});



/* PHáº¦N RIÃŠNG */

/* 1. Trang chá»§ */

/* 1.1. Carousel dÆ°á»›i navbar */

var swiper = new Swiper(".swiper-container", {
	autoplay: {
		delay: 7000,
		disableOnInteraction: false,
	},
	//speed: 2500,
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		type: "bullets",
	},
	effect: "fade",
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

/* 1.2. Swiper news */

var swiper1 = new Swiper(".swiper-container-1", {
	// autoplay: {
	// 	delay: 2000,
	// 	disableOnInteraction: false,
	// },
	speed: 500,
	slidesPerView: "auto",
	loopedSlides: 4,
	spaceBetween: 20,
	loop: true,
	pagination: {
		el: ".swiper-pagination-1",
		clickable: true,
		type: "bullets",
	},
	effect: "slide",
	centeredSlides: true,
	// breakpoints: {
	//     320: {
	//         slidesPerView: 1,
	//         // spaceBetween: 20
	//     },
	//     // when window width is >= 480px
	//     480: {
	//         slidesPerView: 1,
	//         // spaceBetween: 20
	//     },
	//     640: {
	//         slidesPerView: 2,
	//         // spaceBetween: 20,
	//     },
	//     768: {
	//         slidesPerView: 2,
	//         // spaceBetween: 20,
	//     },
	//     1024: {
	//         slidesPerView: 3,
	//         // spaceBetween: 20,
	//     },
	// },
});

// var swiper3 = new Swiper(".swiper-container-3", {
// 	autoplay: {
// 		delay: 2000,
// 		disableOnInteraction: false,
// 	},
// 	speed: 500,
// 	slidesPerView: "auto",
// 	loopedSlides: 4,
// 	spaceBetween: 30,
// 	loop: true,
// 	pagination: {
// 		el: ".swiper-pagination-3",
// 		clickable: true,
// 		type: "bullets",
// 	},
// 	effect: "slide",
// 	centeredSlides: true,

// });



/* 1.3. Toggle news container */

$(window).on("load", function () {
	$(".post-module").hover(function () {
		$(this).find(".description").stop().animate(
			{
				height: "toggle",
				opacity: "toggle",
			},
			300
		);
	});
});

/* 2. Tin Tá»©c */

/* 3. Kiáº¿n Thá»©c */

/* 4. Bá»™ SÆ°u Táº­p */

// function currentDiv(n) {
// 	showDivs((slideIndex = n));
// }

// function showDivs(n) {
// 	var i;
// 	var x = document.getElementsByClassName("mySlides");
// 	var dots = document.getElementsByClassName("demo");
// 	if (n > x.length) {
// 		slideIndex = 1;
// 	}
// 	if (n < 1) {
// 		slideIndex = x.length;
// 	}
// 	for (i = 0; i < x.length; i++) {
// 		x[i].style.display = "none";
// 	}
// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
// 	}
// 	x[slideIndex - 1].style.display = "block";
// 	dots[slideIndex - 1].className += " w3-opacity-off";
// }

/* 5. Tham kháº£o */

/* 6. Trang chi tiáº¿t viÃªn Ä‘Ã¡ */

(function ($) {
	$(document).ready(function () {
		$(".xzoom, .xzoom-gallery").xzoom({
			zoomWidth: 400,
			title: true,
			tint: "#333",
			Xoffset: 15,
		});
		$(".xzoom2, .xzoom-gallery2").xzoom({
			position: "#xzoom2-id",
			tint: "#ffa200",
		});
		$(".xzoom3, .xzoom-gallery3").xzoom({
			position: "lens",
			lensShape: "circle",
			sourceClass: "xzoom-hidden",
		});
		$(".xzoom4, .xzoom-gallery4").xzoom({ tint: "#006699", Xoffset: 15 });
		$(".xzoom5, .xzoom-gallery5").xzoom({ tint: "#006699", Xoffset: 15 });

		//Integration with hammer.js
		var isTouchSupported = "ontouchstart" in window;

		if (isTouchSupported) {
			//If touch device
			$(".xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5").each(function () {
				var xzoom = $(this).data("xzoom");
				xzoom.eventunbind();
			});

			$(".xzoom, .xzoom2, .xzoom3").each(function () {
				var xzoom = $(this).data("xzoom");
				$(this)
					.hammer()
					.on("tap", function (event) {
						event.pageX = event.gesture.center.pageX;
						event.pageY = event.gesture.center.pageY;
						var s = 1,
							ls;

						xzoom.eventmove = function (element) {
							element.hammer().on("drag", function (event) {
								event.pageX = event.gesture.center.pageX;
								event.pageY = event.gesture.center.pageY;
								xzoom.movezoom(event);
								event.gesture.preventDefault();
							});
						};

						xzoom.eventleave = function (element) {
							element.hammer().on("tap", function (event) {
								xzoom.closezoom();
							});
						};
						xzoom.openzoom(event);
					});
			});

			$(".xzoom4").each(function () {
				var xzoom = $(this).data("xzoom");
				$(this)
					.hammer()
					.on("tap", function (event) {
						event.pageX = event.gesture.center.pageX;
						event.pageY = event.gesture.center.pageY;
						var s = 1,
							ls;

						xzoom.eventmove = function (element) {
							element.hammer().on("drag", function (event) {
								event.pageX = event.gesture.center.pageX;
								event.pageY = event.gesture.center.pageY;
								xzoom.movezoom(event);
								event.gesture.preventDefault();
							});
						};

						var counter = 0;
						xzoom.eventclick = function (element) {
							element.hammer().on("tap", function () {
								counter++;
								if (counter == 1) setTimeout(openfancy, 300);
								event.gesture.preventDefault();
							});
						};

						function openfancy() {
							if (counter == 2) {
								xzoom.closezoom();
								$.fancybox.open(xzoom.gallery().cgallery);
							} else {
								xzoom.closezoom();
							}
							counter = 0;
						}
						xzoom.openzoom(event);
					});
			});

			$(".xzoom5").each(function () {
				var xzoom = $(this).data("xzoom");
				$(this)
					.hammer()
					.on("tap", function (event) {
						event.pageX = event.gesture.center.pageX;
						event.pageY = event.gesture.center.pageY;
						var s = 1,
							ls;

						xzoom.eventmove = function (element) {
							element.hammer().on("drag", function (event) {
								event.pageX = event.gesture.center.pageX;
								event.pageY = event.gesture.center.pageY;
								xzoom.movezoom(event);
								event.gesture.preventDefault();
							});
						};

						var counter = 0;
						xzoom.eventclick = function (element) {
							element.hammer().on("tap", function () {
								counter++;
								if (counter == 1) setTimeout(openmagnific, 300);
								event.gesture.preventDefault();
							});
						};

						function openmagnific() {
							if (counter == 2) {
								xzoom.closezoom();
								var gallery = xzoom.gallery().cgallery;
								var i,
									images = new Array();
								for (i in gallery) {
									images[i] = { src: gallery[i] };
								}
								$.magnificPopup.open({
									items: images,
									type: "image",
									gallery: { enabled: true },
								});
							} else {
								xzoom.closezoom();
							}
							counter = 0;
						}
						xzoom.openzoom(event);
					});
			});
		} else {
			//If not touch device

			//Integration with fancybox plugin
			$("#xzoom-fancy").bind("click", function (event) {
				var xzoom = $(this).data("xzoom");
				xzoom.closezoom();
				$.fancybox.open(xzoom.gallery().cgallery, {
					padding: 0,
					helpers: { overlay: { locked: false } },
				});
				event.preventDefault();
			});

			//Integration with magnific popup plugin
			$("#xzoom-magnific").bind("click", function (event) {
				var xzoom = $(this).data("xzoom");
				xzoom.closezoom();
				var gallery = xzoom.gallery().cgallery;
				var i,
					images = new Array();
				for (i in gallery) {
					images[i] = { src: gallery[i] };
				}
				$.magnificPopup.open({
					items: images,
					type: "image",
					gallery: { enabled: true },
				});
				event.preventDefault();
			});
		}
	});
})(jQuery);

/* 7. Trang chi tiáº¿t bÃ i Ä‘Äƒng */

/* 8. Giá»›i Thiá»‡u */