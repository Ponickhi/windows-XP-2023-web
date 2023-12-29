const selectionRectangle = $('.selection-rectangle');
const application = $('.app').find('*');
const square = $('.grid');
var programTurnedOn = $('.notepad-programm').find('*');
var appPosition = [];
let isMouseDown = false;
let isDraggingApp = false;
let initialX, initialY;
let multipleSelection = [];
let beingDragged = null;
var positionDifference = [];
var newGrid = [];
const bottomGridSection = ['div7', 'div8','div15','div16', 'div23', 'div24', 'div31', 'div32', 'div39', 'div40', 'div47', 'div48', 'div55', 'div56', 'div63', 'div64', 'div71', 'div72', 'div79', 'div80', 'div87', 'div88', 'div95', 'div96', 'div103', 'div104', 'div111', 'div112', 'div119', 'div120', 'div127', 'div128', 'div135', 'div136', 'div143', 'div144'];
const topGridSections = ['div1', 'div2', 'div17', 'div18', 'div25', 'div26', 'div33', 'div34', 'div41', 'div42', 'div49', 'div50', 'div57', 'div58', 'div65', 'div66', 'div73', 'div74', 'div81', 'div82', 'div89', 'div90', 'div97', 'div98', 'div105', 'div106', 'div113', 'div114', 'div121', 'div122', 'div129', 'div130', 'div137', 'div138'];
const rightGridSection = ['div145', 'div153', 'div146', 'div154', 'div147', 'div155', 'div148', 'div156', 'div149', 'div157', 'div150', 'div158'];
const leftGridSection = ['div1', 'div9', 'div2', 'div10', 'div3', 'div11', 'div4', 'div12', 'div5', 'div13', 'div6', 'div14', 'div7', 'div15', 'div8', 'div16'];
const rigthBottomCorner = ['div152', 'div160', 'div151', 'div159', 'div150', 'div158', 'div149', 'div157', 'div148', 'div148'];
const rightBottomCheck = ['div152', 'div151', 'div159', 'div160'];
//====================================


$('.desktop').on('mousedown', function (e) {
  isDraggingApp = false;
  if (e.which === 1) {
      // Check if the mouse is not on an .app element
      if (!application.is(e.target)) {
          isMouseDown = true;
          initialX = e.pageX;
          initialY = e.pageY;

          selectionRectangle.css({
              display: 'block',
              left: initialX + "px",
              top: initialY + "px",
              width: '0',
              height: '0',
          });
      }
      
  }
  if (programTurnedOn.is(e.target)) {
    isDraggingApp = true;
    isMouseDown = false;
    selectionRectangle.hide();
  }
  
});

$('.desktop').on('mousemove', function (e) {
  var cursorType = $(this).css('cursor');

  if (cursorType === 'e-resize' || cursorType === 'se-resize' || cursorType === 's-resize') {
    selectionRectangle.hide(); 
  }
  if (isDraggingApp) {
    return; // Return early if an .app element is being dragged
  }

  if (isMouseDown) {
    // Calculate the position and size of the selection rectangle
    const currentX = e.pageX;
    const currentY = e.pageY;
    const left = Math.min(initialX, currentX);
    const top = Math.min(initialY, currentY);
    const width = Math.abs(currentX - initialX);
    const height = Math.abs(currentY - initialY);

    // Update the rectangle's size and position
    selectionRectangle.css({
      left: left + 'px',
      top: top + 'px',
      width: width + 'px',
      height: height + 'px',
    });

    // Check if the mouse is over an .app element
    $('.app').each(function () {

      const app = $(this);
      const appBounds = app[0].getBoundingClientRect();
      if (
        appBounds.left + appBounds.width > left &&
        appBounds.right < left + width &&
        appBounds.top + appBounds.height > top &&
        appBounds.bottom < top + height
      ) {
        // Add the app element to the selection array if it's not already included
        if (!app.hasClass('selected')) {
          app.addClass('selected');
          var appGridClass = getGridClass(app.parent()); 
          multipleSelection.push(app);
          appPosition.push(appGridClass);
        }
      }
    });
  }
});

$(document).on('mouseup', function () {
  isMouseDown = false;
  selectionRectangle.css('display', 'none');
  beingDragged = multipleSelection; 
  calcAppPosition();
});

$('.app').on('dragstart', dragStart);

square.each(function () {
  $(this).on('dragover', dragOver);
  $(this).on('drop', dragDrop);
  
});

function calcAppPosition() { //Функція сортувальник за зростанням 
  appPosition.sort(function(a, b) {
    return a - b;
  }); 

  for (let i = 1; i < appPosition.length; i++) {
    let difference = appPosition[i] - appPosition[i - 1];

    positionDifference.push(difference);
    appPosition.splice(i, 1);

    i--
  }
}

function hasAnyClass(element, classes) { 
  for (let i = 0; i < classes.length; i++) {
    if (element.hasClass(classes[i])) {
      return true;
    }
  }
  return false;
}

function dragStart(e) {
  isDraggingApp = true;
  if ($(e.target).hasClass('app') && multipleSelection == false) {
      beingDragged = e.target;
      
  } else if($(e.target).hasClass('app') && multipleSelection) { 
    return;
  }
  else {
      beingDragged = null;
      e.preventDefault(); // Prevent dragging if not an .app element
  }
}


