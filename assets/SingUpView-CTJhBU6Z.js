import{u as _,r as l,c as f,a as e,w as h,b as a,v as n,o as w,d as g,S as d}from"./index-3hMVJlwy.js";const v={id:"signUpPage",class:"bg-yellow"},b={class:"conatiner signUpPage vhContainer"},x=e("div",{class:"side"},[e("a",{href:"#"},[e("img",{class:"logoImg",src:"https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png",alt:""})]),e("img",{class:"d-m-n",src:"https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png",alt:"workImg"})],-1),C=e("h2",{class:"formControls_txt"},"註冊帳號",-1),y=e("label",{class:"formControls_label",for:"email"},"Email",-1),U=e("label",{class:"formControls_label",for:"name"},"您的暱稱",-1),k=e("label",{class:"formControls_label",for:"pwd"},"密碼",-1),S=e("label",{class:"formControls_label",for:"pwd"},"再次輸入密碼",-1),V=e("input",{class:"formControls_btnSubmit",type:"submit",value:"註冊帳號"},null,-1),B=e("a",{class:"formControls_btnLink",href:"/"},"登入",-1),q="https://todolist-api.hexschool.io",I={__name:"SingUpView",setup(T){const p=_(),i=l(""),s=l(""),r=l(""),u=l(""),c=async()=>{if(s.value===r.value)try{await g.post(`${q}/users/sign_up`,{email:i.value,password:s.value,nickname:u.value}),p.replace("/home")}catch(m){d.fire({title:"系統警告",text:m.response.data.message,icon:"warning",confirmButtonText:"確認"})}else d.fire({title:"系統警告",text:"密碼不一致",icon:"warning",confirmButtonText:"確認"})};return(m,o)=>(w(),f("div",v,[e("div",b,[x,e("div",null,[e("form",{class:"formControls",onSubmit:h(c,["prevent"])},[C,y,a(e("input",{class:"formControls_input",type:"text",id:"email",name:"email",placeholder:"請輸入 email","onUpdate:modelValue":o[0]||(o[0]=t=>i.value=t),required:""},null,512),[[n,i.value]]),U,a(e("input",{class:"formControls_input",type:"text",name:"name",id:"name","onUpdate:modelValue":o[1]||(o[1]=t=>u.value=t),placeholder:"請輸入您的暱稱"},null,512),[[n,u.value]]),k,a(e("input",{class:"formControls_input",type:"password",name:"pwd",id:"pwd","onUpdate:modelValue":o[2]||(o[2]=t=>s.value=t),placeholder:"請輸入密碼",required:""},null,512),[[n,s.value]]),S,a(e("input",{class:"formControls_input",type:"password",name:"pwd",id:"pwd","onUpdate:modelValue":o[3]||(o[3]=t=>r.value=t),placeholder:"請再次輸入密碼",required:""},null,512),[[n,r.value]]),V,B],32)])])]))}};export{I as default};
