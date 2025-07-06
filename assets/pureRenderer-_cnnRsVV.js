import{j as t}from"./errorPage-xo6NVE17.js";import{E as a}from"./examplePage-oBjkgWcw.js";import{r as s}from"./index-idkmBupO.js";import{t as n}from"./examples-YIX5DgUL.js";import{s as c}from"./student-chart-oD-2V0VD.js";import{l as u}from"./graphic-walker.es-pHXwfdOG.js";import{u as m}from"./util-o8dAHcRh.js";import"./a11y-dark-4CYzpcyd.js";const p=`import { useContext } from 'react';\r
import { themeContext } from '../context';\r
import spec from '../specs/student-chart.json';\r
import { IChart, PureRenderer } from '@kanaries/graphic-walker';\r
import { useFetch, IDataSource } from '../util';\r
\r
export default function PureRendererComponent() {\r
    const { theme } = useContext(themeContext);\r
    const { dataSource } = useFetch<IDataSource>('https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json');\r
\r
    const chart = spec[0] as IChart;\r
\r
    return (\r
        <PureRenderer type="local" rawData={dataSource} visualConfig={chart.config} visualState={chart.encodings} visualLayout={chart.layout} appearance={theme} />\r
    );\r
}\r
`;function i(){const{theme:r}=s.useContext(n),{dataSource:o}=m("https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json"),e=c[0];return t.jsx(u,{type:"local",rawData:o,visualConfig:e.config,visualState:e.encodings,visualLayout:e.layout,appearance:r})}function g(){return t.jsx(a,{name:"Pure Renderer Example",code:p,children:t.jsx(i,{})})}export{g as default};
