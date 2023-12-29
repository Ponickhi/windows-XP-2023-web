//Notepad:
$('document').ready(function() {
    const notepadProgramm = $('.notepad-programm');
    const notepadProgrammAll = $('.notepad-programm').find('*');
    const elementsParent = $('.desktop');
    const notepadStartTile = $('#notepad-tile');
    const notepadStartList = $('#notepad-start');
    const notepadTaskbar = $('#notepad-panel');
    const notepadDesktopIcon = $('#notepad-desktop');
    const notepadScaleTarget = $('#notepad-scale-target');
    var NotepadFileMenu = $('.file-menu');
    var NotepadFileList = $('.fallDownFile');
    var NotepadEditMenu = $('.edit-menu, NotepadEditTitle');
    var NotepadEditList = $('.fallDownEdit'); 
    var NotepadViewMenu = $('.view-menu, NotepadViewTitle');
    var NotepadViewList = $('.fallDownView');
    const notepadTaskbarImage = $('.notepad-app img')
    const minimizeButton = $('.minimize');
    const maximizeButton = $('.maximize');
    const closeButton = $('.close-cross');
    const NotepadMenuZoomElement = $('#NotepadZoom');
    const NotepadZoomMenuMenu = $('.zoomList');
    const NotepaZoomiN = $('#notepadZoomIn');
    const notepadZoomOut = $('#NotepadZoomOut');
    const notepadTextArea = $('#notepad-text-area');
    const notepadresetZoom = $('#notepadRestoreZoom');
    const notepadWordWrap = $('#notepadWordWrap');
    const notepadCloseMenu = $('#notepadCloseMenu');
    const notepadSaveAs = $('#NotepadsaveAs');
    const notepadOpenFile = $('#notepadOpenFile');
    const notepadInputFile = $('#notepadUploadTXT');
    const notepadSave = $('#notepadSave');
    const notepadUndo = $('#notepadUndo');
    const notepadCut = $('#notepadCut');
    const notepadCopu = $('#notepadCopy');
    const notepadSelectAll = $('#notepadSelectAll');
    const notepadFind = $('#notepadFind');
    const findCross = $('.nopepadCloseFind, .notepadfindImage');
    var minimizeTarget = notepadTaskbar.offset();
    var notepadInitialZoom = 100;
    var tagetUnwrap;
    var elementWidth;
    var elementHeight
    var wordwrapActivated = false;
    var notepadSavedText;
    var notepadSavedTextCheck = false;
    var previousContent = [];
    var currentContent;
    var notepadSelectedText;
    var findCheck = false;


    //Дописати функціонал менюшек, можливо прибрати пунк open. Подумати чи можна ще якось покращити картину, якщо ні - супер, створюй новий JS Файл і давай писати нову прогу, можливо зроби калькулятор, має бути легко. 
    
    notepadTaskbar.hover(function() {
        if(!notepadProgramm.hasClass('active-now')) {
            notepadTaskbar.css({
                background:'#5d98ff85'
            });
        } else if(notepadProgramm.hasClass('scaled-down')) {
            notepadTaskbar.css({
                background:'#5d98ff85'
            }); 
        }
    }, function() {
        if(!notepadProgramm.hasClass('active-now')) {
            notepadTaskbar.css({
                background:'none'
            });
        } else if(notepadProgramm.hasClass('scaled-down')) {
            notepadTaskbar.css({
                background:'none'
            });
        }
    })
    
    notepadDesktopIcon.dblclick(function() {
        if($('.notepad-app').hasClass('closed')) {
            $('.notepad-app').removeClass('closed');
            $('.notepad-app').addClass('open');
            $('.show-active').css({
                width: '100%',
                background: '#fff',
            });
            notepadTaskbar.css({
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
            $('.notepad-app').removeClass('closed');
            $('.notepad-app').addClass('open');
            $('.show-active').css({
                width: '100%',
                background: '#fff',
            });
            notepadTaskbar.css({
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
            notepadTaskbar.css({
                background:'#5d98ff85'
            });
            $('.show-active').css({
                width: '100%',
                background: '#fff',
            });

            notepadProgramm.addClass('active-now');
        } 
        if ($('.notepad-app').hasClass('open')) {
            return;
        }
    })

    notepadTaskbar.click(function() {
        if($('.notepad-app').hasClass('closed')) {
            $('.notepad-app').removeClass('closed');
            $('.notepad-app').addClass('open');
            $('.show-active').css({
                width: '100%',
                background: '#fff',
            });
            notepadTaskbar.css({
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
                $('.show-active').css({
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
                    top: minimizeTarget.top - 250, 
                    left: minimizeTarget.left + 30,
                    transform: 'scale(0, 0)',
                    opacity: '0',
                });
                $('.show-active').css({
                    width: '70%',
                    background: '#81aefd',
                });
                notepadTaskbar.css({
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
                $('.show-active').css({
                    width: '100%',
                    background: '#fff',
                });
                notepadTaskbar.css({
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
        tagetUnwrap = notepadProgramm.offset();
        notepadProgramm.css({
            transition:"all 0.2s ease",
            top: minimizeTarget.top - 250, 
            left: minimizeTarget.left + 30,
            transform: 'scale(0, 0)',
            opacity: '0',
        });
        console.log(minimizeTarget.top)
        console.log(minimizeTarget.left)
        notepadTaskbar.css({
            background:'none'
        });
        notepadTaskbarImage.addClass('tasbarScaling');
        $('.show-active').css({
            width: '70%',
            background: '#81aefd',
        });
        setTimeout(function() {
            notepadProgramm.css({
                display: 'none', 
                transition: 'none',
            })
            notepadTaskbarImage.removeClass('tasbarScaling');
        }, 200);
        notepadProgramm.addClass('scaled-down');
    })

    closeButton.click(function() {
        notepadDesktopIcon.removeClass('open');
        notepadStartList.removeClass('open');
        notepadStartTile.removeClass('open');
        notepadTaskbar.removeClass('open');
        notepadDesktopIcon.addClass('closed');
        notepadStartList.addClass('closed');
        notepadStartTile.addClass('closed');
        notepadTaskbar.addClass('closed');
        $('.show-active').css({
            width: '0',
        });
        notepadTaskbar.css({
            background:'none'
        });
        notepadProgramm.css({
            display: 'none',
        })
        $('#notepad-text-area').val('');
        notepadProgramm.removeClass('scaled-down');
        notepadProgramm.removeClass('active-now');
        $('.notepadFindSearch').css({
            transform: 'scale(1, 0)',
            display: 'none',
        });
        findCheck = false;

        if(notepadSavedTextCheck == true) {
            notepadTextArea.val(notepadSavedText);
            notepadSavedTextCheck = false;
        } 
    }); 

    maximizeButton.click(function() {
        tagetUnwrap = notepadProgramm.offset();
        notepadProgramm.css({
            transition:"all 0.2s ease",
        });
        elementWidth = notepadProgramm.width();
        elementHeight = notepadProgramm.height();
        
        if (elementWidth < elementsParent.width() && elementHeight < elementsParent.height()) {
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
        }, 200)
    })

    $('.desktop').on('mousedown', function(e) { //adding and removing active class to programm
        if (notepadProgrammAll.is(e.target)){
            if (!$('.notepad-programm').hasClass('active-now')) {
                notepadProgramm.css({
                    transition:"all 0.2s ease",
                    background: '#2963c8a9',
                })
                $('.show-active').css({
                    width: '100%',
                    background: '#fff',
                });
                notepadTaskbar.css({
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
                    $('.show-active').css({
                        width: '70%',
                        background: '#81aefd',
                    });
                    notepadTaskbar.css({
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

    $(function() {
    
      $('.dragProgram').draggable({
          handle: ".notepad-title-col",
          containment: ".wrapper",
          snap: ".snapping", 
          snapMode: "outer",
      });
      $('.dragProgram').resizable({
        minHeight: 300,
        minWidth: 350,
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
        notepadDesktopIcon.removeClass('open');
        notepadStartList.removeClass('open');
        notepadStartTile.removeClass('open');
        notepadTaskbar.removeClass('open');
        notepadDesktopIcon.addClass('closed');
        notepadStartList.addClass('closed');
        notepadStartTile.addClass('closed');
        notepadTaskbar.addClass('closed');
        $('.show-active').css({
            width: '0',
        });
        notepadTaskbar.css({
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
    }); //ДОРОБИТИ NOTEPADSAVE - якщо текстерія пуста - то цей пункт має бути неможливим для вибору в меню, придумати стилі і скріпт і тд...

    notepadTextArea.on('mouseup keyup', function(e) {
        e.stopPropagation();
        updateDivState();
            
    });
    notepadTextArea.on('keydown', function(e) {
        if(e.which === 32 && $(this).is(':focus') || e.which === 13 && $(this).is(':focus')) {
            currentContent = notepadTextArea.val();
            previousContent.push(currentContent);
        }
    });
    function updateDivState() {
        const textareaValue = notepadTextArea.val().trim();
        notepadSelectedText = window.getSelection().toString().trim();

        if(!textareaValue == '') {
            notepadSave.removeClass('menu-inactive');
            $('#notepadUndo').removeClass('menu-inactive');
            $('#notepadFind').removeClass('menu-inactive');
            notepadSave.addClass('menu-active');
            $('#notepadUndo').addClass('menu-active');
            $('#notepadFind').addClass('menu-active');
        } else {
            notepadSave.removeClass('menu-active');
            $('#notepadUndo').removeClass('menu-active');
            $('#notepadFind').removeClass('menu-active');
            notepadSave.addClass('menu-inactive');
            $('#notepadUndo').addClass('menu-inactive');
            $('#notepadFind').addClass('menu-inactive');
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
        navigator.clipboard.writeText(notepadSelectedText)
        .then(() => {
            console.log(notepadSelectedText);
        })
        .catch((error) => {
            console.log(error);
        })

        notepadTextArea.val(currentContent.replace(notepadSelectedText, '').trim());
    });

    notepadCopu.click(function() {
        navigator.clipboard.writeText(notepadSelectedText)
        .then(() => {
            console.log(notepadSelectedText);
        })
        .catch((error) => {
            console.log(error);
        })
    })

    notepadSelectAll.click(function() {
        notepadTextArea.focus();
        notepadTextArea[0].setSelectionRange(0, notepadTextArea.val().length);
    })

    notepadFind.click(function() {
        if (!findCheck) {
            $('.notepadFindSearch').css({
                display: 'flex',
            });
            setTimeout(function() {
                $('.notepadFindSearch').css({
                    transform: 'scale(1, 1)',
                });
            });
            findCheck = true;
        } else {
            $('.notepadFindSearch').css({
                transform: 'scale(1, 0)',
            });
            setTimeout(function() {
                $('.notepadFindSearch').css({
                    display: 'none',
                });
            }, 200);
            findCheck = false;
        }
    });

    findCross.click(function(e) {
        e.stopPropagation();
        $('.notepadFindSearch').css({
            transform: 'scale(1, 0)',
        });
        setTimeout(function() {
            $('.notepadFindSearch').css({
                display: 'none',
            });
        }, 200);
        findCheck = false;
    });

}); 





