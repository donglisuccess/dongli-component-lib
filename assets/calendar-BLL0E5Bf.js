import{d as s,r as i,a as v,o as p,c as m,b as u,u as _}from"./index-DXe0rjKz.js";const f=s({__name:"calendar",setup(C){let l=i([{title:"吃早饭",start:"2024-07-21 08:00:00",end:"2024-07-21 08:30:00",editable:!0},{title:"上班",start:"2024-07-21 09:00:00",end:"2024-07-25 18:00:00",editable:!0}]);const a=e=>{console.log("dateClick",e)},c=e=>{console.log("eventClick",e)},o=e=>{let n=document.createElement("div"),t=e.timeText.split("-"),r=t[0].replace("上午","").replace("下午","").replace("时",""),d=t[1].replace("上午","").replace("下午","").replace("时","");return n.innerHTML=`
        <div>开始时间：${r}</div>
        <div>结束时间：${d}</div>
        <div>标题：${e.event._def.title}</div>
    `,{domNodes:[n]}};return(e,n)=>{const t=v("my-calendar");return p(),m("div",null,[u(t,{events:_(l),displayEventEnd:"",eventContent:o,onDateClick:a,onEventClick:c},null,8,["events"])])}}});export{f as default};