function dragDrop(e) {
  if (beingDragged) {
    const targetGrid = $(e.target).closest('.grid');
    

    if (targetGrid.length) {
      // Get the selected .app elements
      const selectedApps = $('.app.selected');
      if ($(e.target).hasClass('app') || $(e.target).closest('.app').length > 0) {
        // Prevent dropping if e.target or its ancestor is an .app element
        return;
      } 
      if (selectedApps.length > 0) {
        // Place the first selected .app in the targetGrid
         targetGrid.append(selectedApps.first());
         selectedApps.splice(0, 1);

         positionDifference.forEach((value, index) => {
          
          var nextGrid1 = targetGrid.nextAll('.grid').eq(value - 1);
          

        if (hasAnyClass(targetGrid, bottomGridSection)) { 
          const targetIndex = bottomGridSection.indexOf(targetGrid.attr('class').split(' ').filter(cls => cls.startsWith('div'))[0]);
          const nextGridClasses = bottomGridSection.slice(targetIndex + 1);

          nextGridClasses.forEach(className => {
            const gridsToAppend = $('.grid.' + className);
            if (gridsToAppend.length && selectedApps.length > 0) {
              gridsToAppend.each(function () {
                if ($(this).find('.app').length === 0) {
                  $(this).append(selectedApps.eq(0));
                  selectedApps.splice(0, 1);
                }
              });
            }
          });
        } else if (hasAnyClass(targetGrid, topGridSections)) {
          const targetIndex = topGridSections.indexOf(targetGrid.attr('class').split(' ').filter(cls => cls.startsWith('div'))[0]);
          const nextGridClasses = topGridSections.slice(targetIndex + 1);

          nextGridClasses.forEach(className => {
            const gridsToAppend = $('.grid.' + className);
            if (gridsToAppend.length && selectedApps.length > 0) {
              gridsToAppend.each(function () {
                if ($(this).find('.app').length === 0) {
                  $(this).append(selectedApps.eq(0));
                  selectedApps.splice(0, 1);
                }
              });
            }
          });
        } else if (hasAnyClass(targetGrid, rightGridSection)) {
          const targetIndex = rightGridSection.indexOf(targetGrid.attr('class').split(' ').filter(cls => cls.startsWith('div'))[0]);
          const nextGridClasses = rightGridSection.slice(targetIndex + 1);

          nextGridClasses.forEach(className => {
            const gridsToAppend = $('.grid.' + className);
            if (gridsToAppend.length && selectedApps.length > 0) {
              gridsToAppend.each(function () {
                if ($(this).find('.app').length === 0) {
                  $(this).append(selectedApps.eq(0));
                  selectedApps.splice(0, 1);
                }
              });
            }
          });
        } else if (hasAnyClass(targetGrid, leftGridSection)) {
          const targetIndex = leftGridSection.indexOf(targetGrid.attr('class').split(' ').filter(cls => cls.startsWith('div'))[0]);
          const nextGridClasses = leftGridSection.slice(targetIndex + 1);

          nextGridClasses.forEach(className => {
            const gridsToAppend = $('.grid.' + className);
            if (gridsToAppend.length && selectedApps.length > 0) {
              gridsToAppend.each(function () {
                if ($(this).find('.app').length === 0) {
                  $(this).append(selectedApps.eq(0));
                  selectedApps.splice(0, 1);
                }
              });
            }
          });
        } else if (hasAnyClass(targetGrid, rightBottomCheck)) {
          const targetIndex = rigthBottomCorner.indexOf(targetGrid.attr('class').split(' ').filter(cls => cls.startsWith('div'))[0]);
          const nextGridClasses = rigthBottomCorner.slice(targetIndex + 1);

          nextGridClasses.forEach(className => {
            const gridsToAppend = $('.grid.' + className);
            if (gridsToAppend.length && selectedApps.length > 0) {
              gridsToAppend.each(function () {
                if ($(this).find('.app').length === 0) {
                  $(this).append(selectedApps.eq(0));
                  selectedApps.splice(0, 1);
                }
              });
            }
          });
        }
          
          if (nextGrid1.find('.app').length > 0) {
            return; 
          }
          if (nextGrid1.length) {
            nextGrid1.append(selectedApps.eq(index));
          }
          
        }); 

        multipleSelection = [];
      } else if (selectedApps.length == 0) {
        if ($(e.target).hasClass('grid') && beingDragged) {
            const targetGrid = $(e.target);
            // Check if the being dragged element is not the same as the target element
            if (beingDragged !== e.target) {
              targetGrid.append(beingDragged);
              beingDragged = null; // Reset beingDragged
            }
        } 
      }
    }
  }
  $('.selection-rectangle').hide();
  e.preventDefault();
}

//==============================

function dragOver(e) {
  if (beingDragged) {
    e.preventDefault();
  }
  else {
    return
  }
}

$(document).on('mousedown', function (e) {
  if (!$(e.target).closest('.app').length && !$(e.target).hasClass('selection-rectangle')) {
    // Clear the selection
    $('.app.selected').removeClass('selected');
    multipleSelection = [];
    appPosition = [];
    positionDifference = [];
  }
});




function getGridClass($element) { 
    var classes = $element.attr("class").split(" ");
    for (var i = 0; i < classes.length; i++) {
      var className = classes[i];
      if (/^div\d+$/.test(className)) {
        return parseInt(className.replace("div", ""), 10);
      }
    }
    return null;
}
