var checkstartcontext = false;

$('.apps li').on('contextmenu', function(event) {
    event.preventDefault();
    if(checkstartcontext) {
        $('.apps li').find('#startContextMenu').remove();
        setTimeout(() => {
            checkstartcontext = false;
        }, 100);
        
    } 

    var startContextMenu = '<div id="startContextMenu" class="startContextMenuSlideDown"><div id="pinToStart"><img src="img/pin.png" alt="pin">Pin to taskbar</div></div>'

    var startContextUnpin = '<div id="startContextMenu" class="startContextMenuSlideDown"><div id="UnpinFromTaskbar"><img src="img/unpin.png" alt="pin">Unpin from taskbar</div></div>'

    if(!checkstartcontext) { 
        if($(this).hasClass('pinned')) {
            $(this).css({
                position: 'relative',
            })
            $(this).append(startContextUnpin);
        } else {
            $(this).css({
                position: 'relative',
            })
            $(this).append(startContextMenu);
        }

        checkstartcontext = true;
    } 

    $('#pinToStart').on('click',function(e) {
        e.stopPropagation();
        var newTaskabarName;
        var newTaskbarPic;
        
    
        if($(this).closest('li').hasClass('startCalculatorLi')) {
            newTaskabarName = 'CalculatorApp';
            newTaskbarPic = $('#startCalculatorLi img').attr('src'); 
            $('#startCalculatorLi').addClass('pinned');
        } else if($(this).closest('li').hasClass('startClockLi')) {
            newTaskabarName = 'startClockLi';
            newTaskbarPic = $('#startClockLi img').attr('src');
            $('#startClockLi').addClass('pinned');
        } else if($(this).closest('li').hasClass('startChromeLi')) {
            newTaskabarName = 'startChromeLi';
            newTaskbarPic = $('#startChromeLi img').attr('src');
            $('#startChromeLi').addClass('pinned');
        } else if($(this).closest('li').hasClass('startStoreLi')) {
            newTaskabarName = 'startStoreLi';
            newTaskbarPic = $('#startStoreLi img').attr('src');
            $('#startStoreLi').addClass('pinned');
        } else if($(this).closest('li').hasClass('notepad-app')) {
            newTaskabarName = 'notepad-app';
            var divid = 'notepad-panel';
            newTaskbarPic = $('#notepad-start img').attr('src');
            $('#notepad-start').addClass('pinned');
        } else if($(this).closest('li').hasClass('startPaintLi')) {
            newTaskabarName = 'startPaintLi';
            newTaskbarPic = $('#startPaintLi img').attr('src');
            $('#startPaintLi').addClass('pinned');
        } else if($(this).closest('li').hasClass('startTelegramLi')) {
            newTaskabarName = 'startTelegramLi';
            newTaskbarPic = $('#startTelegramLi img').attr('src');
            $('#startTelegramLi').addClass('pinned');
        }


        var newTaskbarElement = `<li class="pinned closed ${newTaskabarName}"><div id="${divid}" class="taskbar-apps-back ${newTaskabarName} closed"><img draggable="false" src=${newTaskbarPic} alt=${newTaskabarName}><span class="show-active"></span></div></li>`;

        $('#draggableApps').append(newTaskbarElement);
        $('.apps li').find('#startContextMenu').remove();
        checkstartcontext = false;
    });
    //розібратися чому виникає конфлікт з notepad-programm. Вирішити його, щоб коли приложуха відкривалася - то вона згорталася до свого шорткату на панелі + щоб усі інші скрипти працювали. ВАЖЛИВО ЧИТАЙ СВОЇ КОМЕНТАРІ БЛЯХА 
});



$(document).on('click', function() {
    if(checkstartcontext) {
        $('.apps li').find('#startContextMenu').remove();
        checkstartcontext = false;
    }
})


