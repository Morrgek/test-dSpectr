$(function () {
   /* $(".fancybox").fancybox();
    $("select").styler();*/
    $('.grid').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid__item',
        // use element for option
        columnWidth: '.grid__sizer',
        percentPosition: true,
        gutter: 20
    });
});
