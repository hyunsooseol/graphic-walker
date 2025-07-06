import{j as r}from"./errorPage-xo6NVE17.js";import{E as p}from"./examplePage-oBjkgWcw.js";import{r as o}from"./index-idkmBupO.js";import{s as d}from"./student-chart-oD-2V0VD.js";import{s as c,K as l}from"./graphic-walker.es-pHXwfdOG.js";import{t as u}from"./examples-YIX5DgUL.js";import{u as m}from"./util-o8dAHcRh.js";import"./a11y-dark-4CYzpcyd.js";const f=`import { useContext, useState } from 'react';\r
import spec from '../specs/student-chart.json';\r
import { GraphicWalker, grayTheme, IChart } from '@kanaries/graphic-walker';\r
import { themeContext } from '../context';\r
import { useFetch, IDataSource } from '../util';\r
\r
export default function GraphicWalkerInModal() {\r
    const { theme } = useContext(themeContext);\r
    const { dataSource, fields } = useFetch<IDataSource>('https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json');\r
    const [open, setOpen] = useState(false);\r
\r
    return (\r
        <div>\r
            <button className="bg-slate-900 text-white px-4 py-2 rounded m-4" onClick={() => setOpen(true)}>\r
                Open\r
            </button>\r
            {open && (\r
                <div\r
                    onClick={() => setOpen(false)}\r
                    style={{\r
                        position: 'fixed',\r
                        inset: 0,\r
                        backdropFilter: 'blur(10px)',\r
                        zIndex: 9999,\r
                    }}\r
                >\r
                    <div\r
                        className="bg-white dark:bg-gray-950"\r
                        onClick={(e) => {\r
                            e.stopPropagation();\r
                            e.preventDefault();\r
                        }}\r
                        style={{\r
                            position: 'absolute',\r
                            borderRadius: 20,\r
                            border: '1px solid gray',\r
                            left: 80,\r
                            right: 80,\r
                            top: 80,\r
                            bottom: 80,\r
                            overflow: 'auto',\r
                            padding: 20,\r
                            boxSizing: 'border-box',\r
                        }}\r
                    >\r
                        <GraphicWalker uiTheme={grayTheme} fields={fields} data={dataSource} chart={spec as IChart[]} appearance={theme} />\r
                    </div>\r
                </div>\r
            )}\r
        </div>\r
    );\r
}\r
`;function h(){const{theme:a}=o.useContext(u),{dataSource:s,fields:i}=m("https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json"),[n,e]=o.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{className:"bg-slate-900 text-white px-4 py-2 rounded m-4",onClick:()=>e(!0),children:"Open"}),n&&r.jsx("div",{onClick:()=>e(!1),style:{position:"fixed",inset:0,backdropFilter:"blur(10px)",zIndex:9999},children:r.jsx("div",{className:"bg-white dark:bg-gray-950",onClick:t=>{t.stopPropagation(),t.preventDefault()},style:{position:"absolute",borderRadius:20,border:"1px solid gray",left:80,right:80,top:80,bottom:80,overflow:"auto",padding:20,boxSizing:"border-box"},children:r.jsx(c,{uiTheme:l,fields:i,data:s,chart:d,appearance:a})})})]})}function I(){return r.jsx(p,{name:"Graphic Walker In Modal",code:f,children:r.jsx(h,{})})}export{I as default};
