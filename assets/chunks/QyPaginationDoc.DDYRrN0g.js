import{P as d}from"./index.26Aaa2G-.js";import{w as l,D as r}from"./theme.CCqstlAd.js";import{d as u,o as h,c as z,e as s,a4 as c,a0 as m,b as v,aS as P,v as o}from"./framework.8nHZOFmf.js";const f=l(d,"QyPagination"),y={class:"qy-pagination-doc"},S=`<QyPagination
  :total="126"
  :page="page"
  :page-size="pageSize"
  @page-change="page = $event"
  @page-size-change="pageSize = $event"
/>`,q=u({__name:"QyPaginationDoc",setup(Q){const t=o(1),i=o(10),n=o([]);function g(e){t.value=e,n.value.push(`page-change: ${e}`)}function p(e){i.value=e,n.value.push(`page-size-change: ${e}`)}return(e,a)=>(h(),z("div",y,[a[0]||(a[0]=s("h1",{class:"doc-title"},"QyPagination 分页",-1)),a[1]||(a[1]=s("p",{class:"doc-desc"},"受控分页门面；请求、URL 和切换页码后的业务刷新由宿主负责。",-1)),c(r,{id:"pagination-basic",title:"受控页码与每页条数",description:"page-change 和 page-size-change 只返回用户选择的新值。",code:S,events:n.value},{default:m(()=>[c(v(f),{total:126,page:t.value,"page-size":i.value,"page-size-options":[10,20,50],onPageChange:g,onPageSizeChange:p},null,8,["page","page-size"])]),_:1},8,["events"]),a[2]||(a[2]=P('<section class="doc-contract" data-testid="qy-doc-public-contract"><h2>QyPagination 公开契约</h2><p><code>total</code>、<code>page</code>、<code>pageSize</code> 为受控值；也可传入 <code>binding</code> 集中提供状态和切换方法。</p><p>根入口与 <code>@qynpm/ui/qy-pagination</code> 子入口交付同一套 Qy-owned 类型。</p></section>',1))]))}});export{q as default};
