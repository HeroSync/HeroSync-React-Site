(this["webpackJsonphs-react"]=this["webpackJsonphs-react"]||[]).push([[0],{146:function(e,n,t){e.exports=t(256)},151:function(e,n,t){},152:function(e,n,t){},256:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(43),o=t.n(c),i=(t(151),t(152),t(18)),l=t(145),u=t(15),s=t(9),m=t(64),d=t(52),f=t(139),M=t(59),h=t(32),j=t(135),E=t.n(j),L=t(14);function y(){var e=Object(s.a)(["\n    width: 100px;\n    height: 100px;\n    animation: bounce 0.25s infinite alternate;\n    -webkit-animation: bounce 0.25s infinite alternate;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n\n    @keyframes bounce {\n        from {\n            transform: translateY(0px);\n        }\n        to {\n            transform: translateY(-95px);\n        }\n    }\n    @-webkit-keyframes bounce {\n        from {\n            transform: translateY(0px);\n        }\n        to {\n            transform: translateY(-95px);\n        }\n    }\n"]);return y=function(){return e},e}var g=L.a.img(y()),w=function(){return r.a.createElement(E.a,null,r.a.createElement(g,{src:"/blob-round.gif"}))};function p(){var e=Object(s.a)(["\n    margin-top: 1%;\n\n    & > a {\n        padding: 1rem;\n    }\n"]);return p=function(){return e},e}function N(){var e=Object(s.a)(["\n    font-size: 8vw;\n    color: white;\n    text-shadow: 4px 4px 1px black;\n\n    @media (max-width: 500px) {\n        font-size: 30pt;\n    }\n"]);return N=function(){return e},e}function v(){var e=Object(s.a)(["\n    background: no-repeat center/90% black url('https://demo.herosync.com/images/HS2_Large.png');\n    @media (max-width: 550px) {\n        background-size: cover;\n    }\n"]);return v=function(){return e},e}var x=L.a.div(v()),b=L.a.div(N()),I=L.a.div(p()),S=function(){var e=Object(a.useState)(!1),n=Object(m.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(window.innerWidth),i=Object(m.a)(o,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){window.addEventListener("resize",(function(){return u(window.innerWidth)}))}),[]),r.a.createElement(x,{className:"d-flex flex-column text-justify h-100 w-100 hero justify-content-center align-items-center"},r.a.createElement(b,{className:"text-center user-select-none"},"HeroSync"),r.a.createElement(d.a,{href:"https://demo.herosync.com",variant:"success",size:"lg"},"Play the Alpha!"),r.a.createElement(M.a,{className:"text-center mt-3"},r.a.createElement(f.a,{vertical:l<550},r.a.createElement(d.a,{href:"/heroes",size:"md",variant:"primary"},"Heroes"),r.a.createElement(d.a,{href:"/blog",variant:"primary",size:"md"},"Blog"),r.a.createElement(d.a,{size:"md",variant:"primary text-nowrap",onClick:function(){return c(!0)}},"Tutorial Video"),r.a.createElement(h.a,{show:t,onHide:function(){return c(!1)},size:"lg",centered:!0},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement(h.a.Title,null,"HeroSync Tutorial")),r.a.createElement(h.a.Body,null,r.a.createElement("iframe",{title:"Tutorial Video",className:"mr-auto w-100",height:"400",src:"https://www.youtube-nocookie.com/embed/Rr21LVuMQD0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),r.a.createElement(d.a,{href:"https://docs.google.com/document/d/e/2PACX-1vT6gn4laTPVDXkc9hLI3jH7jfx7_32gBcQUvkQYhQpunwUZl1S1Qb1odT8ejeX3vwiQ51OJcovIfhRm/pub",target:"_blank",size:"md",variant:"primary text-nowrap"},"Rulebook")),r.a.createElement(I,null,r.a.createElement("a",{href:"https://facebook.com/HeroSync",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/facebook.svg",width:30,height:30,alt:"Facebook",title:"Facebook"})),r.a.createElement("a",{href:"https://discord.gg/e6A8SFu",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9IiM4QzlFRkYiIGlkPSJlbGxpcHNlIiByPSIyNTYiLz48cGF0aCBkPSJNMzcyLjQsMTY4LjdjMCwwLTMzLjMtMjYuMS03Mi43LTI5LjFsLTMuNSw3LjFjMzUuNiw4LjcsNTEuOSwyMS4yLDY5LDM2LjUgIGMtMjkuNC0xNS01OC41LTI5LjEtMTA5LjEtMjkuMXMtNzkuNywxNC4xLTEwOS4xLDI5LjFjMTcuMS0xNS4zLDM2LjUtMjkuMiw2OS0zNi41bC0zLjUtNy4xYy00MS4zLDMuOS03Mi43LDI5LjEtNzIuNywyOS4xICBzLTM3LjIsNTQtNDMuNiwxNjBjMzcuNSw0My4zLDk0LjUsNDMuNiw5NC41LDQzLjZsMTEuOS0xNS45Yy0yMC4yLTctNDMuMS0xOS42LTYyLjgtNDIuM2MyMy41LDE3LjgsNTkuMSwzNi40LDExNi40LDM2LjQgIHM5Mi44LTE4LjUsMTE2LjQtMzYuNGMtMTkuNywyMi43LTQyLjYsMzUuMy02Mi44LDQyLjNsMTEuOSwxNS45YzAsMCw1Ny0wLjMsOTQuNS00My42QzQwOS42LDIyMi43LDM3Mi40LDE2OC43LDM3Mi40LDE2OC43eiAgIE0yMDguNywyOTkuNmMtMTQuMSwwLTI1LjUtMTMtMjUuNS0yOS4xczExLjQtMjkuMSwyNS41LTI5LjFjMTQuMSwwLDI1LjUsMTMsMjUuNSwyOS4xUzIyMi44LDI5OS42LDIwOC43LDI5OS42eiBNMzAzLjMsMjk5LjYgIGMtMTQuMSwwLTI1LjUtMTMtMjUuNS0yOS4xczExLjQtMjkuMSwyNS41LTI5LjFzMjUuNSwxMywyNS41LDI5LjFTMzE3LjMsMjk5LjYsMzAzLjMsMjk5LjZ6IiBmaWxsPSIjRkZGRkZGIiBpZD0ibG9nbyIvPjwvc3ZnPg==",width:30,height:30,alt:"Discord",title:"Discord"})))),r.a.createElement(w,null))},k=t(65),T=t(22),z=function(e){var n=Object(a.useState)(!1),t=Object(m.a)(n,2),c=t[0],o=t[1];return r.a.createElement(k.a,{bg:"dark",variant:"dark",expand:"lg",fixed:"top"},r.a.createElement(k.a.Brand,{href:"/"},"HeroSync"),r.a.createElement(k.a.Toggle,{"aria-controls":"header-nav"}),r.a.createElement(k.a.Collapse,{id:"header-nav",className:"justify-content-end"},r.a.createElement(T.a,{fill:!0,className:"mr-auto",variant:"pills",activeKey:e.location.pathname},r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,{href:"https://demo.herosync.com",target:"_blank"},"Play the Alpha!")),r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,{href:"/heroes"},"Heroes")),r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,{href:"/blog"},"Blog")),r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,{href:"https://docs.google.com/document/d/1getWCdeTM1ulyT-rdWILcKum0K9Pnjqj1e6QLXmbmFA/edit#",target:"_blank"},"Rulebook")),r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,{onClick:function(){return o(!0)}},"Tutorial Video"),r.a.createElement(h.a,{show:c,onHide:function(){return o(!1)},size:"lg",centered:!0},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement(h.a.Title,null,"HeroSync Tutorial")),r.a.createElement(h.a.Body,null,r.a.createElement("iframe",{title:"Tutorial Video",className:"mr-auto w-100",height:"400",src:"https://www.youtube-nocookie.com/embed/Rr21LVuMQD0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))))),r.a.createElement(T.a,null,r.a.createElement(T.a.Link,{href:"https://facebook.com/HeroSync",target:"_blank"},r.a.createElement("img",{src:"/facebook.svg",width:30,height:30,alt:"Facebook",title:"Facebook"})),r.a.createElement(T.a.Link,{href:"https://discord.gg/e6A8SFu",target:"_blank"},r.a.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9IiM4QzlFRkYiIGlkPSJlbGxpcHNlIiByPSIyNTYiLz48cGF0aCBkPSJNMzcyLjQsMTY4LjdjMCwwLTMzLjMtMjYuMS03Mi43LTI5LjFsLTMuNSw3LjFjMzUuNiw4LjcsNTEuOSwyMS4yLDY5LDM2LjUgIGMtMjkuNC0xNS01OC41LTI5LjEtMTA5LjEtMjkuMXMtNzkuNywxNC4xLTEwOS4xLDI5LjFjMTcuMS0xNS4zLDM2LjUtMjkuMiw2OS0zNi41bC0zLjUtNy4xYy00MS4zLDMuOS03Mi43LDI5LjEtNzIuNywyOS4xICBzLTM3LjIsNTQtNDMuNiwxNjBjMzcuNSw0My4zLDk0LjUsNDMuNiw5NC41LDQzLjZsMTEuOS0xNS45Yy0yMC4yLTctNDMuMS0xOS42LTYyLjgtNDIuM2MyMy41LDE3LjgsNTkuMSwzNi40LDExNi40LDM2LjQgIHM5Mi44LTE4LjUsMTE2LjQtMzYuNGMtMTkuNywyMi43LTQyLjYsMzUuMy02Mi44LDQyLjNsMTEuOSwxNS45YzAsMCw1Ny0wLjMsOTQuNS00My42QzQwOS42LDIyMi43LDM3Mi40LDE2OC43LDM3Mi40LDE2OC43eiAgIE0yMDguNywyOTkuNmMtMTQuMSwwLTI1LjUtMTMtMjUuNS0yOS4xczExLjQtMjkuMSwyNS41LTI5LjFjMTQuMSwwLDI1LjUsMTMsMjUuNSwyOS4xUzIyMi44LDI5OS42LDIwOC43LDI5OS42eiBNMzAzLjMsMjk5LjYgIGMtMTQuMSwwLTI1LjUtMTMtMjUuNS0yOS4xczExLjQtMjkuMSwyNS41LTI5LjFzMjUuNSwxMywyNS41LDI5LjFTMzE3LjMsMjk5LjYsMzAzLjMsMjk5LjZ6IiBmaWxsPSIjRkZGRkZGIiBpZD0ibG9nbyIvPjwvc3ZnPg==",width:30,height:30,alt:"Discord",title:"Discord"})))))},O=function(e){var n=Object(u.f)(z);return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:e.headerClassName},r.a.createElement(n,null)),r.a.createElement("main",{className:e.mainClassName},e.children),r.a.createElement(w,null))},D=t(83),C=t(49),Y=t(42),U=t(85),Q=t(140),P=t.n(Q);function Z(){var e=Object(s.a)(["\n    text-transform: capitalize;\n    font-style: italic;\n\n    @media (max-width: 450px) {\n        font-size: 0.85rem;\n    }\n"]);return Z=function(){return e},e}function G(){var e=Object(s.a)(["\n    font-size: 0.85rem;\n    padding: 5px 0;\n\n    @media (max-width: 450px) {\n        font-size: 0.75rem;\n    }\n"]);return G=function(){return e},e}function A(){var e=Object(s.a)(["\n    font-size: 1.05rem;\n    text-decoration: underline;\n\n    @media (max-width: 450px) {\n        font-size: 0.85rem;\n    }\n"]);return A=function(){return e},e}function R(){var e=Object(s.a)(["\n    @media (max-width: 450px) {\n        font-size: 1.2rem;\n    }\n"]);return R=function(){return e},e}function B(){var e=Object(s.a)(["\n    max-width: 450px;\n    box-shadow: 0px 2px 4px -1px black;\n    border-radius: 5px;\n    background-color: white;\n    margin: 0 1%;\n    padding: 1% 1%;\n    transition: all 0.5s;\n\n    &:hover {\n        transform: scale(1.1);\n        background-color: #dad8d8;\n    }\n"]);return B=function(){return e},e}function H(){var e=Object(s.a)(["\n    justify-content: space-evenly;\n    padding: 1rem 0;\n"]);return H=function(){return e},e}function W(){var e=Object(s.a)(["\n    width: 45%;\n\n    @media (max-width: 900px) {\n        width: 100%;\n    }\n"]);return W=function(){return e},e}function F(){var e=Object(s.a)(["\n    @media (max-width: 900px) {\n        flex-direction: column !important;\n    }\n"]);return F=function(){return e},e}function J(){var e=Object(s.a)(["\n    max-width: 1000px;\n    width: 99%;\n    padding: 0 5px;\n    max-height: 500px;\n    overflow-y: auto;\n"]);return J=function(){return e},e}function _(){var e=Object(s.a)(["\n    text-align: center;\n"]);return _=function(){return e},e}function V(){var e=Object(s.a)(["\n    width: 100%;\n"]);return V=function(){return e},e}function X(){var e=Object(s.a)(["\n    align-items: space-around;\n    height: 100%;\n    width: 95%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    justify-items: center;\n    padding: 20px 0;\n\n    transition: all 0.5s;\n\n    &:hover {\n        transform: scale(1.15);\n    }\n"]);return X=function(){return e},e}function q(){var e=Object(s.a)(["\n    font-size: 2rem;\n    color: black;\n    font-weight: bold;\n\n    @media (max-width: 450px) {\n        font-size: 1.6rem;\n    }\n"]);return q=function(){return e},e}function $(){var e=Object(s.a)(["\n    query GetHero($url: ID!) {\n        hero(id: $url, idType: SLUG) {\n            hero_info {\n                heroId\n                name\n                lore\n                syncRewards {\n                    ... on Sync_reward {\n                    reward_info {\n                        name\n                        level\n                        effect\n                        type\n                    }\n                    }\n                }\n                artwork {\n                    sourceUrl\n                }\n            }\n        }\n    }\n"]);return $=function(){return e},e}var K=Object(i.gql)($()),ee=function(e){var n=e.level,t=e.rewards;return r.a.createElement("div",{className:"d-flex flex-column justify-content-center"},r.a.createElement(me,{className:"border-bottom"},"Level ",n),r.a.createElement(ue,null,t.map((function(e){return r.a.createElement(se,{key:e.name},r.a.createElement(de,{className:"text-break"},e.name),r.a.createElement(Me,null,e.type),r.a.createElement(fe,null,e.effect))}))))},ne=function(e){var n,t=e.match.url,a=Object(i.useQuery)(K,{variables:{url:t}}),c=a.loading,o=a.error,l=a.data;if(c)return r.a.createElement(O,{mainClassName:"h-100 d-flex justify-content-center align-items-center"},r.a.createElement(Y.a,{animation:"border"},r.a.createElement("span",{className:"sr-only"},"Loading...")));if(o)return"Error! ".concat(o.message);var u=l.hero.hero_info,s=null===(n=u.syncRewards)||void 0===n?void 0:n.map((function(e){return e.reward_info})),m=P()(s,"level");return r.a.createElement(O,{mainClassName:"d-flex align-items-top"},r.a.createElement("title",null,"HeroSync - ",u.name),r.a.createElement(ie,{className:"mt-5 p-4 text-center w-100 d-flex flex-row justify-content-around align-items-center"},r.a.createElement(U.a,null,r.a.createElement(U.a.Image,{width:300,height:300,src:u.artwork.sourceUrl,alt:u.name,title:u.name,className:"rounded"}),r.a.createElement(te,null,u.name),r.a.createElement(oe,{dangerouslySetInnerHTML:{__html:u.lore}})),r.a.createElement(le,null,Object.keys(m).map((function(e){return r.a.createElement(ee,{key:e,level:e,rewards:m[e]})})))))},te=Object(L.a)(U.a.Caption)(q()),ae=L.a.div(X()),re=L.a.img(V()),ce=L.a.h5(_()),oe=L.a.p(J()),ie=L.a.div(F()),le=L.a.section(W()),ue=Object(L.a)(D.a)(H()),se=Object(L.a)(C.a)(B()),me=L.a.h4(R()),de=L.a.h6(A()),fe=L.a.div(G()),Me=L.a.div(Z());ne.SyncRewards=ee,ne.Preview=function(e){var n=e.hero,t=n.name,a=n.artwork.sourceUrl,c=e.slug;return r.a.createElement(ae,null,r.a.createElement(re,{className:"rounded-circle",alt:t,src:a}),r.a.createElement("a",{href:c,className:"stretched-link"},r.a.createElement(ce,{className:"text-wrap mt-3"},t)))};var he=ne;function je(){var e=Object(s.a)(["\n    padding: 0 3%;\n"]);return je=function(){return e},e}function Ee(){var e=Object(s.a)(["\n    query AllHeroes {\n        heroes {\n            edges {\n                node {\n                    hero_info {\n                        heroId\n                        name\n                        artwork {\n                            sourceUrl\n                        }\n                    }\n                    slug\n                    uri\n                }\n            }\n        }\n    }\n"]);return Ee=function(){return e},e}var Le=Object(i.gql)(Ee()),ye=Object(L.a)(D.a)(je()),ge=function(){var e=Object(i.useQuery)(Le),n=e.loading,t=e.error,a=e.data;if(n)return r.a.createElement(O,{mainClassName:"h-100 d-flex justify-content-center align-items-center"},r.a.createElement(Y.a,{animation:"border"},r.a.createElement("span",{className:"sr-only"},"Loading...")));if(t)return"Error! ".concat(t.message);var c=a.heroes.edges.slice().sort((function(e,n){return e.node.hero_info.heroId-n.node.hero_info.heroId}));return r.a.createElement(O,{mainClassName:"h-100 pt-5 d-flex align-items-center"},r.a.createElement(ye,{xs:2,md:3,lg:5,className:"h-100 align-items-center justify-content-center mx-auto"},c.map((function(e){var n=e.node.hero_info;return r.a.createElement(C.a,{key:n.heroId},r.a.createElement(he.Preview,{key:n.heroId,hero:n,slug:e.node.uri}))}))))},we=function(){return r.a.createElement(O,{mainClassName:"h-100 d-flex align-items-center text-center justify-content-center"},r.a.createElement("h1",null,"Coming soon..."))},pe=t(144),Ne=t(53),ve=t(102),xe=t.n(ve),be=t(63);function Ie(){var e=Object(s.a)(["\n    max-width: 80%;\n"]);return Ie=function(){return e},e}function Se(){var e=Object(s.a)(['\n    &:before {\n        content: "Published: ";\n    }\n']);return Se=function(){return e},e}var ke=L.a.p(Se()),Te=Object(L.a)(be.a)(Ie());function ze(){var e=Object(s.a)(["\n    query GetPost($url: ID!) {\n        post(id: $url, idType: URI) {\n            title\n            excerpt\n            content\n            dateGmt\n            featuredImage {\n                node {\n                    sourceUrl\n                }\n            }\n        }\n    }\n"]);return ze=function(){return e},e}var Oe=Object(i.gql)(ze()),De=function(e){var n=e.match.url,t=Object(i.useQuery)(Oe,{variables:{url:n}}),a=t.loading,c=t.error,o=t.data;return a?r.a.createElement(O,{mainClassName:"h-100 d-flex justify-content-center align-items-center"},r.a.createElement(Y.a,{animation:"border"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):c?"Error! ".concat(c.message):r.a.createElement(O,{mainClassName:"h-100 d-flex flex-column justify-content-center align-items-top"},r.a.createElement(M.a,{className:"h-100 pt-5 mt-5"},console.log(o.post),r.a.createElement("div",{className:"text-center"},o.post.featuredImage&&r.a.createElement(Te,{className:"img-responsive",rounded:!0,fluid:!0,src:o.post.featuredImage.node.sourceUrl,alt:"Featured Image"}),r.a.createElement("h2",null,o.post.title),r.a.createElement(ke,{className:"lead"},r.a.createElement(xe.a,{format:"MM/DD/YYYY"},o.post.dateGmt))),r.a.createElement(M.a,{dangerouslySetInnerHTML:{__html:o.post.content},className:"text-center pt-3"})))};De.Preview=function(e){var n=e.post;return r.a.createElement(Ne.a,null,n.featuredImage&&r.a.createElement(Ne.a.Img,{variant:"top",src:n.featuredImage.node.sourceUrl}),r.a.createElement(Ne.a.Body,null,r.a.createElement(Ne.a.Title,null,n.title),r.a.createElement(Ne.a.Text,{dangerouslySetInnerHTML:{__html:n.excerpt}}),r.a.createElement("a",{href:n.uri,className:"stretched-link"},"Read more..."),r.a.createElement("footer",{className:"text-right"},r.a.createElement("small",{class:"text-muted mb-2"},r.a.createElement(xe.a,{format:"MM/DD/YYYY"},n.dateGmt)))))};var Ce=De;function Ye(){var e=Object(s.a)(["\n    query GetAllBlogPosts {\n        posts {\n            edges {\n                node {\n                    databaseId\n                    link\n                    uri\n                    dateGmt\n                    title(format: RENDERED)\n                    excerpt(format: RENDERED)\n                    content(format: RENDERED)\n                    featuredImage {\n                        node {\n                            uri\n                            sourceUrl\n                        }\n                    }\n                    categories {\n                        edges {\n                            node {\n                                name\n                                uri\n                                databaseId\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"]);return Ye=function(){return e},e}var Ue=Object(i.gql)(Ye()),Qe=function(){var e=Object(i.useQuery)(Ue),n=e.loading,t=e.error,a=e.data;if(n)return r.a.createElement(O,{mainClassName:"h-100 d-flex justify-content-center align-items-center"},r.a.createElement(Y.a,{animation:"border"},r.a.createElement("span",{className:"sr-only"},"Loading...")));if(t)return"Error! ".concat(t.message);var c=a.posts.edges;return r.a.createElement(O,{mainClassName:"pt-5 d-flex"},r.a.createElement(pe.a,{xs:2,md:3,lg:5,className:"mt-3 w-100"},c.map((function(e){return r.a.createElement(C.a,{key:e.node.databaseId},r.a.createElement(Ce.Preview,{post:e.node,key:e.node.databaseId}))}))))},Pe=new i.ApolloClient({uri:"https://admin.herosync.com/graphql",cache:new i.InMemoryCache});var Ze=function(){return r.a.createElement(i.ApolloProvider,{client:Pe},r.a.createElement(l.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:S}),r.a.createElement(u.a,{exact:!0,path:"/heroes",component:ge}),r.a.createElement(u.a,{path:"/hero/:slug",component:he}),r.a.createElement(u.a,{exact:!0,path:"/cards",component:we}),r.a.createElement(u.a,{exact:!0,path:"/blog",component:Qe}),r.a.createElement(u.a,{path:"/:slug",component:Ce}))))},Ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(255);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ze,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hs-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/hs-react","/service-worker.js");Ge?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ae(n,e)}))}}()}},[[146,1,2]]]);
//# sourceMappingURL=main.e26c7bb7.chunk.js.map