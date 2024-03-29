//Notepad:

    var notepadProgramm = $('.notepad-programm');
    var notepadProgrammAll = $('.notepad-programm').find('*');
    var elementsParent = $('.desktop');
    var notepadStartTile = $('#notepad-tile');
    var notepadStartList = $('#notepad-start');
    var notepadTaskbar = $('#notepad-panel');
    var notepadDesktopIcon = $('#notepad-desktop');
    var notepadScaleTarget = $('#notepad-scale-target');
    var NotepadFileMenu = $('.file-menu');
    var NotepadFileList = $('.fallDownFile');
    var NotepadEditMenu = $('.edit-menu, NotepadEditTitle');
    var NotepadEditList = $('.fallDownEdit'); 
    var NotepadViewMenu = $('.view-menu, NotepadViewTitle');
    var NotepadViewList = $('.fallDownView');
    var notepadTaskbarImage = $('.notepad-app img')
    var minimizeButton = $('.minimize');
    var maximizeButton = $('.maximize');
    var closeButton = $('.close-cross');
    var NotepadMenuZoomElement = $('#NotepadZoom');
    var NotepadZoomMenuMenu = $('.zoomList');
    var NotepaZoomiN = $('#notepadZoomIn');
    var notepadZoomOut = $('#NotepadZoomOut');
    var notepadTextArea = $('#notepad-text-area');
    var notepadresetZoom = $('#notepadRestoreZoom');
    var notepadWordWrap = $('#notepadWordWrap');
    var notepadCloseMenu = $('#notepadCloseMenu');
    var notepadSaveAs = $('#NotepadsaveAs');
    var notepadOpenFile = $('#notepadOpenFile');
    var notepadInputFile = $('#notepadUploadTXT');
    var notepadSave = $('#notepadSave');
    var notepadUndo = $('#notepadUndo');
    var notepadCut = $('#notepadCut');
    var notepadCopu = $('#notepadCopy');
    var notepadSelectAll = $('#notepadSelectAll');
    var notepadDelete = $('#NotepadDelete');
    var notepadPaste = $('#notepadPaste');
    var minimizeTarget;
    var notepadInitialZoom = 100;
    var tagetUnwrap;
    var elementWidth = 700;
    var elementHeight = 500;
    var wordwrapActivated = false;
    var notepadSavedText;
    var notepadSavedTextCheck = false;
    var previousContent = [];
    var currentContent;
    var notepadSelectedText;
    
    $('#draggableApps').find('#notepad-panel').hover(function() {
        if(!notepadProgramm.hasClass('active-now')) {
            $('#draggableApps').find('#notepad-panel').css({
                background:'#5d98ff85'
            });
        } else if(notepadProgramm.hasClass('scaled-down')) {
            $('#draggableApps').find('#notepad-panel').css({
                background:'#5d98ff85'
            }); 
        }
    }, function() {
        if(!notepadProgramm.hasClass('active-now')) {
            $('#draggableApps').find('#notepad-panel').css({
                background:'none'
            });
        } else if(notepadProgramm.hasClass('scaled-down')) {
            $('#draggableApps').find('#notepad-panel').css({
                background:'none'
            });
        }
    })
    
    notepadDesktopIcon.dblclick(function() {
        if($('.notepad-app').hasClass('closed')) {
            $('#draggableApps').find('#notepad-panel').removeClass('closed');
            $('.notepad-app').removeClass('closed');
            $('.notepad-app').addClass('open');
            $('.notepad-app').find('.show-active').css({
                width: '100%',
                background: '#fff',
            });
            $('#draggableApps').find('#notepad-panel').css({
                background:'#5d98ff85'
            });
            notepadProgramm.css({
                display: 'block',
                background: '#2963c8a9',
                top: '20%',
                left: '32.5%',
                width: '700px',
                height: '500px',
            });

            notepadProgramm.addClass('active-now');
        } 
        if ($('.notepad-app').hasClass('open')) {
            return;
        }
    })

    notepadStartList.click(function() {
        if($('.notepad-app').hasClass('closed')) {
            $('#draggableApps').find('#notepad-panel').removeClass('closed');
            $('.notepad-app').removeClass('closed');
            $('.notepad-app').addClass('open');
            $('.notepad-app').find('.show-active').css({
                width: '100%',
                background: '#fff',
            });
            $('#draggableApps').find('#notepad-panel').css({
                background:'#5d98ff85'
            });
            notepadProgramm.css({
                display: 'block',
                background: '#2963c8a9',
                top: '20%',
                left: '32.5%',
                width: '700px',
                height: '500px',
            });
            
            notepadProgramm.addClass('active-now');
        } 
        if ($('.notepad-app').hasClass('open')) {
            return;
        }
    })

    notepadStartTile.click(function() {
        if($('.notepad-app').hasClass('closed')) {
            $('#draggableApps').find('#notepad-panel').removeClass('closed');
            $('.notepad-app').removeClass('closed');
            $('.notepad-app').addClass('open');
            notepadProgramm.css({
                display: 'block',
                background: '#2963c8a9',
                top: '20%',
                left: '32.5%',
                width: '700px',
                height: '500px',
            });
            $('#draggableApps').find('#notepad-panel').css({
                background:'#5d98ff85'
            });
            $('.notepad-app').find('.show-active').css({
                width: '100%',
                background: '#fff',
            });

            notepadProgramm.addClass('active-now');
        } 
        if ($('.notepad-app').hasClass('open')) {
            return;
        }
    })
    
    $('#draggableApps').on('click','#notepad-panel', function() {
        minimizeTarget = $('#draggableApps').find('#notepad-panel').offset();
        if($('.notepad-app').hasClass('closed')) {
            $('#draggableApps').find('#notepad-panel').closest('li').removeClass('closed');
            $('.notepad-app').removeClass('closed');
            $('.notepad-app').addClass('open');
            $('.notepad-app').find('.show-active').css({
                width: '100%',
                background: '#fff',
            });
            $('#draggableApps').find('#notepad-panel').css({
                background:'#5d98ff85'
            });
            notepadProgramm.css({
                display: 'block',
                background: '#2963c8a9',
                top: '20%',
                left: '32.5%',
                width: '700px',
                height: '500px',
            });
            setTimeout(function() {
                notepadProgramm.addClass('active-now');
            }, 50)
        } 
        if ($('.notepad-app').hasClass('open')) {

            if (!$('.notepad-programm').hasClass('active-now') && !$('.notepad-programm').hasClass('scaled-down')) {
                notepadProgramm.css({
                    transition:"all 0.2s ease",
                    background: '#2963c8a9',
                });
                $('.notepad-app').find('.show-active').css({
                    width: '100%',
                    background: '#fff',
                });

                setTimeout(function() {
                    notepadProgramm.addClass('active-now');
                    notepadProgramm.css({
                        transition: 'none',
                    })
                }, 200)
                
            } 
            if (!notepadProgramm.hasClass('scaled-down') && notepadProgramm.hasClass('active-now')) {
                tagetUnwrap = notepadProgramm.offset();
                notepadProgramm.css({
                    transition:"all 0.2s ease",
                    top: minimizeTarget.top - 200, 
                    left: minimizeTarget.left + 30,
                    transform: 'scale(0, 0)',
                    opacity: '0',
                });
                $('.notepad-app').find('.show-active').css({
                    width: '70%',
                    background: '#81aefd',
                });
                $('#draggableApps').find('#notepad-panel').css({
                    background:'none'
                });
                setTimeout(function() {
                    notepadProgramm.css({
                        display: 'none', 
                        transition: 'none',
                    })
                }, 200);
                notepadProgramm.addClass('scaled-down');
                
            } else if (notepadProgramm.hasClass('scaled-down') && notepadProgramm.  hasClass('active-now')) {
                notepadProgramm.css({
                    transition:"all 0.2s ease",
                    display: 'block',
                })
                $('.notepad-app').find('.show-active').css({
                    width: '100%',
                    background: '#fff',
                });
                $('#draggableApps').find('#notepad-panel').css({
                    background:'#5d98ff85'
                });
                setTimeout(function() {
                    notepadProgramm.css({
                        opacity: '1',
                        top: tagetUnwrap.top,
                        left: tagetUnwrap.left, 
                        transform: 'scale(1, 1)',
                    },)
                })
                setTimeout(function() {
                    notepadProgramm.css({
                        transition:"none"
                    })
                }, 200);
                notepadProgramm.removeClass('scaled-down');
            }
        } 
    })

    minimizeButton.click(function() {
        minimizeTarget = $('#draggableApps').find('#notepad-panel').offset();
        tagetUnwrap = notepadProgramm.offset();
        notepadProgramm.css({
            transition:"all 0.2s ease",
            top: minimizeTarget.top - 200, 
            left: minimizeTarget.left + 30,
            transform: 'scale(0, 0)',
            opacity: '0',
        });
        $('#draggableApps').find('#notepad-panel').css({
            background:'none'
        });
        $('#draggableApps').find('#notepad-panel img').addClass('tasbarScaling');
        $('.notepad-app').find('.show-active').css({
            width: '70%',
            background: '#81aefd',
        });
        setTimeout(function() {
            notepadProgramm.css({
                display: 'none', 
                transition: 'none',
            })
            $('#draggableApps').find('#notepad-panel img').removeClass('tasbarScaling');
        }, 200);
        notepadProgramm.addClass('scaled-down');
    })

    function closeNotepad(e) {
        e.click(function() {
            $('#draggableApps').find('#notepad-panel').closest('li').addClass('closed');
            notepadDesktopIcon.removeClass('open');
            notepadStartList.removeClass('open');
            notepadStartTile.removeClass('open');
            $('#draggableApps').find('#notepad-panel').removeClass('open');
            notepadDesktopIcon.addClass('closed');
            notepadStartList.addClass('closed');
            notepadStartTile.addClass('closed');
            $('#draggableApps').find('#notepad-panel').addClass('closed');
            $('.notepad-app').find('.show-active').css({
                width: '0',
            });
            $('#draggableApps').find('#notepad-panel').css({
                background:'none'
            });
            notepadProgramm.css({
                display: 'none',
            })
            $('#notepad-text-area').val('');
            notepadProgramm.removeClass('scaled-down');
            notepadProgramm.removeClass('active-now');
    
            elementHeight = 500;
            elementWidth = 700;
    
            if(notepadSavedTextCheck == true) {
                notepadTextArea.val(notepadSavedText); 
                notepadSavedTextCheck = false;
            } 
        }); 
    };

    var closeNotepadVar = () => {
        $('#draggableApps').find('#notepad-panel').closest('li').addClass('closed');
            notepadDesktopIcon.removeClass('open');
            notepadStartList.removeClass('open');
            notepadStartTile.removeClass('open');
            $('#draggableApps').find('#notepad-panel').removeClass('open');
            notepadDesktopIcon.addClass('closed');
            notepadStartList.addClass('closed');
            notepadStartTile.addClass('closed');
            $('#draggableApps').find('#notepad-panel').addClass('closed');
            $('.notepad-app').find('.show-active').css({
                width: '0',
            });
            $('#draggableApps').find('#notepad-panel').css({
                background:'none'
            });
            notepadProgramm.css({
                display: 'none',
            })
            $('#notepad-text-area').val('');
            notepadProgramm.removeClass('scaled-down');
            notepadProgramm.removeClass('active-now');
    
            elementHeight = 500;
            elementWidth = 700;
    
            if(notepadSavedTextCheck == true) {
                notepadTextArea.val(notepadSavedText);
                notepadSavedTextCheck = false;
            } 
    }
    closeNotepad(closeButton);
    

    maximizeButton.click(function() {
        tagetUnwrap = notepadProgramm.offset();
        notepadProgramm.css({
            transition:"all 0.2s ease",
        });
        
        
        if (elementWidth < elementsParent.width() && elementHeight < elementsParent.height() || elementWidth < elementsParent.width() && elementHeight >= elementsParent.height() || elementWidth >= elementsParent.width() && elementHeight < elementsParent.height()) {
            notepadProgramm.css({
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
            });
            notepadWidth = elementWidth;
            notepadHeight = elementHeight;
            targetUnWrapForScale = tagetUnwrap;
            
        } else {
            notepadProgramm.css({
                top: targetUnWrapForScale.top,
                left: targetUnWrapForScale.left,
                width: notepadWidth + 'px',
                height: notepadHeight + 'px',
            });
        }
        setTimeout(function() {
            notepadProgramm.css({
                transition: 'none',
            })
            elementWidth = notepadProgramm.width();
            elementHeight = notepadProgramm.height();
        }, 200)
        
        
    })

    $('.desktop').on('mousedown', function(e) { //adding and removing active class to programm
        if (notepadProgrammAll.is(e.target)){
            if (!$('.notepad-programm').hasClass('active-now')) {
                notepadProgramm.css({
                    transition:"all 0.2s ease",
                    background: '#2963c8a9',
                })
                $('.notepad-app').find('.show-active').css({
                    width: '100%',
                    background: '#fff',
                });
                $('#draggableApps').find('#notepad-panel').css({
                    background:'#5d98ff85'
                });
                $('.notepad-programm').addClass('active-now');
                console.log('notepad is active now');

                setTimeout(function() {
                    notepadProgramm.css({
                        transition:"none"
                    })
                }, 200);
            } else {
                if ($(e.target).hasClass('close-cross') || $(e.target).hasClass('cross-cross')) {
                    $('notepad-programm').removeClass('active-now');
                    console.log('notepad is not active now');
                }

                return;
            }
        } else if ($('.desktop').is(e.target) || $('.grid').is(e.target)) {
            if ($('.notepad-programm').hasClass('active-now')) {
                if (notepadProgramm.hasClass('scaled-down')) {
                    return;
                } else {
                    notepadProgramm.css({
                        transition:"all 0.2s ease",
                        background: '#3b5684a9',
                    });
                    $('.notepad-app').find('.show-active').css({
                        width: '70%',
                        background: '#81aefd',
                    });
                    $('#draggableApps').find('#notepad-panel').css({
                        background:'none'
                    });
                    notepadProgramm.removeClass('active-now');
                    console.log('notepad active is removed');
    
                    setTimeout(function() {
                        notepadProgramm.css({
                            transition:"none"
                        })
                    }, 200);
                }
                
                
            }
        }
    })

    //-----------------------

    //Dragging + closing + snapping programs
    let cursorPositionLeft;
    let isGrabbing = false;
    let viewPortWidth = $("body").width();
    let viewportRight = 0.95 * viewPortWidth;
    $(document).on('mousemove', function(event) {
        cursorPositionLeft = event.clientX;
        if(isGrabbing && cursorPositionLeft <= 30) {
            $('#snapWindowLeft').css({
                display: 'block',
            });
            setTimeout(function() {
                $('#snapWindowLeft').css({ 
                    width: '49.5%',
                    height: '99%',
                })
            }, 50);
           
        } else if(isGrabbing && cursorPositionLeft >= viewportRight) {
            $('#snapWinowRight').css({
                display: 'block',
            });
            setTimeout(function() {
                $('#snapWinowRight').css({ 
                    width: '49.5%',
                    height: '99%',
                })
            }, 50);
        }
        else {
            $('#snapWindowLeft').css({
                width: '0',
                height: '0',
            })
            $('#snapWinowRight').css({
                width: '0',
                height: '0',
            })
            setTimeout(function() {
                $('#snapWindowLeft').css({ 
                    display: 'none',
                })
                $('#snapWinowRight').css({ 
                    display: 'none',
                })
            }, 50)
        }
    })
    $(function() {
      $('#notepad-programm').draggable({
          handle: ".notepad-title-col",
          start: function(event, ui) {
            isGrabbing = true;
          },
          stop: function(event, ui) {
            let swithWidth = elementWidth;
            let switchHeight = elementHeight;
            if(cursorPositionLeft <= 30) {
                $('#notepad-programm').css({
                    width: '50%',
                    height: '100%',
                    top: '0',
                    left: '0',
                });
                setTimeout(function() {
                    $('#notepad-programm').css({
                        transition: "none",
                    }, 200);
                })
            } else if (cursorPositionLeft >= viewportRight) {
                $('#notepad-programm').css({
                    width: '50%',
                    height: '100%',
                    top: '0',
                    left: '50%'
                });
                setTimeout(function() {
                    $('#notepad-programm').css({
                        transition: "none",
                    }, 200);
                })
            } else {
                $('#notepad-programm').css({
                    width: swithWidth + 'px',
                    height: switchHeight + 'px',
                });
                setTimeout(function() {
                    $('#notepad-programm').css({
                        transition: "none",
                    }, 200);
                })
            }
            isGrabbing = false;
        }
      });
      $('.dragProgram').resizable({
        minHeight: 300,
        minWidth: 350,
        stop: function() {
            elementWidth = notepadProgramm.width();
            elementHeight = notepadProgramm.height();
        }
      });
    
    });


    // File, Edit, View menus Notepad 

    $(document).click(function(e) {
        const target = $(e.target);
    
        if (!target.is(NotepadFileMenu)) {
            NotepadFileList.removeClass('dropDownFile');
            NotepadFileList.addClass('dropUpFile');
        }
        if(!target.is(NotepadEditMenu)) {
            NotepadEditList.removeClass('dropDownEdit');
            NotepadEditList.addClass('dropUpEdit');
        }
        if(!target.is(NotepadViewList)) {
            NotepadViewList.removeClass('dropDownView');
            NotepadViewList.addClass('dropUpView');
            NotepadZoomMenuMenu.removeClass('beingDisplay'); 
            NotepadZoomMenuMenu.addClass('notDisplay');
            NotepadZoomMenuMenu.css({
                display: 'none',
            });
            
        }
    })

    NotepadFileMenu.click(function(e) {
        e.stopPropagation();
        if(NotepadFileList.hasClass('dropUpFile')) {
            NotepadFileList.removeClass('dropUpFile');
            NotepadFileList.addClass('dropDownFile');
        
            if (NotepadEditList.hasClass('dropDownEdit') || 
            NotepadViewList.hasClass('dropDownView')) {
    
                NotepadEditList.removeClass('dropDownEdit');
                NotepadEditList.addClass('dropUpEdit');
                NotepadViewList.removeClass('dropDownView');
                NotepadViewList.addClass('dropUpView');
                NotepadZoomMenuMenu.removeClass('beingDisplay'); 
                NotepadZoomMenuMenu.addClass('notDisplay');
                NotepadZoomMenuMenu.css({
                    display: 'none',
                });

                }
    
            } else {
                NotepadFileList.toggleClass('dropUpFile');
            }
    })
    
    NotepadEditMenu.click(function(e) {
        e.stopPropagation();
        if(NotepadEditList.hasClass('dropUpEdit')) {
            NotepadEditList.removeClass('dropUpEdit');
            NotepadEditList.addClass('dropDownEdit');
    
            if (NotepadFileList.hasClass('dropDownFile') || 
            NotepadViewList.hasClass('dropDownView')) {
                NotepadFileList.removeClass('dropDownFile');
                NotepadFileList.addClass('dropUpFile');
                NotepadViewList.removeClass('dropDownView');
                NotepadViewList.addClass('dropUpView');
                NotepadZoomMenuMenu.removeClass('beingDisplay'); 
                NotepadZoomMenuMenu.addClass('notDisplay');
                NotepadZoomMenuMenu.css({
                    display: 'none',
                });
    
            }
        } else {
            NotepadEditList.toggleClass('dropUpEdit');
        }
    })
    
    NotepadViewMenu.click(function(e) {
        e.stopPropagation();
        if(NotepadViewList.hasClass('dropUpView')) {
            NotepadViewList.removeClass('dropUpView');
            NotepadViewList.addClass('dropDownView');
    
            if (NotepadEditList.hasClass('dropDownEdit') || 
            NotepadFileList.hasClass('dropDownFile')) {
    
                NotepadFileList.removeClass('dropUpEdit');
                NotepadFileList.addClass('dropUpFile');
                NotepadEditList.removeClass('dropDownEdit');
                NotepadEditList.addClass('dropUpEdit');
                NotepadZoomMenuMenu.removeClass('beingDisplay'); 
                NotepadZoomMenuMenu.addClass('notDisplay');
                NotepadZoomMenuMenu.css({
                    display: 'none',
                });
            }
        } else {
            NotepadViewList.toggleClass('dropUpView');
        }
    });

    NotepadMenuZoomElement.click(function(e) {
        e.stopPropagation();
        if(NotepadZoomMenuMenu.hasClass('notDisplay')) {
            NotepadZoomMenuMenu.removeClass('notDisplay');
            NotepadZoomMenuMenu.addClass('beingDisplay');
            NotepadZoomMenuMenu.css({
                display: 'flex',
            })
        } else {
            NotepadZoomMenuMenu.removeClass('beingDisplay');
            NotepadZoomMenuMenu.addClass('notDisplay');
            NotepadZoomMenuMenu.css({
                display: 'none',
            })
        }
    });

    NotepaZoomiN.click(function() {
        notepadInitialZoom += 10;
        notepadTextArea.css({
            zoom: `${notepadInitialZoom}%`,
        });
        NotepadViewList.removeClass('dropDownView');
        NotepadViewList.addClass('dropUpView');
        $('#notepadScaleText').text(`${notepadInitialZoom}%`);
    });

    notepadZoomOut.click(function() {
        notepadInitialZoom -= 10;
        notepadTextArea.css({
            zoom: `${notepadInitialZoom}%`,
        });
        NotepadViewList.removeClass('dropDownView');
        NotepadViewList.addClass('dropUpView');
        $('#notepadScaleText').text(`${notepadInitialZoom}%`);
    });

    notepadresetZoom.click(function() {
        notepadInitialZoom = 100;
        notepadTextArea.css({
            zoom: `${notepadInitialZoom}%`,
        });
        NotepadViewList.removeClass('dropDownView');
        NotepadViewList.addClass('dropUpView');
        $('#notepadScaleText').text(`${notepadInitialZoom}%`);
    });

    notepadWordWrap.click(function() {
        wordwrapActivated = !wordwrapActivated;

        if(wordwrapActivated) {
            notepadTextArea.css('overflow-wrap', 'break-word');
            $('#notepadWordWrap span').css('display', 'inline-block');
        } else {
            notepadTextArea.css('overflow-wrap', 'normal');
            $('#notepadWordWrap span').css('display', 'none');
        }
    })
    
    notepadCloseMenu.click(function() {
        $('#draggableApps').find('#notepad-panel').addClass('closed');
        notepadDesktopIcon.removeClass('open');
        notepadStartList.removeClass('open');
        notepadStartTile.removeClass('open');
        $('#draggableApps').find('#notepad-panel').removeClass('open');
        notepadDesktopIcon.addClass('closed');
        notepadStartList.addClass('closed');
        notepadStartTile.addClass('closed');
        $('#draggableApps').find('#notepad-panel').addClass('closed');
        $('.notepad-app').find('.show-active').css({
            width: '0',
        });
        $('#draggableApps').find('#notepad-panel').css({
            background:'none'
        });
        notepadProgramm.css({
            display: 'none',
        })
        $('#notepad-text-area').val('');
        notepadProgramm.removeClass('scaled-down');
        notepadProgramm.removeClass('active-now');
    });

    notepadSaveAs.click(function() {
        var textToSave = notepadTextArea.val();

        var blob = new Blob([textToSave], {type: 'text/plain'});

        const a = $('<a></a>')
        .attr('download', 'Untitled.txt')
        .attr('href', window.URL.createObjectURL(blob))
        .appendTo('body')
        .get(0);

        a.click();

        $(a).remove();
    });

    notepadOpenFile.click(function() {
        alert('Uploading only .txt files recommended');
        notepadInputFile.trigger('click');
    });

    notepadInputFile.on('change', function(event) {
        var notepadFile = event.target.files[0];
        var notepadReader = new FileReader();

        notepadReader.onload = function(e) {
            var notepadContent = e.target.result;
            notepadTextArea.val(notepadContent);
        };

        notepadReader.readAsText(notepadFile);
        
        NotepadFileList.removeClass('dropDownFile');
        NotepadFileList.addClass('dropUpFile');
    });

    notepadSave.click(function() {

        if(notepadTextArea.val() != '') {
            notepadSavedText = notepadTextArea.val();
            notepadSavedTextCheck = true;

            $('.notepad-saved-notfication').css({
                display: 'flex',
            })
            $('.notepad-saved-notfication').addClass('fading');
            setTimeout(function() {
                $('.notepad-saved-notfication').removeClass('fading');
                $('.notepad-saved-notfication').addClass('fadingBack');
            }, 2000);
            setTimeout(function() {
                $('.notepad-saved-notfication').removeClass('fadingBack');
                $('.notepad-saved-notfication').css({
                    display: 'none',
                });
            }, 2500)
        } 
    }); 

    notepadTextArea.on('mouseup keyup', function(e) {
        e.stopPropagation();
        updateDivState();
        Cursorposition();
    });
    notepadTextArea.on('keydown', function(e) {
        if(e.which === 32 && $(this).is(':focus') || e.which === 13 && $(this).is(':focus')) {
            currentContent = notepadTextArea.val();
            previousContent.push(currentContent);
        }
    });
    function getSelectionText() {
        if(window.getSelection) {
            try {
                var activeElement = document.activeElement;
                if (activeElement && activeElement.value) {
                    return activeElement.value.substring(activeElement.selectionStart, activeElement.selectionEnd);
                } else {
                    return window.getSelection().toString();
                }
            } catch (e) {}
        } else if (document.selection && document.selection.type != "Control") {
            return document.selection.createRange().text;
        }
    }
    function updateDivState() {
        const textareaValue = notepadTextArea.val().trim();
        // notepadSelectedText = window.getSelection().toString().trim();
        notepadSelectedText = getSelectionText();
        if(!textareaValue == '') {
            notepadSave.removeClass('menu-inactive');
            $('#notepadUndo').removeClass('menu-inactive');
            notepadSave.addClass('menu-active');
            $('#notepadUndo').addClass('menu-active');
        } else {
            notepadSave.removeClass('menu-active');
            $('#notepadUndo').removeClass('menu-active');
            notepadSave.addClass('menu-inactive');
            $('#notepadUndo').addClass('menu-inactive');
        }

        if (!notepadSelectedText == '') {
            $('#notepadCut').removeClass('menu-inactive');
            $('#notepadCopy').removeClass('menu-inactive');
            $('#NotepadDelete').removeClass('menu-inactive');
            $('#notepadCut').addClass('menu-active');
            $('#notepadCopy').addClass('menu-active');
            $('#NotepadDelete').addClass('menu-active');
        } else {
            $('#notepadCut').removeClass('menu-active');
            $('#notepadCopy').removeClass('menu-active');
            $('#NotepadDelete').removeClass('menu-active');
            $('#notepadCut').addClass('menu-inactive');
            $('#notepadCopy').addClass('menu-inactive');
            $('#NotepadDelete').addClass('menu-inactive');
        }
    };

    notepadUndo.click(function() {
        let previousItem = previousContent.length;
        notepadTextArea.val(previousContent[previousItem - 1]);
        previousContent.pop();
        
    });

    notepadCut.click(function() {
        currentContent = notepadTextArea.val();
        navigator.clipboard.writeText(notepadSelectedText)
        notepadTextArea.val(currentContent.replace(notepadSelectedText, '').trim());

        setTimeout(function() {
            previousContent.push(currentContent);
        }, 100);

    });

    notepadCopu.click(function() {
        navigator.clipboard.writeText(notepadSelectedText)
        .catch((error) => {
            console.log(error);
        })
    });

    notepadSelectAll.click(function() {
        notepadTextArea.focus();
        notepadTextArea[0].setSelectionRange(0, notepadTextArea.val().length);
        updateDivState();
    });

    notepadDelete.click(function() {
        currentContent = notepadTextArea.val();
        notepadTextArea.val(currentContent.replace(notepadSelectedText, '').trim());

        setTimeout(function() {
            previousContent.push(currentContent);
        }, 100);
    });
    notepadPaste.click(function() {
        navigator.clipboard.readText().then(function(clipboardText) {
            const textarea = $('#notepad-text-area')[0]; 

            const startPos = textarea.selectionStart;
            const endPos = textarea.selectionEnd;

            const textBefore = textarea.value.substring(0, startPos);
            const textAfter = textarea.value.substring(endPos, textarea.value.length);

            textarea.value = textBefore + clipboardText + textAfter;

            // Move the cursor to the end of the pasted text
            const newCursorPosition = startPos + clipboardText.length;
            textarea.setSelectionRange(newCursorPosition, newCursorPosition);
        }).catch(function(err) {
            console.error('Failed to read clipboard contents: ', err);
        });
    });

    function Cursorposition() {
        let cursorPositionInfo = $('#notepadLineCol');

        let cursorIndex = notepadTextArea[0].selectionStart;

        let textBeforeCursor = notepadTextArea.val().substring(0, cursorIndex);
        let lineNumber = textBeforeCursor.split('\n').length;
        let columnNumber = textBeforeCursor.split('\n').pop().length + 1;

        cursorPositionInfo.text(`Ln ${lineNumber}, Col ${columnNumber}`);
    }

    Cursorposition();






