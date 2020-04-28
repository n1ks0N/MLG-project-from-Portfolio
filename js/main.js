$(document).ready(function() {
    
    // in blog
    
    $('.main__text').click(function() {
        window.location.href = 'about.html';
    });
    $('.main__img').click(function() {
        window.location.href = 'about.html';
    });

    // services

    $('#business').click(function() {
        $('.services__business').removeClass('services-content_passive');
        $('.services__individual').addClass('services-content_passive');

        $(this).addClass('btn-info');
        $(this).removeClass('btn-outline-info');
        $('#individual').addClass('btn-outline-info');
        $('#individual').removeClass('btn-info');
    });
    $('#individual').click(function() {
        $('.services__business').addClass('services-content_passive');
        $('.services__individual').removeClass('services-content_passive');

        $(this).removeClass('btn-outline-info');
        $(this).addClass('btn-info');
        $('#business').addClass('btn-outline-info');
        $('#business').removeClass('btn-info');
    })
});