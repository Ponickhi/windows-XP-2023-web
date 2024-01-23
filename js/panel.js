$(document).ready(function() {
    const startButton = $("#start-button, .start-icon"); 
    const startMenu = $(".start-menu");
    const searchField = $("#search-field");
    const searchClose = $(".search-exit");
    const searchMenu = $(".search-menu");
    const trayButton = $(".tray, #tray-img");
    const trayImg = $("#tray-img");
    const trayMenu = $(".tray-menu");
    const languageButton = $(".language, .language p");
    const languageMenus = $(".language-menu");
    const quickButton = $(".quick-menu");
    const quickMenu = $(".quick-menu-menu");
    const calendarButton = $(".date-time");
    const calendarMenu = $(".calendar-notifications-menu");
    const hideAll = $(".hide-all");
    const hideAllHint = $(".hide-all-hint");
    var checkContextMenu = false;


    function showScreen() {
      hideAll.click(function(e) {
        e.stopPropagation();
        if(searchMenu.hasClass("visible") || 
          trayMenu.hasClass("visible") || 
          languageMenus.hasClass("visible") || 
          quickMenu.hasClass("visible") ||
          calendarMenu.hasClass("visible")||
          startMenu.hasClass("visible")) {

            searchMenu.removeClass("visible");
            searchMenu.addClass("hidden")
            trayMenu.removeClass("visible");
            trayMenu.addClass("hidden");
            trayImg.addClass(".begin-tray");
            languageMenus.removeClass("visible");
            languageMenus.addClass("hidden");
            quickMenu.removeClass("visible");
            quickMenu.addClass("hidden");
            calendarMenu.removeClass("visible");
            calendarMenu.addClass("hidden");
            startMenu.removeClass("visible");
            startMenu.addClass("hidden");
          }
      });
      hideAll.hover(function() {
        if (searchMenu.hasClass("visible") || 
        trayMenu.hasClass("visible") || 
        languageMenus.hasClass("visible") || 
        quickMenu.hasClass("visible") ||
        calendarMenu.hasClass("visible")||
        startMenu.hasClass("visible")) {
          hideAllHint.css("display", "none");
        } else {
          setTimeout(function(){hideAllHint.css("display", "flex")}, 1000);
          setTimeout(function() {hideAllHint.css("opacity", "100%");}, 1200);
        }
        
      }, function() {
        setTimeout(function(){hideAllHint.css("display", "none")}, 1000);
        setTimeout(function() {hideAllHint.css("opacity", "0%");}, 300);
      });
  
      hideAll.on("click", function() {
        hideAllHint.css("display", "none");
      })
    } 
    function startToggle() {
      startButton.click(function(e) {
        e.stopPropagation();
        if (startMenu.hasClass("hidden")) {
          startMenu.toggleClass("visible");

          if(searchMenu.hasClass("visible") || 
          trayMenu.hasClass("visible") || 
          languageMenus.hasClass("visible") || 
          quickMenu.hasClass("visible") ||
          calendarMenu.hasClass("visible")) {
            searchMenu.removeClass("visible");
            searchMenu.addClass("hidden")
            trayMenu.removeClass("visible");
            trayMenu.addClass("hidden");
            setTimeout(function() {
              trayImg.addClass(".begin-tray");
            }, 200);
            languageMenus.removeClass("visible");
            languageMenus.addClass("hidden");
            quickMenu.removeClass("visible");
            quickMenu.addClass("hidden");
            calendarMenu.removeClass("visible");
            calendarMenu.addClass("hidden");
          }
        } else {
          startMenu.toggleClass("hidden");
        }
      });  
    }
    function searchToggle() {
      searchField.focus(function() {
        searchMenu.removeClass("hidden");
        searchMenu.addClass("visible");
        if(startMenu.hasClass("visible")) {
            startMenu.removeClass("visible");
            startMenu.addClass("hidden");
        }
      });
      searchClose.click(function() {
        searchMenu.removeClass("visible");
        searchMenu.addClass("hidden");
      })
      searchMenu.click(function(event) {
        event.stopPropagation();
      });
    }
    function trayToggle() {
        trayButton.click(function(e) {
            e.stopPropagation();
            if(trayMenu.hasClass("hidden")) {
                trayMenu.removeClass("hidden");
                trayMenu.addClass("visible");
                setTimeout(function() {
                  trayImg.addClass("end-tray");
                }, 200);
                
                if(searchMenu.hasClass("visible") || 
                languageMenus.hasClass("visible") || 
                startMenu.hasClass("visible") || 
                quickMenu.hasClass("visible") ||
                calendarMenu.hasClass("visible")) {
                    searchMenu.removeClass("visible");
                    searchMenu.addClass("hidden")
                    languageMenus.removeClass("visible");
                    languageMenus.addClass("hidden");
                    startMenu.removeClass("visible");
                    startMenu.addClass("hidden");
                    quickMenu.removeClass("visible");
                    quickMenu.addClass("hidden");
                    calendarMenu.removeClass("visible");
                    calendarMenu.addClass("hidden");
                  }
            } else {
                trayMenu.removeClass("visible");
                trayMenu.addClass("hidden");
                setTimeout(function() {
                  trayImg.removeClass("end-tray");
                  trayImg.addClass("begin-tray");
                }, 200);
                
            }
        })
    }
    function languageToggle() {
        
        languageButton.click(function(e) {
            e.stopPropagation();
            if(languageMenus.hasClass("hidden")) {
                languageMenus.toggleClass("visible");

                if(searchMenu.hasClass("visible") || 
                trayMenu.hasClass("visible") || 
                startMenu.hasClass("visible") || 
                quickMenu.hasClass("visible") ||
                calendarMenu.hasClass("visible")) {
                    searchMenu.removeClass("visible");
                    searchMenu.addClass("hidden")
                    trayMenu.removeClass("visible");
                    trayMenu.addClass("hidden");
                    setTimeout(function() {
                      trayImg.addClass(".begin-tray");
                    }, 200);
                    startMenu.removeClass("visible");
                    startMenu.addClass("hidden");
                    quickMenu.removeClass("visible");
                    quickMenu.addClass("hidden");
                    calendarMenu.removeClass("visible");
                    calendarMenu.addClass("hidden");
                  }
            } else {
                languageMenus.toggleClass("hidden");
            }
        })
    }
    function quickMenuToggle() {
      quickButton.click(function(e) { 
        e.stopPropagation();
        if (quickMenu.hasClass("hidden")) {
          quickMenu.toggleClass("visible");
          wifiMenu.css("display", "none");
          wifiMenu.removeClass("slide-right");
          bluetoothMenu.css("display", "none");
          bluetoothMenu.removeClass("slide-right");
          mainMenu.removeClass("slide-left");
          mainMenu.css("display", "flex");
          
          if(searchMenu.hasClass("visible") || 
          trayMenu.hasClass("visible") || 
          languageMenus.hasClass("visible") || 
          startMenu.hasClass("visible") ||
          calendarMenu.hasClass("visible")) {
            searchMenu.removeClass("visible");
            searchMenu.addClass("hidden")
            trayMenu.removeClass("visible");
            trayMenu.addClass("hidden");
            setTimeout(function() {
              trayImg.addClass(".begin-tray");
            }, 200);
            languageMenus.removeClass("visible");
            languageMenus.addClass("hidden");
            startMenu.removeClass("visible");
            startMenu.addClass("hidden");
            calendarMenu.removeClass("visible");
            calendarMenu.addClass("hidden");
          }
        }
      });
      quickMenu.click(function(e) {
        e.stopPropagation()
      });
    }
    function calendarToggle() {
      calendarButton.click(function(e) {
        e.stopPropagation();
        if (calendarMenu.hasClass("hidden")) {
          calendarMenu.toggleClass("visible");

          if(searchMenu.hasClass("visible") || 
          trayMenu.hasClass("visible") || 
          languageMenus.hasClass("visible") || 
          startMenu.hasClass("visible") || 
          quickMenu.hasClass("visible")) {
            searchMenu.removeClass("visible");
            searchMenu.addClass("hidden")
            trayMenu.removeClass("visible");
            trayMenu.addClass("hidden");
            setTimeout(function() {
              trayImg.addClass(".begin-tray");
            }, 200);
            languageMenus.removeClass("visible");
            languageMenus.addClass("hidden");
            startMenu.removeClass("visible");
            startMenu.addClass("hidden");
            quickMenu.removeClass("visible");
            quickMenu.addClass("hidden");
          }
        }
      });
      calendarMenu.click(function(e) {
        e.stopPropagation()
      });
    }
    $(document).click(function(event) {
      const target = $(event.target);
  
      if (!target.is(startButton)) {
        startMenu.removeClass("visible");
        startMenu.addClass("hidden");
      }
  
      if (!target.is(searchField)) {
        searchMenu.removeClass("visible");
        searchMenu.addClass("hidden");
      }
      if(!target.is(trayButton)) {
        trayMenu.removeClass("visible");
        trayMenu.addClass("hidden");
        if (trayImg.hasClass("end-tray")) {
          setTimeout(function() {
            trayImg.removeClass("end-tray");
            trayImg.addClass("begin-tray");
          }, 200);
        }
      }
      if(!target.is(languageButton)) {
        languageMenus.removeClass("visible");
        languageMenus.addClass("hidden");
      }
      if(!target.is(quickButton)) {
        quickMenu.removeClass("visible");
        quickMenu.addClass("hidden");
      }
      if(!target.is(calendarButton)) {
        calendarMenu.removeClass("visible");
        calendarMenu.addClass("hidden");
      }
      if(checkContextMenu) {
        $('#draggableApps li').find('.cunstomContextMenu').remove();
          checkContextMenu = false;
      }
    });
  
    startToggle();
    searchToggle();
    trayToggle();
    languageToggle();
    quickMenuToggle();
    calendarToggle();
    showScreen();


    //Panel apps shortcuts draggable 

    $(function() {
      $('#draggableApps').sortable({
        containtment: 'parent',
        axis: 'x',
        start: function() {
          $('.taskbar-apps-back').css({
            background: 'none',
          })
          $('.cunstomContextMenu').removeClass('contextMenuSlideUp');
          $('#draggableApps li').find('.cunstomContextMenu').remove();
          checkContextMenu = false;
        },
        stop: function() {
          $('.taskbar-apps-back').hover(function(){
            $(this).css({
              background: '#5d98ff85',
            })
          }, function() {
            $(this).css({
              background: '',
            })
          })
        },
        
      });
    })

    $('#draggableApps li').on('contextmenu', function(event) {
      event.preventDefault();

      if(checkContextMenu) {
        $('#draggableApps li').find('.cunstomContextMenu').remove();
          checkContextMenu = false;
      }

       var newElement = $('<div class="cunstomContextMenu contextMenuSlideUp"><div id="unpin"> <img src="img/unpin.png" alt="unpin">Unpin from taskbar</div><div id="closeAppContext"><img src="img/cross.png" alt="">Close window</div></div>');

      if (!checkContextMenu) {
        $(this).css({ 
          position: 'relative',
        });
        $(this).append(newElement);

        checkContextMenu = true;

        if(!$(this).hasClass('pinned')) {
          $('#unpin').addClass('menu-inactive');
        } 

        if($(this).hasClass('closed')) { 
          $('#closeAppContext').addClass('menu-inactive');
        } else {
          $('#closeAppContext').removeClass('menu-inactive');
        }

       
      } 

      $('#unpin').on('click', function() { 
        if ($(this).closest('li').hasClass('pinned')) {
          $(this).closest('li').removeClass('pinned');
          $(this).closest('li').remove();
        }
      }); 

      $('#closeAppContext').on('click', function() {
        if (!$(this).closest('.notepad-app').hasClass('closed')) {

          closeNotepadVar();

        }
      });
      
    });




  });
  