import{M as i,aL as a,u as c,v as e,H as r,bb as s,bL as n,bB as l,G as m,aS as u}from"./framework.DOL3HN83.js";const p={class:"demo-card"},b=i({__name:"RuntimeDoc",setup(y){const o=u({runtime:!1}),d={runtime:`import { configureQyForm } from '@qynpm/form'

configureQyForm({
  presetStorage: {
    async load(id) {
      return []
    },
    async save(id, presets) {}
  }
})`};return(f,t)=>(a(),c("div",null,[t[2]||(t[2]=e("h1",{class:"doc-title"},"运行时与迁移",-1)),t[3]||(t[3]=e("p",{class:"doc-desc"}," 这一部分说明宿主接入方式、筛选条件存储扩展和旧页面迁移边界，避免公共包和业务代码耦合到一起。 ",-1)),t[4]||(t[4]=e("h3",{class:"doc-section-title"},"configureQyForm",-1)),e("div",p,[t[1]||(t[1]=e("div",{class:"demo-preview"},[e("p",{class:"doc-tips"},[e("code",null,"configureQyForm"),r(" 用于宿主项目全局注册运行时配置。当前建议只用于筛选条件存储扩展。 ")])],-1)),e("div",{class:"demo-code-toggle",onClick:t[0]||(t[0]=v=>o.runtime=!o.runtime)},[e("span",null,s(o.runtime?"▼":"▶"),1),r(" "+s(o.runtime?"收起代码":"展开代码"),1)]),n(e("pre",{class:"demo-code"},s(d.runtime),513),[[l,o.runtime]])]),t[5]||(t[5]=m('<h3 class="doc-section-title">迁移原则</h3><table class="doc-table"><thead><tr><th>场景</th><th>建议</th></tr></thead><tbody><tr><td>普通 schema 表单</td><td>优先直接使用 useFormItem</td></tr><tr><td>旧 qy-query-form 页面</td><td>优先迁移到 QyQueryForm</td></tr><tr><td>需要服务端用户缓存</td><td>在宿主初始化层通过 configureQyForm 注册</td></tr><tr><td>页面只做实验</td><td>不要把业务接入代码固化到公共包迁移分支</td></tr></tbody></table><h3 class="doc-section-title">检查清单</h3><p class="doc-tips"> 页面迁移前确认：<code>itemDraggable</code>、<code>spare</code>、<code>SaveComponent</code>、 <code>syncQuery</code>、树选择 / 远程选择 / 备注图文等特殊类型是否存在。 </p><p class="doc-tips"> 页面迁移后至少回归：查询、重置、保存筛选、删除筛选、快捷筛选回填、拖拽排序保存和地址栏 query 同步。 </p>',5))]))}});export{b as default};
