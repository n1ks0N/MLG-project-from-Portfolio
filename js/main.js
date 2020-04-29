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

        $(this).addClass('btn-primary');
        $(this).removeClass('btn-outline-primary');
        $('#individual').addClass('btn-outline-primary');
        $('#individual').removeClass('btn-primary');
    });
    $('#individual').click(function() {
        $('.services__business').addClass('services-content_passive');
        $('.services__individual').removeClass('services-content_passive');

        $(this).addClass('btn-primary');
        $(this).removeClass('btn-outline-primary');
        $('#business').addClass('btn-outline-primary');
        $('#business').removeClass('btn-primary');
    })
});