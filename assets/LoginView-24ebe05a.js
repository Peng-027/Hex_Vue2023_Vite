import{_ as l,o as u,c,a as p,d as s,h as i,i as d,j as m,F as _}from"./index-14bdd21d.js";const{VITE_APP_URL:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"peng-hex",BASE_URL:"/Hex_Vue2023_Vite/",MODE:"production",DEV:!1,PROD:!0},f={data(){return{user:{username:"",password:""}}},methods:{checkLogin(){this.$http.post(`${h}/v2/admin/signin`,this.user).then(t=>{const{token:e,expired:a}=t.data;document.cookie=`hex_token=${e}; expires=${new Date(a)}; path=/`,this.$router.push("/admin/products")}).catch(t=>{alert(t.data.message)})}}},w={class:"form-floating mb-3"},g=s("label",{for:"username"},"Email address",-1),x={class:"form-floating"},V=s("label",{for:"password"},"Password",-1),P=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function b(t,e,a,k,r,n){return u(),c(_,null,[p(" 這是登入畫面 "),s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=m((...o)=>n.checkLogin&&n.checkLogin(...o),["prevent"]))},[s("div",w,[i(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.user.username=o),type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[d,r.user.username]]),g]),s("div",x,[i(s("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.user.password=o),type:"password",class:"form-control",id:"password",placeholder:"Password",required:""},null,512),[[d,r.user.password]]),V]),P],32)],64)}const v=l(f,[["render",b]]);export{v as default};
