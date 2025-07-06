import{j as n}from"./errorPage-xo6NVE17.js";import{E as h}from"./examplePage-oBjkgWcw.js";import{r as l}from"./index-idkmBupO.js";import{a as w,r as v}from"./graphic-walker.es-pHXwfdOG.js";import{t as g}from"./examples-YIX5DgUL.js";import{u as j}from"./util-o8dAHcRh.js";import"./a11y-dark-4CYzpcyd.js";const y=`import { useContext, useRef } from 'react';\r
import { getComputation, IVisFilter, TableWalker } from '@kanaries/graphic-walker';\r
import { themeContext } from '../context';\r
import { useFetch, IDataSource } from '../util';\r
\r
export default function GraphicWalkerComponent() {\r
    const { theme } = useContext(themeContext);\r
    const { dataSource, fields } = useFetch<IDataSource>('https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json');\r
    const tableRef = useRef<{ getFilters: () => IVisFilter[] }>(null);\r
\r
    const downloadCSV = async () => {\r
        const filters = tableRef.current?.getFilters() ?? [];\r
\r
        // or use a remote computation service\r
        // const computation = async (workflow) => fetch(endPoint, { body: JSON.stringify(workflow) }).then(resp => resp.json())\r
        const computation = getComputation(dataSource);\r
\r
        const result = await computation({\r
            workflow: [\r
                { type: 'filter', filters },\r
                {\r
                    type: 'view',\r
                    query: [\r
                        {\r
                            op: 'raw',\r
                            fields: fields.map((x) => x.fid),\r
                        },\r
                    ],\r
                },\r
            ],\r
        });\r
\r
        const header = fields.map((x) => x.name).join(',');\r
        const data = result\r
            .map((row) =>\r
                fields\r
                    .map((x) => row[x.fid] ?? '')\r
                    .map((x) => (typeof x === 'string' ? \`"\${x}"\` : \`\${x}\`))\r
                    .join(',')\r
            )\r
            .join('\\n');\r
        const blob = new Blob([header + '\\n' + data], { type: 'text/csv' });\r
        const url = URL.createObjectURL(blob);\r
        const a = document.createElement('a');\r
        a.href = url;\r
        a.download = \`Student.csv\`;\r
        a.click();\r
        URL.revokeObjectURL(url);\r
    };\r
\r
    return (\r
        <div className="flex flex-col gap-2">\r
            <button\r
                onClick={downloadCSV}\r
                className="h-9 px-4 py-2 w-fit m-2 bg-zinc-950 text-white shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"\r
            >\r
                Export CSV\r
            </button>\r
            <TableWalker tableFilterRef={tableRef} fields={fields} data={dataSource} appearance={theme} pageSize={50} vizThemeConfig="g2" />\r
        </div>\r
    );\r
}\r
`;function C(){const{theme:p}=l.useContext(g),{dataSource:a,fields:r}=j("https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json"),s=l.useRef(null),d=async()=>{var c;const f=((c=s.current)==null?void 0:c.getFilters())??[],m=await v(a)({workflow:[{type:"filter",filters:f},{type:"view",query:[{op:"raw",fields:r.map(e=>e.fid)}]}]}),u=r.map(e=>e.name).join(","),b=m.map(e=>r.map(t=>e[t.fid]??"").map(t=>typeof t=="string"?`"${t}"`:`${t}`).join(",")).join(`
`),x=new Blob([u+`
`+b],{type:"text/csv"}),i=URL.createObjectURL(x),o=document.createElement("a");o.href=i,o.download="Student.csv",o.click(),URL.revokeObjectURL(i)};return n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("button",{onClick:d,className:"h-9 px-4 py-2 w-fit m-2 bg-zinc-950 text-white shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",children:"Export CSV"}),n.jsx(w,{tableFilterRef:s,fields:r,data:a,appearance:p,pageSize:50,vizThemeConfig:"g2"})]})}function z(){return n.jsx(h,{name:"TableWalker",code:y,children:n.jsx(C,{})})}export{z as default};
