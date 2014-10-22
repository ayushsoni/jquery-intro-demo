/* app.js
* main script file for our little application
* */

"use strict";
//returns a jquery object and this method accepts a parameter we should execute ; in line anonymous function
$(document).ready(function() {

    //sets an attribute on the elements that are selected
    $('p a[href!="#top"]').attr('target', '_blank');

    //fades in for a second when the page loads
    $('#secion').hide().fadeIn(1000);

    $('nav a, p a[href="#top"]').click(function(eventObject) {

       //gives us the hyperlink we want to go to
       console.log(this.hash);
       var targetElement = jQuery(this.hash);
       //operation on both elements (firefox or chrome) and allows us to animate changes over time

       //takes care of height of nav bar
       $('html,body').animate({scrollTop: targetElement.offset().top - navHeight
       }, 700);

        //allows smooth scroller
        eventObject.preventDefault();
    });

    var nav = $('nav');
    var navTop = nav.offset().top;
    //returns our nav bar in pixels
    var navHeight = nav.outerHeight();
    var navPlaceholder = $('.nav-placeholder');

    //jQuery is wrapping its own object to DOM object
    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        if (scrollPos >navTop) {
            //add class preserves whatever class names are attached to this element and this will add a new class to this element
            nav.addClass('nav-fixed');
            navPlaceholder.show();
        }
        else {
            nav.removeClas('nav-fixed');
            navPlaceholder.hide();
        }
    });

    //modal
    $('#exit-button').click(function() {
        $('#confirm-exit-modal').modal();
    });

    $('#confirm-exit-button').click(function() {

        window.location = 'http://ischool.uw.edu';
    })
 });

