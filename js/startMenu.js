var checkstartcontext = false;

$('.apps li').on('contextmenu', function(event) {
    event.preventDefault();
    let target = $(event.target);
    if(checkstartcontext) {
        $('.apps li').find('#startContextMenu').remove();
        setTimeout(() => {
            checkstartcontext = false;
        }, 100);
        
    } 

    var startContextMenu = '<div id="startContextMenu" class="startContextMenuSlideDown"><div id="pinToStart"><img src="img/pin.png" alt="pin">Pin to taskbar</div></div>'

    if(!checkstartcontext) { 
        $(this).css({
            position: 'relative',
        })
        $(this).append(startContextMenu);

        checkstartcontext = true;
    } 
    
});

$(document).on('click', function() {
    if(checkstartcontext) {
        $('.apps li').find('#startContextMenu').remove();
        checkstartcontext = false;
    }
})