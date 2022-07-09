$(document).ready(function () {
    //Gotop設定
    $('.goTop').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1500);
    });

    //漢堡選單
    $('.menu-bar').on('click', function (event) {
        event.preventDefault();
        $('.menu').toggleClass('show');
    });
    $('.menu > li').on('click', function (event) {
        $('.menu').removeClass('show');
    });

    //加入收藏
    $('.heart-icon').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('show');
        $(this).parent().parent().find('.heart-icon-solid').toggleClass('show');
    });
    $('.heart-icon-solid').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('show');
        $(this).parent().parent().find('.heart-icon').toggleClass('show');
    });

    //加入購物車
    $('.product-addcart').on('click', function (event) {
        event.preventDefault();
        alert('已將商品加入購物車囉～');
    });


});