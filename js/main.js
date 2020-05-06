/*global $*/
$(document).ready(function () {
    
    'use strict';
    
    //nice scroll
    
    $('html').niceScroll();
    
    var color,
        top;
    
    $('.carousel').carousel({
        
        interval: 5000
        
    });
    
    // show options box
    
    $('i.option').click(function () {
        
        $('.color-option').fadeToggle(500);
        
    });
    
    //change color-theme
    
    color = $('.color-option ul li');
    
    color
        .eq(0).css('backgroundColor', '#e41b17').end()
        .eq(1).css('backgroundColor', '#a506a0').end()
        .eq(2).css('backgroundColor', '#04948d').end()
        .eq(3).css('backgroundColor', '#ea7d1e').end()
        .eq(4).css('backgroundColor', '#139446');
    
    
    $(color).click(function () {
        
        $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
        
    });
    
    //loading page
    
    
    //scroll to top
    
    top = $('.top');
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() > 500) {
            
            top.fadeIn(500);
            
        } else {
            
            top.fadeOut(500);
            
        }
        
    });
    
    $(top).click(function () {
        
        $('html, body').animate({
            
            scrollTop: 0
            
        }, 700);
        
    });
    
});














