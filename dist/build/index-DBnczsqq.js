import{cl as v,cm as b,iM as O,iN as ee,iO as te}from"./strapi-B1OJIt6i.js";import{a as o}from"./index-BRVyLNfZ.js";function ne(r,t){v(2,arguments);var e=b(r).getTime(),n=O(t);return new Date(e+n)}var ae={};function N(){return ae}function re(r){return v(1,arguments),r instanceof Date||ee(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function ie(r){if(v(1,arguments),!re(r)&&typeof r!="number")return!1;var t=b(r);return!isNaN(Number(t))}function ue(r,t){v(2,arguments);var e=O(t);return ne(r,-e)}var oe=864e5;function de(r){v(1,arguments);var t=b(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),a=e-n;return Math.floor(a/oe)+1}function Y(r){v(1,arguments);var t=1,e=b(r),n=e.getUTCDay(),a=(n<t?7:0)+n-t;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function A(r){v(1,arguments);var t=b(r),e=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(e+1,0,4),n.setUTCHours(0,0,0,0);var a=Y(n),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var u=Y(i);return t.getTime()>=a.getTime()?e+1:t.getTime()>=u.getTime()?e:e-1}function se(r){v(1,arguments);var t=A(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var n=Y(e);return n}var fe=6048e5;function le(r){v(1,arguments);var t=b(r),e=Y(t).getTime()-se(t).getTime();return Math.round(e/fe)+1}function E(r,t){var e,n,a,i,u,d,f,s;v(1,arguments);var c=N(),l=O((e=(n=(a=(i=t?.weekStartsOn)!==null&&i!==void 0?i:t==null||(u=t.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&a!==void 0?a:c.weekStartsOn)!==null&&n!==void 0?n:(f=c.locale)===null||f===void 0||(s=f.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&e!==void 0?e:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=b(r),m=h.getUTCDay(),w=(m<l?7:0)+m-l;return h.setUTCDate(h.getUTCDate()-w),h.setUTCHours(0,0,0,0),h}function B(r,t){var e,n,a,i,u,d,f,s;v(1,arguments);var c=b(r),l=c.getUTCFullYear(),h=N(),m=O((e=(n=(a=(i=t?.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(u=t.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:h.firstWeekContainsDate)!==null&&n!==void 0?n:(f=h.locale)===null||f===void 0||(s=f.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(l+1,0,m),w.setUTCHours(0,0,0,0);var D=E(w,t),C=new Date(0);C.setUTCFullYear(l,0,m),C.setUTCHours(0,0,0,0);var P=E(C,t);return c.getTime()>=D.getTime()?l+1:c.getTime()>=P.getTime()?l:l-1}function ce(r,t){var e,n,a,i,u,d,f,s;v(1,arguments);var c=N(),l=O((e=(n=(a=(i=t?.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(u=t.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:c.firstWeekContainsDate)!==null&&n!==void 0?n:(f=c.locale)===null||f===void 0||(s=f.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&e!==void 0?e:1),h=B(r,t),m=new Date(0);m.setUTCFullYear(h,0,l),m.setUTCHours(0,0,0,0);var w=E(m,t);return w}var me=6048e5;function he(r,t){v(1,arguments);var e=b(r),n=E(e,t).getTime()-ce(e,t).getTime();return Math.round(n/me)+1}var T={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return o(e==="yy"?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return e==="M"?String(n+1):o(n+1,2)},d:function(t,e){return o(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(t,e){return o(t.getUTCHours()%12||12,e.length)},H:function(t,e){return o(t.getUTCHours(),e.length)},m:function(t,e){return o(t.getUTCMinutes(),e.length)},s:function(t,e){return o(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds(),i=Math.floor(a*Math.pow(10,n-3));return o(i,e.length)}},M={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ve={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){var a=t.getUTCFullYear(),i=a>0?a:1-a;return n.ordinalNumber(i,{unit:"year"})}return T.y(t,e)},Y:function(t,e,n,a){var i=B(t,a),u=i>0?i:1-i;if(e==="YY"){var d=u%100;return o(d,2)}return e==="Yo"?n.ordinalNumber(u,{unit:"year"}):o(u,e.length)},R:function(t,e){var n=A(t);return o(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return o(n,e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return o(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return o(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return T.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return o(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var i=he(t,a);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):o(i,e.length)},I:function(t,e,n){var a=le(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):o(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):T.d(t,e)},D:function(t,e,n){var a=de(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):o(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var i=t.getUTCDay(),u=(i-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(u);case"ee":return o(u,2);case"eo":return n.ordinalNumber(u,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var i=t.getUTCDay(),u=(i-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(u);case"cc":return o(u,e.length);case"co":return n.ordinalNumber(u,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),i=a===0?7:a;switch(e){case"i":return String(i);case"ii":return o(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours(),i=a/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a=t.getUTCHours(),i;switch(a===12?i=M.noon:a===0?i=M.midnight:i=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a=t.getUTCHours(),i;switch(a>=17?i=M.evening:a>=12?i=M.afternoon:a>=4?i=M.morning:i=M.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return T.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):T.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):o(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):o(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):T.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):T.s(t,e)},S:function(t,e){return T.S(t,e)},X:function(t,e,n,a){var i=a._originalDate||t,u=i.getTimezoneOffset();if(u===0)return"Z";switch(e){case"X":return X(u);case"XXXX":case"XX":return p(u);case"XXXXX":case"XXX":default:return p(u,":")}},x:function(t,e,n,a){var i=a._originalDate||t,u=i.getTimezoneOffset();switch(e){case"x":return X(u);case"xxxx":case"xx":return p(u);case"xxxxx":case"xxx":default:return p(u,":")}},O:function(t,e,n,a){var i=a._originalDate||t,u=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q(u,":");case"OOOO":default:return"GMT"+p(u,":")}},z:function(t,e,n,a){var i=a._originalDate||t,u=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q(u,":");case"zzzz":default:return"GMT"+p(u,":")}},t:function(t,e,n,a){var i=a._originalDate||t,u=Math.floor(i.getTime()/1e3);return o(u,e.length)},T:function(t,e,n,a){var i=a._originalDate||t,u=i.getTime();return o(u,e.length)}};function Q(r,t){var e=r>0?"-":"+",n=Math.abs(r),a=Math.floor(n/60),i=n%60;if(i===0)return e+String(a);var u=t;return e+String(a)+u+o(i,2)}function X(r,t){if(r%60===0){var e=r>0?"-":"+";return e+o(Math.abs(r)/60,2)}return p(r,t)}function p(r,t){var e=t||"",n=r>0?"-":"+",a=Math.abs(r),i=o(Math.floor(a/60),2),u=o(a%60,2);return n+i+e+u}var G=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},j=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},ge=function(t,e){var n=t.match(/(P+)(p+)?/)||[],a=n[1],i=n[2];if(!i)return G(t,e);var u;switch(a){case"P":u=e.dateTime({width:"short"});break;case"PP":u=e.dateTime({width:"medium"});break;case"PPP":u=e.dateTime({width:"long"});break;case"PPPP":default:u=e.dateTime({width:"full"});break}return u.replace("{{date}}",G(a,e)).replace("{{time}}",j(i,e))},we={p:j,P:ge},be=["D","DD"],ye=["YY","YYYY"];function Te(r){return be.indexOf(r)!==-1}function Ce(r){return ye.indexOf(r)!==-1}function I(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var pe={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Oe=function(t,e,n){var a,i=pe[t];return typeof i=="string"?a=i:e===1?a=i.one:a=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function R(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,n=r.formats[e]||r.formats[r.defaultWidth];return n}}var Me={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},De={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Pe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ke={date:R({formats:Me,defaultWidth:"full"}),time:R({formats:De,defaultWidth:"full"}),dateTime:R({formats:Pe,defaultWidth:"full"})},We={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},xe=function(t,e,n,a){return We[t]};function x(r){return function(t,e){var n=e!=null&&e.context?String(e.context):"standalone",a;if(n==="formatting"&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,u=e!=null&&e.width?String(e.width):i;a=r.formattingValues[u]||r.formattingValues[i]}else{var d=r.defaultWidth,f=e!=null&&e.width?String(e.width):r.defaultWidth;a=r.values[f]||r.values[d]}var s=r.argumentCallback?r.argumentCallback(t):t;return a[s]}}var Se={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ue={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},_e={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ye={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ee={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ne={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},qe=function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Fe={ordinalNumber:qe,era:x({values:Se,defaultWidth:"wide"}),quarter:x({values:Ue,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:x({values:_e,defaultWidth:"wide"}),day:x({values:Ye,defaultWidth:"wide"}),dayPeriod:x({values:Ee,defaultWidth:"wide",formattingValues:Ne,defaultFormattingWidth:"wide"})};function S(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.width,a=n&&r.matchPatterns[n]||r.matchPatterns[r.defaultMatchWidth],i=t.match(a);if(!i)return null;var u=i[0],d=n&&r.parsePatterns[n]||r.parsePatterns[r.defaultParseWidth],f=Array.isArray(d)?Le(d,function(l){return l.test(u)}):$e(d,function(l){return l.test(u)}),s;s=r.valueCallback?r.valueCallback(f):f,s=e.valueCallback?e.valueCallback(s):s;var c=t.slice(u.length);return{value:s,rest:c}}}function $e(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function Le(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function He(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(r.matchPattern);if(!n)return null;var a=n[0],i=t.match(r.parsePattern);if(!i)return null;var u=r.valueCallback?r.valueCallback(i[0]):i[0];u=e.valueCallback?e.valueCallback(u):u;var d=t.slice(a.length);return{value:u,rest:d}}}var Re=/^(\d+)(th|st|nd|rd)?/i,Qe=/\d+/i,Xe={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ge={any:[/^b/i,/^(a|c)/i]},Ie={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ae={any:[/1/i,/2/i,/3/i,/4/i]},Be={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},je={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ve={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Je={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ke={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ze={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ze={ordinalNumber:He({matchPattern:Re,parsePattern:Qe,valueCallback:function(t){return parseInt(t,10)}}),era:S({matchPatterns:Xe,defaultMatchWidth:"wide",parsePatterns:Ge,defaultParseWidth:"any"}),quarter:S({matchPatterns:Ie,defaultMatchWidth:"wide",parsePatterns:Ae,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:S({matchPatterns:Be,defaultMatchWidth:"wide",parsePatterns:je,defaultParseWidth:"any"}),day:S({matchPatterns:Ve,defaultMatchWidth:"wide",parsePatterns:Je,defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:Ke,defaultMatchWidth:"any",parsePatterns:ze,defaultParseWidth:"any"})},et={code:"en-US",formatDistance:Oe,formatLong:ke,formatRelative:xe,localize:Fe,match:Ze,options:{weekStartsOn:0,firstWeekContainsDate:1}},tt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,at=/^'([^]*?)'?$/,rt=/''/g,it=/[a-zA-Z]/;function st(r,t,e){var n,a,i,u,d,f,s,c,l,h,m,w,D,C,P,q,F,$;v(2,arguments);var V=String(t),k=N(),W=(n=(a=e?.locale)!==null&&a!==void 0?a:k.locale)!==null&&n!==void 0?n:et,L=O((i=(u=(d=(f=e?.firstWeekContainsDate)!==null&&f!==void 0?f:e==null||(s=e.locale)===null||s===void 0||(c=s.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&d!==void 0?d:k.firstWeekContainsDate)!==null&&u!==void 0?u:(l=k.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var H=O((m=(w=(D=(C=e?.weekStartsOn)!==null&&C!==void 0?C:e==null||(P=e.locale)===null||P===void 0||(q=P.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&D!==void 0?D:k.weekStartsOn)!==null&&w!==void 0?w:(F=k.locale)===null||F===void 0||($=F.options)===null||$===void 0?void 0:$.weekStartsOn)!==null&&m!==void 0?m:0);if(!(H>=0&&H<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!W.localize)throw new RangeError("locale must contain localize property");if(!W.formatLong)throw new RangeError("locale must contain formatLong property");var U=b(r);if(!ie(U))throw new RangeError("Invalid time value");var J=te(U),K=ue(U,J),z={firstWeekContainsDate:L,weekStartsOn:H,locale:W,_originalDate:U},Z=V.match(nt).map(function(g){var y=g[0];if(y==="p"||y==="P"){var _=we[y];return _(g,W.formatLong)}return g}).join("").match(tt).map(function(g){if(g==="''")return"'";var y=g[0];if(y==="'")return ut(g);var _=ve[y];if(_)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Ce(g)&&I(g,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Te(g)&&I(g,t,String(r)),_(K,g,W.localize,z);if(y.match(it))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return g}).join("");return Z}function ut(r){var t=r.match(at);return t?t[1].replace(rt,"'"):r}export{x as a,R as b,He as c,S as d,Oe as e,st as f,xe as g,et as h,Fe as l,Ze as m,E as s};
