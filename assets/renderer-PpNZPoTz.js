import{j as e}from"./errorPage-xo6NVE17.js";import{E as i}from"./examplePage-oBjkgWcw.js";import{r as t}from"./index-idkmBupO.js";import{s as p}from"./student-chart-filter-6m5HoWCd.js";import{P as l}from"./graphic-walker.es-pHXwfdOG.js";import{t as d}from"./examples-YIX5DgUL.js";import{u}from"./util-o8dAHcRh.js";import"./a11y-dark-4CYzpcyd.js";const m=`import { useContext, useState } from 'react';\r
import spec from '../specs/student-chart-filter.json';\r
import { GraphicRenderer, IChart } from '@kanaries/graphic-walker';\r
import { themeContext } from '../context';\r
import { useFetch, IDataSource } from '../util';\r
\r
export default function GraphicWalkerComponent() {\r
    const { theme } = useContext(themeContext);\r
    const { dataSource, fields } = useFetch<IDataSource>('https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json');\r
    const [renderer, setRenderer] = useState<'vega-lite' | 'observable-plot'>('vega-lite');\r
\r
    return (\r
        <div className="space-y-2">\r
            <select value={renderer} onChange={(e) => setRenderer(e.target.value as 'vega-lite' | 'observable-plot')}>\r
                <option value="vega-lite">VegaLite</option>\r
                <option value="observable-plot">Observable Plot</option>\r
            </select>\r
            <GraphicRenderer\r
                fields={fields}\r
                chart={spec as IChart[]}\r
                data={dataSource}\r
                appearance={theme}\r
                defaultRenderer={renderer}\r
            />\r
        </div>\r
    );\r
}\r
`;function f(){const{theme:a}=t.useContext(d),{dataSource:o,fields:s}=u("https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json"),[r,n]=t.useState("vega-lite");return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("select",{value:r,onChange:c=>n(c.target.value),children:[e.jsx("option",{value:"vega-lite",children:"VegaLite"}),e.jsx("option",{value:"observable-plot",children:"Observable Plot"})]}),e.jsx(l,{fields:s,chart:p,data:o,appearance:a,defaultRenderer:r})]})}function S(){return e.jsx(i,{name:"Graphic Renderer",code:m,children:e.jsx(f,{})})}export{S as default};
