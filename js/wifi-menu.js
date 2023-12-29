const mainMenu = $(".quick-menu-row"),
wifiMenu = $(".wifi-menu-row"), 
showMore = $(".wifi-more, #show-more-wifi"),
backButton = $(".back-button, #back-img"),
wifiSwitcher = $("#wifi-check"),
wifiList = $(".wifi-list"),
listUnit = $(".list-unit"), 
wifiListActions = $("wifi-list-connect-info"),
wifiButton = $(".wifi-button, .wifi-img"),
wifiBlock = $(".wifi-block"), 
bluetoothMenu = $(".bluetooth-menu-row"),
bluetoothShowMore = $(".bluetooth-more, .blue-more-but"),
bluetoothBackButton = $(".back-button-bluetooth, #back-img-bluetooth"),
bluetoothSwitcher = $("#bluetooth-check"),
bluetoothConnected = $(".connected-bluetooth-devices"),
bluetoothNew = $(".new-bluetooth-devices"),
bluetoothButton = $(".bluetooth-button, #blue-button"),
bluetoothBlock = $(".bluetooth-block"),
airplaneModeBlock = $(".airplane-block"),
accessabilityBlock = $(".accessability-block"),
nightlightBlock = $(".night-light-block");


showMore.on("click", () => {
    mainMenu.addClass("slide-left");
    setTimeout(function() {
        mainMenu.css("display", "none");
        wifiMenu.css("display", "flex");
    }, 200);

    if (wifiMenu.hasClass("slide-right")) {
        wifiMenu.removeClass("slide-right");
    }
});
backButton.on("click", () => {
    wifiMenu.addClass("slide-right");
    setTimeout(function() {
        wifiMenu.css("display", "none");
        mainMenu.css("display", "flex");
    }, 200);

    if (mainMenu.hasClass("slide-left")) {
        mainMenu.removeClass("slide-left");
    }
});

wifiSwitcher.on("click", function() {
    if (wifiSwitcher.is(":checked")) {
        setTimeout(function() {
            wifiList.css("display", "flex");
        }, 300);
        wifiBlock.removeClass("menu-block-off");
        wifiBlock.addClass("menu-block");
    } else {
        setTimeout(function() {
            wifiList.css("display", "none");
        }, 300);    
        wifiBlock.removeClass("menu-block");
        wifiBlock.addClass("menu-block-off");
    }
})

listUnit.on("click", function() {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
        $(this).addClass("unselected");
    } else {
        listUnit.removeClass("selected").addClass("unselected");
        
        $(this).removeClass("unselected");
        $(this).addClass("selected");
    }
});

wifiButton.on("click", function(e) {
    e.stopPropagation();
    if (wifiBlock.hasClass("menu-block")) {
        wifiBlock.removeClass("menu-block");
        wifiBlock.addClass("menu-block-off");
        wifiSwitcher.prop("checked", false);
        wifiList.css("display", "none");
    } else if (wifiBlock.hasClass("menu-block-off")) {
        wifiBlock.removeClass("menu-block-off");
        wifiBlock.addClass("menu-block");
        wifiSwitcher.prop("checked", true);
        wifiList.css("display", "flex");
    }
})

bluetoothShowMore.on("click", () => {
    mainMenu.addClass("slide-left");
    setTimeout(function() {
        mainMenu.css("display", "none");
        bluetoothMenu.css("display", "flex");
    }, 200);

    if (bluetoothMenu.hasClass("slide-right")) {
        bluetoothMenu.removeClass("slide-right");
    }
});

bluetoothBackButton.on("click", () => {
    bluetoothMenu.addClass("slide-right");
    setTimeout(function() {
        bluetoothMenu.css("display", "none");
        mainMenu.css("display", "flex");
    }, 200);

    if (mainMenu.hasClass("slide-left")) {
        mainMenu.removeClass("slide-left");
    }
});

bluetoothSwitcher.on("click", function() {
    if (bluetoothSwitcher.is(":checked")) {
        setTimeout(function() {
            bluetoothConnected.css("display", "flex");
            bluetoothNew.css("display", "flex");
        }, 300);
        bluetoothBlock.removeClass("menu-block-off");
        bluetoothBlock.addClass("menu-block");
    } else {
        setTimeout(function() {
            bluetoothConnected.css("display", "none");
            bluetoothNew.css("display", "none");
        }, 300);    
        bluetoothBlock.removeClass("menu-block");
        bluetoothBlock.addClass("menu-block-off");
    }
})

bluetoothButton.on("click", function(e) {
    e.stopPropagation();
    if (bluetoothBlock.hasClass("menu-block")) {
        bluetoothBlock.removeClass("menu-block");
        bluetoothBlock.addClass("menu-block-off");
        bluetoothSwitcher.prop("checked", false);
        bluetoothConnected.css("display", "none");
        bluetoothNew.css("display", "none");
    } else if (bluetoothBlock.hasClass("menu-block-off")) {
        bluetoothBlock.removeClass("menu-block-off");
        bluetoothBlock.addClass("menu-block");
        bluetoothSwitcher.prop("checked", true);
        bluetoothConnected.css("display", "flex");
        bluetoothNew.css("display", "flex");
    }
})
airplaneModeBlock.on("click", function(e) {
    e.stopPropagation();
    if(airplaneModeBlock.hasClass("menu-block")) {
        airplaneModeBlock.removeClass("menu-block");
        airplaneModeBlock.addClass("menu-block-off");
    } else if(airplaneModeBlock.hasClass("menu-block-off")) {{
        airplaneModeBlock.removeClass("menu-block-off");
        airplaneModeBlock.addClass("menu-block");
    }}
})
nightlightBlock.on("click", function(e) {
    e.stopPropagation();
    if(nightlightBlock.hasClass("menu-block")) {
        nightlightBlock.removeClass("menu-block");
        nightlightBlock.addClass("menu-block-off");
    } else if(nightlightBlock.hasClass("menu-block-off")) {{
        nightlightBlock.removeClass("menu-block-off");
        nightlightBlock.addClass("menu-block");
    }}
})
accessabilityBlock.on("click", function(e) {
    e.stopPropagation();
    if(accessabilityBlock.hasClass("menu-block")) {
        accessabilityBlock.removeClass("menu-block");
        accessabilityBlock.addClass("menu-block-off");
    } else if(accessabilityBlock.hasClass("menu-block-off")) {{
        accessabilityBlock.removeClass("menu-block-off");
        accessabilityBlock.addClass("menu-block");
    }}
})