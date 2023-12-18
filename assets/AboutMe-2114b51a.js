import{_ as l,o as e,c as t,e as g,a as s,F as i,h as c,t as r,r as v,b as u}from"./index-59e6c6d0.js";const _={name:"AboutMeText",data(){return{}}},x={class:"container-page"},b=g('<div class="box-about-me background-box-about-me"><div class="background-about-me"></div><div class="about-me-container"><div style="position:relative;height:145px;min-width:250px;box-sizing:border-box;"><div class="profile-container border border-2 border-dark picture-about-me"></div></div><div class="ps-3 pt-3"><h5 class="subtitle">Facundo Benedetto</h5><p class="text"> Soy un Desarrollador Front-End con +3 años de experiencia en tecnologías clave como Vue JS, React JS y Next JS. </p></div></div><p class="text"> Mi enfoque se centra en el desarrollo ágil, la maquetación de diseños y la adaptación de interfaces para diversos dispositivos y tamaños de pantalla. Tengo experiencia en la creación y optimización de componentes, así como en la conexión y uso de APIs para lograr un rendimiento óptimo. </p><p class="text"> Mi objetivo principal es continuar ampliando mis conocimientos en el campo de la programación y enfrentar desafíos cada vez más complejos. </p></div>',1),k=[b];function f(p,d,m,w,a,h){return e(),t("div",x,k)}const y=l(_,[["render",f]]),S={name:"Skills",data(){return{skills:[{name:"Vue JS",icon:"https://www.svgrepo.com/show/452130/vue.svg"},{name:"React JS",icon:"https://www.svgrepo.com/show/452092/react.svg"},{name:"Next JS",icon:"https://www.svgrepo.com/show/521299/next-16.svg"},{name:"JavaScript",icon:"https://www.svgrepo.com/show/349419/javascript.svg"},{name:"TypeScript",icon:"https://www.svgrepo.com/show/374146/typescript-official.svg"},{name:"Quasar",icon:"https://www.svgrepo.com/show/374024/quasar.svg"},{name:"Node JS",icon:"https://www.svgrepo.com/show/452075/node-js.svg"},{name:"HTML",icon:"https://www.svgrepo.com/show/452228/html-5.svg"},{name:"CSS",icon:"https://www.svgrepo.com/show/452185/css-3.svg"}],styled:[{name:"Lodash",icon:"https://www.svgrepo.com/show/354007/lodash.svg"},{name:"jQuery",icon:"https://www.svgrepo.com/show/452242/jquery.svg"},{name:"Bootstrap",icon:"https://www.svgrepo.com/show/353498/bootstrap.svg"},{name:"Material UI",icon:"https://www.svgrepo.com/show/354048/material-ui.svg"},{name:"Tailwind",icon:"https://www.svgrepo.com/show/374118/tailwind.svg"},{name:"Vuex",icon:"https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png"},{name:"Vue Router",icon:"https://www.svgrepo.com/show/452130/vue.svg"}],otherSkills:[{name:"GitHub",icon:"https://www.svgrepo.com/show/512317/github-142.svg"},{name:"Jira",icon:"https://www.svgrepo.com/show/452241/jira.svg"},{name:"Trello",icon:"https://www.svgrepo.com/show/475688/trello-color.svg"},{name:"Figma",icon:"https://www.svgrepo.com/show/452202/figma.svg"},{name:"Adobe XD",icon:"https://www.svgrepo.com/show/452151/adobe-xd.svg"},{name:"Postman",icon:"https://www.svgrepo.com/show/354202/postman-icon.svg"},{name:"Insomnia",icon:"https://www.svgrepo.com/show/353904/insomnia.svg"}]}}},$={class:"container-page"},F={class:"background-box-about-me"},M=s("h5",{class:"subtitle"},"Principales",-1),T={class:"skills"},J={class:"img-skill-container"},j=["src"],A={class:"background-box-about-me mt-4"},E=s("h5",{class:"subtitle"},"Librerias",-1),V={class:"skills"},D={class:"img-skill-container"},N=["src"],B={class:"background-box-about-me mt-4"},q=s("h5",{class:"subtitle"},"Otras Tecnologias",-1),L={class:"skills"},z={class:"img-skill-container"},I=["src"];function P(p,d,m,w,a,h){return e(),t("div",$,[s("div",F,[M,s("div",T,[(e(!0),t(i,null,c(a.skills,(o,n)=>(e(),t("div",{class:"skill",key:n},[s("div",J,[s("img",{src:o.icon,alt:""},null,8,j)]),s("div",null,r(o.name),1)]))),128))])]),s("div",A,[E,s("div",V,[(e(!0),t(i,null,c(a.styled,(o,n)=>(e(),t("div",{class:"skill",key:n},[s("div",D,[s("img",{src:o.icon,alt:""},null,8,N)]),s("div",null,r(o.name),1)]))),128))])]),s("div",B,[q,s("div",L,[(e(!0),t(i,null,c(a.otherSkills,(o,n)=>(e(),t("div",{class:"skill",key:n},[s("div",z,[s("img",{src:o.icon,alt:""},null,8,I)]),s("div",null,r(o.name),1)]))),128))])])])}const R=l(S,[["render",P]]),C={name:"AboutMe",components:{AboutMeText:y,Skills:R}},H={class:"d-flex flex-column justify-content-start align-items-center py-4 min-height-page"};function Q(p,d,m,w,a,h){const o=v("AboutMeText"),n=v("Skills");return e(),t("div",H,[u(o),u(n)])}const O=l(C,[["render",Q]]);export{O as default};
