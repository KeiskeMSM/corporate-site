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
	
	//box1の指定
	$('.skill-list').on('inview', function(event, isInView) {
		if (isInView) {
			//要素が見えたときに実行する処理
			$(".count-up").each(function(){
				$(this).prop('Counter',0).animate({//0からカウントアップ
							Counter: $(this).text()
					}, {
					// スピードやアニメーションの設定
							duration: 2000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
							easing: 'swing',//動きの種類。他にもlinearなど設定可能
							step: function (now) {
									$(this).text(Math.ceil(now));
							}
					});
			});
		}
	});
	
	// フェードイン
	ScrollReveal().reveal('section',{
    duration: 1200,
    viewFactor: 0.5,
    reset: false,
  });
});
