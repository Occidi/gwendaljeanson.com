/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function(){ 
    $('.navbar-toggle:visible').click();
});

// Open more content panel
$(function()
{
    var mesBoutons = $("#projects button");
    mesBoutons.click(function()
    {
            $(this).next(".panel-content-more").slideToggle(500);
    });
});

//rotate between title span
$(function()
{
    var allSpans = $(".changingSpan");
    var currentSpan = 0;

    function changeSpan()
    {
        $(allSpans[currentSpan]).fadeOut(400, function()
        {
            if(currentSpan == allSpans.length -1)
            {
                currentSpan = 0;
            }else
            {
                currentSpan ++;
            }

            $(allSpans[currentSpan]).fadeIn(400);
        });
    }

    var spanTimer = setInterval(changeSpan,2500);
});