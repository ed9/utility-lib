(function(){
function c(a,b,d,e){var f=[];b=(1*a).toFixed(b?b:0).toString().split(".");for(a=b[0].length;0<a;a-=3)f.unshift(b[0].substring(Math.max(0,a-3),a));b[0]=f.join(void 0!==e?e:",");return b.join(void 0!==d?d:".")};function g(a){var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);if(!b)throw Error('Hex "'+a+'" cannot be converted to rgb.');return{r:b[1],g:b[2],b:b[3]}};window.JSUtils={Numbers:{Formatting:{Generic:c,Money:function(a){return c(a,2,".",",")}}},Colours:{Convert:{HexToRgb:function(a){a=g(a);return"rgb("+parseInt(a[1],16)+","+parseInt(a[2],16)+","+parseInt(a[3],16)+")"},HexToRgbAlpha:function(a,b){if(0>b||1<b)throw Error("RGBA Error - The alpha property must be between 0.00 and 1.00. For example 0.50 is equal to 50%.");a=g(a);return"rgba("+parseInt(a[1],16)+","+parseInt(a[2],16)+","+parseInt(a[3],16)+", "+c(b.toString(),2,".","")+")"}}}};
}).call(this)
