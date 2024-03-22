"use strict";(self.webpackChunkfamilie_felles_frontend=self.webpackChunkfamilie_felles_frontend||[]).push([[317],{"./packages/familie-sprakvelger/sprakvelger.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FamilieSprakvelger:()=>FamilieSprakvelger,SprakvelgerContainer:()=>SprakvelgerContainer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>sprakvelger_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./node_modules/react-aria-menubutton/dist/index.js");let LocaleType=function(LocaleType){return LocaleType.en="en",LocaleType.nb="nb",LocaleType.nn="nn",LocaleType}({});const sprakTittel={[LocaleType.en]:"English",[LocaleType.nb]:"Bokmål",[LocaleType.nn]:"Nynorsk"};var esm=__webpack_require__("./node_modules/@navikt/ds-react/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledListe=styled_components_browser_esm.ZP.ul`
    padding-left: 0;
    position: absolute;
    width: 100%;
    z-index: 100;
    margin-top: 0;

    :hover,
    :focus {
        outline: none;
    }

    li {
        list-style: none;
    }
`,StyledMenuItem=(0,styled_components_browser_esm.ZP)(dist.MenuItem)`
    padding: 0.5rem 1rem;
    background-color: #ffffff;
    border-bottom: 1px solid var(--a-gray-300);
    border-left: 1px solid var(--a-gray-300);
    border-right: 1px solid var(--a-gray-300);

    &:hover,
    &:focus {
        outline: none;
        background-color: var(--a-blue-500);
        color: #fff;
    }

    &:hover {
        cursor: pointer;
    }
`,SelectMenuItem=({locale})=>(0,jsx_runtime.jsx)("li",{value:locale,children:(0,jsx_runtime.jsx)(StyledMenuItem,{children:(0,jsx_runtime.jsx)(esm.NG,{size:"small",children:sprakTittel[locale]},locale)})});SelectMenuItem.displayName="SelectMenuItem";const SpråkSelectMenu=({støttedeSprak,valgtLocale})=>(0,jsx_runtime.jsx)(dist.Menu,{children:(0,jsx_runtime.jsx)(StyledListe,{children:støttedeSprak.map((locale=>locale!==valgtLocale&&(0,jsx_runtime.jsx)(SelectMenuItem,{locale},locale)))})});SpråkSelectMenu.displayName="SpråkSelectMenu";try{SpråkSelectMenu.displayName="SpråkSelectMenu",SpråkSelectMenu.__docgenInfo={description:"",displayName:"SpråkSelectMenu",props:{støttedeSprak:{defaultValue:null,description:"",name:"støttedeSprak",required:!0,type:{name:"LocaleType[]"}},valgtLocale:{defaultValue:null,description:"",name:"valgtLocale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"nb"'},{value:'"nn"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-sprakvelger/src/SpråkSelectMenu.tsx#SpråkSelectMenu"]={docgenInfo:SpråkSelectMenu.__docgenInfo,name:"SpråkSelectMenu",path:"packages/familie-sprakvelger/src/SpråkSelectMenu.tsx#SpråkSelectMenu"})}catch(__react_docgen_typescript_loader_error){}const SprakContext=(0,react.createContext)([LocaleType.nb,()=>{}]),useSprakContext=()=>(0,react.useContext)(SprakContext),SprakContext_SprakProvider=({defaultLocale,children})=>{const[valgtLocale,setValgtLocale]=(0,react.useState)(defaultLocale);return(0,jsx_runtime.jsx)(SprakContext.Provider,{value:[valgtLocale,setValgtLocale],children})};SprakContext_SprakProvider.displayName="SprakProvider";try{SprakContext_SprakProvider.displayName="SprakProvider",SprakContext_SprakProvider.__docgenInfo={description:"",displayName:"SprakProvider",props:{defaultLocale:{defaultValue:null,description:"",name:"defaultLocale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"nb"'},{value:'"nn"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-sprakvelger/src/SprakContext.tsx#SprakProvider"]={docgenInfo:SprakContext_SprakProvider.__docgenInfo,name:"SprakProvider",path:"packages/familie-sprakvelger/src/SprakContext.tsx#SprakProvider"})}catch(__react_docgen_typescript_loader_error){}var react_esm=__webpack_require__("./node_modules/@navikt/aksel-icons/dist/react/esm/index.js"),familie_form_elements_dist=__webpack_require__("./packages/familie-form-elements/dist/index.js");const hentSprakvelgerLabelTekst=locale=>{switch(locale){case LocaleType.en:return"Language selection";case LocaleType.nn:return"Språkval";default:return"Språkvalg"}},StyledWrapper=(0,styled_components_browser_esm.ZP)(dist.Wrapper)`
    position: relative;
    outline: none;
`,StyledButton=(0,styled_components_browser_esm.ZP)(dist.Button)`
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
    outline: none;
    border-radius: 0.25rem;
    border: 3px solid var(--a-gray-400);

    &:focus {
        border: solid 3px var(--a-blue-800);
    }
`,StyledNormalTekst=(0,styled_components_browser_esm.ZP)(esm.NG)`
    padding: 0 1.22rem;
    flex-grow: 1;
`,StyledCollapse=(0,styled_components_browser_esm.ZP)(react_esm.g8U)`
    z-index: -1;
`,StyledExpand=(0,styled_components_browser_esm.ZP)(react_esm.v4q)`
    z-index: -1;
`,Sprakvelger_Sprakvelger=({støttedeSprak,className})=>{const[valgtLocale,setValgtLocale]=useSprakContext(),[erÅpen,setErÅpen]=react.useState(!1);return(0,jsx_runtime.jsxs)(StyledWrapper,{onSelection:value=>(value=>{const valgtSprak=støttedeSprak.find((locale=>locale===value.key));valgtSprak&&setValgtLocale(valgtSprak)})(value),onMenuToggle:wrapperState=>setErÅpen(wrapperState.isOpen),className,children:[(0,jsx_runtime.jsx)(familie_form_elements_dist.Sf,{htmlFor:"språkvelger",children:hentSprakvelgerLabelTekst(valgtLocale)}),(0,jsx_runtime.jsxs)(StyledButton,{id:"språkvelger",value:valgtLocale,children:[(0,jsx_runtime.jsx)(react_esm.n9J,{role:"img",focusable:!1,"aria-hidden":!0,onResize:void 0,onResizeCapture:void 0}),(0,jsx_runtime.jsx)(StyledNormalTekst,{size:"small",children:sprakTittel[valgtLocale]}),erÅpen?(0,jsx_runtime.jsx)(StyledCollapse,{role:"img",focusable:!1,"aria-hidden":!0,onResize:void 0,onResizeCapture:void 0}):(0,jsx_runtime.jsx)(StyledExpand,{role:"img",focusable:!1,"aria-hidden":!0,onResize:void 0,onResizeCapture:void 0})]}),(0,jsx_runtime.jsx)(SpråkSelectMenu,{valgtLocale,støttedeSprak})]})};Sprakvelger_Sprakvelger.displayName="Sprakvelger";try{Sprakvelger_Sprakvelger.displayName="Sprakvelger",Sprakvelger_Sprakvelger.__docgenInfo={description:"",displayName:"Sprakvelger",props:{støttedeSprak:{defaultValue:null,description:"",name:"støttedeSprak",required:!0,type:{name:"LocaleType[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-sprakvelger/src/Sprakvelger.tsx#Sprakvelger"]={docgenInfo:Sprakvelger_Sprakvelger.__docgenInfo,name:"Sprakvelger",path:"packages/familie-sprakvelger/src/Sprakvelger.tsx#Sprakvelger"})}catch(__react_docgen_typescript_loader_error){}try{Sprakvelger.displayName="Sprakvelger",Sprakvelger.__docgenInfo={description:"",displayName:"Sprakvelger",props:{støttedeSprak:{defaultValue:null,description:"",name:"støttedeSprak",required:!0,type:{name:"LocaleType[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-sprakvelger/src/index.tsx#Sprakvelger"]={docgenInfo:Sprakvelger.__docgenInfo,name:"Sprakvelger",path:"packages/familie-sprakvelger/src/index.tsx#Sprakvelger"})}catch(__react_docgen_typescript_loader_error){}try{SprakProvider.displayName="SprakProvider",SprakProvider.__docgenInfo={description:"",displayName:"SprakProvider",props:{defaultLocale:{defaultValue:null,description:"",name:"defaultLocale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"nb"'},{value:'"nn"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-sprakvelger/src/index.tsx#SprakProvider"]={docgenInfo:SprakProvider.__docgenInfo,name:"SprakProvider",path:"packages/familie-sprakvelger/src/index.tsx#SprakProvider"})}catch(__react_docgen_typescript_loader_error){}const sprakvelger_stories={component:Sprakvelger_Sprakvelger,parameters:{storySource:{source:"import React from 'react';\nimport { Sprakvelger, LocaleType, SprakProvider, useSprakContext } from './src';\nimport styled from 'styled-components';\nimport { BodyShort } from '@navikt/ds-react';\n\nexport default {\n    component: Sprakvelger,\n    parameters: {\n        componentSubtitle: 'Kort tekst om komponenten',\n    },\n    title: 'Komponenter/Sprakvelger',\n};\n\nconst messages = {\n    en: {\n        greeting: 'Hey på engelsk',\n    },\n    nb: {\n        greeting: 'Hei på bokmål',\n    },\n    nn: {\n        greeting: 'Hei på nynorsk',\n    },\n};\n\nconst Wrapper = styled.div`\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n`;\n\nconst StyledSprakvelger = styled(Sprakvelger)`\n    color: green;\n    margin: auto;\n`;\n\nexport const SprakvelgerContainer: React.FC = ({ ...args }) => {\n    const [valgtLocale] = useSprakContext();\n    return (\n        <Wrapper>\n            <Sprakvelger støttedeSprak={[LocaleType.en, LocaleType.nn, LocaleType.nb]} {...args} />\n            <p>\n                <BodyShort>{messages[valgtLocale].greeting}</BodyShort>\n            </p>\n            <p>Den kan styles om ønskelig</p>\n            <StyledSprakvelger støttedeSprak={[LocaleType.en, LocaleType.nn, LocaleType.nb]} />\n        </Wrapper>\n    );\n};\n\nexport const FamilieSprakvelger: React.FC = ({ ...args }) => {\n    return (\n        <SprakProvider defaultLocale={LocaleType.en}>\n            <SprakvelgerContainer {...args} />\n        </SprakProvider>\n    );\n};\n\n// @ts-ignore\nFamilieSprakvelger.args = {\n    støttedeSprak: [LocaleType.en, LocaleType.nn, LocaleType.nb],\n};\n",locationsMap:{"sprakvelger-container":{startLoc:{col:46,line:37},endLoc:{col:1,line:49},startBody:{col:46,line:37},endBody:{col:1,line:49}},"familie-sprakvelger":{startLoc:{col:44,line:51},endLoc:{col:1,line:57},startBody:{col:44,line:51},endBody:{col:1,line:57}}}},componentSubtitle:"Kort tekst om komponenten"},title:"Komponenter/Sprakvelger"},messages={en:{greeting:"Hey på engelsk"},nb:{greeting:"Hei på bokmål"},nn:{greeting:"Hei på nynorsk"}},Wrapper=styled_components_browser_esm.ZP.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`,StyledSprakvelger=(0,styled_components_browser_esm.ZP)(Sprakvelger_Sprakvelger)`
    color: green;
    margin: auto;
`,SprakvelgerContainer=({...args})=>{const[valgtLocale]=useSprakContext();return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(Sprakvelger_Sprakvelger,{støttedeSprak:[LocaleType.en,LocaleType.nn,LocaleType.nb],...args}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(esm.NG,{children:messages[valgtLocale].greeting})}),(0,jsx_runtime.jsx)("p",{children:"Den kan styles om ønskelig"}),(0,jsx_runtime.jsx)(StyledSprakvelger,{støttedeSprak:[LocaleType.en,LocaleType.nn,LocaleType.nb]})]})};SprakvelgerContainer.displayName="SprakvelgerContainer";const FamilieSprakvelger=({...args})=>(0,jsx_runtime.jsx)(SprakContext_SprakProvider,{defaultLocale:LocaleType.en,children:(0,jsx_runtime.jsx)(SprakvelgerContainer,{...args})});FamilieSprakvelger.displayName="FamilieSprakvelger",FamilieSprakvelger.args={støttedeSprak:[LocaleType.en,LocaleType.nn,LocaleType.nb]},SprakvelgerContainer.parameters={...SprakvelgerContainer.parameters,docs:{...SprakvelgerContainer.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => {\n  const [valgtLocale] = useSprakContext();\n  return <Wrapper>\n            <Sprakvelger støttedeSprak={[LocaleType.en, LocaleType.nn, LocaleType.nb]} {...args} />\n            <p>\n                <BodyShort>{messages[valgtLocale].greeting}</BodyShort>\n            </p>\n            <p>Den kan styles om ønskelig</p>\n            <StyledSprakvelger støttedeSprak={[LocaleType.en, LocaleType.nn, LocaleType.nb]} />\n        </Wrapper>;\n}",...SprakvelgerContainer.parameters?.docs?.source}}},FamilieSprakvelger.parameters={...FamilieSprakvelger.parameters,docs:{...FamilieSprakvelger.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => {\n  return <SprakProvider defaultLocale={LocaleType.en}>\n            <SprakvelgerContainer {...args} />\n        </SprakProvider>;\n}",...FamilieSprakvelger.parameters?.docs?.source}}};const __namedExportsOrder=["SprakvelgerContainer","FamilieSprakvelger"];try{SprakvelgerContainer.displayName="SprakvelgerContainer",SprakvelgerContainer.__docgenInfo={description:"",displayName:"SprakvelgerContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-sprakvelger/sprakvelger.stories.tsx#SprakvelgerContainer"]={docgenInfo:SprakvelgerContainer.__docgenInfo,name:"SprakvelgerContainer",path:"packages/familie-sprakvelger/sprakvelger.stories.tsx#SprakvelgerContainer"})}catch(__react_docgen_typescript_loader_error){}try{FamilieSprakvelger.displayName="FamilieSprakvelger",FamilieSprakvelger.__docgenInfo={description:"",displayName:"FamilieSprakvelger",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/familie-sprakvelger/sprakvelger.stories.tsx#FamilieSprakvelger"]={docgenInfo:FamilieSprakvelger.__docgenInfo,name:"FamilieSprakvelger",path:"packages/familie-sprakvelger/sprakvelger.stories.tsx#FamilieSprakvelger"})}catch(__react_docgen_typescript_loader_error){}},"./packages/familie-form-elements/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T4:()=>FamilieInput,tX:()=>FamilieKnapp,Sf:()=>SkjultLabel});var esm=__webpack_require__("./node_modules/@navikt/ds-react/esm/index.js"),react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/classnames/index.js");var tokens=__webpack_require__("./node_modules/@navikt/ds-tokens/dist/tokens.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");styled_components_browser_esm.ZP.div`
    p:first-of-type {
        margin-top: ${tokens.kgQ};
    }
`;var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");const FamilieLesefelt_FamilieLesefelt=({className,label,verdi,size})=>react.createElement("div",{className},void 0!==label&&react.createElement(esm.__,{size},label),react.createElement(esm.NG,{size},verdi)),FamilieInput=(0,react.forwardRef)(((props,ref)=>{const{size,className,children,erLesevisning=!1,label,tekstLesevisning="Ingen opplysninger oppgitt.",value}=props,restProps=(0,tslib_es6._T)(props,["size","className","children","erLesevisning","label","tekstLesevisning","value"]);return erLesevisning?react.createElement(FamilieLesefelt_FamilieLesefelt,{size,className,label,verdi:""===value?tekstLesevisning:value}):react.createElement(esm.nv,Object.assign({size,className,label,value,ref},restProps),children)})),FamilieKnapp=_a=>{var{children,className,erLesevisning,loading,onClick,spinner,type}=_a,props=(0,tslib_es6._T)(_a,["children","className","erLesevisning","loading","onClick","spinner","type"]);return erLesevisning?null:react.createElement(esm.zx,Object.assign({className,onClick,loading:spinner||loading,type},props),children)};styled_components_browser_esm.ZP.div`
    padding-right: 0.5em;
`,styled_components_browser_esm.ZP.div`
    padding-right: 1.5em;
`,styled_components_browser_esm.ZP.div`
    display: flex;
    flex-direction: 'row';
    flex-wrap: wrap;
`;__webpack_require__("./node_modules/react-select/creatable/dist/react-select-creatable.esm.js");styled_components_browser_esm.ZP.div`
    margin-bottom: 1rem;
`,(0,styled_components_browser_esm.ZP)(esm.Bc)`
    margin-top: 0.5rem;
`;const StyledLabel=(0,styled_components_browser_esm.ZP)(esm.__)`
    position: absolute;
    clip: rect(0 0 0 0);
`,SkjultLabel=({htmlFor,children})=>react.createElement(StyledLabel,{htmlFor},children);var typer_ESvar;!function(ESvar){ESvar.JA="JA",ESvar.NEI="NEI",ESvar.VET_IKKE="VET_IKKE"}(typer_ESvar||(typer_ESvar={}));(0,styled_components_browser_esm.ZP)(esm.Ee)`
    && label:not(:last-child) {
        margin-bottom: 1rem;
    }
`,styled_components_browser_esm.ZP.span`
    ::first-letter {
        text-transform: capitalize;
    }
`}}]);
//# sourceMappingURL=familie-sprakvelger-sprakvelger-stories.aff02892.iframe.bundle.js.map