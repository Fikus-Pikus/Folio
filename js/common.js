$(document).ready(function() {
	$(".item").magnificPopup({ //всплывающее окно для картинок
		type : 'image', // 'image' берётся в кавычки, так как это строка
		gallery : { // инициализация галереи
			enabled : true
		},
		removalDelay: 300, //анимация с оффсайта(http://dimsemenov.com/plugins/magnific-popup/documentation.html#animation)
		mainClass: 'mfp-fade'
	});

	$(".main_mnu_btn").click(function() { //кнопка раскрытия меня на малых экранах
			$(this).next().slideToggle();
		});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a#about").click(function() {
		$.scrollTo($(".about"), 800, {
			offset: -90
		});
	});
	$("a#portfolio").click(function() {
		$.scrollTo($(".portfolio"), 800, {
			offset: -90
		});
	});
	$("a#contacts").click(function() {
		$.scrollTo($(".contacts"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//http://admin-kompa.ru/dlya_sajta/knopka_dlja_sajta_vverh.html
	$(function() {
	 $.fn.scrollToTop = function() {
	  $('#Go_Top').hide().removeAttr("href");
	  if ($(window).scrollTop() >= "250") $('#Go_Top').fadeIn("slow")
	  var scrollDiv = $('#Go_Top');
	  $(window).scroll(function() {
	   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
	   else $(scrollDiv).fadeIn("slow")
	  });
	  $('#Go_Top').click(function() {
	   $("html, body").animate({scrollTop: 0}, "slow")
	  })
	 }
	});
	 
	$(function() {
	 $("#Go_Top").scrollToTop();
	});
	

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});