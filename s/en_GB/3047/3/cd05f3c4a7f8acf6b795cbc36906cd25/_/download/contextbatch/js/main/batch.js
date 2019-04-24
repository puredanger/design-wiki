jQuery.cookie=function(B,I,L){if(typeof I!="undefined"){L=L||{};
if(I===null){I="";
L.expires=-1
}var E="";
if(L.expires&&(typeof L.expires=="number"||L.expires.toUTCString)){var F;
if(typeof L.expires=="number"){F=new Date();
F.setTime(F.getTime()+(L.expires*24*60*60*1000))
}else{F=L.expires
}E="; expires="+F.toUTCString()
}var K=L.path?"; path="+L.path:"";
var G=L.domain?"; domain="+L.domain:"";
var A=L.secure?"; secure":"";
document.cookie=[B,"=",encodeURIComponent(I),E,K,G,A].join("")
}else{var D=null;
if(document.cookie&&document.cookie!=""){var J=document.cookie.split(";");
for(var H=0;
H<J.length;
H++){var C=jQuery.trim(J[H]);
if(C.substring(0,B.length+1)==(B+"=")){D=decodeURIComponent(C.substring(B.length+1));
break
}}}return D
}};
(function(A){A.fn.splitter=function(B){B=B||{};
return this.each(function(){var O;
function J(T){if(C.outline){O=O||N.clone(false).insertAfter(G)
}P.css("-webkit-user-select","none");
N.addClass(C.activeClass);
G._posSplit=G[0][C.pxSplit]-T[C.eventPos];
A(document).bind("mousemove",L).bind("mouseup",R)
}function L(T){var U=G._posSplit+T[C.eventPos];
if(C.outline){U=Math.max(0,Math.min(U,D._DA-N._DA));
N.css(C.origin,U)
}else{M(U)
}}function R(T){N.removeClass(C.activeClass);
var U=G._posSplit+T[C.eventPos];
if(C.outline){O.remove();
O=null;
M(U)
}P.css("-webkit-user-select","text");
A(document).unbind("mousemove",L).unbind("mouseup",R)
}function M(T){T=Math.max(G._min,D._DA-F._max,Math.min(T,G._max,D._DA-N._DA-F._min));
N._DA=N[0][C.pxSplit];
N.css(C.origin,T).css(C.fixed,D._DF);
G.css(C.origin,0).css(C.split,T).css(C.fixed,D._DF);
F.css(C.origin,T+N._DA).css(C.split,D._DA-N._DA-T).css(C.fixed,D._DF);
if(!A.browser.msie){P.trigger("resize")
}}function Q(W,V){var U=0;
for(var T=1;
T<arguments.length;
T++){U+=Math.max(parseInt(W.css(arguments[T]))||0,0)
}return U
}var K=(B.splitHorizontal?"h":B.splitVertical?"v":B.type)||"v";
var C=A.extend({activeClass:"active",pxPerKey:8,tabIndex:0,accessKey:""},{v:{keyLeft:39,keyRight:37,cursor:"e-resize",splitbarClass:"vsplitbar",outlineClass:"voutline",type:"v",eventPos:"pageX",origin:"left",split:"width",pxSplit:"offsetWidth",side1:"Left",side2:"Right",fixed:"height",pxFixed:"offsetHeight",side3:"Top",side4:"Bottom"},h:{keyTop:40,keyBottom:38,cursor:"n-resize",splitbarClass:"hsplitbar",outlineClass:"houtline",type:"h",eventPos:"pageY",origin:"top",split:"height",pxSplit:"offsetHeight",side1:"Top",side2:"Bottom",fixed:"width",pxFixed:"offsetWidth",side3:"Left",side4:"Right"}}[K],B);
var D=A(this).css({position:"relative"});
var P=A(">*",D[0]).css({position:"absolute","z-index":"0","-moz-outline-style":"none"});
var G=A(P[0]);
var F=A(P[1]);
var E=A('<a href="javascript:void(0)"></a>').attr({accessKey:C.accessKey,tabIndex:C.tabIndex,title:C.splitbarClass}).bind(A.browser.opera?"click":"focus",function(){this.focus();
N.addClass(C.activeClass)
}).bind("keydown",function(V){var U=V.which||V.keyCode;
var T=U==C["key"+C.side1]?1:U==C["key"+C.side2]?-1:0;
if(T){M(G[0][C.pxSplit]+T*C.pxPerKey,false)
}}).bind("blur",function(){N.removeClass(C.activeClass)
});
var N=A(P[2]||"<div></div>").insertAfter(G).css("z-index","10").append(E).attr({"class":C.splitbarClass,unselectable:"on"}).css({position:"absolute","user-select":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none"}).bind("mousedown",J);
if(/^(auto|default|)$/.test(N.css("cursor"))){N.css("cursor",C.cursor)
}N._DA=N[0][C.pxSplit];
D._PBF=A.boxModel?Q(D,"border"+C.side3+"Width","border"+C.side4+"Width"):0;
D._PBA=A.boxModel?Q(D,"border"+C.side1+"Width","border"+C.side2+"Width"):0;
G._pane=C.side1;
F._pane=C.side2;
A.each([G,F],function(){this._min=C["min"+this._pane]||Q(this,"min-"+C.split);
this._max=C["max"+this._pane]||Q(this,"max-"+C.split)||9999;
this._init=C["size"+this._pane]===true?parseInt(A.curCSS(this[0],C.split)):C["size"+this._pane]
});
var S=G._init;
if(!isNaN(F._init)){S=D[0][C.pxSplit]-D._PBA-F._init-N._DA
}if(C.cookie){if(!A.cookie){alert("jQuery.splitter(): jQuery cookie plugin required")
}var I=parseInt(A.cookie(C.cookie));
if(!isNaN(I)){S=I
}A(window).bind("unload",function(){var T=String(N.css(C.origin));
A.cookie(C.cookie,T,{expires:C.cookieExpires||365,path:C.cookiePath||document.location.pathname})
})
}if(isNaN(S)){S=Math.round((D[0][C.pxSplit]-D._PBA-N._DA)/2)
}var H=function(){var U=D.offset().top;
var V=A("#footer").height();
if(!V){V=24
}var T=A(window).height()-V;
D.css("height",Math.max(T-U-D._hadjust,D._hmin)+"px");
if(!A.browser.msie){D.trigger("resize")
}};
B.update=function(T){D._hadjust=Q(D,"borderTopWidth","borderBottomWidth","marginBottom");
D._hmin=Math.max(Q(D,"minHeight"),20);
T&&A(window).bind("resize",H);
H()
};
if(C.anchorToWindow){B.update(true)
}else{if(C.resizeToWidth&&!A.browser.msie){A(window).bind("resize",function(){D.trigger("resize")
})
}}D.bind("resize",function(U,T){if(U.target!=this){return 
}D._DF=D[0][C.pxFixed]-D._PBF;
D._DA=D[0][C.pxSplit]-D._PBA;
if(D._DF<=0||D._DA<=0){return 
}M(!isNaN(T)?T:(!(C.sizeRight||C.sizeBottom)?G[0][C.pxSplit]:D._DA-F[0][C.pxSplit]-N._DA))
}).trigger("resize",[S])
})
}
})(jQuery);
window.placeFocus=function(){var A=document.getElementById("splitter-content");
if(A&&AJS.$("#wysiwyg").length==0){A.focus()
}};
AJS.toInit(function(D){if(D("#com-atlassian-confluence").hasClass("theme-documentation")){var C=D("#quick-search-query");
var A=C.closest("form");
var B=D("fieldset input[name='spaceSearch']",A).val()==="true"?D("#confluence-space-key").attr("content"):"";
A.submit(function(){var E=C.val();
if(E.search(/all:/gi)>=0){C.val(D.trim(E.replace(/all:/gi,"")))
}});
AJS.log("Applying doc-theme quick search");
Confluence.QuickNav.setDropDownPostProcess(function(F){if(B){var E=D("a.search-for",F);
E.attr("href",E.attr("href")+"&where="+encodeURIComponent(B))
}});
Confluence.QuickNav.setMakeParams(function(E){var F={query:E};
if(F.query.search(/all:/gi)>=0){D("input[name='where']",A).val("");
F.query=D.trim(F.query.replace(/all:/gi,""));
if(!F.query){F.query="ALL"
}}else{if(B){F.spaceKey=B
}}return F
});
C.mouseover(function(){if(B){C.attr("title",D("input[name='tooltip']",A).val())
}})
}});
AJS.toInit(function(A){Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat.push({action:"@",context:"autoformat.autocomplete",description:"Mention"})
});
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"Insert JIRA issue"+":",keys:[["Ctrl+Shift+J"]]})
};
