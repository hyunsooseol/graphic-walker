import{o as g,d as w,I as N,y as j,l as L,D as v,z as M,M as R,p as z,B as A,G,P as W,r as U,m as C,j as i}from"./errorPage-xo6NVE17.js";import{E as B}from"./examplePage-oBjkgWcw.js";import{r as s,R as f}from"./index-idkmBupO.js";import{a as K}from"./graphic-walker.es-pHXwfdOG.js";import{t as Y}from"./examples-YIX5DgUL.js";import{u as V}from"./util-o8dAHcRh.js";import{s as Z}from"./use-resolve-button-type--6FoV3Xb.js";import"./a11y-dark-4CYzpcyd.js";function q(n){var e;let a=(e=n==null?void 0:n.form)!=null?e:n.closest("form");if(a){for(let t of a.elements)if(t.tagName==="INPUT"&&t.type==="submit"||t.tagName==="BUTTON"&&t.type==="submit"||t.nodeName==="INPUT"&&t.type==="image"){t.click();return}}}function J(n,e,a){let[t,u]=s.useState(a),r=n!==void 0,l=s.useRef(r),o=s.useRef(!1),c=s.useRef(!1);return r&&!l.current&&!o.current?(o.current=!0,l.current=r,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!r&&l.current&&!c.current&&(c.current=!0,l.current=r,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[r?n:t,g(m=>(r||u(m),e==null?void 0:e(m)))]}let $=s.createContext(null);function D(){let n=s.useContext($);if(n===null){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,D),e}return n}function Q(){let[n,e]=s.useState([]);return[n.length>0?n.join(" "):void 0,s.useMemo(()=>function(a){let t=g(r=>(e(l=>[...l,r]),()=>e(l=>{let o=l.slice(),c=o.indexOf(r);return c!==-1&&o.splice(c,1),o}))),u=s.useMemo(()=>({register:t,slot:a.slot,name:a.name,props:a.props}),[t,a.slot,a.name,a.props]);return f.createElement($.Provider,{value:u},a.children)},[e])]}let X="label";function _(n,e){let a=N(),{id:t=`headlessui-label-${a}`,passive:u=!1,...r}=n,l=D(),o=j(e);L(()=>l.register(t),[t,l.register]);let c={ref:o,...l.props,id:t};return u&&("onClick"in c&&delete c.onClick,"onClick"in r&&delete r.onClick),v({ourProps:c,theirProps:r,slot:l.slot||{},defaultTag:X,name:l.name||"Label"})}let ee=w(_),te=Object.assign(ee,{}),y=s.createContext(null);y.displayName="GroupContext";let re=s.Fragment;function ae(n){let[e,a]=s.useState(null),[t,u]=Q(),[r,l]=R(),o=s.useMemo(()=>({switch:e,setSwitch:a,labelledby:t,describedby:r}),[e,a,t,r]),c={},m=n;return f.createElement(l,{name:"Switch.Description"},f.createElement(u,{name:"Switch.Label",props:{onClick(){e&&(e.click(),e.focus({preventScroll:!0}))}}},f.createElement(y.Provider,{value:o},v({ourProps:c,theirProps:m,defaultTag:re,name:"Switch.Group"}))))}let ne="button";function se(n,e){let a=N(),{id:t=`headlessui-switch-${a}`,checked:u,defaultChecked:r=!1,onChange:l,name:o,value:c,...m}=n,p=s.useContext(y),h=s.useRef(null),x=j(h,e,p===null?null:p.setSwitch),[b,S]=J(u,l,r),k=g(()=>S==null?void 0:S(!b)),F=g(d=>{if(U(d.currentTarget))return d.preventDefault();d.preventDefault(),k()}),E=g(d=>{d.key===C.Space?(d.preventDefault(),k()):d.key===C.Enter&&q(d.currentTarget)}),P=g(d=>d.preventDefault()),O=s.useMemo(()=>({checked:b}),[b]),I={id:t,ref:x,role:"switch",type:Z(n,h),tabIndex:0,"aria-checked":b,"aria-labelledby":p==null?void 0:p.labelledby,"aria-describedby":p==null?void 0:p.describedby,onClick:F,onKeyUp:E,onKeyPress:P},H=z();return s.useEffect(()=>{var d;let T=(d=h.current)==null?void 0:d.closest("form");T&&r!==void 0&&H.addEventListener(T,"reset",()=>{S(r)})},[h,S]),f.createElement(f.Fragment,null,o!=null&&b&&f.createElement(A,{features:G.Hidden,...W({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:b,name:o,value:c})}),v({ourProps:I,theirProps:m,slot:O,defaultTag:ne,name:"Switch"}))}let le=w(se),ie=ae,oe=Object.assign(le,{Group:ie,Label:te,Description:M});const ce=`import { useState, useContext } from 'react';\r
import { TableWalker } from '@kanaries/graphic-walker';\r
import { themeContext } from '../context';\r
import { useFetch, IDataSource } from '../util';\r
import { Switch } from '@headlessui/react';\r
\r
export default function TableSettingsShowcase() {\r
    const { theme } = useContext(themeContext);\r
    const { dataSource, fields } = useFetch<IDataSource>('https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json');\r
    \r
    // State for toggle settings\r
    const [disableFilter, setDisableFilter] = useState(false);\r
    const [disableSorting, setDisableSorting] = useState(false);\r
    const [hideSemanticType, setHideSemanticType] = useState(false);\r
\r
    // Switch option component\r
    const SwitchOption = ({ \r
        label, \r
        checked, \r
        onChange \r
    }: { \r
        label: string; \r
        checked: boolean; \r
        onChange: (checked: boolean) => void \r
    }) => {\r
        return (\r
            <div className="flex items-center gap-2">\r
                <Switch\r
                    checked={checked}\r
                    onChange={onChange}\r
                    className={\`\${\r
                        checked ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'\r
                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2\`}\r
                >\r
                    <span className="sr-only">{label}</span>\r
                    <span\r
                        className={\`\${\r
                            checked ? 'translate-x-6' : 'translate-x-1'\r
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform\`}\r
                    />\r
                </Switch>\r
                <span className="text-sm font-medium">{label}</span>\r
            </div>\r
        );\r
    };\r
\r
    return (\r
        <div className="flex flex-col gap-4">\r
            <div className="p-4 border rounded-md dark:border-gray-700">\r
                <h2 className="text-lg font-semibold mb-3">TableWalker API Settings</h2>\r
                <div className="flex flex-wrap gap-4 mb-4">\r
                    <SwitchOption \r
                        label="Disable Filter" \r
                        checked={disableFilter} \r
                        onChange={setDisableFilter} \r
                    />\r
                    <SwitchOption \r
                        label="Disable Sorting" \r
                        checked={disableSorting} \r
                        onChange={setDisableSorting} \r
                    />\r
                    <SwitchOption \r
                        label="Hide Semantic Type" \r
                        checked={hideSemanticType} \r
                        onChange={setHideSemanticType} \r
                    />\r
                </div>\r
                <div className="text-sm mb-4">\r
                    <p>Current settings:</p>\r
                    <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded mt-1">\r
                        {\`{\r
  disableFilter: \${disableFilter},\r
  disableSorting: \${disableSorting},\r
  hideSemanticType: \${hideSemanticType}\r
}\`}\r
                    </code>\r
                </div>\r
            </div>\r
            \r
            {dataSource && fields && (\r
                <TableWalker \r
                    fields={fields} \r
                    data={dataSource} \r
                    appearance={theme} \r
                    disableFilter={disableFilter}\r
                    disableSorting={disableSorting}\r
                    hideSemanticType={hideSemanticType}\r
                    pageSize={20} \r
                    vizThemeConfig="g2"\r
                />\r
            )}\r
        </div>\r
    );\r
} `;function de(){const{theme:n}=s.useContext(Y),{dataSource:e,fields:a}=V("https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json"),[t,u]=s.useState(!1),[r,l]=s.useState(!1),[o,c]=s.useState(!1),m=({label:p,checked:h,onChange:x})=>i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsxs(oe,{checked:h,onChange:x,className:`${h?"bg-blue-600":"bg-gray-200 dark:bg-gray-700"} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`,children:[i.jsx("span",{className:"sr-only",children:p}),i.jsx("span",{className:`${h?"translate-x-6":"translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`})]}),i.jsx("span",{className:"text-sm font-medium",children:p})]});return i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsxs("div",{className:"p-4 border rounded-md dark:border-gray-700",children:[i.jsx("h2",{className:"text-lg font-semibold mb-3",children:"TableWalker API Settings"}),i.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[i.jsx(m,{label:"Disable Filter",checked:t,onChange:u}),i.jsx(m,{label:"Disable Sorting",checked:r,onChange:l}),i.jsx(m,{label:"Hide Semantic Type",checked:o,onChange:c})]}),i.jsxs("div",{className:"text-sm mb-4",children:[i.jsx("p",{children:"Current settings:"}),i.jsx("code",{className:"block p-2 bg-gray-100 dark:bg-gray-800 rounded mt-1",children:`{
  disableFilter: ${t},
  disableSorting: ${r},
  hideSemanticType: ${o}
}`})]})]}),e&&a&&i.jsx(K,{fields:a,data:e,appearance:n,disableFilter:t,disableSorting:r,hideSemanticType:o,pageSize:20,vizThemeConfig:"g2"})]})}function xe(){return i.jsx(B,{name:"TableWalker Settings",code:ce,children:i.jsx(de,{})})}export{xe as default};
