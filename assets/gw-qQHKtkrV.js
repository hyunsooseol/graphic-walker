import{j as e}from"./errorPage-xo6NVE17.js";import{E as a}from"./examplePage-oBjkgWcw.js";import{r as s}from"./index-idkmBupO.js";import{t as n}from"./examples-YIX5DgUL.js";import{s as c}from"./graphic-walker.es-pHXwfdOG.js";import{u as m}from"./util-o8dAHcRh.js";import"./a11y-dark-4CYzpcyd.js";const i=`import { useContext } from 'react';\r
import { themeContext } from '../context';\r
import { GraphicWalker } from '@kanaries/graphic-walker';\r
import { IDataSource, useFetch } from '../util';\r
\r
export default function GraphicWalkerComponent() {\r
    const { theme } = useContext(themeContext);\r
    const { dataSource, fields } = useFetch<IDataSource>('https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json');\r
    return <GraphicWalker fields={fields} data={dataSource} appearance={theme} vizThemeConfig="g2" />;\r
}\r
`;function p(){const{theme:t}=s.useContext(n),{dataSource:r,fields:o}=m("https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json");return e.jsx(c,{fields:o,data:r,appearance:t,vizThemeConfig:"g2"})}function k(){return e.jsx(a,{name:"Graphic Walker Example",code:i,children:e.jsx(p,{})})}export{k as default};
