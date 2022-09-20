$(function () {
    // 換圖輪播
    function bannerSwitcher() {
        next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
        if (next.length) next.prop('checked', true);
        else $('.sec-1-input').first().prop('checked', true);
    }
    
    var bannerTimer = setInterval(bannerSwitcher, 5000);
    
    $('nav .controls label').click(function () {
        clearInterval(bannerTimer);
        bannerTimer = setInterval(bannerSwitcher, 5000)
    });
    // 滑動至錨點位置
    $(".menu a").click(function () {

        var btn = $(this).attr("href");
        var pos = $(btn).offset();

        $("html,body").animate({ scrollTop: pos.top }, 1000);
    });

    // 滑動至捲軸0的位置
    $("#gotop").click(function () {

        $("html,body").animate({ scrollTop: 0 }, 1000);

    });

    // 置頂按鈕淡出淡入
    $(window).scroll(function () {

        if ( $(this).scrollTop() > 200 ) { $('#gotop').stop().fadeTo('fast', 1);} 
        
        else { $('#gotop').stop().fadeOut('fast'); }

    });

    // smoove
    $('.smoove').smoove({
        offset:'30%',
    });



});


