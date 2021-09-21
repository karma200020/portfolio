/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Last Change: 03/25/2020
    Author: Abhishek Kumar Mishra
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/


// animate css animations



function createTyped( classes, text, loop, showCursor, speed=100 ){

    var typed = new Typed(classes, {

        strings: text,
        typeSpeed:speed,
        backSpeed:50,
        loop: loop,
        cursorChar: '_',
        showCursor: showCursor,
    });
    

}

createTyped('.aboutMe',['Software Developer','Web Developer','App Developer','Machine Learning Engineer','Illustrator','UI / UX Desinger'], true, true);
createTyped('.name',['Abhishek Mishra',], false, true);
createTyped('.aboutQues',['string AboutMe(){}',], false, true);
createTyped('.aboutText',['I am a final year Computer Science and Engineering undergrad, primarily a full-stack developer. My eagerness of learning and applying theoretical knowledge drives me. I have done several internships during which I honed my development skills. I am proficient with MEAN / MERN stacks. I have worked with several programming languages including Python, C++ and Javascript on several projects including API development, Computer Vision, Automation and Web Development.',], false, true,20);
createTyped('.pTitle',['Project project("My projects")',], false, true);
createTyped('.p1Title',['Cryptex',], false, true);
createTyped('.p1Text',['A complete portal where users can create discussions groups, get personalized daily news and track currency statistics using visualization for their choice of crypto currencies. <p></p> Tech stack - React.js, Node.js, Heroku. ',], false, true,20);
createTyped('.p2Title',['Pair-code',], false, true);
createTyped('.p2Text',[' A Real Time Code Collaboration Tool for Pair programming built using sockets. Allows users to save, download, and run ( 30+ languages supported ) their code. <p></p> Tech stack - React.js, Node.js, Heroku. ',], false, true,20);
createTyped('.p3Title',['Rent Circle',], false, true);
createTyped('.p3Text',[' A web application allowing users to trade/lend/rent various items like furniture, accessory, common services and other household items with each other with proper verification and secure transactions.</p><p> Tech stack - Angular 9, Django, postreSQL, Heroku.',], false, true,20);
createTyped('.p4Title',['Enabled',], false, true);
createTyped('.p4Text',[' A web application designed to make internet accessible to the specially abled population. Allows navigation through easily accessible/ distinguishable key and voice instructions.',], false, true,20);

// var typed2 = new Typed('.aboutQues', {

//     strings: [
//         'string AboutMe(){}',
//     ],
//     typeSpeed:100,
//     backSpeed:100,
//     cursorChar: '_',
//     showCursor: true,
// });

// var typed3 = new Typed('.aboutText', {

//     strings: [
//         'I am a final year Computer Science and Engineering undergrad, primarily a full-stack developer. My eagerness of learning and applying theoretical knowledge drives me. I have done several internships during which I honed my development skills. I am proficient with MEAN / MERN stacks. I have worked with several programming languages including Python, C++ and Javascript on several projects including API development, Computer Vision, Automation and Web Development.',
//     ],
//     typeSpeed:20,
//     backSpeed:100,
//     cursorChar: '_',
//     showCursor: true,
// });


// display time


var clockElement = document.getElementById('clock');

function clock() {
        clockElement.textContent = new Date().toString();
}

setInterval(clock, 1000);


(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point module"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon "><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

})(jQuery);


(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);
  
  var win = $(window);
  
  var allMods = $(".module");
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible"); 
    } 
  });
  
  win.scroll(function(event) {
    
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("animate__animated animate__fadeInRight"); 
      } 
    });
    
  });


