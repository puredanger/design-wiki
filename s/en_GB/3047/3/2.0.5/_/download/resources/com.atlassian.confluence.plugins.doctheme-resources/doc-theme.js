var engineWebKit="webkit";
var deviceAndroid="android";
var deviceIphone="iphone";
var deviceIpod="ipod";
var deviceIpad="ipad";
var deviceBBStorm="blackberry95";
var devicePalm="palm";
var deviceWebOS="webos";
var engineOpera="opera";
var engineNetfront="netfront";
var engineUpBrowser="up.browser";
var engineOpenWeb="openweb";
var deviceMidp="midp";
var uplink="up.link";
var engineTelecaQ="teleca q";
var devicePda="pda";
var mini="mini";
var mobile="mobile";
var mobi="mobi";
var uagent=navigator.userAgent.toLowerCase();
function DetectIphone(){if(uagent.search(deviceIphone)>-1){if(uagent.search(deviceIpod)>-1){return false
}else{return true
}}else{return false
}}function DetectIpod(){if(uagent.search(deviceIpod)>-1){return true
}else{return false
}}function DetectIpad(){if(uagent.search(deviceIpad)>-1&&DetectWebkit()){return true
}else{return false
}}function DetectAndroid(){if(uagent.search(deviceAndroid)>-1){return true
}else{return false
}}function DetectWebkit(){if(uagent.search(engineWebKit)>-1){return true
}else{return false
}}function DetectBlackBerryTouch(){if(uagent.search(deviceBBStorm)>-1){return true
}else{return false
}}function DetectPalmWebOS(){if(uagent.search(deviceWebOS)>-1){return true
}else{return false
}}function DetectMobile(){if(DetectIphone()||DetectIpod()||DetectIpad()||DetectAndroid()||DetectBlackBerryTouch()||DetectPalmWebOS()){return true
}else{return false
}}if(DetectMobile()){AJS.$("#splitter-sidebar").hide()
}else{var splitterOptions={type:"v",outline:false,minLeft:0,sizeLeft:300,maxLeft:500,anchorToWindow:true,accessKey:"L",cookie:"doc-sidebar",cookiePath:"/"};
var splitterDiv=AJS.$("#splitter"),splitterButton=AJS.$("#splitter-button"),splitterSidebar=AJS.$("#splitter-sidebar");
splitterDiv.splitter(splitterOptions);
splitterButton.removeClass("hidden").click(function(){if(splitterSidebar.width()>0){splitterDiv.trigger("resize",[0]);
AJS.$(this).addClass("collapsed")
}else{splitterDiv.trigger("resize",[300]);
AJS.$(this).removeClass("collapsed")
}}).hover(function(){AJS.$(this).parent().addClass("opened")
},function(){AJS.$(this).parent().removeClass("opened")
});
if(splitterSidebar.width()==0){splitterButton.addClass("collapsed")
}AJS.toInit(function(){AJS.$("html").addClass("splitter-invoked");
AJS.$("body").addClass("splitter-invoked");
splitterOptions.update();
AJS.$(window).bind("resize",function(){splitterDiv.trigger("resize")
})
})
};