import{j as e}from"./errorPage-xo6NVE17.js";import{E as d}from"./examplePage-oBjkgWcw.js";import{r as n}from"./index-idkmBupO.js";import{s as c}from"./student-chart-oD-2V0VD.js";import{s as o}from"./student-chart-filter-6m5HoWCd.js";import{i as l,b as i,n as s,c as m}from"./graphic-walker.es-pHXwfdOG.js";import{t as p}from"./examples-YIX5DgUL.js";import{u as g}from"./util-o8dAHcRh.js";import"./a11y-dark-4CYzpcyd.js";const f=`import { useContext } from 'react';\r
import spec from '../specs/student-chart.json';\r
import spec2 from '../specs/student-chart-filter.json';\r
\r
import { Chart, ComputationProvider, IAggregator, IChart, SelectFilter, useAggergateValue } from '@kanaries/graphic-walker';\r
import { themeContext } from '../context';\r
import { useFetch, IDataSource } from '../util';\r
\r
function StatCard(props: { title: string; fid: string; agg: IAggregator }) {\r
    const data = useAggergateValue(props.fid, props.agg);\r
    return (\r
        <div className="rounded-xl border bg-card text-card-foreground shadow">\r
            <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">\r
                <div className="text-sm font-medium leading-none tracking-tight">{props.title}</div>\r
            </div>\r
            <div className="p-6 pt-0">\r
                <div className="text-2xl font-bold">{data}</div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
export default function GraphicWalkerComponent() {\r
    const { theme } = useContext(themeContext);\r
    const { dataSource } = useFetch<IDataSource>('https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json');\r
\r
    return (\r
        <ComputationProvider data={dataSource}>\r
            <div className="flex flex-col gap-2 p-2">\r
                <div className="w-full flex justify-end">\r
                    <div className="w-[300px]">\r
                        <SelectFilter fid="race/ethnicity" name="race/ethnicity" />\r
                    </div>\r
                    <div className="w-[300px]">\r
                        <SelectFilter fid="parental level of education" name="parental level of education" />\r
                    </div>\r
                </div>\r
                <div className="grid grid-cols-3 gap-2">\r
                    <StatCard agg="mean" fid="math score" title="Mean Math score" />\r
                    <StatCard agg="mean" fid="reading score" title="Mean Reading score" />\r
                    <StatCard agg="mean" fid="writing score" title="Mean Writing score" />\r
                </div>\r
                <div className="grid grid-cols-2 gap-2">\r
                    <div className="rounded-xl border bg-card text-card-foreground shadow">\r
                        <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">\r
                            <div className="font-medium leading-none tracking-tight">Scores by gender</div>\r
                        </div>\r
                        <div className="h-96 p-2">\r
                            <Chart overrideSize={{ mode: 'full', height: 1, width: 1 }} chart={spec[0] as IChart} appearance={theme} />\r
                        </div>\r
                    </div>\r
                    <div className="rounded-xl border bg-card text-card-foreground shadow">\r
                        <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">\r
                            <div className="font-medium leading-none tracking-tight">Score by group and lunch</div>\r
                        </div>\r
                        <div className="h-96 p-2">\r
                            <Chart overrideSize={{ mode: 'full', height: 1, width: 1 }} chart={spec2[0] as IChart} appearance={theme} />\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </ComputationProvider>\r
    );\r
}\r
`;function t(r){const a=m(r.fid,r.agg);return e.jsxs("div",{className:"rounded-xl border bg-card text-card-foreground shadow",children:[e.jsx("div",{className:"p-6 flex flex-row items-center justify-between space-y-0 pb-2",children:e.jsx("div",{className:"text-sm font-medium leading-none tracking-tight",children:r.title})}),e.jsx("div",{className:"p-6 pt-0",children:e.jsx("div",{className:"text-2xl font-bold",children:a})})]})}function h(){const{theme:r}=n.useContext(p),{dataSource:a}=g("https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json");return e.jsx(l,{data:a,children:e.jsxs("div",{className:"flex flex-col gap-2 p-2",children:[e.jsxs("div",{className:"w-full flex justify-end",children:[e.jsx("div",{className:"w-[300px]",children:e.jsx(i,{fid:"race/ethnicity",name:"race/ethnicity"})}),e.jsx("div",{className:"w-[300px]",children:e.jsx(i,{fid:"parental level of education",name:"parental level of education"})})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx(t,{agg:"mean",fid:"math score",title:"Mean Math score"}),e.jsx(t,{agg:"mean",fid:"reading score",title:"Mean Reading score"}),e.jsx(t,{agg:"mean",fid:"writing score",title:"Mean Writing score"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"rounded-xl border bg-card text-card-foreground shadow",children:[e.jsx("div",{className:"p-6 flex flex-row items-center justify-between space-y-0 pb-2",children:e.jsx("div",{className:"font-medium leading-none tracking-tight",children:"Scores by gender"})}),e.jsx("div",{className:"h-96 p-2",children:e.jsx(s,{overrideSize:{mode:"full",height:1,width:1},chart:c[0],appearance:r})})]}),e.jsxs("div",{className:"rounded-xl border bg-card text-card-foreground shadow",children:[e.jsx("div",{className:"p-6 flex flex-row items-center justify-between space-y-0 pb-2",children:e.jsx("div",{className:"font-medium leading-none tracking-tight",children:"Score by group and lunch"})}),e.jsx("div",{className:"h-96 p-2",children:e.jsx(s,{overrideSize:{mode:"full",height:1,width:1},chart:o[0],appearance:r})})]})]})]})})}function S(){return e.jsx(d,{name:"FilterContext",code:f,children:e.jsx(h,{})})}export{S as default};
