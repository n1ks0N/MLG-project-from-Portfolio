$(document).ready(() => {

    // hamburger in header

    $('.menu__hamburger').click(() => {
        $('.menu__hamburger__window').toggleClass('menu__hamburger__window__animateOn');
        $('.menu__hamburger').toggleClass('menu__hamburger__animateOn');
    });

    // slider in about

    let index = 0;

    setInterval((items) => {
        index = (index + 1) % items.length;
        items.addClass('opacity').eq(index).removeClass('opacity');
    }, 5000, $('.carousel__part'));
    
    // blog
    
    $('.main__text').click(() => {
        window.location.href = 'blog.html';
    });
    $('.main__img').click(() => {
        window.location.href = 'blog.html';
    });

    // content in services

    $('#business').click(() => {
        $('.services__business').removeClass('services-content_passive');
        $('.services__individual').addClass('services-content_passive');

        $(this).addClass('btn-primary');
        $(this).removeClass('btn-outline-primary');
        $('#individual').addClass('btn-outline-primary');
        $('#individual').removeClass('btn-primary');
    });
    $('#individual').click(() => {
        $('.services__individual').removeClass('services-content_passive');
        $('.services__business').addClass('services-content_passive');

        $(this).addClass('btn-primary');
        $(this).removeClass('btn-outline-primary');
        $('#business').addClass('btn-outline-primary');
        $('#business').removeClass('btn-primary');
    });

    // from anyway to form in contacts

    $('.btn__adressToContacts').click(() => {
        window.location.href = 'contacts.html';
    })

    $('.form-group__select').click(() => {
        $('.form-group__select__disabled').prop('disabled', true);
    });

    // test on trademark
    
    if ($('.footer__by').length || $('.footer__by__link').length) {} else {
        alert('Верните текст - "Proudly made by n1ks_ON. Designed and coded." Связь с разработчиком - https://kwork.ru/user/n1ks_on');
        $('body, html').css('display', 'none');
    }
});