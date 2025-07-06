import{j as e}from"./errorPage-xo6NVE17.js";import{E as o}from"./examplePage-oBjkgWcw.js";import{r as s}from"./index-idkmBupO.js";import{t as n}from"./examples-YIX5DgUL.js";import{s as i}from"./graphic-walker.es-pHXwfdOG.js";import{u as c}from"./util-o8dAHcRh.js";import"./a11y-dark-4CYzpcyd.js";const m=`import { useContext } from 'react';\r
import { themeContext } from '../context';\r
import { GraphicWalker } from '@kanaries/graphic-walker';\r
import { IDataSource, useFetch } from '../util';\r
\r
export default function GraphicWalkerComponent() {\r
    const { theme } = useContext(themeContext);\r
    const { dataSource, fields } = useFetch<IDataSource>('https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json');\r
    return <GraphicWalker defaultRenderer="vega-lite" fields={fields} data={dataSource} appearance={theme} vizThemeConfig="g2" />;\r
}\r
`;function p(){const{theme:t}=s.useContext(n),{dataSource:r,fields:a}=c("https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json");return e.jsx(i,{defaultRenderer:"vega-lite",fields:a,data:r,appearance:t,vizThemeConfig:"g2"})}function v(){return e.jsx(o,{name:"Default Renderer",code:m,children:e.jsx(p,{})})}export{v as default};
