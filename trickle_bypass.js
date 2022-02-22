console.log('trickle script running');
var trickle_buttons = $('.trickle-button-component .trickle-button-inner button');
var loop_length = trickle_buttons.length;
var loop_count = 0;
trickle_buttons.each(function(){   
    loop_count++;
    $(this).removeAttr('disabled');
    this.click();
    if(loop_count === loop_length){
        trickleDone();
    }
})

function trickleDone(){
    console.log('All trickle clicked');
    setTimeout(function(){
        $('body').scrollTo(0);
    }, 3000)
}