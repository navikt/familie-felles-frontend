"use strict";(self.webpackChunkfamilie_felles_frontend=self.webpackChunkfamilie_felles_frontend||[]).push([[10],{"./packages/familie-tidslinje/src/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D8:()=>Tidslinje});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dayjs_min=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min),isSameOrBefore=__webpack_require__("./node_modules/dayjs/plugin/isSameOrBefore.js"),isSameOrBefore_default=__webpack_require__.n(isSameOrBefore),isSameOrAfter=__webpack_require__("./node_modules/dayjs/plugin/isSameOrAfter.js"),isSameOrAfter_default=__webpack_require__.n(isSameOrAfter);dayjs_min_default().extend(isSameOrBefore_default()),dayjs_min_default().extend(isSameOrAfter_default());const position=(date,start,endInclusive)=>{const diff=endInclusive.diff(start);return date.diff(start)/diff*100},horizontalPositionAndWidth=(start,endInclusive,timelineStart,timelineEndInclusive)=>{const horizontalPosition=position(start,timelineStart,timelineEndInclusive);return{horizontalPosition,width:position(endInclusive,timelineStart,timelineEndInclusive)-horizontalPosition}},usePositionAndSize=({periode,tidslinjestart,tidslinjeslutt,direction})=>{const fom=dayjs_min_default()(periode.fom).startOf("day"),tom=dayjs_min_default()(periode.tom).endOf("day"),{horizontalPosition,width}=horizontalPositionAndWidth(fom,tom,tidslinjestart,tidslinjeslutt),adjustedHorizontalPosition=(min=0,(value=horizontalPosition)>=(max=100)?max:value<min?min:value);var value,min,max;const adjustedWidth=adjustedHorizontalPosition+width>=100?100-adjustedHorizontalPosition:adjustedHorizontalPosition+width!==horizontalPosition+width?width+horizontalPosition:width;return horizontalPosition>=100||adjustedWidth<=0?{[direction]:0,width:0,display:"none"}:horizontalPosition<0?{[direction]:0,width:`${adjustedWidth}%`}:{[direction]:`${adjustedHorizontalPosition}%`,width:`${adjustedWidth}%`,display:horizontalPosition>100?"none":void 0}};var tokens=__webpack_require__("./node_modules/@navikt/ds-tokens/dist/tokens.js");const AktivtUtsnittContainer=styled_components_browser_esm.Ay.div`
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
        background: ${tokens.T8q};
        box-shadow: 0 0 0 1px ${tokens.T8q};
        left: -1px;
    }

    &:after {
        content: '';
        position: absolute;
        top: -2px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: ${tokens.T8q};
        box-shadow: 0 0 0 1px ${tokens.T8q};
        right: -1px;
    }
`,AktivPeriodeBorder=(0,styled_components_browser_esm.Ay)(AktivPeriode)`
    box-shadow:
        inset 2px 0 0 -1px ${tokens.T8q},
        inset -2px 0 0 -1px ${tokens.T8q};
`,AktivPeriodeBakgrunn=(0,styled_components_browser_esm.Ay)(AktivPeriode)`
    background: ${tokens.pu7};
`,AktivtUtsnittBorder=({aktivtUtsnitt,tidslinjestart,tidslinjeslutt,direction})=>{const style=usePositionAndSize({periode:aktivtUtsnitt,tidslinjestart,tidslinjeslutt,direction});return(0,jsx_runtime.jsx)(AktivtUtsnittContainer,{className:"aktivtUtsnittContainer",children:(0,jsx_runtime.jsx)(AktivPeriodeBorder,{className:classnames_default()("aktivPeriodeBorder"),style})})},AktivtUtsnittBakgrunn=({aktivtUtsnitt,tidslinjestart,tidslinjeslutt,direction})=>{const style=usePositionAndSize({periode:aktivtUtsnitt,tidslinjestart,tidslinjeslutt,direction});return(0,jsx_runtime.jsx)(AktivtUtsnittContainer,{className:"aktivtUtsnittContainer",children:(0,jsx_runtime.jsx)(AktivPeriodeBakgrunn,{className:classnames_default()("aktivPeriodeBakgrunn"),style})})};try{AktivtUtsnittBorder.displayName="AktivtUtsnittBorder",AktivtUtsnittBorder.__docgenInfo={description:"",displayName:"AktivtUtsnittBorder",props:{tidslinjestart:{defaultValue:null,description:"",name:"tidslinjestart",required:!0,type:{name:"Dayjs"}},tidslinjeslutt:{defaultValue:null,description:"",name:"tidslinjeslutt",required:!0,type:{name:"Dayjs"}},aktivtUtsnitt:{defaultValue:null,description:"",name:"aktivtUtsnitt",required:!0,type:{name:"EnkelPeriode"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/AktivtUtsnitt.tsx#AktivtUtsnittBorder"]={docgenInfo:AktivtUtsnittBorder.__docgenInfo,name:"AktivtUtsnittBorder",path:"packages/familie-tidslinje/src/components/tidslinje/AktivtUtsnitt.tsx#AktivtUtsnittBorder"})}catch(__react_docgen_typescript_loader_error){}try{AktivtUtsnittBakgrunn.displayName="AktivtUtsnittBakgrunn",AktivtUtsnittBakgrunn.__docgenInfo={description:"",displayName:"AktivtUtsnittBakgrunn",props:{tidslinjestart:{defaultValue:null,description:"",name:"tidslinjestart",required:!0,type:{name:"Dayjs"}},tidslinjeslutt:{defaultValue:null,description:"",name:"tidslinjeslutt",required:!0,type:{name:"Dayjs"}},aktivtUtsnitt:{defaultValue:null,description:"",name:"aktivtUtsnitt",required:!0,type:{name:"EnkelPeriode"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/AktivtUtsnitt.tsx#AktivtUtsnittBakgrunn"]={docgenInfo:AktivtUtsnittBakgrunn.__docgenInfo,name:"AktivtUtsnittBakgrunn",path:"packages/familie-tidslinje/src/components/tidslinje/AktivtUtsnitt.tsx#AktivtUtsnittBakgrunn"})}catch(__react_docgen_typescript_loader_error){}const erSynlig=({horizontalPosition})=>horizontalPosition<=100&&horizontalPosition>=0,innenEtDøgn=(dato1,dato2)=>Math.abs(dato1.diff(dato2,"day"))<=1,invisiblePeriods=({horizontalPosition,width})=>horizontalPosition>=0&&horizontalPosition<=100&&width>0;__webpack_require__("./node_modules/dayjs/locale/nb.js");dayjs_min_default().locale("nb");const formatertMåned=dato=>{const månedLabel=dato.format("MMM");return månedLabel[0].toUpperCase().concat(månedLabel.slice(1,3))},axisLabels=(start,slutt,direction)=>{const totaltAntallDager=slutt.diff(start,"day");return totaltAntallDager<40?((start,slutt,totaltAntallDager,direction)=>{const inkrement=Math.ceil(totaltAntallDager/10),sisteDag=slutt.startOf("day");return new Array(totaltAntallDager).fill(sisteDag).map((denneDagen,i)=>{if(i%inkrement!==0)return null;const dag=denneDagen.subtract(i,"day"),{horizontalPosition,width}=horizontalPositionAndWidth(dag,dag.add(1,"day"),start,slutt);return{direction,horizontalPosition,label:(dato=dag,dato.format("DD.MM")),date:dag.toDate(),width};var dato}).filter(etikett=>null!==etikett)})(start,slutt,totaltAntallDager,direction):totaltAntallDager<370?((start,slutt,direction)=>{const startmåned=start.startOf("month"),antallMåneder=slutt.endOf("month").diff(startmåned,"month")+1;return new Array(antallMåneder).fill(startmåned).map((denneMåneden,i)=>{const måned=denneMåneden.add(i,"month"),{horizontalPosition,width}=horizontalPositionAndWidth(måned,måned.add(1,"month"),start,slutt);return{direction,horizontalPosition,label:formatertMåned(måned),date:måned.toDate(),width}})})(start,slutt,direction):((start,slutt,direction)=>{const førsteÅr=start.startOf("year"),antallÅr=slutt.endOf("year").diff(start,"year")+1;return new Array(antallÅr).fill(førsteÅr).map((detteÅret,i)=>{const år=detteÅret.add(i,"year"),{horizontalPosition,width}=horizontalPositionAndWidth(år,år.add(1,"year"),start,slutt);return{direction,horizontalPosition,label:(dato=år,`${dato.year()}`),date:år.toDate(),width};var dato})})(start,slutt,direction)},Etiketter=styled_components_browser_esm.Ay.div`
    position: relative;
    width: 100%;
    height: 1rem;
    box-sizing: content-box;
    margin-bottom: ${tokens.f_f};

    > * {
        position: absolute;
        font-size: 0.8rem;
        color: ${tokens.dlf};
    }
`,AxisLabels=({start,slutt,direction="left",etikettRender})=>{const labels=axisLabels(start,slutt,direction).filter(erSynlig);return(0,jsx_runtime.jsx)(Etiketter,{className:classnames_default()("etiketter"),children:labels.map(etikett=>(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"left"===direction?"flex-start":"flex-end",[direction]:`${etikett.horizontalPosition}%`,width:`${etikett.width}%`},children:etikettRender?.(etikett)??etikett.label},etikett.label))})};try{AxisLabels.displayName="AxisLabels",AxisLabels.__docgenInfo={description:"",displayName:"AxisLabels",props:{start:{defaultValue:null,description:"",name:"start",required:!0,type:{name:"Dayjs"}},slutt:{defaultValue:null,description:"",name:"slutt",required:!0,type:{name:"Dayjs"}},direction:{defaultValue:{value:"left"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},etikettRender:{defaultValue:null,description:"",name:"etikettRender",required:!1,type:{name:"((etikett: AxisLabel) => ReactNode) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/AxisLabels.tsx#AxisLabels"]={docgenInfo:AxisLabels.__docgenInfo,name:"AxisLabels",path:"packages/familie-tidslinje/src/components/tidslinje/AxisLabels.tsx#AxisLabels"})}catch(__react_docgen_typescript_loader_error){}const TooltipContainer=styled_components_browser_esm.Ay.div`
    position: absolute;
    padding: ${tokens.fV9} ${tokens.f_f};
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid ${tokens.dlf};
    color: ${tokens.n1E};
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(calc(-100% - 10px));
    box-shadow: 0 2px 2px 0 ${tokens.pmg};
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
        border-bottom: 1px solid ${tokens.dlf};
        border-right: 1px solid ${tokens.dlf};
        box-shadow: 2px 2px 2px ${tokens.pmg};
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
    height: ${props=>`${props.$kompakt?tokens.TTQ:tokens.TKM}`};
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: ${props=>`${props.$kompakt?tokens.f_f:tokens.TTQ}`};
`,EmptyRowHr=styled_components_browser_esm.Ay.hr`
    flex: 1;
    height: ${props=>`${props.$kompakt?tokens.TTQ:tokens.TKM}`};
    width: 100%;
    border: none;
    background-color: ${tokens.OF1};
    margin-bottom: ${props=>`${props.$kompakt?tokens.f_f:tokens.TTQ}`};

    &.aktivRad {
        background-color: ${tokens.pu7};
    }
`,EmptyTimelineRow=({active=!1,kompakt=!1,className})=>(0,jsx_runtime.jsx)(EmptyRowHr,{$kompakt:kompakt,className:classnames_default()(active&&"aktivRad",className)}),TimelineRow=({periods,onSelectPeriod,active=!1,kompakt=!1,className})=>(0,jsx_runtime.jsx)(TimelineRowStyle,{$kompakt:kompakt,className:classnames_default()("tidslinjerad",active&&"aktivRad",className),children:periods.map(period=>(0,jsx_runtime.jsx)(TimelinePeriod,{period,onSelectPeriod,active:period.active,kompakt},period.id))});try{EmptyTimelineRow.displayName="EmptyTimelineRow",EmptyTimelineRow.__docgenInfo={description:"",displayName:"EmptyTimelineRow",props:{active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean | undefined"}},kompakt:{defaultValue:{value:"false"},description:"",name:"kompakt",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/TimelineRow.tsx#EmptyTimelineRow"]={docgenInfo:EmptyTimelineRow.__docgenInfo,name:"EmptyTimelineRow",path:"packages/familie-tidslinje/src/components/tidslinje/TimelineRow.tsx#EmptyTimelineRow"})}catch(__react_docgen_typescript_loader_error){}try{TimelineRow.displayName="TimelineRow",TimelineRow.__docgenInfo={description:"",displayName:"TimelineRow",props:{periods:{defaultValue:null,description:"",name:"periods",required:!0,type:{name:"PositionedPeriod[]"}},onSelectPeriod:{defaultValue:null,description:"",name:"onSelectPeriod",required:!1,type:{name:"((periode: PositionedPeriod) => void) | undefined"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean | undefined"}},kompakt:{defaultValue:{value:"false"},description:"",name:"kompakt",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/TimelineRow.tsx#TimelineRow"]={docgenInfo:TimelineRow.__docgenInfo,name:"TimelineRow",path:"packages/familie-tidslinje/src/components/tidslinje/TimelineRow.tsx#TimelineRow"})}catch(__react_docgen_typescript_loader_error){}var index_browser=__webpack_require__("./packages/familie-tidslinje/node_modules/nanoid/index.browser.js");const sistePeriode=(a,b)=>a.horizontalPosition-b.horizontalPosition,adjustedEdges=(period,i,allPeriods)=>{const left=i>0&&innenEtDøgn(allPeriods[i-1].endInclusive,period.start),right=i<allPeriods.length-1&&innenEtDøgn(period.endInclusive,allPeriods[i+1].start);return left&&right?{...period,connectingEdge:"both"}:left?{...period,connectingEdge:"left"}:right?{...period,connectingEdge:"right"}:period},trimmedPeriods=period=>{let cropped,{horizontalPosition,width,connectingEdge}=period;return horizontalPosition+width>100&&(width=100-horizontalPosition,cropped="right",connectingEdge="left"===connectingEdge||"both"===connectingEdge?"both":"right"),horizontalPosition<0&&horizontalPosition+width>0&&(width=horizontalPosition+width,horizontalPosition=0,cropped="right"===cropped?"both":"left",connectingEdge="right"===connectingEdge||"both"===connectingEdge?"both":"left"),{...period,width,horizontalPosition,connectingEdge,cropped}},useTidslinjerader=(rader,startDato,sluttDato,direction)=>(0,react.useMemo)(()=>rader.map(perioder=>{const tidslinjeperioder=perioder.map(periode=>((period,timelineStart,timelineEndInclusive,direction="left")=>{const start=dayjs_min_default()(period.fom),endInclusive=dayjs_min_default()(period.tom),{horizontalPosition,width}=horizontalPositionAndWidth(start.startOf("day"),endInclusive.endOf("day"),timelineStart,timelineEndInclusive);return{id:period.id||(0,index_browser.Ak)(),start,endInclusive,horizontalPosition,hoverLabel:period.hoverLabel,direction,className:period.className,disabled:period.disabled,status:period.status,active:period.active,infoPin:period.infoPin,width,children:period.children}})(periode,startDato,sluttDato,direction)).sort(sistePeriode).map(adjustedEdges).map(trimmedPeriods).filter(invisiblePeriods);return{id:(0,index_browser.Ak)(),periods:"left"===direction?tidslinjeperioder:tidslinjeperioder.reverse()}}),[rader,startDato,sluttDato,direction]),tidligsteDato=(tidligst,periode)=>periode.fom<tidligst?periode.fom:tidligst,useTidligsteDato=({startDato,rader})=>(0,react.useMemo)(()=>startDato?dayjs_min_default()(startDato):dayjs_min_default()((rader=>rader.flat().reduce(tidligsteDato,new Date))(rader)),[startDato,rader]),senesteDato=(senest,periode)=>periode.tom>senest?periode.tom:senest,useSenesteDato=({sluttDato,rader})=>(0,react.useMemo)(()=>sluttDato?dayjs_min_default()(sluttDato):dayjs_min_default()((rader=>rader.flat().reduce(senesteDato,new Date(0)))(rader)).add(1,"day"),[sluttDato,rader]),StyledTooltip=(0,styled_components_browser_esm.Ay)(Tooltip)`
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
        border: 6px solid ${tokens.uxf};
        border-radius: 50%;
        transform: translate(-8.5px, -9.5px);
    }
`,PinContainer=styled_components_browser_esm.Ay.span`
    position: absolute;
    height: 100%;
`,Pins=({pins,start,slutt,direction})=>(0,jsx_runtime.jsx)(PinsStyle,{className:"pins",children:pins.map(({date,render},i)=>(0,jsx_runtime.jsx)(PinContainer,{className:"container",style:{[direction]:`${position(dayjs_min_default()(date),start,slutt)}%`},children:(0,jsx_runtime.jsx)(PinView,{render})},i))});try{Pins.displayName="Pins",Pins.__docgenInfo={description:"",displayName:"Pins",props:{pins:{defaultValue:null,description:"",name:"pins",required:!0,type:{name:"Pin[]"}},start:{defaultValue:null,description:"",name:"start",required:!0,type:{name:"Dayjs"}},slutt:{defaultValue:null,description:"",name:"slutt",required:!0,type:{name:"Dayjs"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/src/components/tidslinje/Pins.tsx#Pins"]={docgenInfo:Pins.__docgenInfo,name:"Pins",path:"packages/familie-tidslinje/src/components/tidslinje/Pins.tsx#Pins"})}catch(__react_docgen_typescript_loader_error){}const TidslinjeStyle=styled_components_browser_esm.Ay.div`
    position: relative;
    padding: ${tokens._B8} 0;
    margin: 0 ${tokens.f_f};
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
//# sourceMappingURL=10.1f4e7fef.iframe.bundle.js.map