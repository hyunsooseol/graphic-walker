import{j as e}from"./errorPage-xo6NVE17.js";import{E as h}from"./examplePage-oBjkgWcw.js";import{r as c}from"./index-idkmBupO.js";import{s as x}from"./graphic-walker.es-pHXwfdOG.js";import{t as v}from"./examples-YIX5DgUL.js";import{u as b}from"./util-o8dAHcRh.js";import"./a11y-dark-4CYzpcyd.js";const w=`import { useContext, useRef, useState } from 'react';\r
import { GraphicWalker, IGWHandler } from '@kanaries/graphic-walker';\r
import { themeContext } from '../context';\r
import { IDataSource, useFetch } from '../util';\r
\r
export default function ExportChartExample() {\r
    const { theme } = useContext(themeContext);\r
    const { dataSource, fields } = useFetch<IDataSource>('https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json');\r
    const gwRef = useRef<IGWHandler>(null);\r
    const [type, setType] = useState<'png' | 'svg'>('png');\r
\r
    const download = async () => {\r
        if (!gwRef.current) return;\r
        if (type === 'svg') {\r
            const res = await gwRef.current.exportChart('svg');\r
            const d = res.charts[0]?.data;\r
            if (d) {\r
                const blob = new Blob([d], { type: 'image/svg+xml' });\r
                const url = URL.createObjectURL(blob);\r
                const a = document.createElement('a');\r
                a.href = url;\r
                a.download = \`\${res.title || 'chart'}.svg\`;\r
                a.click();\r
                URL.revokeObjectURL(url);\r
            }\r
        } else {\r
            const res = await gwRef.current.exportChart('data-url');\r
            const d = res.charts[0]?.data;\r
            if (d) {\r
                const a = document.createElement('a');\r
                a.href = d.replace(/^data:image\\/[^;]/, 'data:application/octet-stream');\r
                a.download = \`\${res.title || 'chart'}.png\`;\r
                a.click();\r
            }\r
        }\r
    };\r
\r
    return (\r
        <div className="flex flex-col gap-2">\r
            <div className="flex gap-2 m-2 items-center">\r
                <select\r
                    value={type}\r
                    onChange={(e) => setType(e.target.value as 'png' | 'svg')}\r
                    className="h-9 px-2 py-1 border rounded-md bg-white dark:bg-gray-950 text-gray-900 dark:text-white"\r
                >\r
                    <option value="png">PNG</option>\r
                    <option value="svg">SVG</option>\r
                </select>\r
                <button\r
                    onClick={download}\r
                    className="h-9 px-4 py-2 bg-zinc-950 text-white shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"\r
                >\r
                    Download\r
                </button>\r
            </div>\r
            <GraphicWalker ref={gwRef} fields={fields} data={dataSource} appearance={theme} vizThemeConfig="g2" />\r
        </div>\r
    );\r
}\r
`;function y(){const{theme:p}=c.useContext(v),{dataSource:u,fields:m}=b("https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json"),s=c.useRef(null),[i,f]=c.useState("png"),g=async()=>{var o,l;if(s.current)if(i==="svg"){const t=await s.current.exportChart("svg"),r=(o=t.charts[0])==null?void 0:o.data;if(r){const a=new Blob([r],{type:"image/svg+xml"}),d=URL.createObjectURL(a),n=document.createElement("a");n.href=d,n.download=`${t.title||"chart"}.svg`,n.click(),URL.revokeObjectURL(d)}}else{const t=await s.current.exportChart("data-url"),r=(l=t.charts[0])==null?void 0:l.data;if(r){const a=document.createElement("a");a.href=r.replace(/^data:image\/[^;]/,"data:application/octet-stream"),a.download=`${t.title||"chart"}.png`,a.click()}}};return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex gap-2 m-2 items-center",children:[e.jsxs("select",{value:i,onChange:o=>f(o.target.value),className:"h-9 px-2 py-1 border rounded-md bg-white dark:bg-gray-950 text-gray-900 dark:text-white",children:[e.jsx("option",{value:"png",children:"PNG"}),e.jsx("option",{value:"svg",children:"SVG"})]}),e.jsx("button",{onClick:g,className:"h-9 px-4 py-2 bg-zinc-950 text-white shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",children:"Download"})]}),e.jsx(x,{ref:s,fields:m,data:u,appearance:p,vizThemeConfig:"g2"})]})}function G(){return e.jsx(h,{name:"Export Chart",code:w,children:e.jsx(y,{})})}export{G as default};
