(this["webpackJsonpfor-test"]=this["webpackJsonpfor-test"]||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),s=(a(24),a(9)),i=a(1),m=a(10),o=a.n(m),u=a(12),p=a(3),E=Object(n.createContext)(),f=function(e){var t=e.children,a=Object(n.useState)(""),c=Object(p.a)(a,2),l=c[0],s=c[1],i=Object(n.useState)([]),m=Object(p.a)(i,2),f=m[0],d=m[1],v=Object(n.useState)(""),g=Object(p.a)(v,2),b=g[0],h=g[1],N=Object(n.useRef)(1),O=Object(n.useState)(0),j=Object(p.a)(O,2),x=j[0],y=j[1],w=Object(n.useState)(1),S=Object(p.a)(w,2),k=S[0],C=S[1],I=Object(n.useState)(!0),P=Object(p.a)(I,2),T=P[0],D=P[1],R=function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?apikey=faf7e5bb&s=".concat(t,"&page=").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,d(r.Search),y(r.totalResults);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(E.Provider,{value:{titleInput:l,setTitleInput:s,movies:f,setMovies:d,getMovies:R,page:N,finishQuery:b,setFinishQuery:h,dataFound:x,pageJump:k,setPageJump:C,greetingOpen:T,setGreetingOpen:D}},t)},d=function(e){var t=e.poster,a=e.title,n=e.year,c=e.id;return r.a.createElement(s.b,{to:"/detail/movieId="+c,className:"movie"},r.a.createElement("div",{className:"poster-container"},r.a.createElement("img",{src:t,alt:a+"'s Poster"})),r.a.createElement("div",{className:"card-attributes"},r.a.createElement("h4",{className:"attr-title"},a),r.a.createElement("p",{className:"attr-year"},n)))},v=function(e){var t=e.isOpen,a=e.message;return t?l.a.createPortal(r.a.createElement("div",{style:{width:"300px",height:"40px",background:"#eee",position:"fixed",top:"50px",left:"50%",transform:"translateX(-50%)",zIndex:"9999",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"5px",boxShadow:"2px 3px 10px 2px hsl(209, 23%, 22%)",transition:"0.2s all ease",fontWeight:600}},r.a.createElement("p",{style:{color:"#333"}},a)),document.querySelector("#popup")):""},g=function(){var e=Object(n.useContext)(E),t=e.titleInput,a=e.setTitleInput,c=e.setFinishQuery,l=e.page,s=e.getMovies,i=e.setPageJump,m=Object(n.useRef)(),o=Object(n.useState)(!1),u=Object(p.a)(o,2),f=u[0],d=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.length>0?(l.current=1,i(1),c(t),s(t,l.current)):(d(!0),setTimeout((function(){return d(!1)}),3e3))},className:"form-title"},r.a.createElement("section",{className:"search-container"},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("input",{ref:m,type:"text",id:"movie-title",placeholder:'Try search "Avengers"...',value:t,onChange:function(e){return a(e.target.value)},autoComplete:"off"}),r.a.createElement("i",{onClick:function(){a(""),m.current.focus()},className:"fas fa-times remove-query"}))),r.a.createElement(v,{isOpen:f,message:"Title input must be filled!"}))},b=function(){var e=Object(n.useContext)(E),t=e.getMovies,a=e.page,c=e.finishQuery,l=e.pageJump,s=e.setPageJump,i=e.dataFound,m=Object(n.useState)(!1),o=Object(p.a)(m,2),u=o[0],f=o[1],d=Object(n.useState)(""),g=Object(p.a)(d,2),b=g[0],h=g[1];return r.a.createElement("div",{className:"pagination"},r.a.createElement(v,null),r.a.createElement("div",{className:"pagination-wrapper"},r.a.createElement("p",null,"Page: "),r.a.createElement("button",{className:"btn prev-btn",onClick:function(){1===a.current?(console.log("Error"),f(!0),h("This is the first page!"),setTimeout((function(){return f(!1)}),3e3)):(a.current-=1,s(a.current),t(c,a.current))}},r.a.createElement("i",{className:"fas fa-angle-left"})),r.a.createElement("p",{className:"current-page"},a.current),r.a.createElement("button",{className:"btn next-btn",onClick:function(){a.current===Math.ceil(i/10)||0===i?(console.log("Error"),f(!0),h("Page didn't exist!"),setTimeout((function(){return f(!1)}),3e3)):(a.current+=1,s(a.current),t(c,a.current))}},r.a.createElement("i",{className:"fas fa-angle-right"}))),r.a.createElement(v,{isOpen:u,message:b}),r.a.createElement("div",{className:"jump-page"},r.a.createElement("p",null,"Jump to page: "),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l>Math.ceil(i/10)?(console.log("Error"),f(!0),h("There are only ".concat(Math.ceil(i/10)," pages!")),setTimeout((function(){return f(!1)}),3e3)):(a.current=parseInt(l),t(c,l))}},r.a.createElement("input",{type:"number",name:"jump-page",id:"jump-page",value:l,onChange:function(e){return s(e.target.value)}}))))},h=function(){var e=Object(n.useContext)(E),t=e.greetingOpen,a=e.setGreetingOpen,c=function(){return a(!1)};return t?l.a.createPortal(r.a.createElement("div",{className:"greeting",onClick:c},r.a.createElement("div",{className:"greeting-message"},r.a.createElement("h2",null,"Welcome to uFlix!"),r.a.createElement("p",null,"Since this is your first time using our app, try to search movie's title at input field on your left upper corner."),r.a.createElement("button",{className:"got-it",onClick:c},"Got it"))),document.querySelector("#popup")):""},N=function(){var e=Object(n.useContext)(E),t=e.movies,a=e.dataFound;return r.a.createElement("div",null,r.a.createElement(g,null),a>0?r.a.createElement("p",{className:"data-found"},"Found ",a," item(s)"):"",a>0?r.a.createElement(b,null):"",r.a.createElement("div",{className:"movie-wrapper"},t?t.map((function(e){return r.a.createElement(d,{key:e.imdbID,id:e.imdbID,title:e.Title,poster:e.Poster,year:e.Year})})):r.a.createElement("p",null,"Seems.. like.. something went wrong :(")),r.a.createElement(h,null))},O=function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"logo"},"uFlix"))},j=function(e){var t=e.match,a=Object(n.useState)({}),c=Object(p.a)(a,2),l=c[0],i=c[1],m=Object(n.useState)([]),E=Object(p.a)(m,2),f=E[0],d=E[1],v=t.params.movieId;Object(n.useEffect)((function(){g(v)}),[v]);var g=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?apikey=faf7e5bb&i=".concat(t,"&plot=full"));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,i(n),d(n.Ratings);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(s.b,{className:"back-btn",to:"/uflix-movie-details-provider"},"Back"),r.a.createElement("div",{className:"movie-detail-wrapper"},r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("img",{src:l.Poster,alt:""})),r.a.createElement("div",{className:"movie-details"},r.a.createElement("div",{className:"head-movie"},r.a.createElement("div",{className:"head-title"},r.a.createElement("h4",null,l.Title," ",r.a.createElement("span",null,"(",l.Type,", ",l.Year,")")),r.a.createElement("div",{className:"imdb-ratings"},r.a.createElement("p",null,"IMDb: ",r.a.createElement("span",null,l.imdbRating)," ",r.a.createElement("i",{className:"fas fa-star"})),r.a.createElement("p",{className:"vote"},"Votes: ",r.a.createElement("span",null,l.imdbVotes)," ",r.a.createElement("i",{className:"fas fa-thumbs-up"})))),r.a.createElement("div",{className:"head-details"},r.a.createElement("p",null,r.a.createElement("span",null,l.Rated)," ",r.a.createElement("span",null,l.Runtime,"utes")," ",r.a.createElement("span",null,l.Genre)," ",r.a.createElement("span",null,l.Country,", ",l.Released)))),r.a.createElement("div",{className:"movie-attrs"},r.a.createElement("div",{className:"first-attrs"},r.a.createElement("p",{className:"attr"},"Director(s): ",r.a.createElement("span",null,l.Director)),r.a.createElement("p",{className:"attr"},"Writer(s): ",r.a.createElement("span",null,l.Writer)),r.a.createElement("p",{className:"attr"},"Casts: ",r.a.createElement("span",null,l.Actors)),r.a.createElement("p",{className:"attr"},"Language(s): ",r.a.createElement("span",null,l.Language)),r.a.createElement("div",{className:"plot"},r.a.createElement("h6",null,"Synopsis:"),r.a.createElement("p",null,l.Plot))),r.a.createElement("div",{className:"second-attrs"},r.a.createElement("p",{className:"attr"},"Production: ",r.a.createElement("span",null,l.Production)),r.a.createElement("p",{className:"attr"},"Website: ",r.a.createElement("span",null,l.Website)),r.a.createElement("p",{className:"attr"},"Award(s): ",r.a.createElement("span",null,l.Awards)),r.a.createElement("div",{className:"movie-ratings"},r.a.createElement("h5",{className:"rating"},"Rating(s):"),f.map((function(e){return r.a.createElement("p",{key:e.Source},e.Source,": ",r.a.createElement("span",null,e.Value))}))),r.a.createElement("p",{className:"attr"},"DVD Release: ",r.a.createElement("span",null,l.DVD)),r.a.createElement("p",{className:"attr"},"Box Office: ",r.a.createElement("span",null,l.BoxOffice)))))))};a(31);var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,r.a.createElement(O,null),r.a.createElement("div",{className:"container"},r.a.createElement(s.a,{basename:"/"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:N}),r.a.createElement(i.a,{path:"/detail/movieId=:movieId",component:j}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.1841f2d1.chunk.js.map