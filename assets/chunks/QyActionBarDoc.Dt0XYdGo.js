import{ak as m,o as y,c,e,a4 as l,a0 as d,a2 as s,a3 as r,a1 as p,a5 as u,aV as f,J as g}from"./framework.BkhZod2m.js";const v={class:"demo-card"},B={class:"demo-preview"},w={class:"demo-card"},A={class:"demo-preview"},Q={class:"demo-card"},k={class:"demo-preview"},x={__name:"QyActionBarDoc",setup(h){const o=g({basic:!1,right:!1,center:!1}),i={basic:`<QyActionBar bordered shadow>
  <template #left>
    <el-button plain>开票</el-button>
  </template>
  <template #right>
    <el-button>保存</el-button>
    <el-button type="primary">提交</el-button>
  </template>
</QyActionBar>`,right:`<QyActionBar justify="end">
  <template #right>
    <el-button>查看列表</el-button>
    <el-button type="primary">提交</el-button>
  </template>
</QyActionBar>`,center:`<QyActionBar>
  <template #left>
    <el-button plain>左侧操作</el-button>
  </template>
  <div>这里可以放状态文本</div>
  <template #right>
    <el-button type="primary">确认</el-button>
  </template>
</QyActionBar>`};return(C,t)=>{const n=m("el-button"),a=m("QyActionBar");return y(),c("div",null,[t[13]||(t[13]=e("h1",{class:"doc-title"},"QyActionBar 底部操作栏",-1)),t[14]||(t[14]=e("p",{class:"doc-desc"}," 用于录单页面的底部操作区壳，统一 sticky、左右分区、按钮间距和安全区适配，不负责业务按钮编排。 ",-1)),t[15]||(t[15]=e("h3",{class:"doc-section-title"},"左右分区",-1)),e("div",v,[e("div",B,[l(a,{bordered:"",shadow:""},{left:d(()=>[l(n,{plain:""},{default:d(()=>[...t[3]||(t[3]=[s("开票",-1)])]),_:1})]),right:d(()=>[l(n,null,{default:d(()=>[...t[4]||(t[4]=[s("保存",-1)])]),_:1}),l(n,{plain:""},{default:d(()=>[...t[5]||(t[5]=[s("回显",-1)])]),_:1}),l(n,{type:"primary"},{default:d(()=>[...t[6]||(t[6]=[s("提交",-1)])]),_:1})]),_:1})]),e("button",{type:"button",class:"demo-code-toggle",onClick:t[0]||(t[0]=b=>o.basic=!o.basic)},[e("span",null,r(o.basic?"▼":"▶"),1),s(" "+r(o.basic?"收起代码":"展开代码"),1)]),p(e("pre",{class:"demo-code"},r(i.basic),513),[[u,o.basic]])]),t[16]||(t[16]=e("h3",{class:"doc-section-title"},"仅右侧按钮组",-1)),e("div",w,[e("div",A,[l(a,{justify:"end"},{right:d(()=>[l(n,null,{default:d(()=>[...t[7]||(t[7]=[s("查看列表",-1)])]),_:1}),l(n,null,{default:d(()=>[...t[8]||(t[8]=[s("重新录单",-1)])]),_:1}),l(n,{type:"primary"},{default:d(()=>[...t[9]||(t[9]=[s("提交",-1)])]),_:1})]),_:1})]),e("button",{type:"button",class:"demo-code-toggle",onClick:t[1]||(t[1]=b=>o.right=!o.right)},[e("span",null,r(o.right?"▼":"▶"),1),s(" "+r(o.right?"收起代码":"展开代码"),1)]),p(e("pre",{class:"demo-code"},r(i.right),513),[[u,o.right]])]),t[17]||(t[17]=e("h3",{class:"doc-section-title"},"居中扩展区域",-1)),e("div",Q,[e("div",k,[l(a,null,{left:d(()=>[l(n,{plain:""},{default:d(()=>[...t[10]||(t[10]=[s("左侧操作",-1)])]),_:1})]),right:d(()=>[l(n,{type:"primary"},{default:d(()=>[...t[11]||(t[11]=[s("确认",-1)])]),_:1})]),default:d(()=>[t[12]||(t[12]=e("div",{class:"demo-value",style:{"margin-top":"0"}},"这里可以放状态文本或页面提示",-1))]),_:1})]),e("button",{type:"button",class:"demo-code-toggle",onClick:t[2]||(t[2]=b=>o.center=!o.center)},[e("span",null,r(o.center?"▼":"▶"),1),s(" "+r(o.center?"收起代码":"展开代码"),1)]),p(e("pre",{class:"demo-code"},r(i.center),513),[[u,o.center]])]),t[18]||(t[18]=f('<h3 class="doc-section-title">API</h3><table class="doc-table"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>sticky</td><td>是否吸底</td><td>boolean</td><td>true</td></tr><tr><td>offset-bottom</td><td>底部偏移</td><td>number</td><td>0</td></tr><tr><td>bordered</td><td>是否显示上边框</td><td>boolean</td><td>true</td></tr><tr><td>shadow</td><td>是否显示阴影</td><td>boolean</td><td>false</td></tr><tr><td>wrap</td><td>窄屏下是否换行</td><td>boolean</td><td>true</td></tr><tr><td>justify</td><td>布局方式</td><td>string</td><td>between</td></tr></tbody></table>',2))])}}};export{x as default};
