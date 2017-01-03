
// Init
$('.sub-topic').hide();

// Events
$('.sub-topics footer a').click(function(e) {
    e.preventDefault();
    var subtopic_container = "#" + $(this).data('subtopic');
    $('.top-level').fadeOut('slow');
    $(subtopic_container).fadeIn('slow');
});

$('.sub-topic .home').click(function(e) {
    e.preventDefault();
    $(this).closest('.sub-topic').fadeOut('slow');
    $('.top-level').fadeIn('slow');
});

// Code to toggle the hamburger menu

$('.side-menu-toggle').click(function(e) {
    e.preventDefault();
    var shell_container = $(this).closest('.container');
    console.log('Side Menu');
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

$('.toggle').on('click', function (e) {
    e.preventDefault();
    var shell_container = $(this).closest('.container');
    if ($(shell_container).find('.panel-group').hasClass('fully-expanded')) {
        $(shell_container).find('.panel-group').removeClass('fully-expanded');
        $(shell_container).find('.panel-collapse').each(function() {
            $(this).collapse('hide');
        });
        $(this).find('i').removeClass('fa-angle-double-up');
        $(this).find('i').addClass('fa-angle-double-down');
    } else {
        $(shell_container).find('.panel-group').addClass('fully-expanded');
        $(shell_container).find('.panel-collapse').each(function() {
            $(this).collapse('show');
        });
        $(this).find('i').removeClass('fa-angle-double-down');
        $(this).find('i').addClass('fa-angle-double-up');
    }
});

// Set all the panel headings to the dark blue background
togglePanelHeading();
function togglePanelHeading() {
        $('.panel-heading').addClass('collapsed');
    $('.collapse').prev().removeClass('expanded');
    $('.collapse.in').prev().addClass('expanded');
}

$('.collapse').on('shown.bs.collapse', function() {
    togglePanelHeading();
});