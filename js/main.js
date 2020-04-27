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
    });
    $('#individual').click(function() {
        $('.services__business').addClass('services-content_passive');
        $('.services__individual').removeClass('services-content_passive');
    })
});