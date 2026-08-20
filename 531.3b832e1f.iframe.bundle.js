/*! For license information please see 531.3b832e1f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkfamilie_felles_frontend=self.webpackChunkfamilie_felles_frontend||[]).push([[531],{"./node_modules/classnames/index.js"(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/dayjs/dayjs.min.js"(module){module.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")})},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach(function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}()},"./node_modules/dayjs/locale/nb.js"(module,__unused_webpack_exports,__webpack_require__){module.exports=function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),a={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return n.default.locale(a,null,!0),a}(__webpack_require__("./node_modules/dayjs/dayjs.min.js"))},"./node_modules/dayjs/plugin/isSameOrAfter.js"(module){module.exports=function(){"use strict";return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}}}()},"./node_modules/dayjs/plugin/isSameOrBefore.js"(module){module.exports=function(){"use strict";return function(e,i){i.prototype.isSameOrBefore=function(e,i){return this.isSame(e,i)||this.isBefore(e,i)}}}()},"./packages/familie-tidslinje/src/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{D8:()=>Tidslinje});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dayjs_min=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min),isSameOrBefore=__webpack_require__("./node_modules/dayjs/plugin/isSameOrBefore.js"),isSameOrBefore_default=__webpack_require__.n(isSameOrBefore),isSameOrAfter=__webpack_require__("./node_modules/dayjs/plugin/isSameOrAfter.js"),isSameOrAfter_default=__webpack_require__.n(isSameOrAfter);dayjs_min_default().extend(isSameOrBefore_default()),dayjs_min_default().extend(isSameOrAfter_default());const position=(date,start,endInclusive)=>{const diff=endInclusive.diff(start);return date.diff(start)/diff*100},horizontalPositionAndWidth=(start,endInclusive,timelineStart,timelineEndInclusive)=>{const horizontalPosition=position(start,timelineStart,timelineEndInclusive);return{horizontalPosition,width:position(endInclusive,timelineStart,timelineEndInclusive)-horizontalPosition}},usePositionAndSize=({periode,tidslinjestart,tidslinjeslutt,direction})=>{const fom=dayjs_min_default()(periode.fom).startOf("day"),tom=dayjs_min_default()(periode.tom).endOf("day"),{horizontalPosition,width}=horizontalPositionAndWidth(fom,tom,tidslinjestart,tidslinjeslutt),adjustedHorizontalPosition=(min=0,(value=horizontalPosition)>=(max=100)?max:value<min?min:value);var value,min,max;const adjustedWidth=adjustedHorizontalPosition+width>=100?100-adjustedHorizontalPosition:adjustedHorizontalPosition+width!==horizontalPosition+width?width+horizontalPosition:width;return horizontalPosition>=100||adjustedWidth<=0?{[direction]:0,width:0,display:"none"}:horizontalPosition<0?{[direction]:0,width:`${adjustedWidth}%`}:{[direction]:`${adjustedHorizontalPosition}%`,width:`${adjustedWidth}%`,display:horizontalPosition>100?"none":void 0}};var tokens=__webpack_require__("./node_modules/@navikt/ds-tokens/dist/tokens.js");const AktivtUtsnittContainer=styled_components_browser_esm.Ay.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    user-select: none;
    pointer-events: none;
`,AktivPeriode=styled_components_browser_esm.Ay.div`
    position: absolute;
    height: 100%;
    border: none;
    background: none;
    padding: 0;

    &::-moz-focus-inner {
        border: 0;
    }

    &:hover,
    &:focus {
        outline: none;
    }

    &:before {
        content: '';
        position: absolute;
        top: -2px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: ${tokens.VXH};
        box-shadow: 0 0 0 1px ${tokens.VXH};
        left: -1px;
    }

    &:after {
        content: '';
        position: absolute;
        top: -2px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: ${tokens.VXH};
        box-shadow: 0 0 0 1px ${tokens.VXH};
        right: -1px;
    }
`,AktivPeriodeBorder=(0,styled_components_browser_esm.Ay)(AktivPeriode)`
    box-shadow:
        inset 2px 0 0 -1px ${tokens.VXH},
        inset -2px 0 0 -1px ${tokens.VXH};
`,AktivPeriodeBakgrunn=(0,styled_components_browser_esm.Ay)(AktivPeriode)`
    background: ${tokens.uMn};
`,AktivtUtsnittBorder=({aktivtUtsnitt,tidslinjestart,tidslinjeslutt,direction})=>{const style=usePositionAndSize({periode:aktivtUtsnitt,tidslinjestart,tidslinjeslutt,direction});return(0,jsx_runtime.jsx)(AktivtUtsnittContainer,{className:"aktivtUtsnittContainer",children:(0,jsx_runtime.jsx)(AktivPeriodeBorder,{className:classnames_default()("aktivPeriodeBorder"),style})})},AktivtUtsnittBakgrunn=({aktivtUtsnitt,tidslinjestart,tidslinjeslutt,direction})=>{const style=usePositionAndSize({periode:aktivtUtsnitt,tidslinjestart,tidslinjeslutt,direction});return(0,jsx_runtime.jsx)(AktivtUtsnittContainer,{className:"aktivtUtsnittContainer",children:(0,jsx_runtime.jsx)(AktivPeriodeBakgrunn,{className:classnames_default()("aktivPeriodeBakgrunn"),style})})};try{AktivtUtsnittBorder.displayName="AktivtUtsnittBorder",AktivtUtsnittBorder.__docgenInfo={description:"",displayName:"AktivtUtsnittBorder",props:{tidslinjestart:{defaultValue:null,description:"",name:"tidslinjestart",required:!0,type:{name:"Dayjs"}},tidslinjeslutt:{defaultValue:null,description:"",name:"tidslinjeslutt",required:!0,type:{name:"Dayjs"}},aktivtUtsnitt:{defaultValue:null,description:"",name:"aktivtUtsnitt",required:!0,type:{name:"EnkelPeriode"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/AktivtUtsnitt.tsx#AktivtUtsnittBorder"]={docgenInfo:AktivtUtsnittBorder.__docgenInfo,name:"AktivtUtsnittBorder",path:"packages/familie-tidslinje/src/components/tidslinje/AktivtUtsnitt.tsx#AktivtUtsnittBorder"})}catch(__react_docgen_typescript_loader_error){}try{AktivtUtsnittBakgrunn.displayName="AktivtUtsnittBakgrunn",AktivtUtsnittBakgrunn.__docgenInfo={description:"",displayName:"AktivtUtsnittBakgrunn",props:{tidslinjestart:{defaultValue:null,description:"",name:"tidslinjestart",required:!0,type:{name:"Dayjs"}},tidslinjeslutt:{defaultValue:null,description:"",name:"tidslinjeslutt",required:!0,type:{name:"Dayjs"}},aktivtUtsnitt:{defaultValue:null,description:"",name:"aktivtUtsnitt",required:!0,type:{name:"EnkelPeriode"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/AktivtUtsnitt.tsx#AktivtUtsnittBakgrunn"]={docgenInfo:AktivtUtsnittBakgrunn.__docgenInfo,name:"AktivtUtsnittBakgrunn",path:"packages/familie-tidslinje/src/components/tidslinje/AktivtUtsnitt.tsx#AktivtUtsnittBakgrunn"})}catch(__react_docgen_typescript_loader_error){}const erSynlig=({horizontalPosition})=>horizontalPosition<=100&&horizontalPosition>=0,innenEtDøgn=(dato1,dato2)=>Math.abs(dato1.diff(dato2,"day"))<=1,invisiblePeriods=({horizontalPosition,width})=>horizontalPosition>=0&&horizontalPosition<=100&&width>0;__webpack_require__("./node_modules/dayjs/locale/nb.js");dayjs_min_default().locale("nb");const formatertMåned=dato=>{const månedLabel=dato.format("MMM");return månedLabel[0].toUpperCase().concat(månedLabel.slice(1,3))},axisLabels=(start,slutt,direction)=>{const totaltAntallDager=slutt.diff(start,"day");return totaltAntallDager<40?((start,slutt,totaltAntallDager,direction)=>{const inkrement=Math.ceil(totaltAntallDager/10),sisteDag=slutt.startOf("day");return new Array(totaltAntallDager).fill(sisteDag).map((denneDagen,i)=>{if(i%inkrement!==0)return null;const dag=denneDagen.subtract(i,"day"),{horizontalPosition,width}=horizontalPositionAndWidth(dag,dag.add(1,"day"),start,slutt);return{direction,horizontalPosition,label:(dato=dag,dato.format("DD.MM")),date:dag.toDate(),width};var dato}).filter(etikett=>null!==etikett)})(start,slutt,totaltAntallDager,direction):totaltAntallDager<370?((start,slutt,direction)=>{const startmåned=start.startOf("month"),antallMåneder=slutt.endOf("month").diff(startmåned,"month")+1;return new Array(antallMåneder).fill(startmåned).map((denneMåneden,i)=>{const måned=denneMåneden.add(i,"month"),{horizontalPosition,width}=horizontalPositionAndWidth(måned,måned.add(1,"month"),start,slutt);return{direction,horizontalPosition,label:formatertMåned(måned),date:måned.toDate(),width}})})(start,slutt,direction):((start,slutt,direction)=>{const førsteÅr=start.startOf("year"),antallÅr=slutt.endOf("year").diff(start,"year")+1;return new Array(antallÅr).fill(førsteÅr).map((detteÅret,i)=>{const år=detteÅret.add(i,"year"),{horizontalPosition,width}=horizontalPositionAndWidth(år,år.add(1,"year"),start,slutt);return{direction,horizontalPosition,label:(dato=år,`${dato.year()}`),date:år.toDate(),width};var dato})})(start,slutt,direction)},Etiketter=styled_components_browser_esm.Ay.div`
    position: relative;
    width: 100%;
    height: 1rem;
    box-sizing: content-box;
    margin-bottom: ${tokens.AiS};

    > * {
        position: absolute;
        font-size: 0.8rem;
        color: ${tokens.cJ0};
    }
`,AxisLabels=({start,slutt,direction="left",etikettRender})=>{const labels=axisLabels(start,slutt,direction).filter(erSynlig);return(0,jsx_runtime.jsx)(Etiketter,{className:classnames_default()("etiketter"),children:labels.map(etikett=>(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"left"===direction?"flex-start":"flex-end",[direction]:`${etikett.horizontalPosition}%`,width:`${etikett.width}%`},children:etikettRender?.(etikett)??etikett.label},etikett.label))})};try{AxisLabels.displayName="AxisLabels",AxisLabels.__docgenInfo={description:"",displayName:"AxisLabels",props:{start:{defaultValue:null,description:"",name:"start",required:!0,type:{name:"Dayjs"}},slutt:{defaultValue:null,description:"",name:"slutt",required:!0,type:{name:"Dayjs"}},direction:{defaultValue:{value:"left"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},etikettRender:{defaultValue:null,description:"",name:"etikettRender",required:!1,type:{name:"((etikett: AxisLabel) => ReactNode) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/AxisLabels.tsx#AxisLabels"]={docgenInfo:AxisLabels.__docgenInfo,name:"AxisLabels",path:"packages/familie-tidslinje/src/components/tidslinje/AxisLabels.tsx#AxisLabels"})}catch(__react_docgen_typescript_loader_error){}const TooltipContainer=styled_components_browser_esm.Ay.div`
    position: absolute;
    padding: ${tokens.vW7} ${tokens.AiS};
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid ${tokens.Iqz};
    color: ${tokens.cJ0};
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(calc(-100% - 10px));
    box-shadow: 0 2px 2px 0 ${tokens.ZrO};
    animation-timing-function: ease-out;
    animation-duration: 0.05s;
    animation-name: fadeIn;
    cursor: default;
    z-index: 1000;

    &:before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: #ffffff;
        left: 50%;
        bottom: -1px;
        border-bottom: 1px solid ${tokens.Iqz};
        border-right: 1px solid ${tokens.Iqz};
        box-shadow: 2px 2px 2px ${tokens.ZrO};
        transform: translateX(-50%) translateY(50%) rotate(45deg);
    }

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 12px;
        background: transparent;
        bottom: -12px;
        left: 0;
    }
`,Tooltip=({children,className})=>(0,jsx_runtime.jsx)(TooltipContainer,{className:classnames_default()(className),children});try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"packages/familie-tidslinje/src/components/tidslinje/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}const fellesPeriodeStyle=styled_components_browser_esm.AH`
    background: #e7e9e9;
    border-top: 1px solid #59514b;
    border-bottom: 1px solid #59514b;

    border-radius: 1.5rem;
    position: absolute;
    transition: box-shadow 0.1s ease;
    padding: 0;

    &.mini {
        min-width: 0;
        padding: 0;
        &:before {
            display: none;
        }
    }
    &.mini:before {
        display: none;
    }

    &.advarsel {
        background: #ffe9cc;
        border: 1px solid #ff9100;
    }

    &.feil {
        background: #f1d8d4;
        border: 1px solid #ba3a26;
    }

    &.inaktiv {
        background: #e7e9e9;
        border: 1px solid #78706a;
    }

    &.suksess {
        background: #cde7d8;
        border: 1px solid #117938;
    }

    &.sammenhengendeFraHøyre {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }

    &.sammenhengendeFraVenstre {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }

    &.sammenhengendeFraBegge {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }

    &.croppedHøyre {
        border-right: none;
    }

    &.croppedVenstre {
        border-left: none;
    }

    &.croppedBegge {
        border-left: none;
        border-right: none;
    }
`,InfoPin=styled_components_browser_esm.Ay.div`
    position: absolute;
    background: #0067c5;
    height: 6px;
    width: 2px;
    top: 0;
    left: 50%;
    transform: translate(-1px, -7px);

    &:before {
        content: '';
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        background: #0067c5;
        transform: ${props=>`translate(-${props.$påPeriodeKnapp?5:4}px, -100%)`};
        border-radius: 50%;
    }
`,PeriodeInnhold=styled_components_browser_esm.Ay.div`
    margin: ${props=>(props.$kompakt?0:.3)+"rem 0.3rem"};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
    text-align: left;
    position: relative;
    top: ${props=>(props.$kompakt?0:-2)+"px"};
`,PeriodeKnapp=styled_components_browser_esm.Ay.button`
    height: ${props=>(props.$kompakt?1.5:2)+"rem"};
    cursor: pointer;

    &.advarsel {
        &:hover,
        &.active,
        &:focus {
            background: #fed7a3;
        }
    }

    &.feil {
        &:hover,
        &.active,
        &:focus {
            background: #e3b0a8;
        }
    }

    &.inaktiv {
        &:hover,
        &.active,
        &:focus {
            background: #c3c3c3;
        }
    }

    &.suksess {
        &:hover,
        &.active,
        &:focus {
            background: #9bd0b0;
        }
    }
    ${fellesPeriodeStyle}
`,PeriodeDiv=styled_components_browser_esm.Ay.div`
    height: ${props=>(props.$kompakt?1.5:2)+"rem"};
    ${fellesPeriodeStyle}
`,ariaLabel=period=>{const start=period.start.format("DD.MM.YYYY"),end=period.endInclusive.format("DD.MM.YYYY");return`${period.status} fra ${start} til og med ${end}`},style=period=>({[period.direction]:`${period.horizontalPosition}%`,width:`${period.width}%`}),ClickablePeriod=react.memo(({buttonRef,period,className,onSelectPeriod,kompakt})=>{const[showHoverLabel,setShowHoverLabel]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(PeriodeKnapp,{$kompakt:kompakt,ref:buttonRef,className,onClick:()=>{period.disabled||onSelectPeriod?.(period)},onMouseEnter:()=>{period.hoverLabel&&setShowHoverLabel(!0)},onMouseLeave:()=>{period.hoverLabel&&setShowHoverLabel(!1)},"aria-label":ariaLabel(period),style:style(period),children:[period.hoverLabel&&showHoverLabel&&(0,jsx_runtime.jsx)(Tooltip,{children:period.hoverLabel}),period.infoPin&&(0,jsx_runtime.jsx)(InfoPin,{$påPeriodeKnapp:!0,className:"infoPin"}),period.children&&(0,jsx_runtime.jsx)(PeriodeInnhold,{$kompakt:kompakt,children:period.children})]})}),NonClickablePeriod=({divRef,period,className,kompakt})=>(0,jsx_runtime.jsxs)(PeriodeDiv,{$kompakt:kompakt,ref:divRef,className,"aria-label":ariaLabel(period),style:style(period),children:[period.infoPin&&(0,jsx_runtime.jsx)(InfoPin,{className:"infoPin"}),period.children&&(0,jsx_runtime.jsx)(PeriodeInnhold,{$kompakt:kompakt,children:period.children})]}),TimelinePeriod=react.memo(({period,onSelectPeriod,active,kompakt})=>{const ref=(0,react.useRef)(null),[isMini,setIsMini]=(0,react.useState)(!1),className=classnames_default()("periode",((period,active,isMini)=>{const newClassNames=[];switch(period.cropped){case"both":newClassNames.push("croppedBegge");break;case"left":"left"===period.direction?newClassNames.push("croppedVenstre"):newClassNames.push("croppedHøyre");break;case"right":"left"===period.direction?newClassNames.push("croppedHøyre"):newClassNames.push("croppedVenstre")}switch(period.connectingEdge){case"both":newClassNames.push("sammenhengendeFraBegge");break;case"left":"left"===period.direction?newClassNames.push("sammenhengendeFraVenstre"):newClassNames.push("sammenhengendeFraHøyre");break;case"right":"left"===period.direction?newClassNames.push("sammenhengendeFraHøyre"):newClassNames.push("sammenhengendeFraVenstre")}return active&&newClassNames.push("active"),isMini&&newClassNames.push("mini"),newClassNames})(period,active,isMini),period.status,period.className);return(0,react.useLayoutEffect)(()=>{const currentWidth=ref.current?.offsetWidth;currentWidth&&currentWidth<30&&setIsMini(!0)},[ref.current]),onSelectPeriod?(0,jsx_runtime.jsx)(ClickablePeriod,{buttonRef:ref,period,onSelectPeriod,className,kompakt}):(0,jsx_runtime.jsx)(NonClickablePeriod,{divRef:ref,period,className,kompakt})});try{TimelinePeriod.displayName="TimelinePeriod",TimelinePeriod.__docgenInfo={description:"",displayName:"TimelinePeriod",props:{period:{defaultValue:null,description:"",name:"period",required:!0,type:{name:"PositionedPeriod"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean | undefined"}},onSelectPeriod:{defaultValue:null,description:"",name:"onSelectPeriod",required:!1,type:{name:"((period: PositionedPeriod) => void) | undefined"}},onHoverPeriod:{defaultValue:null,description:"",name:"onHoverPeriod",required:!1,type:{name:"ReactNode"}},kompakt:{defaultValue:null,description:"",name:"kompakt",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/TimelinePeriod.tsx#TimelinePeriod"]={docgenInfo:TimelinePeriod.__docgenInfo,name:"TimelinePeriod",path:"packages/familie-tidslinje/src/components/tidslinje/TimelinePeriod.tsx#TimelinePeriod"})}catch(__react_docgen_typescript_loader_error){}const TimelineRowStyle=styled_components_browser_esm.Ay.div`
    flex: 1;
    height: ${props=>`${props.$kompakt?tokens.VVL:tokens.EJ}`};
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: ${props=>`${props.$kompakt?tokens.AiS:tokens.VVL}`};
`,EmptyRowHr=styled_components_browser_esm.Ay.hr`
    flex: 1;
    height: ${props=>`${props.$kompakt?tokens.VVL:tokens.EJ}`};
    width: 100%;
    border: none;
    background-color: ${tokens.SSo};
    margin-bottom: ${props=>`${props.$kompakt?tokens.AiS:tokens.VVL}`};

    &.aktivRad {
        background-color: ${tokens.DvS};
    }
`,EmptyTimelineRow=({active=!1,kompakt=!1,className})=>(0,jsx_runtime.jsx)(EmptyRowHr,{$kompakt:kompakt,className:classnames_default()(active&&"aktivRad",className)}),TimelineRow=({periods,onSelectPeriod,active=!1,kompakt=!1,className})=>(0,jsx_runtime.jsx)(TimelineRowStyle,{$kompakt:kompakt,className:classnames_default()("tidslinjerad",active&&"aktivRad",className),children:periods.map(period=>(0,jsx_runtime.jsx)(TimelinePeriod,{period,onSelectPeriod,active:period.active,kompakt},period.id))});try{EmptyTimelineRow.displayName="EmptyTimelineRow",EmptyTimelineRow.__docgenInfo={description:"",displayName:"EmptyTimelineRow",props:{active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean | undefined"}},kompakt:{defaultValue:{value:"false"},description:"",name:"kompakt",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/TimelineRow.tsx#EmptyTimelineRow"]={docgenInfo:EmptyTimelineRow.__docgenInfo,name:"EmptyTimelineRow",path:"packages/familie-tidslinje/src/components/tidslinje/TimelineRow.tsx#EmptyTimelineRow"})}catch(__react_docgen_typescript_loader_error){}try{TimelineRow.displayName="TimelineRow",TimelineRow.__docgenInfo={description:"",displayName:"TimelineRow",props:{periods:{defaultValue:null,description:"",name:"periods",required:!0,type:{name:"PositionedPeriod[]"}},onSelectPeriod:{defaultValue:null,description:"",name:"onSelectPeriod",required:!1,type:{name:"((periode: PositionedPeriod) => void) | undefined"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean | undefined"}},kompakt:{defaultValue:{value:"false"},description:"",name:"kompakt",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/TimelineRow.tsx#TimelineRow"]={docgenInfo:TimelineRow.__docgenInfo,name:"TimelineRow",path:"packages/familie-tidslinje/src/components/tidslinje/TimelineRow.tsx#TimelineRow"})}catch(__react_docgen_typescript_loader_error){}let nanoid=(size=21)=>{let id="",bytes=crypto.getRandomValues(new Uint8Array(size|=0));for(;size--;)id+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&bytes[size]];return id};const sistePeriode=(a,b)=>a.horizontalPosition-b.horizontalPosition,adjustedEdges=(period,i,allPeriods)=>{const left=i>0&&innenEtDøgn(allPeriods[i-1].endInclusive,period.start),right=i<allPeriods.length-1&&innenEtDøgn(period.endInclusive,allPeriods[i+1].start);return left&&right?{...period,connectingEdge:"both"}:left?{...period,connectingEdge:"left"}:right?{...period,connectingEdge:"right"}:period},trimmedPeriods=period=>{let cropped,{horizontalPosition,width,connectingEdge}=period;return horizontalPosition+width>100&&(width=100-horizontalPosition,cropped="right",connectingEdge="left"===connectingEdge||"both"===connectingEdge?"both":"right"),horizontalPosition<0&&horizontalPosition+width>0&&(width=horizontalPosition+width,horizontalPosition=0,cropped="right"===cropped?"both":"left",connectingEdge="right"===connectingEdge||"both"===connectingEdge?"both":"left"),{...period,width,horizontalPosition,connectingEdge,cropped}},useTidslinjerader=(rader,startDato,sluttDato,direction)=>(0,react.useMemo)(()=>rader.map(perioder=>{const tidslinjeperioder=perioder.map(periode=>((period,timelineStart,timelineEndInclusive,direction="left")=>{const start=dayjs_min_default()(period.fom),endInclusive=dayjs_min_default()(period.tom),{horizontalPosition,width}=horizontalPositionAndWidth(start.startOf("day"),endInclusive.endOf("day"),timelineStart,timelineEndInclusive);return{id:period.id||nanoid(),start,endInclusive,horizontalPosition,hoverLabel:period.hoverLabel,direction,className:period.className,disabled:period.disabled,status:period.status,active:period.active,infoPin:period.infoPin,width,children:period.children}})(periode,startDato,sluttDato,direction)).sort(sistePeriode).map(adjustedEdges).map(trimmedPeriods).filter(invisiblePeriods);return{id:nanoid(),periods:"left"===direction?tidslinjeperioder:tidslinjeperioder.reverse()}}),[rader,startDato,sluttDato,direction]),tidligsteDato=(tidligst,periode)=>periode.fom<tidligst?periode.fom:tidligst,useTidligsteDato=({startDato,rader})=>(0,react.useMemo)(()=>startDato?dayjs_min_default()(startDato):dayjs_min_default()((rader=>rader.flat().reduce(tidligsteDato,new Date))(rader)),[startDato,rader]),senesteDato=(senest,periode)=>periode.tom>senest?periode.tom:senest,useSenesteDato=({sluttDato,rader})=>(0,react.useMemo)(()=>sluttDato?dayjs_min_default()(sluttDato):dayjs_min_default()((rader=>rader.flat().reduce(senesteDato,new Date(0)))(rader)).add(1,"day"),[sluttDato,rader]),StyledTooltip=(0,styled_components_browser_esm.Ay)(Tooltip)`
    font-size: 0.8rem;
    top: -10px;
`,PinView=({render})=>{const[showRender,setShowRender]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)(PinStyle,{className:"pin",onMouseOver:()=>setShowRender(!0),onMouseLeave:()=>setShowRender(!1),children:showRender&&render&&(0,jsx_runtime.jsx)(StyledTooltip,{className:"tooltip",children:render})})},PinsStyle=styled_components_browser_esm.Ay.div`
    position: absolute;
    width: 100%;
    height: 100%;
`,PinStyle=styled_components_browser_esm.Ay.div`
    position: absolute;
    height: calc(100% + 10px);
    top: -22px;
    width: 1px;
    background: #000000;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        background: #ffffff;
        border: 6px solid ${tokens.uec};
        border-radius: 50%;
        transform: translate(-8.5px, -9.5px);
    }
`,PinContainer=styled_components_browser_esm.Ay.span`
    position: absolute;
    height: 100%;
`,Pins=({pins,start,slutt,direction})=>(0,jsx_runtime.jsx)(PinsStyle,{className:"pins",children:pins.map(({date,render},i)=>(0,jsx_runtime.jsx)(PinContainer,{className:"container",style:{[direction]:`${position(dayjs_min_default()(date),start,slutt)}%`},children:(0,jsx_runtime.jsx)(PinView,{render})},i))});try{Pins.displayName="Pins",Pins.__docgenInfo={description:"",displayName:"Pins",props:{pins:{defaultValue:null,description:"",name:"pins",required:!0,type:{name:"Pin[]"}},start:{defaultValue:null,description:"",name:"start",required:!0,type:{name:"Dayjs"}},slutt:{defaultValue:null,description:"",name:"slutt",required:!0,type:{name:"Dayjs"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/Pins.tsx#Pins"]={docgenInfo:Pins.__docgenInfo,name:"Pins",path:"packages/familie-tidslinje/src/components/tidslinje/Pins.tsx#Pins"})}catch(__react_docgen_typescript_loader_error){}const TidslinjeStyle=styled_components_browser_esm.Ay.div`
    position: relative;
    padding: ${tokens.Oj$} 0;
    margin: 0 ${tokens.AiS};
    display: flex;
    flex-direction: column;
    flex: 1;
`,TidslinjeRadStyle=styled_components_browser_esm.Ay.div`
    position: relative;
    padding: 0;
    border-top: ${props=>""+(props.$kompakt?"none":"1px solid #e7e9e9")};

    .tidslinjerad.førsterad,
    hr.førsterad {
        margin-top: ${props=>""+(props.$kompakt?"0rem":"1.56rem")};
    }
`,EmptyRowsStyle=styled_components_browser_esm.Ay.div`
    position: absolute;
    height: 100%;
    width: 100%;
`,Timeline=react.memo(({pins,rows,start,endInclusive,onSelectPeriod,aktivtUtsnitt,activeRow,direction,axisLabelRenderer,kompakt=!1})=>{const onSelectPeriodeWrapper=onSelectPeriod&&(0,react.useCallback)(periode=>{onSelectPeriod?.({id:periode.id,fom:periode.start.toDate(),tom:periode.endInclusive.toDate(),disabled:periode.disabled,status:periode.status})},[onSelectPeriod]);return(0,jsx_runtime.jsxs)(TidslinjeStyle,{className:classnames_default()("tidslinje"),children:[(0,jsx_runtime.jsx)(AxisLabels,{start,slutt:endInclusive,direction,etikettRender:axisLabelRenderer}),(0,jsx_runtime.jsxs)(TidslinjeRadStyle,{$kompakt:kompakt,className:classnames_default()("tidslinjerader"),children:[(0,jsx_runtime.jsx)(EmptyRowsStyle,{children:rows.map((_,i)=>(0,jsx_runtime.jsx)(EmptyTimelineRow,{kompakt,className:classnames_default()(0===i&&"førsterad"),active:i===activeRow},i))}),pins&&(0,jsx_runtime.jsx)(Pins,{pins,start,slutt:endInclusive,direction}),aktivtUtsnitt&&(0,jsx_runtime.jsx)(AktivtUtsnittBakgrunn,{tidslinjestart:start,tidslinjeslutt:endInclusive,aktivtUtsnitt,direction}),rows.map((tidslinje,i)=>(0,jsx_runtime.jsx)(TimelineRow,{className:classnames_default()(0===i&&"førsterad"),...tidslinje,onSelectPeriod:onSelectPeriodeWrapper,active:i===activeRow,kompakt},tidslinje.id)),aktivtUtsnitt&&(0,jsx_runtime.jsx)(AktivtUtsnittBorder,{tidslinjestart:start,tidslinjeslutt:endInclusive,aktivtUtsnitt,direction})]})]})}),Tidslinje=react.memo(({pins,rader,aktivRad,startDato,sluttDato,etikettRender,onSelectPeriode,aktivtUtsnitt,retning="stigende",kompakt=!1})=>{if(!rader)throw new Error("Tidslinjen mangler rader.");const direction="stigende"===retning?"left":"right",start=useTidligsteDato({startDato,rader}).startOf("day"),endInclusive=useSenesteDato({sluttDato,rader}).endOf("day"),rows=useTidslinjerader(rader,start,endInclusive,direction);return(0,jsx_runtime.jsx)(Timeline,{rows,start,activeRow:aktivRad,direction,endInclusive,onSelectPeriod:onSelectPeriode,aktivtUtsnitt,axisLabelRenderer:etikettRender,pins,kompakt})});try{Tidslinje.displayName="Tidslinje",Tidslinje.__docgenInfo={description:"Viser perioder i en tidslinje.",displayName:"Tidslinje",props:{rader:{defaultValue:null,description:"Perioder som rendres på tidslinjen. Rendres som 'button' dersom 'onSelectPeriode' er satt, ellers som en 'div'.\nHver liste av `Periode`-objekter representerer en egen rad i tidslinjen.",name:"rader",required:!0,type:{name:"Periode[][]"}},startDato:{defaultValue:null,description:"Bestemmer startpunktet for tidslinjen. Defaulter til tidligste dato blandt alle perioder i tidslinjen.",name:"startDato",required:!1,type:{name:"Date | undefined"}},sluttDato:{defaultValue:null,description:"Bestemmer sluttpunktet for tidslinjen. Defaulter til seneste dato blandt alle perioder i tidslinjen.",name:"sluttDato",required:!1,type:{name:"Date | undefined"}},onSelectPeriode:{defaultValue:null,description:"Handling som skal skje når en bruker klikker på/interagerer med en periodeknapp.",name:"onSelectPeriode",required:!1,type:{name:"((periode: Periode) => void) | undefined"}},aktivtUtsnitt:{defaultValue:null,description:"Utsnittet av tidslinjen som skal markeres som aktivt.",name:"aktivtUtsnitt",required:!1,type:{name:"EnkelPeriode | undefined"}},aktivRad:{defaultValue:null,description:"Raden som skal markeres som aktiv.",name:"aktivRad",required:!1,type:{name:"number | undefined"}},retning:{defaultValue:null,description:"Retningen periodene sorteres på. Default er 'stigende', hvor tidligste periode da vil rendres til venstre i\ntidslinjen og seneste periode vil rendres til høyre.",name:"retning",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stigende"'},{value:'"synkende"'}]}},etikettRender:{defaultValue:null,description:"Funksjon som tar en etikett og returnerer det som skal rendres.",name:"etikettRender",required:!1,type:{name:"((etikett: AxisLabel) => ReactNode) | undefined"}},pins:{defaultValue:null,description:"Markeringer for enkeltdager på tidslinjen.",name:"pins",required:!1,type:{name:"Pin[] | undefined"}},kompakt:{defaultValue:null,description:"Bruke kompakt style, med smalere stolper og uten margin.",name:"kompakt",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/Tidslinje.tsx#Tidslinje"]={docgenInfo:Tidslinje.__docgenInfo,name:"Tidslinje",path:"packages/familie-tidslinje/src/components/tidslinje/Tidslinje.tsx#Tidslinje"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=531.3b832e1f.iframe.bundle.js.map