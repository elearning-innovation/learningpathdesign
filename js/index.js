/**
 * Events
 */
// Hamburger Menu Toggle
$('.side-menu-toggle').click(function (e) {
    e.preventDefault();
    var shell_container = $(this).closest('.container-fluid');

    var sidemenu = $(shell_container).find('.side-menu');
    var maincontent = $(shell_container).find('.main-content');

    if (sidemenu.hasClass('hide')) {
        maincontent.removeClass('col-md-12');
        maincontent.addClass('col-md-9');
        sidemenu.removeClass('hide');
        sidemenu.show();
    } else {
        maincontent.removeClass('col-md-9');
        maincontent.addClass('col-md-12');
        sidemenu.hide();
        sidemenu.addClass('hide');
    }
});

// Change active class on side sub-topic shell menu
$('.sub-topic aside a').click(function () {
    $(this).parent().siblings().each(function () {
        $(this).removeClass('active');
    });
    $(this).parent().addClass('active');
});

// Change active class on side sub-topic shell menu when accordion item is clicked
$('.sub-topic-accordion .panel .panel-title a').each(function () {
    $(this).on('click', function () {
        var href = $(this).attr('href');

        $(this).closest('.container-fluid').find('aside li').each(function () {
            $(this).removeClass('active');
            if ($(this).find('a').attr('href') == href) {
                $(this).addClass('active');
            }
        });
    });
});

// Change active class on side sub-topic shell menu when the slide changes
$('.sub-topic-carousel').find('.carousel').each(function() {
        $(this).bind('slide.bs.carousel', function (e) {
            if(!$(this).hasClass('sub-carousel')) {
                console.log('test');
                console.log($(this));
            }
        });
});


// Toggle the accordion in the accordion shell for Top-Level and Sub-Topic-Level
$('.toggle').click(function (e) {
    e.preventDefault();
    var shell_container = $(this).closest('.container-fluid');
    if ($(shell_container).find('.panel-group').hasClass('fully-expanded')) {
        $(shell_container).find('.panel-group').removeClass('fully-expanded');
        $(shell_container).find('.panel-collapse').each(function () {
            $(this).collapse('hide');
        });
        $(this).find('i').removeClass('fa-angle-double-up');
        $(this).find('i').addClass('fa-angle-double-down');
    } else {
        $(shell_container).find('.panel-group').addClass('fully-expanded');
        $(shell_container).find('.panel-collapse').each(function () {

                $(this).collapse('show');

        });
        $(this).find('i').removeClass('fa-angle-double-down');
        $(this).find('i').addClass('fa-angle-double-up');
    }
    console.log(e.target);
});

$('.collapse').prev().addClass('collapsed');
$('.collapse.in').prev().addClass('expanded');

$('.collapse').on('shown.bs.collapse', function () {
    $(this).prev().addClass('expanded');
    $(this).prev().removeClass('collapsed');
    $(this).prev().find('i').addClass('fa-angle-down');
    $(this).prev().find('i').removeClass('fa-angle-right');
});

$('.collapse').on('hidden.bs.collapse', function () {
    $(this).prev().addClass('collapsed');
    $(this).prev().removeClass('expanded');
    $(this).prev().find('i').addClass('fa-angle-right');
    $(this).prev().find('i').removeClass('fa-angle-down');
});