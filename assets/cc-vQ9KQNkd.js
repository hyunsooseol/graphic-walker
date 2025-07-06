import{j as r}from"./errorPage-xo6NVE17.js";import{E as t}from"./examplePage-oBjkgWcw.js";import{r as m}from"./index-idkmBupO.js";import{t as n}from"./examples-YIX5DgUL.js";import{s as d}from"./graphic-walker.es-pHXwfdOG.js";import{u as i}from"./util-o8dAHcRh.js";import"./a11y-dark-4CYzpcyd.js";const s=`import { useContext } from 'react';\r
import { themeContext } from '../context';\r
import { GraphicWalker, IUIThemeConfig } from '@kanaries/graphic-walker';\r
import { IDataSource, useFetch } from '../util';\r
\r
const colorConfig: IUIThemeConfig = {\r
    light: {\r
        background: 'amber-100',\r
        foreground: 'amber-950',\r
        primary: 'amber-950',\r
        'primary-foreground': 'amber-50',\r
        muted: 'amber-200',\r
        'muted-foreground': 'amber-500',\r
        border: 'amber-300',\r
        ring: 'amber-950',\r
    },\r
    dark: {\r
        background: 'amber-900',\r
        foreground: 'white',\r
        primary: '#fff',\r
        'primary-foreground': 'amber-800',\r
        muted: 'amber-700',\r
        'muted-foreground': 'amber-400',\r
        border: 'amber-700',\r
        ring: 'amber-300',\r
    },\r
};\r
\r
export default function GraphicWalkerComponent() {\r
    const { theme } = useContext(themeContext);\r
    const { dataSource, fields } = useFetch<IDataSource>('https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json');\r
    return (\r
        <div className="bg-amber-100 dark:bg-amber-900 p-4">\r
            <GraphicWalker fields={fields} data={dataSource} appearance={theme} uiTheme={colorConfig} />\r
        </div>\r
    );\r
}\r
`,u={light:{background:"amber-100",foreground:"amber-950",primary:"amber-950","primary-foreground":"amber-50",muted:"amber-200","muted-foreground":"amber-500",border:"amber-300",ring:"amber-950"},dark:{background:"amber-900",foreground:"white",primary:"#fff","primary-foreground":"amber-800",muted:"amber-700","muted-foreground":"amber-400",border:"amber-700",ring:"amber-300"}};function b(){const{theme:e}=m.useContext(n),{dataSource:a,fields:o}=i("https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json");return r.jsx("div",{className:"bg-amber-100 dark:bg-amber-900 p-4",children:r.jsx(d,{fields:o,data:a,appearance:e,uiTheme:u})})}function C(){return r.jsx(t,{name:"Custom Color",code:s,children:r.jsx(b,{})})}export{C as default};
