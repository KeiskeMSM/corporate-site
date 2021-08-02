// 特定の位置までスクロール
$(function () {
	// ハンバーガーメニュー
	$(function () {
		$('.nav-btn').on('click', function () {
			$(this).toggleClass('active');
			$('#nav,.item').toggleClass('active');
		});
	});
  
	// active解除
	$(function () {
		$('.item').on('click', function () {
			$(this).removeClass('active');
			$('#nav,.nav-btn').removeClass('active');
		});
	});
	
	// ナビゲーションスクロール
	var speed = 1000;
	$('#profile').click(function () {
		$("html,body").animate({ scrollTop: $('.profile').offset().top }, speed, 'swing');
	});

	$('#skill').click(function () {
		$("html,body").animate({ scrollTop: $('.skill').offset().top }, speed, 'swing');
	});

	$('#service').click(function () {
		$("html,body").animate({ scrollTop: $('.service').offset().top }, speed, 'swing');
	});

	$('#works').click(function () {
		$("html,body").animate({ scrollTop: $('.works').offset().top }, speed, 'swing');
	});

	$('#contact').click(function () {
		$("html,body").animate({ scrollTop: $('.contact').offset().top }, speed, 'swing');
	});
	
	ScrollReveal().reveal('section',{
    duration: 1200,
    viewFactor: 0.5,
    reset: false,
  });
});
