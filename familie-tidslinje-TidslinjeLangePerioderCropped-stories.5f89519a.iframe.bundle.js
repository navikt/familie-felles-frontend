"use strict";(self.webpackChunkfamilie_felles_frontend=self.webpackChunkfamilie_felles_frontend||[]).push([[160],{"./packages/familie-tidslinje/TidslinjeLangePerioderCropped.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LongPeriodClickable:()=>LongPeriodClickable,LongPeriodNotClickable:()=>LongPeriodNotClickable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@navikt/aksel-icons/dist/react/esm/index.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/familie-tidslinje/src/index.ts"),_navikt_ds_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@navikt/ds-react/esm/index.js");__webpack_require__("./node_modules/@navikt/ds-css/dist/index.css");const StyledContainer=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div((props=>`\n    & button.periode {\n        & div svg {\n            position: relative;\n            top: ${props.kompakt?2:3}px;\n        }\n    }\n    & div.periode {\n        & div svg {\n            position: relative;\n            top: ${props.kompakt?2:3}px;\n        }\n    }\n`)),__WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Tidslinje",component:_src__WEBPACK_IMPORTED_MODULE_2__.D8,args:{rader:[[{id:"123",fom:new Date("2020-01-01"),tom:new Date("2022-12-31"),status:"suksess",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_1__.Dee,null)}],[{id:"678",fom:new Date("2020-01-01"),tom:new Date("2021-12-31"),status:"inaktiv"}],[{id:"test678",fom:new Date("2021-01-01"),tom:new Date("2022-12-31"),status:"feil",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_1__.sXs,null)}],[{id:"123",fom:new Date("2020-01-01"),tom:new Date("2022-12-31"),status:"advarsel",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_1__.kMe,null)}],[],[{id:"123",fom:new Date("2020-01-01"),tom:new Date("2022-12-31"),status:"inaktiv"}],[{id:"123",fom:new Date("2021-01-01"),tom:new Date("2022-12-31"),status:"advarsel",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_1__.kMe,null)}],[{id:"678",fom:new Date("2020-01-01"),tom:new Date("2021-12-31"),status:"feil",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_1__.sXs,null)}],[{id:"test678",fom:new Date("2021-01-01"),tom:new Date("2022-12-31"),status:"suksess",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_1__.Dee,null)}],[],[{id:"123",fom:new Date("2020-01-01"),tom:new Date("2021-12-31"),status:"advarsel",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_1__.kMe,null)}],[{id:"123",fom:new Date("2020-01-01"),tom:new Date("2022-12-31"),status:"feil",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_1__.sXs,null)}],[{id:"678",fom:new Date("2020-01-01"),tom:new Date("2021-12-31"),status:"suksess",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_1__.Dee,null)}],[{id:"test678",fom:new Date("2021-01-01"),tom:new Date("2022-12-31"),status:"inaktiv"}]],aktivtUtsnitt:{fom:new Date("2021-04-01"),tom:new Date("2021-04-30")}}},LongPeriodClickable=args=>{const[rader,setRader]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(args.rader),[aktivPeriode,setAktivPeriode]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[kompakt,settKompakt]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),aktivRad=aktivPeriode&&rader.reduce(((radIndex,rad,i)=>rad.find((({id})=>id===aktivPeriode.id))?i:radIndex),void 0);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_ds_react__WEBPACK_IMPORTED_MODULE_3__.dO,{checked:kompakt,onClick:()=>settKompakt(!kompakt)},"Kompakt")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledContainer,{kompakt},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Klikkbare perioder"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Eksempel på visning av perioder, som strekker seg utanfor startDato og sluttDato for tidslinjen. Start- og sluttdato for visning er 01.01.2021 og 31.12.2021."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"De ulike periodene kan gå fra 01.01.2020 til 31.12.2022, 01.01.2021 til 31.12.2022 og 01.01.2020 til 31.12.2021"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Eksempelet viser også hvordan det er mulig å bruke ikon i periodene."),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.D8,{kompakt,...args,startDato:new Date("2021-01-01"),sluttDato:new Date("2021-12-31"),aktivRad,onSelectPeriode:periode=>{setAktivPeriode(periode),setRader((prevRader=>prevRader.map((rad=>rad.map((p=>({...p,active:periode.id===p.id})))))))}})),aktivPeriode&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,`${aktivPeriode.fom} - ${aktivPeriode.tom}`))};LongPeriodClickable.storyName="Klikkbar tidslinje med lange cropped perioder";const LongPeriodNotClickable=args=>{const[kompakt,settKompakt]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_ds_react__WEBPACK_IMPORTED_MODULE_3__.dO,{checked:kompakt,onClick:()=>settKompakt(!kompakt)},"Kompakt")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledContainer,{kompakt},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Perioder ikke klikkbare"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Eksempel på visning av perioder, som strekker seg utanfor startDato og sluttDato for tidslinjen. Start- og sluttdato for visning er 01.01.2021 og 31.12.2021."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"De ulike periodene kan gå fra 01.01.2020 til 31.12.2022, 01.01.2021 til 31.12.2022 og 01.01.2020 til 31.12.2021"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Eksempelet viser også hvordan det er mulig å bruke ikon i periodene."),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.D8,{kompakt,startDato:new Date("2021-01-01"),sluttDato:new Date("2021-12-31"),...args})))};LongPeriodNotClickable.storyName="Uklikkbar tidslinje med lange cropped perioder";const __namedExportsOrder=["LongPeriodClickable","LongPeriodNotClickable"];LongPeriodClickable.parameters={...LongPeriodClickable.parameters,docs:{...LongPeriodClickable.parameters?.docs,source:{originalSource:"(args: TidslinjeProps) => {\n  const [rader, setRader] = useState<Periode[][]>(args.rader);\n  const [aktivPeriode, setAktivPeriode] = useState<Periode>();\n  const [kompakt, settKompakt] = useState<boolean>(false);\n  const onSelectPeriode = (periode: Periode) => {\n    setAktivPeriode(periode);\n    setRader(prevRader => prevRader.map(rad => rad.map(p => ({\n      ...p,\n      active: periode.id === p.id\n    }))));\n  };\n  const aktivRad = aktivPeriode && rader.reduce((radIndex: number, rad: Periode[], i: number) => rad.find(({\n    id\n  }) => id === aktivPeriode.id) ? i : radIndex, undefined);\n  return <>\n            <div>\n                <Switch checked={kompakt} onClick={() => settKompakt(!kompakt)}>\n                    Kompakt\n                </Switch>\n            </div>\n            <StyledContainer kompakt={kompakt}>\n                <h2>Klikkbare perioder</h2>\n                <p>\n                    Eksempel på visning av perioder, som strekker seg utanfor startDato og sluttDato\n                    for tidslinjen. Start- og sluttdato for visning er 01.01.2021 og 31.12.2021.\n                </p>\n                <p>\n                    De ulike periodene kan gå fra 01.01.2020 til 31.12.2022, 01.01.2021 til\n                    31.12.2022 og 01.01.2020 til 31.12.2021\n                </p>\n                <p>Eksempelet viser også hvordan det er mulig å bruke ikon i periodene.</p>\n                <Tidslinje kompakt={kompakt} {...args} startDato={new Date('2021-01-01')} sluttDato={new Date('2021-12-31')} aktivRad={aktivRad} onSelectPeriode={onSelectPeriode} />\n            </StyledContainer>\n            {aktivPeriode && <div>{`${aktivPeriode.fom} - ${aktivPeriode.tom}`}</div>}\n        </>;\n}",...LongPeriodClickable.parameters?.docs?.source}}},LongPeriodNotClickable.parameters={...LongPeriodNotClickable.parameters,docs:{...LongPeriodNotClickable.parameters?.docs,source:{originalSource:"(args: TidslinjeProps) => {\n  const [kompakt, settKompakt] = useState<boolean>(false);\n  return <>\n            <div>\n                <Switch checked={kompakt} onClick={() => settKompakt(!kompakt)}>\n                    Kompakt\n                </Switch>\n            </div>\n            <StyledContainer kompakt={kompakt}>\n                <h2>Perioder ikke klikkbare</h2>\n                <p>\n                    Eksempel på visning av perioder, som strekker seg utanfor startDato og sluttDato\n                    for tidslinjen. Start- og sluttdato for visning er 01.01.2021 og 31.12.2021.\n                </p>\n                <p>\n                    De ulike periodene kan gå fra 01.01.2020 til 31.12.2022, 01.01.2021 til\n                    31.12.2022 og 01.01.2020 til 31.12.2021\n                </p>\n                <p>Eksempelet viser også hvordan det er mulig å bruke ikon i periodene.</p>\n                <Tidslinje kompakt={kompakt} startDato={new Date('2021-01-01')} sluttDato={new Date('2021-12-31')} {...args} />\n            </StyledContainer>\n        </>;\n}",...LongPeriodNotClickable.parameters?.docs?.source}}};try{LongPeriodClickable.displayName="LongPeriodClickable",LongPeriodClickable.__docgenInfo={description:"",displayName:"LongPeriodClickable",props:{rader:{defaultValue:null,description:"Perioder som rendres på tidslinjen. Rendres som 'button' dersom 'onSelectPeriode' er satt, ellers som en 'div'.\nHver liste av `Periode`-objekter representerer en egen rad i tidslinjen.",name:"rader",required:!0,type:{name:"Periode[][]"}},startDato:{defaultValue:null,description:"Bestemmer startpunktet for tidslinjen. Defaulter til tidligste dato blandt alle perioder i tidslinjen.",name:"startDato",required:!1,type:{name:"Date | undefined"}},sluttDato:{defaultValue:null,description:"Bestemmer sluttpunktet for tidslinjen. Defaulter til seneste dato blandt alle perioder i tidslinjen.",name:"sluttDato",required:!1,type:{name:"Date | undefined"}},onSelectPeriode:{defaultValue:null,description:"Handling som skal skje når en bruker klikker på/interagerer med en periodeknapp.",name:"onSelectPeriode",required:!1,type:{name:"((periode: Periode) => void) | undefined"}},aktivtUtsnitt:{defaultValue:null,description:"Utsnittet av tidslinjen som skal markeres som aktivt.",name:"aktivtUtsnitt",required:!1,type:{name:"EnkelPeriode | undefined"}},aktivRad:{defaultValue:null,description:"Raden som skal markeres som aktiv.",name:"aktivRad",required:!1,type:{name:"number | undefined"}},retning:{defaultValue:null,description:"Retningen periodene sorteres på. Default er 'stigende', hvor tidligste periode da vil rendres til venstre i\ntidslinjen og seneste periode vil rendres til høyre.",name:"retning",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stigende"'},{value:'"synkende"'}]}},etikettRender:{defaultValue:null,description:"Funksjon som tar en etikett og returnerer det som skal rendres.",name:"etikettRender",required:!1,type:{name:"((etikett: AxisLabel) => ReactNode) | undefined"}},pins:{defaultValue:null,description:"Markeringer for enkeltdager på tidslinjen.",name:"pins",required:!1,type:{name:"Pin[] | undefined"}},kompakt:{defaultValue:null,description:"Bruke kompakt style, med smalere stolper og uten margin.",name:"kompakt",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/TidslinjeLangePerioderCropped.stories.tsx#LongPeriodClickable"]={docgenInfo:LongPeriodClickable.__docgenInfo,name:"LongPeriodClickable",path:"packages/familie-tidslinje/TidslinjeLangePerioderCropped.stories.tsx#LongPeriodClickable"})}catch(__react_docgen_typescript_loader_error){}try{LongPeriodNotClickable.displayName="LongPeriodNotClickable",LongPeriodNotClickable.__docgenInfo={description:"",displayName:"LongPeriodNotClickable",props:{rader:{defaultValue:null,description:"Perioder som rendres på tidslinjen. Rendres som 'button' dersom 'onSelectPeriode' er satt, ellers som en 'div'.\nHver liste av `Periode`-objekter representerer en egen rad i tidslinjen.",name:"rader",required:!0,type:{name:"Periode[][]"}},startDato:{defaultValue:null,description:"Bestemmer startpunktet for tidslinjen. Defaulter til tidligste dato blandt alle perioder i tidslinjen.",name:"startDato",required:!1,type:{name:"Date | undefined"}},sluttDato:{defaultValue:null,description:"Bestemmer sluttpunktet for tidslinjen. Defaulter til seneste dato blandt alle perioder i tidslinjen.",name:"sluttDato",required:!1,type:{name:"Date | undefined"}},onSelectPeriode:{defaultValue:null,description:"Handling som skal skje når en bruker klikker på/interagerer med en periodeknapp.",name:"onSelectPeriode",required:!1,type:{name:"((periode: Periode) => void) | undefined"}},aktivtUtsnitt:{defaultValue:null,description:"Utsnittet av tidslinjen som skal markeres som aktivt.",name:"aktivtUtsnitt",required:!1,type:{name:"EnkelPeriode | undefined"}},aktivRad:{defaultValue:null,description:"Raden som skal markeres som aktiv.",name:"aktivRad",required:!1,type:{name:"number | undefined"}},retning:{defaultValue:null,description:"Retningen periodene sorteres på. Default er 'stigende', hvor tidligste periode da vil rendres til venstre i\ntidslinjen og seneste periode vil rendres til høyre.",name:"retning",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stigende"'},{value:'"synkende"'}]}},etikettRender:{defaultValue:null,description:"Funksjon som tar en etikett og returnerer det som skal rendres.",name:"etikettRender",required:!1,type:{name:"((etikett: AxisLabel) => ReactNode) | undefined"}},pins:{defaultValue:null,description:"Markeringer for enkeltdager på tidslinjen.",name:"pins",required:!1,type:{name:"Pin[] | undefined"}},kompakt:{defaultValue:null,description:"Bruke kompakt style, med smalere stolper og uten margin.",name:"kompakt",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/TidslinjeLangePerioderCropped.stories.tsx#LongPeriodNotClickable"]={docgenInfo:LongPeriodNotClickable.__docgenInfo,name:"LongPeriodNotClickable",path:"packages/familie-tidslinje/TidslinjeLangePerioderCropped.stories.tsx#LongPeriodNotClickable"})}catch(__react_docgen_typescript_loader_error){}}}]);