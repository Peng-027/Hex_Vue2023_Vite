import{_ as s,o as c,c as a,a as n,d as r,t as p,F as u}from"./index-2e77758c.js";const{VITE_APP_URL:d,VITE_APP_PATH:i}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"peng-hex",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},_={data(){return{product:{}}},methods:{getProduct(){console.log(this.$route.params);const{id:t}=this.$route.params;this.$http.get(`${d}/v2/api/${i}/product/${t}`).then(e=>{this.product=e.data.product})}},mounted(){this.getProduct()}},l=["src"];function h(t,e,P,m,o,g){return c(),a(u,null,[n(" 這是產品列表頁面 "),r("p",null,p(o.product.title),1),r("img",{src:o.product.imageUrl,width:"200",alt:""},null,8,l)],64)}const V=s(_,[["render",h]]);export{V as default};
