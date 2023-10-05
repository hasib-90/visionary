// navbar scroll start
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $(".navbar").addClass('navScroll');
        }
        else {
            $(".navbar").removeClass('navScroll');
        }
    })
})
// navbar scroll end