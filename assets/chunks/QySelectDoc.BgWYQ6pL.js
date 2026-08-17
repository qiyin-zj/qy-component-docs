import{aZ as h,aL as S,u as x,v as e,H as d,I as a,bb as o,bL as u,bB as c,bJ as w,F as B,aX as C,G as U,aU as i,aS as N}from"./framework.DOL3HN83.js";const $={class:"demo-card"},J={class:"demo-preview"},T={class:"demo-value"},A={class:"demo-card"},D={class:"demo-preview"},L={class:"demo-value"},E={class:"demo-value"},F={class:"demo-card"},I={class:"demo-preview"},M={class:"demo-value"},q={class:"demo-card"},G={class:"demo-preview"},H={class:"demo-value"},P={class:"demo-card"},X={class:"demo-preview"},Z={style:{display:"flex","justify-content":"space-between",gap:"12px"}},z={style:{color:"#909399"}},K={class:"demo-value"},R={class:"demo-card","data-testid":"select-object-value"},W={class:"demo-preview"},Y={class:"demo-value"},oe={__name:"QySelectDoc",setup(ee){const m=i(""),v=i(""),r=i([]),b=i(["加急"]),y=i(""),g=i(""),V=i(null),j=[{label:"起印旗舰店",value:"shop-1"},{label:"起印礼盒店",value:"shop-2"},{label:"平张快录店",value:"shop-3"}],k=[{label:"默认收款类型",value:"default-pay-type"}],Q=[{label:"加急",value:"加急"},{label:"返单",value:"返单"},{label:"大货",value:"大货"},{label:"打样",value:"打样"}],f=[{name:"淘宝店 A",code:"TB-A",locked:!1},{name:"淘宝店 B",code:"TB-B",locked:!1},{name:"已停用店铺",code:"TB-C",locked:!0}],O=[{name:"用户一",user:{id:"u-1",name:"用户一",department:"销售部"}},{name:"用户二",user:{id:"u-2",name:"用户二",department:"生产部"}}],l=N({basic:!1,single:!1,multiple:!1,mapping:!1,slot:!1,object:!1}),p={basic:`<QySelect
  v-model="value"
  :options="shopOptions"
  placeholder="请选择店铺"
/>`,single:`<QySelect
  v-model="value"
  :options="singleOptions"
  auto-select-single
  placeholder="只有一个选项时自动选中"
/>

<QySelect
  v-model="multipleValue"
  :options="singleOptions"
  auto-select-single
  multiple
  placeholder="多选下也会自动选中唯一项"
/>`,multiple:`<QySelect
  v-model="value"
  :options="flagOptions"
  multiple
  collapse-tags
  collapse-tags-tooltip
/>`,mapping:`<QySelect
  v-model="value"
  :options="options"
  label-key="name"
  value-key="code"
  disabled-key="locked"
/>`,object:`<QySelect
  v-model="user"
  :options="options"
  label-key="name"
  value-key="user"
  object-identity-key="id"
/>`,slot:`<QySelect v-model="value">
  <el-option
    v-for="item in options"
    :key="item.code"
    :label="item.name"
    :value="item.code"
  />
</QySelect>`};return(te,t)=>{const n=h("QySelect"),_=h("el-option");return S(),x("div",null,[t[13]||(t[13]=e("h1",{class:"doc-title"},"QySelect 选择器",-1)),t[14]||(t[14]=e("p",{class:"doc-desc"},[d(" 基于 "),e("code",null,"ElSelect"),d(" 的受控适配，支持原始值、多选数组、对象身份、字段映射和弹层挂载；父级 modelValue 始终是最终状态权威。 ")],-1)),t[15]||(t[15]=e("h3",{class:"doc-section-title"},"基础单选",-1)),e("div",$,[e("div",J,[a(n,{modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=s=>m.value=s),options:j,placeholder:"请选择店铺",style:{"max-width":"320px"}},null,8,["modelValue"]),e("div",T,"value: "+o(m.value||"（空）"),1)]),e("button",{type:"button",class:"demo-code-toggle",onClick:t[1]||(t[1]=s=>l.basic=!l.basic)},[e("span",null,o(l.basic?"▼":"▶"),1),d(" "+o(l.basic?"收起代码":"展开代码"),1)]),u(e("pre",{class:"demo-code"},o(p.basic),513),[[c,l.basic]])]),t[16]||(t[16]=e("h3",{class:"doc-section-title"},"唯一选项自动选中",-1)),e("div",A,[e("div",D,[a(n,{modelValue:v.value,"onUpdate:modelValue":t[2]||(t[2]=s=>v.value=s),options:k,"auto-select-single":"",placeholder:"只有一个选项时自动选中",style:{"max-width":"320px"}},null,8,["modelValue"]),e("div",L,"value: "+o(v.value||"（空）"),1),a(n,{modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=s=>r.value=s),options:k,"auto-select-single":"",multiple:"","collapse-tags":"",placeholder:"多选下也会自动选中唯一项",style:{"max-width":"320px"}},null,8,["modelValue"]),e("div",E,"multiple value: "+o(JSON.stringify(r.value)),1)]),e("button",{type:"button",class:"demo-code-toggle",onClick:t[4]||(t[4]=s=>l.single=!l.single)},[e("span",null,o(l.single?"▼":"▶"),1),d(" "+o(l.single?"收起代码":"展开代码"),1)]),u(e("pre",{class:"demo-code"},o(p.single),513),[[c,l.single]])]),t[17]||(t[17]=e("h3",{class:"doc-section-title"},"多选折叠标签",-1)),e("div",F,[e("div",I,[a(n,{modelValue:b.value,"onUpdate:modelValue":t[5]||(t[5]=s=>b.value=s),options:Q,multiple:"","collapse-tags":"","collapse-tags-tooltip":"",placeholder:"请选择附加标志",style:{"max-width":"420px"}},null,8,["modelValue"]),e("div",M,"value: "+o(JSON.stringify(b.value)),1)]),e("button",{type:"button",class:"demo-code-toggle",onClick:t[6]||(t[6]=s=>l.multiple=!l.multiple)},[e("span",null,o(l.multiple?"▼":"▶"),1),d(" "+o(l.multiple?"收起代码":"展开代码"),1)]),u(e("pre",{class:"demo-code"},o(p.multiple),513),[[c,l.multiple]])]),t[18]||(t[18]=e("h3",{class:"doc-section-title"},"字段映射",-1)),e("div",q,[e("div",G,[a(n,{modelValue:y.value,"onUpdate:modelValue":t[7]||(t[7]=s=>y.value=s),options:f,"label-key":"name","value-key":"code","disabled-key":"locked",placeholder:"使用自定义字段映射",style:{"max-width":"360px"}},null,8,["modelValue"]),e("div",H,"value: "+o(y.value||"（空）"),1)]),e("button",{type:"button",class:"demo-code-toggle",onClick:t[8]||(t[8]=s=>l.mapping=!l.mapping)},[e("span",null,o(l.mapping?"▼":"▶"),1),d(" "+o(l.mapping?"收起代码":"展开代码"),1)]),u(e("pre",{class:"demo-code"},o(p.mapping),513),[[c,l.mapping]])]),t[19]||(t[19]=e("h3",{class:"doc-section-title"},"自定义选项",-1)),e("div",P,[e("div",X,[a(n,{modelValue:g.value,"onUpdate:modelValue":t[9]||(t[9]=s=>g.value=s),placeholder:"使用默认 slot 自定义 option",style:{"max-width":"360px"}},{default:w(()=>[(S(),x(B,null,C(f,s=>a(_,{key:s.code,label:s.name,value:s.code,disabled:s.locked},{default:w(()=>[e("div",Z,[e("span",null,o(s.name),1),e("span",z,o(s.code),1)])]),_:2},1032,["label","value","disabled"])),64))]),_:1},8,["modelValue"]),e("div",K,"value: "+o(g.value||"（空）"),1)]),e("button",{type:"button",class:"demo-code-toggle",onClick:t[10]||(t[10]=s=>l.slot=!l.slot)},[e("span",null,o(l.slot?"▼":"▶"),1),d(" "+o(l.slot?"收起代码":"展开代码"),1)]),u(e("pre",{class:"demo-code"},o(p.slot),513),[[c,l.slot]])]),t[20]||(t[20]=e("h3",{class:"doc-section-title"},"对象值与身份字段",-1)),e("div",R,[e("div",W,[a(n,{modelValue:V.value,"onUpdate:modelValue":t[11]||(t[11]=s=>V.value=s),options:O,"label-key":"name","value-key":"user","object-identity-key":"id",filterable:"",clearable:"","popper-class":"qy-select-object-popper",placeholder:"请选择完整用户对象",style:{"max-width":"360px"}},null,8,["modelValue"]),e("div",Y,"value: "+o(JSON.stringify(V.value)),1)]),e("button",{type:"button",class:"demo-code-toggle",onClick:t[12]||(t[12]=s=>l.object=!l.object)},[e("span",null,o(l.object?"▼":"▶"),1),d(" "+o(l.object?"收起代码":"展开代码"),1)]),u(e("pre",{class:"demo-code"},o(p.object),513),[[c,l.object]])]),t[21]||(t[21]=U('<h3 class="doc-section-title">API</h3><div class="api-scroll"><table class="doc-table"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>受控绑定值</td><td>QySelectModelValue</td><td>—</td></tr><tr><td>options</td><td>选项数组</td><td>QySelectOption[]</td><td>[]</td></tr><tr><td>label-key</td><td>标签字段名</td><td>string</td><td>label</td></tr><tr><td>value-key</td><td>值字段名</td><td>string</td><td>value</td></tr><tr><td>disabled-key</td><td>禁用字段名</td><td>string</td><td>disabled</td></tr><tr><td>object-identity-key</td><td>对象值的身份字段，不参与 option 字段映射</td><td>string</td><td>—</td></tr><tr><td>auto-select-single</td><td>只有一个可选项且当前值为空时自动选中；多选模式下写入单元素数组</td><td>boolean</td><td>false</td></tr><tr><td>multiple</td><td>是否多选</td><td>boolean</td><td>false</td></tr><tr><td>loading</td><td>加载状态</td><td>boolean</td><td>false</td></tr><tr><td>collapse-tags</td><td>多选标签折叠</td><td>boolean</td><td>false</td></tr><tr><td>teleported</td><td>下拉是否挂到 body</td><td>boolean</td><td>true</td></tr><tr><td>append-to</td><td>下拉挂载目标</td><td>string</td><td>body</td></tr></tbody></table></div>',2))])}}};export{oe as default};
