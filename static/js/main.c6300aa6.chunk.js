(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(22),l=a.n(c),s=a(3),o=a(4),r=a(6),m=a(5),d=a(7);a(66),a(67),n.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(30),h=a(19),p=(a(68),function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"carrousel"},i.a.createElement("input",{type:"radio",name:"slides",id:"radio-1",defaultChecked:"checked"}),i.a.createElement("input",{type:"radio",name:"slides",id:"radio-2"}),i.a.createElement("input",{type:"radio",name:"slides",id:"radio-3"}),i.a.createElement("input",{type:"radio",name:"slides",id:"radio-4"}),i.a.createElement("ul",{className:"slides"},i.a.createElement("li",{className:"slide"},i.a.createElement("p",null,i.a.createElement("q",null,"It was a pleasure to work with him"),i.a.createElement("span",{className:"author"},i.a.createElement("img",{alt:"",src:"https://images.unsplash.com/photo-1558868779-105a6dc121c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}),"JR Tolkien"))),i.a.createElement("li",{className:"slide"},i.a.createElement("p",null,i.a.createElement("q",null,"He is a good friend of mine"),i.a.createElement("span",{className:"author"},i.a.createElement("img",{alt:"",src:"https://images.unsplash.com/photo-1536066738135-f8aa1e958cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"}),"Sinatra"))),i.a.createElement("li",{className:"slide"},i.a.createElement("p",null,i.a.createElement("q",null,"This is pretty cool"),i.a.createElement("span",{className:"author"},i.a.createElement("img",{alt:"",src:"https://images.unsplash.com/photo-1551191374-fd8a2940e787?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}),"Alf"))),i.a.createElement("li",{className:"slide"},i.a.createElement("p",null,i.a.createElement("q",null,"This is awesome. Only Css you say?"),i.a.createElement("span",{className:"author"},i.a.createElement("img",{alt:"",src:"https://images.unsplash.com/photo-1536066738135-f8aa1e958cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"}),"The octocat")))),i.a.createElement("div",{className:"slidesNavigation"},i.a.createElement("label",{htmlFor:"radio-1",id:"dotForRadio-1"}),i.a.createElement("label",{htmlFor:"radio-2",id:"dotForRadio-2"}),i.a.createElement("label",{htmlFor:"radio-3",id:"dotForRadio-3"}),i.a.createElement("label",{htmlFor:"radio-4",id:"dotForRadio-4"})))}}]),t}(n.Component)),f=a(26),E=a.n(f),v=a(27),b=a.n(v);b.a.initialize("59d4343f153eb8b37eae01aa766216d6","98c5871b09d16628b04d51c03fb06bcc");var y=function(){};y.getEventList=function(e,t,a){t=parseInt(t)?parseInt(t):1;var n=b.a.Query("events");n.limit(t),n.find().then(function(e){a(e)})},y.getEventDetail=function(e,t){b.a.Query("events").get(e).then(function(e){t(e)})},y.getNavList=function(e){b.a.Query("tri-nav").find().then(function(t){e(t)})};var k=y,N=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={error:null,isLoaded:!1,list:[]},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"fetchEventList",value:function(){var e=this;k.getEventList(this.props.filter,this.props.size,function(t){e.setState({isLoaded:!0,list:t})})}},{key:"componentWillMount",value:function(){this.fetchEventList()}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=function(e){return Math.floor((e.getTime()-Date.now())/864e5)},t=function(t){return e(t)>=0};return i.a.createElement("section",null,i.a.createElement("div",{className:"list-header"},this.props.title),i.a.createElement("div",{className:"list-body"},this.state.isLoaded?this.state.list.map(function(a){return i.a.createElement("div",{className:"item",key:a.objectId},i.a.createElement("div",{className:"item-body"},i.a.createElement("div",{className:"title"},i.a.createElement(u.b,{to:"/detail/".concat(a.objectId)},a.title)),i.a.createElement("div",{className:"desc"},i.a.createElement(E.a,{format:"YYYY-MM-DD"},a.date.iso)," ",a.location)),i.a.createElement("div",{className:"item-footer"},i.a.createElement("div",{className:t(new Date(a.date.iso))?"icon-calendar":"icon-calendar icon-calendar-expired"},i.a.createElement("em",null,t(new Date(a.date.iso))?"\u5269\u4f59\u5929":"\u8fc7\u53bb\u5929"),Math.abs(e(new Date(a.date.iso))))))}):i.a.createElement("div",{className:"item"},"\u52a0\u8f7d\u4e2d\u2026\u2026")))}}]),t}(n.Component),w=(n.Component,a(31)),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={error:null,isLoaded:!1,list:[],visible:!1,position:{longitude:120,latitude:30}},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"map",className:"map"},i.a.createElement(w.Map,{center:this.state.position,amapkey:"73f612b09deeba22de17c0c7dfdebb67"},i.a.createElement(w.Marker,{position:this.state.position,title:this.props.location,events:this.markerEvents}),i.a.createElement(w.InfoWindow,{position:this.state.position,visible:this.state.visible,isCustom:!1},i.a.createElement("div",null,this.props.location))))}},{key:"loadMap",value:function(){var e=this;this.markerEvents={click:function(t){e.setState({visible:!0})}}}},{key:"componentWillMount",value:function(){this.loadMap()}}]),t}(n.Component),j=(n.Component,a(130),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={error:null,hash:"",isLoaded:!1,list:[]},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"reflect",value:function(e){var t={};switch(parseInt(e)){case 1:t={name:"news",title:"\u65b0\u95fb\u8d44\u8baf",iconClass:"iconfont icon-Rss",type:"link"};break;case 2:t={name:"kits",title:"\u88c5\u5907\u8bc4\u6d4b",iconClass:"iconfont icon-setting",type:"link"};break;case 3:t={name:"race",title:"\u8d5b\u4e8b\u516c\u53f8",iconClass:"iconfont icon-date",type:"link"};break;case 4:t={name:"train",title:"\u8bad\u7ec3\u7406\u8bba",iconClass:"iconfont icon-file",type:"link"};break;case 5:t={name:"wechat",title:"\u5fae\u4fe1\u516c\u4f17\u53f7",iconClass:"iconfont icon-share",type:"wechat"};break;case 6:t={name:"athlete",title:"\u8fd0\u52a8\u5458",iconClass:"iconfont icon-instagram",type:"link"};break;case 7:default:t={name:"other",title:"\u5176\u4ed6",iconClass:"iconfont icon-hot",type:"link"}}return t}},{key:"groupBy",value:function(e){var t=this,a={},n=[];return e.forEach(function(e){a[e.cate]?n.forEach(function(t){t.cate===e.cate&&t.list.push(e)}):(n.push({cate:e.cate,obj:t.reflect(e.cate),list:[e]}),a[e.cate]=e)}),n}},{key:"fetchList",value:function(){var e=this;k.getNavList(function(t){var a=e.groupBy(t);e.setState({isLoaded:!0,list:a})})}},{key:"componentWillMount",value:function(){this.watchHashChanged(),this.fetchList()}},{key:"watchHashChanged",value:function(){var e=this;window.location.hash&&(this.state.hash=window.location.hash),window.addEventListener("hashchange",function(){e.state.hash=window.location.hash})}},{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"container"},i.a.createElement("div",{className:"left-bar"},i.a.createElement("div",{className:"title"},"\u94c1\u4eba\u4e09\u9879\u5bfc\u822a"),i.a.createElement("div",{className:"nav"},i.a.createElement("div",{className:"nav-item"},i.a.createElement("ul",null,this.state.list.map(function(t){return i.a.createElement("li",{key:t.cate,className:e.state.hash==="#"+t.obj.name?"active":""},i.a.createElement("a",{href:"#"+t.obj.name},i.a.createElement("i",{className:t.obj.iconClass})," ",t.obj.title))})))),i.a.createElement("div",{className:"author"},"\u4f5c\u8005\uff1a",i.a.createElement("a",{href:"https://migao.io/",target:"_blank"},"Migao"))),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"mainContent"},this.state.list.map(function(e,t){return i.a.createElement("div",{className:e.obj.type+" box",id:e.obj.name,key:t},i.a.createElement("div",{className:"title"},i.a.createElement("i",{className:e.obj.iconClass}),e.obj.title),e.list.map(function(t,a){return i.a.createElement("a",{className:"item",key:a,href:t.link,target:"_blank"},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{src:t.favicon,alt:t.title}),i.a.createElement("div",null,t.title),"wechat"!=e.type?i.a.createElement("span",{"data-lang":t.lang}):""),i.a.createElement("div",{className:"desc"},t.desc))}))})),i.a.createElement("div",{className:"footer"},i.a.createElement("p",null,"\u53cd\u9988\u610f\u89c1\u8bf7\u53d1\u9001\u81f31289657692@qq.com"))))}}]),t}(n.Component)),C=a(60),O=a.n(C),L=a(146);n.Component;a(147).install(),l.a.render(i.a.createElement(u.a,null,i.a.createElement(h.a,{path:"/",component:j})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,a){e.exports=a(148)},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.c6300aa6.chunk.js.map