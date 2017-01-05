// Init
$('.sub-topic').hide();

/**
 * Events
 */

// Hide the top level shell and show the sub topic shell in question
$('.sub-topics footer a').click(function (e) {
    e.preventDefault();
    var subtopic_container = "#" + $(this).data('subtopic');
    $('.top-level').fadeOut('slow');
    $(subtopic_container).fadeIn('slow');
});

// Hide sub-topics and show the top level shell
$('.sub-topic .home').click(function (e) {
    e.preventDefault();
    $(this).closest('.sub-topic').fadeOut('slow');
    $('.top-level').fadeIn('slow');
});

// Hamburger Menu Toggle
$('.side-menu-toggle').click(function (e) {
    e.preventDefault();
    var shell_container = $(this).closest('.container');

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

        $(this).closest('.container').find('aside li').each(function () {
            $(this).removeClass('active');
            if ($(this).find('a').attr('href') == href) {
                $(this).addClass('active');
            }
        });
    });
});

// Toggle the accordion in the accordion shell for Top-Level and Sub-Topic-Level
$('.toggle').click(function (e) {
    e.preventDefault();
    var shell_container = $(this).closest('.container');
    if ($(shell_container).find('.panel-group').hasClass('fully-expanded')) {
        $(shell_container).find('.panel-group').removeClass('fully-expanded');
        $(shell_container).find('.panel-collapse.in').each(function () {
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

// Set all the panel headings to the dark blue background
togglePanelHeading();

// Toggle the bright blue background for the active accordion panel heading
function togglePanelHeading() {
    $('.panel-heading').addClass('collapsed');
    $('.collapse').prev().removeClass('expanded');
    $('.collapse.in').prev().addClass('expanded');
}

$('.collapse').on('shown.bs.collapse', function () {
    togglePanelHeading();
});