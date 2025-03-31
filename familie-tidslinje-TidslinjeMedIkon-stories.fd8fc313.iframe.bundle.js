"use strict";(self.webpackChunkfamilie_felles_frontend=self.webpackChunkfamilie_felles_frontend||[]).push([[505],{"./packages/familie-tidslinje/TidslinjeMedIkon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ClickableWithIcon:()=>ClickableWithIcon,NotClickableWithIcon:()=>NotClickableWithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/familie-tidslinje/src/index.ts"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/@navikt/ds-css/dist/index.css"),__webpack_require__("./node_modules/@navikt/aksel-icons/dist/react/esm/index.js")),_navikt_ds_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@navikt/ds-react/esm/index.js");const TidlinjeContainer=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
    & div.tidslinje .eøs {
        background-color: yellow;
    }
`,StyledEu=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_3__.Jc6)`
    margin-right: 0.3rem;
`,StyledNorwegian=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(_navikt_aksel_icons__WEBPACK_IMPORTED_MODULE_3__.YTB)`
    margin-right: 0.3rem;
`,__WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Tidslinje",component:_src__WEBPACK_IMPORTED_MODULE_1__.D8,args:{rader:[[{id:"123",fom:new Date("2020-01-01"),tom:new Date("2020-01-31"),status:"suksess",infoPin:!1,className:"eøs",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledEu,{height:"24",width:"24",style:{position:"relative",top:"-1px"}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:{position:"relative",top:"-6px"}},"Dette er ein lang tekst for testing")),hoverLabel:"Dette er ein lang tekst for testing"},{id:"234",fom:new Date("2020-02-01"),tom:new Date("2020-02-29"),status:"feil",className:"eøs",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledEu,null)},{id:"345",fom:new Date("2020-03-01"),tom:new Date("2020-03-31"),status:"suksess",className:"norge",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledNorwegian,{height:"24",width:"24",style:{color:"var(--a-orange-600)",position:"relative",top:"-1px"}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_ds_react__WEBPACK_IMPORTED_MODULE_4__.kZ,{size:"small",style:{display:"inline",position:"relative",top:"-8px"}},"Dette er ein lang tekst for testing"))},{id:"456",fom:new Date("2020-07-01"),tom:new Date("2020-07-31"),status:"suksess",className:"norge",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledNorwegian,{height:"24",width:"24"})},{id:"567",fom:new Date("2020-08-01"),tom:new Date("2020-08-31"),status:"advarsel"}]],pins:[{date:new Date("2020-03-15"),render:"Dette er en pin"}]}},ClickableWithIcon=args=>{const[rader,setRader]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(args.rader),[aktivPeriode,setAktivPeriode]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[kompakt,settKompakt]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),aktivRad=aktivPeriode&&rader.reduce(((radIndex,rad,i)=>rad.find((({id})=>id===aktivPeriode.id))?i:radIndex),void 0);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_ds_react__WEBPACK_IMPORTED_MODULE_4__.dO,{checked:kompakt,onClick:()=>settKompakt(!kompakt)},"Kompakt")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(TidlinjeContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Klikkbare perioder"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Eksempel på muligheten for litt mer avansert innhold med blanding av ikon og tekst. Også eksempel på egne klasser på perioder."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Styling må tilpasses bruken."),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.D8,{kompakt,...args,aktivRad,onSelectPeriode:periode=>{setAktivPeriode(periode),setRader((rader=>rader.map((rad=>rad.map((p=>({...p,active:periode.id===p.id})))))))}})),aktivPeriode&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,`${aktivPeriode.fom} - ${aktivPeriode.tom}`))};ClickableWithIcon.storyName="Klikkbar tidslinje med ikon";const NotClickableWithIcon=args=>{const[kompakt,settKompakt]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navikt_ds_react__WEBPACK_IMPORTED_MODULE_4__.dO,{checked:kompakt,onClick:()=>settKompakt(!kompakt)},"Kompakt")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Perioder ikke klikkbare"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Eksempel på muligheten for litt mer avansert innhold med blanding av ikon og tekst. Også eksempel på egne klasser på perioder."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Styling må tilpasses bruken."),react__WEBPACK_IMPORTED_MODULE_0__.createElement(TidlinjeContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.D8,{kompakt,...args})))};NotClickableWithIcon.storyName="Uklikkbar tidslinje med ikon";const __namedExportsOrder=["ClickableWithIcon","NotClickableWithIcon"];ClickableWithIcon.parameters={...ClickableWithIcon.parameters,docs:{...ClickableWithIcon.parameters?.docs,source:{originalSource:"(args: TidslinjeProps) => {\n  const [rader, setRader] = useState<Periode[][]>(args.rader);\n  const [aktivPeriode, setAktivPeriode] = useState<Periode>();\n  const [kompakt, settKompakt] = useState<boolean>(false);\n  const onSelectPeriode = (periode: Periode) => {\n    setAktivPeriode(periode);\n    setRader(rader => rader.map(rad => rad.map(p => ({\n      ...p,\n      active: periode.id === p.id\n    }))));\n  };\n  const aktivRad = aktivPeriode && rader.reduce((radIndex: number, rad: Periode[], i: number) => rad.find(({\n    id\n  }) => id === aktivPeriode.id) ? i : radIndex, undefined);\n  return <>\n            <div>\n                <Switch checked={kompakt} onClick={() => settKompakt(!kompakt)}>\n                    Kompakt\n                </Switch>\n            </div>\n            <TidlinjeContainer>\n                <h2>Klikkbare perioder</h2>\n                <p>\n                    Eksempel på muligheten for litt mer avansert innhold med blanding av ikon og\n                    tekst. Også eksempel på egne klasser på perioder.\n                </p>\n                <p>Styling må tilpasses bruken.</p>\n                <Tidslinje kompakt={kompakt} {...args} aktivRad={aktivRad} onSelectPeriode={onSelectPeriode} />\n            </TidlinjeContainer>\n            {aktivPeriode && <div>{`${aktivPeriode.fom} - ${aktivPeriode.tom}`}</div>}\n        </>;\n}",...ClickableWithIcon.parameters?.docs?.source}}},NotClickableWithIcon.parameters={...NotClickableWithIcon.parameters,docs:{...NotClickableWithIcon.parameters?.docs,source:{originalSource:"(args: TidslinjeProps) => {\n  const [kompakt, settKompakt] = useState<boolean>(false);\n  return <>\n            <div>\n                <Switch checked={kompakt} onClick={() => settKompakt(!kompakt)}>\n                    Kompakt\n                </Switch>\n            </div>\n            <h2>Perioder ikke klikkbare</h2>\n            <p>\n                Eksempel på muligheten for litt mer avansert innhold med blanding av ikon og tekst.\n                Også eksempel på egne klasser på perioder.\n            </p>\n            <p>Styling må tilpasses bruken.</p>\n            <TidlinjeContainer>\n                <Tidslinje kompakt={kompakt} {...args} />\n            </TidlinjeContainer>\n        </>;\n}",...NotClickableWithIcon.parameters?.docs?.source}}};try{ClickableWithIcon.displayName="ClickableWithIcon",ClickableWithIcon.__docgenInfo={description:"",displayName:"ClickableWithIcon",props:{rader:{defaultValue:null,description:"Perioder som rendres på tidslinjen. Rendres som 'button' dersom 'onSelectPeriode' er satt, ellers som en 'div'.\nHver liste av `Periode`-objekter representerer en egen rad i tidslinjen.",name:"rader",required:!0,type:{name:"Periode[][]"}},startDato:{defaultValue:null,description:"Bestemmer startpunktet for tidslinjen. Defaulter til tidligste dato blandt alle perioder i tidslinjen.",name:"startDato",required:!1,type:{name:"Date | undefined"}},sluttDato:{defaultValue:null,description:"Bestemmer sluttpunktet for tidslinjen. Defaulter til seneste dato blandt alle perioder i tidslinjen.",name:"sluttDato",required:!1,type:{name:"Date | undefined"}},onSelectPeriode:{defaultValue:null,description:"Handling som skal skje når en bruker klikker på/interagerer med en periodeknapp.",name:"onSelectPeriode",required:!1,type:{name:"((periode: Periode) => void) | undefined"}},aktivtUtsnitt:{defaultValue:null,description:"Utsnittet av tidslinjen som skal markeres som aktivt.",name:"aktivtUtsnitt",required:!1,type:{name:"EnkelPeriode | undefined"}},aktivRad:{defaultValue:null,description:"Raden som skal markeres som aktiv.",name:"aktivRad",required:!1,type:{name:"number | undefined"}},retning:{defaultValue:null,description:"Retningen periodene sorteres på. Default er 'stigende', hvor tidligste periode da vil rendres til venstre i\ntidslinjen og seneste periode vil rendres til høyre.",name:"retning",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stigende"'},{value:'"synkende"'}]}},etikettRender:{defaultValue:null,description:"Funksjon som tar en etikett og returnerer det som skal rendres.",name:"etikettRender",required:!1,type:{name:"((etikett: AxisLabel) => ReactNode) | undefined"}},pins:{defaultValue:null,description:"Markeringer for enkeltdager på tidslinjen.",name:"pins",required:!1,type:{name:"Pin[] | undefined"}},kompakt:{defaultValue:null,description:"Bruke kompakt style, med smalere stolper og uten margin.",name:"kompakt",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/TidslinjeMedIkon.stories.tsx#ClickableWithIcon"]={docgenInfo:ClickableWithIcon.__docgenInfo,name:"ClickableWithIcon",path:"packages/familie-tidslinje/TidslinjeMedIkon.stories.tsx#ClickableWithIcon"})}catch(__react_docgen_typescript_loader_error){}try{NotClickableWithIcon.displayName="NotClickableWithIcon",NotClickableWithIcon.__docgenInfo={description:"",displayName:"NotClickableWithIcon",props:{rader:{defaultValue:null,description:"Perioder som rendres på tidslinjen. Rendres som 'button' dersom 'onSelectPeriode' er satt, ellers som en 'div'.\nHver liste av `Periode`-objekter representerer en egen rad i tidslinjen.",name:"rader",required:!0,type:{name:"Periode[][]"}},startDato:{defaultValue:null,description:"Bestemmer startpunktet for tidslinjen. Defaulter til tidligste dato blandt alle perioder i tidslinjen.",name:"startDato",required:!1,type:{name:"Date | undefined"}},sluttDato:{defaultValue:null,description:"Bestemmer sluttpunktet for tidslinjen. Defaulter til seneste dato blandt alle perioder i tidslinjen.",name:"sluttDato",required:!1,type:{name:"Date | undefined"}},onSelectPeriode:{defaultValue:null,description:"Handling som skal skje når en bruker klikker på/interagerer med en periodeknapp.",name:"onSelectPeriode",required:!1,type:{name:"((periode: Periode) => void) | undefined"}},aktivtUtsnitt:{defaultValue:null,description:"Utsnittet av tidslinjen som skal markeres som aktivt.",name:"aktivtUtsnitt",required:!1,type:{name:"EnkelPeriode | undefined"}},aktivRad:{defaultValue:null,description:"Raden som skal markeres som aktiv.",name:"aktivRad",required:!1,type:{name:"number | undefined"}},retning:{defaultValue:null,description:"Retningen periodene sorteres på. Default er 'stigende', hvor tidligste periode da vil rendres til venstre i\ntidslinjen og seneste periode vil rendres til høyre.",name:"retning",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"stigende"'},{value:'"synkende"'}]}},etikettRender:{defaultValue:null,description:"Funksjon som tar en etikett og returnerer det som skal rendres.",name:"etikettRender",required:!1,type:{name:"((etikett: AxisLabel) => ReactNode) | undefined"}},pins:{defaultValue:null,description:"Markeringer for enkeltdager på tidslinjen.",name:"pins",required:!1,type:{name:"Pin[] | undefined"}},kompakt:{defaultValue:null,description:"Bruke kompakt style, med smalere stolper og uten margin.",name:"kompakt",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-tidslinje/TidslinjeMedIkon.stories.tsx#NotClickableWithIcon"]={docgenInfo:NotClickableWithIcon.__docgenInfo,name:"NotClickableWithIcon",path:"packages/familie-tidslinje/TidslinjeMedIkon.stories.tsx#NotClickableWithIcon"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=familie-tidslinje-TidslinjeMedIkon-stories.fd8fc313.iframe.bundle.js.map