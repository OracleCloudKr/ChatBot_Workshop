webpackJsonp([6,38,39,40,41,42],{858:function(e,t,o){"use strict";function a(e,t,o){o=o||{};var a;return a="string"==typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),o.addSuffix?o.comparison>0?a+"內":a+"前":a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var n={lessThanXSeconds:{one:"少於 1 秒",other:"少於 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分鐘",lessThanXMinutes:{one:"少於 1 分鐘",other:"少於 {{count}} 分鐘"},xMinutes:{one:"1 分鐘",other:"{{count}} 分鐘"},xHours:{one:"1 小時",other:"{{count}} 小時"},aboutXHours:{one:"大約 1 小時",other:"大約 {{count}} 小時"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXMonths:{one:"大約 1 個月",other:"大約 {{count}} 個月"},xMonths:{one:"1 個月",other:"{{count}} 個月"},aboutXYears:{one:"大約 1 年",other:"大約 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超過 1 年",other:"超過 {{count}} 年"},almostXYears:{one:"將近 1 年",other:"將近 {{count}} 年"}};e.exports=t.default},859:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(189),n=function(e){return e&&e.__esModule?e:{default:e}}(a),u=(0,n.default)({LT:"h:mm aa",LTS:"h:mm:ss aa",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm aa",LLLL:"dddd, MMMM D YYYY h:mm aa"});t.default=u,e.exports=t.default},860:function(e,t,o){"use strict";function a(e,t,o,a){return n[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var n={lastWeek:"[last] dddd [at] LT",yesterday:"[yesterday at] LT",today:"[today at] LT",tomorrow:"[tomorrow at] LT",nextWeek:"dddd [at] LT",other:"L"};e.exports=t.default},861:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=Number(e);return String(t)}Object.defineProperty(t,"__esModule",{value:!0});var u=o(191),r=a(u),d=o(190),s=a(d),l={narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},i={short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},f={uppercase:["AM","PM"],lowercase:["am","pm"],long:["上午","下午"]},c={ordinalNumber:n,weekday:(0,r.default)(l,"long"),weekdays:(0,s.default)(l,"long"),month:(0,r.default)(i,"long"),months:(0,s.default)(i,"long"),timeOfDay:(0,r.default)(f,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,s.default)(f,"long")};t.default=c,e.exports=t.default},862:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(192),u=a(n),r=o(194),d=a(r),s=o(193),l=a(s),i=o(195),f=a(i),c=/^(\d+)(th|st|nd|rd)?/i,m={narrow:/^(su|mo|tu|we|th|fr|sa)/i,short:/^(sun|mon|tue|wed|thu|fri|sat)/i,long:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},y={any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},h={short:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,long:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},M={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},p={short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},b={any:[/^a/i,/^p/i]},g={ordinalNumbers:(0,l.default)(c),ordinalNumber:f.default,weekdays:(0,u.default)(m,"long"),weekday:(0,d.default)(y,"any"),months:(0,u.default)(h,"long"),month:(0,d.default)(M,"any"),timesOfDay:(0,u.default)(p,"long"),timeOfDay:(0,d.default)(b,"any")};t.default=g,e.exports=t.default},898:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(858),u=a(n),r=o(859),d=a(r),s=o(860),l=a(s),i=o(861),f=a(i),c=o(862),m=a(c),y={formatDistance:u.default,formatLong:d.default,formatRelative:l.default,localize:f.default,match:m.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=y,e.exports=t.default}});
//# sourceMappingURL=edcf8f50d8b97c92eae5.js.map