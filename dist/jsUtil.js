(function(){
function f(a,b,c,d){var e=[];b=(1*a).toFixed(b?b:0).toString().split(".");for(a=b[0].length;0<a;a-=3)e.unshift(b[0].substring(Math.max(0,a-3),a));b[0]=e.join(void 0!==d?d:",");return b.join(void 0!==c?c:".")};function g(a){var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);if(!b)throw Error('Hex "'+a+'" cannot be converted to rgb.');return{r:b[1],g:b[2],b:b[3]}};window.JSUtils={Strings:{Links:{ExtractHostnameFromUrl:function(a){var b=document.createElement("a");b.href=a;return b.hostname}}},Numbers:{Formatting:{Generic:f,Money:function(a){return f(a,2,".",",")}}},Colours:{Convert:{HexToRgb:function(a){a=g(a);return"rgb("+parseInt(a.r,16)+","+parseInt(a.g,16)+","+parseInt(a.b,16)+")"},HexToRgbAlpha:function(a,b){if(0>b||1<b)throw Error("RGBA Error - The alpha property must be between 0.00 and 1.00. For example 0.50 is equal to 50%.");a=g(a);return"rgba("+
parseInt(a.r,16)+","+parseInt(a.g,16)+","+parseInt(a.b,16)+", "+f(b.toString(),2,".","")+")"},AdjustBrightness:function(a,b){var c=parseInt(a.slice(1),16);a=0>b?0:255;b=0>b?-1*b:b;var d=c>>16,e=c>>8&255;c&=255;return"#"+(16777216+65536*(Math.round((a-d)*b)+d)+256*(Math.round((a-e)*b)+e)+(Math.round((a-c)*b)+c)).toString(16).slice(1)},IdentifyLuminance:function(a){a=g(a);return 130<=Math.sqrt(.241*Math.pow(a.r,2)+.691*Math.pow(a.g,2)+.068*Math.pow(a.b,2))?"L":"D"}}}};
}).call(this)
