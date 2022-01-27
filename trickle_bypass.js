$(window).on("scroll", function() {
    var navigation = $('.navigation-inner').height();
    var scrollHeight = $('#wrapper').height() + navigation;
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        trickleDone();
        $(window).off("scroll");
    }
});

$('.trickle-button-component .trickle-button-inner button').each(function(button){
    this.click();
})

function trickleDone(){
    console.log('All trickle clicked');
    $('body').scrollTo(0);
}