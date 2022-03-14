"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4953],{3905:function(M,j,L){L.d(j,{Zo:function(){return T},kt:function(){return z}});var I=L(7294);function i(M,j,L){return j in M?Object.defineProperty(M,j,{value:L,enumerable:!0,configurable:!0,writable:!0}):M[j]=L,M}function u(M,j){var L=Object.keys(M);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(M);j&&(I=I.filter((function(j){return Object.getOwnPropertyDescriptor(M,j).enumerable}))),L.push.apply(L,I)}return L}function N(M){for(var j=1;j<arguments.length;j++){var L=null!=arguments[j]?arguments[j]:{};j%2?u(Object(L),!0).forEach((function(j){i(M,j,L[j])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(L)):u(Object(L)).forEach((function(j){Object.defineProperty(M,j,Object.getOwnPropertyDescriptor(L,j))}))}return M}function w(M,j){if(null==M)return{};var L,I,i=function(M,j){if(null==M)return{};var L,I,i={},u=Object.keys(M);for(I=0;I<u.length;I++)L=u[I],j.indexOf(L)>=0||(i[L]=M[L]);return i}(M,j);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(M);for(I=0;I<u.length;I++)L=u[I],j.indexOf(L)>=0||Object.prototype.propertyIsEnumerable.call(M,L)&&(i[L]=M[L])}return i}var S=I.createContext({}),D=function(M){var j=I.useContext(S),L=j;return M&&(L="function"==typeof M?M(j):N(N({},j),M)),L},T=function(M){var j=D(M.components);return I.createElement(S.Provider,{value:j},M.children)},t={inlineCode:"code",wrapper:function(M){var j=M.children;return I.createElement(I.Fragment,{},j)}},x=I.forwardRef((function(M,j){var L=M.components,i=M.mdxType,u=M.originalType,S=M.parentName,T=w(M,["components","mdxType","originalType","parentName"]),x=D(L),z=i,e=x["".concat(S,".").concat(z)]||x[z]||t[z]||u;return L?I.createElement(e,N(N({ref:j},T),{},{components:L})):I.createElement(e,N({ref:j},T))}));function z(M,j){var L=arguments,i=j&&j.mdxType;if("string"==typeof M||i){var u=L.length,N=new Array(u);N[0]=x;var w={};for(var S in j)hasOwnProperty.call(j,S)&&(w[S]=j[S]);w.originalType=M,w.mdxType="string"==typeof M?M:i,N[1]=w;for(var D=2;D<u;D++)N[D]=L[D];return I.createElement.apply(null,N)}return I.createElement.apply(null,L)}x.displayName="MDXCreateElement"},2210:function(M,j,L){L.r(j),L.d(j,{assets:function(){return T},contentTitle:function(){return S},default:function(){return z},frontMatter:function(){return w},metadata:function(){return D},toc:function(){return t}});var I=L(7462),i=L(3366),u=(L(7294),L(3905)),N=["components"],w={sidebar_position:3},S="MMR Database",D={unversionedId:"learn/mmrdatabase",id:"learn/mmrdatabase",title:"MMR Database",description:"As the blockchain is heavily pruned, users must store proof that their coins (UTxOs) are unspent. This is the role of the MMR database. The MMR (Merkle Mountain Range) proof db is a hash sum tree containing the proofs for all coins, spent (STxOs) or unspent (UTxOs) in the system.",source:"@site/docs/learn/mmrdatabase.md",sourceDirName:"learn",slug:"/learn/mmrdatabase",permalink:"/docs/learn/mmrdatabase",editUrl:"https://github.com/arnimedia/arnimedia.github.io.git/docs/learn/mmrdatabase.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/docs/learn/coreconcepts"},next:{title:"Transactions",permalink:"/docs/learn/transactions"}},T={},t=[],x={toc:t};function z(M){var j=M.components,w=(0,i.Z)(M,N);return(0,u.kt)("wrapper",(0,I.Z)({},x,w,{components:j,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"mmr-database"},"MMR Database"),(0,u.kt)("p",null,"As the blockchain is heavily pruned, users must store proof that their coins (UTxOs) are unspent. This is the role of the MMR database. The MMR (Merkle Mountain Range) proof db is a hash sum tree containing the proofs for all coins, spent (STxOs) or unspent (UTxOs) in the system."),(0,u.kt)("p",null,"Users do not store the whole MMR for all the coins in the system, as this would be too burdensome, rather they only store the paths to their own coins which must be provided when a user wishes to spend their coins."),(0,u.kt)("p",null,"The tree is append-only and is updated with each new block as coins are spent and created. When a coin is spent, the Spent state of the coin changes from false to true and the MMR Proof for the coin is updated."),(0,u.kt)("p",null,"When a new coin is created (as an output to a transaction), a new leaf node is added to the tree for the new, unspent coin, creating new peaks and a new root hash.\nTherefore, for a user to prove the validity of their coins (i.e. that they are unspent), a user must remain up to date with the chain to ensure they hold the most up to date coin proofs."),(0,u.kt)("p",null,"When a user wishes to spend their coins, they must prove their coins are unspent by providing:"),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"The MMR Root hash from the most recent block"),(0,u.kt)("li",{parentName:"ol"},"The proof path to the entry of the coin ")),(0,u.kt)("p",null,"A node receiving the proofs will check the coins are valid by summing the hashes provided and ensuring it matches the Merkle root they possess themselves.\nDiagram: A complete Merkle Mountain Range (MMR) with three peaks and root"),(0,u.kt)("p",null,(0,u.kt)("img",{loading:"lazy",alt:"Minima",src:L(2995).Z,width:"1444",height:"1068"}),"\n",(0,u.kt)("img",{loading:"lazy",alt:"Minima",src:L(9828).Z+"#gh-light-mode-only",width:"469",height:"315"}),(0,u.kt)("img",{loading:"lazy",alt:"Minima",src:L(3551).Z+"#gh-dark-mode-only",width:"469",height:"315"})),(0,u.kt)("p",null,"A brief overview: ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/opentimestamps/opentimestamps-server/blob/master/doc/merkle-mountain-range.md"},"https://github.com/opentimestamps/opentimestamps-server/blob/master/doc/merkle-mountain-range.md"),"\nDetailed overview: ",(0,u.kt)("a",{parentName:"p",href:"https://petertodd.org/2016/delayed-txo-commitments"},"https://petertodd.org/2016/delayed-txo-commitments")))}z.isMDXComponent=!0},2995:function(M,j,L){j.Z=L.p+"assets/images/learn_6-d6336b6183a4a73a9d871506b40b62f4.png"},3551:function(M,j){j.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjkuMzEgMzE0LjgyIj48ZGVmcz48c3R5bGU+LmJ7bGV0dGVyLXNwYWNpbmc6LS4wMWVtO30uY3tsZXR0ZXItc3BhY2luZzotLjAyZW07fS5ke2ZpbGw6IzY3Yjc2Mzt9LmUsLmZ7ZmlsbDojZmZmO30uZ3tmaWxsOiNmZjk2ODI7fS5oe2ZpbGw6IzgzYWZmZjt9Lml7ZmlsbDojZjRmNGY1O30uaSwuantzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Lmp7ZmlsbDpub25lO30ua3tsZXR0ZXItc3BhY2luZzotLjAyZW07fS5se2xldHRlci1zcGFjaW5nOjBlbTt9LmZ7Zm9udC1mYW1pbHk6TWFucm9wZS1NZWRpdW0sIE1hbnJvcGU7Zm9udC1zaXplOjEwcHg7fS5te2xldHRlci1zcGFjaW5nOjBlbTt9PC9zdHlsZT48L2RlZnM+PGc+PHBhdGggY2xhc3M9ImQiIGQ9Ik0zOTEuOTksMzE0LjMyYy02Ljg5LDAtMTIuNDktNS42LTEyLjQ5LTEyLjQ5czUuNi0xMi40OSwxMi40OS0xMi40OSwxMi40OSw1LjYsMTIuNDksMTIuNDktNS42LDEyLjQ5LTEyLjQ5LDEyLjQ5WiIvPjxwYXRoIGNsYXNzPSJlIiBkPSJNMzkxLjk5LDI4OS44NGM2LjYxLDAsMTEuOTksNS4zOCwxMS45OSwxMS45OXMtNS4zOCwxMS45OS0xMS45OSwxMS45OS0xMS45OS01LjM4LTExLjk5LTExLjk5LDUuMzgtMTEuOTksMTEuOTktMTEuOTltMC0xYy03LjE4LDAtMTIuOTksNS44Mi0xMi45OSwxMi45OXM1LjgyLDEyLjk5LDEyLjk5LDEyLjk5LDEyLjk5LTUuODIsMTIuOTktMTIuOTktNS44Mi0xMi45OS0xMi45OS0xMi45OWgwWiIvPjwvZz48bGluZSBjbGFzcz0iaiIgeDE9IjI0LjU0IiB5MT0iMjY2LjM3IiB4Mj0iMTY5LjE4IiB5Mj0iMTUuODUiLz48bGluZSBjbGFzcz0iaiIgeDE9IjE0MC45MiIgeTE9IjI2Ni4zNyIgeDI9IjE3MC40MSIgeTI9IjIxNC45MyIvPjxsaW5lIGNsYXNzPSJqIiB4MT0iMjU2Ljk3IiB5MT0iMjY2LjM3IiB4Mj0iMTQwLjc2IiB5Mj0iNjUuMDciLz48bGluZSBjbGFzcz0iaiIgeDE9IjIwMC4xMiIgeTE9IjI2Ni4zNyIgeDI9IjExMi4zMyIgeTI9IjExNC4zMiIvPjxsaW5lIGNsYXNzPSJqIiB4MT0iODMuOTUiIHkxPSIyNjYuMzciIHgyPSI1NC4yNCIgeTI9IjIxNC45MyIvPjxyZWN0IGNsYXNzPSJpIiB4PSI4LjY5IiB5PSIyNTAuNTMiIHdpZHRoPSIzMS43IiBoZWlnaHQ9IjMxLjciIHJ4PSI2LjIyIiByeT0iNi4yMiIvPjxnPjxwYXRoIGNsYXNzPSJoIiBkPSJNMTAyLjcsOTguOTdoMTkuMjZjMy4xNiwwLDUuNzIsMi41Niw1LjcyLDUuNzJ2MTkuMjZjMCwzLjE2LTIuNTYsNS43Mi01LjcyLDUuNzJoLTE5LjI3Yy0zLjE1LDAtNS43Mi0yLjU2LTUuNzItNS43MnYtMTkuMjZjMC0zLjE2LDIuNTYtNS43Miw1LjcyLTUuNzJaIi8+PHBhdGggY2xhc3M9ImUiIGQ9Ik0xMjEuOTYsOTkuNDdjMi44OCwwLDUuMjIsMi4zNCw1LjIyLDUuMjJ2MTkuMjdjMCwyLjg4LTIuMzQsNS4yMi01LjIyLDUuMjJoLTE5LjI3Yy0yLjg4LDAtNS4yMi0yLjM0LTUuMjItNS4yMnYtMTkuMjdjMC0yLjg4LDIuMzQtNS4yMiw1LjIyLTUuMjJoMTkuMjdtMC0xaC0xOS4yN2MtMy40MywwLTYuMjIsMi43OC02LjIyLDYuMjJ2MTkuMjdjMCwzLjQzLDIuNzgsNi4yMiw2LjIyLDYuMjJoMTkuMjdjMy40MywwLDYuMjItMi43OCw2LjIyLTYuMjJ2LTE5LjI3YzAtMy40My0yLjc4LTYuMjItNi4yMi02LjIyaDBaIi8+PC9nPjxyZWN0IGNsYXNzPSJpIiB4PSIzOC4zOSIgeT0iMTk5LjA4IiB3aWR0aD0iMzEuNyIgaGVpZ2h0PSIzMS43IiByeD0iNi4yMiIgcnk9IjYuMjIiLz48cmVjdCBjbGFzcz0iaSIgeD0iMTU0LjU3IiB5PSIxOTkuMDgiIHdpZHRoPSIzMS43IiBoZWlnaHQ9IjMxLjciIHJ4PSI2LjIyIiByeT0iNi4yMiIvPjxyZWN0IGNsYXNzPSJpIiB4PSIxMjQuOTEiIHk9IjQ5LjIzIiB3aWR0aD0iMzEuNyIgaGVpZ2h0PSIzMS43IiByeD0iNi4yMiIgcnk9IjYuMjIiLz48bGluZSBjbGFzcz0iaiIgeDE9IjMzNi4wMSIgeTE9IjMwNC44MSIgeDI9IjE2OS4xOCIgeTI9IjE1Ljg1Ii8+PGc+PHBhdGggY2xhc3M9ImciIGQ9Ik0xNTkuNTUsLjVoMTkuMjdjMy4xNSwwLDUuNzIsMi41Niw1LjcyLDUuNzJWMjUuNDhjMCwzLjE2LTIuNTYsNS43Mi01LjcyLDUuNzJoLTE5LjI3Yy0zLjE1LDAtNS43Mi0yLjU2LTUuNzItNS43MlY2LjIyYzAtMy4xNSwyLjU2LTUuNzIsNS43Mi01LjcyWiIvPjxwYXRoIGNsYXNzPSJlIiBkPSJNMTc4LjgxLDFjMi44OCwwLDUuMjIsMi4zNCw1LjIyLDUuMjJWMjUuNDhjMCwyLjg4LTIuMzQsNS4yMi01LjIyLDUuMjJoLTE5LjI3Yy0yLjg4LDAtNS4yMi0yLjM0LTUuMjItNS4yMlY2LjIyYzAtMi44OCwyLjM0LTUuMjIsNS4yMi01LjIyaDE5LjI3TTE3OC44MSwwaC0xOS4yN2MtMy40MywwLTYuMjIsMi43OC02LjIyLDYuMjJWMjUuNDhjMCwzLjQzLDIuNzgsNi4yMiw2LjIyLDYuMjJoMTkuMjdjMy40MywwLDYuMjItMi43OCw2LjIyLTYuMjJWNi4yMkMxODUuMDMsMi43OCwxODIuMjQsMCwxNzguODEsMGgwWiIvPjwvZz48Zz48cGF0aCBjbGFzcz0iZyIgZD0iTTM4NC4wOSwxMzguMTNoMTUuNzljMi41NCwwLDQuNiwyLjA2LDQuNiw0LjZ2MTUuNzljMCwyLjU0LTIuMDYsNC42LTQuNiw0LjZoLTE1LjhjLTIuNTQsMC00LjYtMi4wNi00LjYtNC42di0xNS43OWMwLTIuNTQsMi4wNi00LjYsNC42LTQuNloiLz48cGF0aCBjbGFzcz0iZSIgZD0iTTM5OS44OSwxMzguNjNjMi4yNiwwLDQuMSwxLjg0LDQuMSw0LjF2MTUuNzljMCwyLjI2LTEuODQsNC4xLTQuMSw0LjFoLTE1Ljc5Yy0yLjI2LDAtNC4xLTEuODQtNC4xLTQuMXYtMTUuNzljMC0yLjI2LDEuODQtNC4xLDQuMS00LjFoMTUuNzltMC0xaC0xNS43OWMtMi44MSwwLTUuMSwyLjI4LTUuMSw1LjF2MTUuNzljMCwyLjgxLDIuMjgsNS4xLDUuMSw1LjFoMTUuNzljMi44MSwwLDUuMS0yLjI4LDUuMS01LjF2LTE1Ljc5YzAtMi44MS0yLjI4LTUuMS01LjEtNS4xaDBaIi8+PC9nPjxnPjxwYXRoIGNsYXNzPSJoIiBkPSJNMzg0LjA5LDE3NS45M2gxNS43OWMyLjU0LDAsNC42LDIuMDYsNC42LDQuNnYxNS44YzAsMi41NC0yLjA2LDQuNi00LjYsNC42aC0xNS43OWMtMi41NCwwLTQuNi0yLjA2LTQuNi00LjZ2LTE1Ljc5YzAtMi41NCwyLjA2LTQuNiw0LjYtNC42WiIvPjxwYXRoIGNsYXNzPSJlIiBkPSJNMzk5Ljg5LDE3Ni40M2MyLjI2LDAsNC4xLDEuODQsNC4xLDQuMXYxNS43OWMwLDIuMjYtMS44NCw0LjEtNC4xLDQuMWgtMTUuNzljLTIuMjYsMC00LjEtMS44NC00LjEtNC4xdi0xNS43OWMwLTIuMjYsMS44NC00LjEsNC4xLTQuMWgxNS43OW0wLTFoLTE1Ljc5Yy0yLjgxLDAtNS4xLDIuMjgtNS4xLDUuMXYxNS43OWMwLDIuODEsMi4yOCw1LjEsNS4xLDUuMWgxNS43OWMyLjgxLDAsNS4xLTIuMjgsNS4xLTUuMXYtMTUuNzljMC0yLjgxLTIuMjgtNS4xLTUuMS01LjFoMFoiLz48L2c+PGc+PHBhdGggY2xhc3M9ImgiIGQ9Ik0zOTEuOTksMjM4LjcyYy02Ljg5LDAtMTIuNDktNS42LTEyLjQ5LTEyLjQ5czUuNi0xMi40OSwxMi40OS0xMi40OSwxMi40OSw1LjYsMTIuNDksMTIuNDktNS42LDEyLjQ5LTEyLjQ5LDEyLjQ5WiIvPjxwYXRoIGNsYXNzPSJlIiBkPSJNMzkxLjk5LDIxNC4yM2M2LjYxLDAsMTEuOTksNS4zOCwxMS45OSwxMS45OXMtNS4zOCwxMS45OS0xMS45OSwxMS45OS0xMS45OS01LjM4LTExLjk5LTExLjk5LDUuMzgtMTEuOTksMTEuOTktMTEuOTltMC0xYy03LjE4LDAtMTIuOTksNS44Mi0xMi45OSwxMi45OXM1LjgyLDEyLjk5LDEyLjk5LDEyLjk5LDEyLjk5LTUuODIsMTIuOTktMTIuOTktNS44Mi0xMi45OS0xMi45OS0xMi45OWgwWiIvPjwvZz48cmVjdCBjbGFzcz0iaSIgeD0iMzc5IiB5PSIyNTEuMDMiIHdpZHRoPSIyNS45OSIgaGVpZ2h0PSIyNS45OSIgcng9IjUuMSIgcnk9IjUuMSIvPjxsaW5lIGNsYXNzPSJqIiB4MT0iMjQuNTQiIHkxPSIyNjYuMzciIHgyPSIxMC4wMSIgeTI9IjMwNC44MSIvPjxsaW5lIGNsYXNzPSJqIiB4MT0iMjQuNTQiIHkxPSIyNjYuMzciIHgyPSIzOS4wNiIgeTI9IjMwNC44MSIvPjxsaW5lIGNsYXNzPSJqIiB4MT0iODMuOTUiIHkxPSIyNjYuMzciIHgyPSI2OS40MiIgeTI9IjMwNC44MSIvPjxsaW5lIGNsYXNzPSJqIiB4MT0iODMuOTUiIHkxPSIyNjYuMzciIHgyPSI5OC40NyIgeTI9IjMwNC44MSIvPjxsaW5lIGNsYXNzPSJqIiB4MT0iMTQwLjkyIiB5MT0iMjY2LjM3IiB4Mj0iMTI2LjQiIHkyPSIzMDQuODEiLz48bGluZSBjbGFzcz0iaiIgeDE9IjE0MC45MiIgeTE9IjI2Ni4zNyIgeDI9IjE1NS40NSIgeTI9IjMwNC44MSIvPjxsaW5lIGNsYXNzPSJqIiB4MT0iMjAwLjEyIiB5MT0iMjY2LjM3IiB4Mj0iMTg1LjU5IiB5Mj0iMzA0LjgxIi8+PGxpbmUgY2xhc3M9ImoiIHgxPSIxOTguODYiIHkxPSIyNjUuODciIHgyPSIyMTQuNjQiIHkyPSIzMDQuODEiLz48bGluZSBjbGFzcz0iaiIgeDE9IjI1Ni45NyIgeTE9IjI2Ni4zNyIgeDI9IjI0Mi40NCIgeTI9IjMwNC44MSIvPjxsaW5lIGNsYXNzPSJqIiB4MT0iMjU2Ljk3IiB5MT0iMjY2LjM3IiB4Mj0iMjcxLjUiIHkyPSIzMDQuODEiLz48Zz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iMTAuMDEiIGN5PSIzMDQuODEiIHI9IjkuNTEiLz48cGF0aCBjbGFzcz0iZSIgZD0iTTEwLjAxLDI5NS44YzQuOTcsMCw5LjAxLDQuMDQsOS4wMSw5LjAxcy00LjA0LDkuMDEtOS4wMSw5LjAxLTkuMDEtNC4wNC05LjAxLTkuMDEsNC4wNC05LjAxLDkuMDEtOS4wMW0wLTFDNC40OCwyOTQuOCwwLDI5OS4yOCwwLDMwNC44MXM0LjQ4LDEwLjAxLDEwLjAxLDEwLjAxLDEwLjAxLTQuNDgsMTAuMDEtMTAuMDEtNC40OC0xMC4wMS0xMC4wMS0xMC4wMWgwWiIvPjwvZz48Zz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iMzkuMDYiIGN5PSIzMDQuODEiIHI9IjkuNTEiLz48cGF0aCBjbGFzcz0iZSIgZD0iTTM5LjA2LDI5NS44YzQuOTcsMCw5LjAxLDQuMDQsOS4wMSw5LjAxcy00LjA0LDkuMDEtOS4wMSw5LjAxLTkuMDEtNC4wNC05LjAxLTkuMDEsNC4wNC05LjAxLDkuMDEtOS4wMW0wLTFjLTUuNTMsMC0xMC4wMSw0LjQ4LTEwLjAxLDEwLjAxczQuNDgsMTAuMDEsMTAuMDEsMTAuMDEsMTAuMDEtNC40OCwxMC4wMS0xMC4wMS00LjQ4LTEwLjAxLTEwLjAxLTEwLjAxaDBaIi8+PC9nPjxnPjxjaXJjbGUgY2xhc3M9ImQiIGN4PSI2OS40MiIgY3k9IjMwNC44MSIgcj0iOS41MSIvPjxwYXRoIGNsYXNzPSJlIiBkPSJNNjkuNDIsMjk1LjhjNC45NywwLDkuMDEsNC4wNCw5LjAxLDkuMDFzLTQuMDQsOS4wMS05LjAxLDkuMDEtOS4wMS00LjA0LTkuMDEtOS4wMSw0LjA0LTkuMDEsOS4wMS05LjAxbTAtMWMtNS41MywwLTEwLjAxLDQuNDgtMTAuMDEsMTAuMDFzNC40OCwxMC4wMSwxMC4wMSwxMC4wMSwxMC4wMS00LjQ4LDEwLjAxLTEwLjAxLTQuNDgtMTAuMDEtMTAuMDEtMTAuMDFoMFoiLz48L2c+PGc+PHBhdGggY2xhc3M9ImQiIGQ9Ik05OC40NywzMTQuMzJjLTUuMjUsMC05LjUxLTQuMjctOS41MS05LjUxczQuMjctOS41MSw5LjUxLTkuNTEsOS41MSw0LjI3LDkuNTEsOS41MS00LjI3LDkuNTEtOS41MSw5LjUxWiIvPjxwYXRoIGNsYXNzPSJlIiBkPSJNOTguNDcsMjk1LjhjNC45NywwLDkuMDEsNC4wNCw5LjAxLDkuMDFzLTQuMDQsOS4wMS05LjAxLDkuMDEtOS4wMS00LjA0LTkuMDEtOS4wMSw0LjA0LTkuMDEsOS4wMS05LjAxbTAtMWMtNS41MywwLTEwLjAxLDQuNDgtMTAuMDEsMTAuMDFzNC40OCwxMC4wMSwxMC4wMSwxMC4wMSwxMC4wMS00LjQ4LDEwLjAxLTEwLjAxLTQuNDgtMTAuMDEtMTAuMDEtMTAuMDFoMFoiLz48L2c+PGc+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjEyNi40IiBjeT0iMzA0LjgxIiByPSI5LjUxIi8+PHBhdGggY2xhc3M9ImUiIGQ9Ik0xMjYuNCwyOTUuOGM0Ljk3LDAsOS4wMSw0LjA0LDkuMDEsOS4wMXMtNC4wNCw5LjAxLTkuMDEsOS4wMS05LjAxLTQuMDQtOS4wMS05LjAxLDQuMDQtOS4wMSw5LjAxLTkuMDFtMC0xYy01LjUzLDAtMTAuMDEsNC40OC0xMC4wMSwxMC4wMXM0LjQ4LDEwLjAxLDEwLjAxLDEwLjAxLDEwLjAxLTQuNDgsMTAuMDEtMTAuMDEtNC40OC0xMC4wMS0xMC4wMS0xMC4wMWgwWiIvPjwvZz48Zz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iMTU1LjQ1IiBjeT0iMzA0LjgxIiByPSI5LjUxIi8+PHBhdGggY2xhc3M9ImUiIGQ9Ik0xNTUuNDUsMjk1LjhjNC45NywwLDkuMDEsNC4wNCw5LjAxLDkuMDFzLTQuMDQsOS4wMS05LjAxLDkuMDEtOS4wMS00LjA0LTkuMDEtOS4wMSw0LjA0LTkuMDEsOS4wMS05LjAxbTAtMWMtNS41MywwLTEwLjAxLDQuNDgtMTAuMDEsMTAuMDFzNC40OCwxMC4wMSwxMC4wMSwxMC4wMSwxMC4wMS00LjQ4LDEwLjAxLTEwLjAxLTQuNDgtMTAuMDEtMTAuMDEtMTAuMDFoMFoiLz48L2c+PGc+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjE4NS41OSIgY3k9IjMwNC44MSIgcj0iOS41MSIvPjxwYXRoIGNsYXNzPSJlIiBkPSJNMTg1LjU5LDI5NS44YzQuOTcsMCw5LjAxLDQuMDQsOS4wMSw5LjAxcy00LjA0LDkuMDEtOS4wMSw5LjAxLTkuMDEtNC4wNC05LjAxLTkuMDEsNC4wNC05LjAxLDkuMDEtOS4wMW0wLTFjLTUuNTMsMC0xMC4wMSw0LjQ4LTEwLjAxLDEwLjAxczQuNDgsMTAuMDEsMTAuMDEsMTAuMDEsMTAuMDEtNC40OCwxMC4wMS0xMC4wMS00LjQ4LTEwLjAxLTEwLjAxLTEwLjAxaDBaIi8+PC9nPjxnPjxjaXJjbGUgY2xhc3M9ImQiIGN4PSIyMTQuNjUiIGN5PSIzMDQuODEiIHI9IjkuNTEiLz48cGF0aCBjbGFzcz0iZSIgZD0iTTIxNC42NCwyOTUuOGM0Ljk3LDAsOS4wMSw0LjA0LDkuMDEsOS4wMXMtNC4wNCw5LjAxLTkuMDEsOS4wMS05LjAxLTQuMDQtOS4wMS05LjAxLDQuMDQtOS4wMSw5LjAxLTkuMDFtMC0xYy01LjUzLDAtMTAuMDEsNC40OC0xMC4wMSwxMC4wMXM0LjQ4LDEwLjAxLDEwLjAxLDEwLjAxLDEwLjAxLTQuNDgsMTAuMDEtMTAuMDEtNC40OC0xMC4wMS0xMC4wMS0xMC4wMWgwWiIvPjwvZz48Zz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iMjQyLjQ0IiBjeT0iMzA0LjgxIiByPSI5LjUxIi8+PHBhdGggY2xhc3M9ImUiIGQ9Ik0yNDIuNDQsMjk1LjhjNC45NywwLDkuMDEsNC4wNCw5LjAxLDkuMDFzLTQuMDQsOS4wMS05LjAxLDkuMDEtOS4wMS00LjA0LTkuMDEtOS4wMSw0LjA0LTkuMDEsOS4wMS05LjAxbTAtMWMtNS41MywwLTEwLjAxLDQuNDgtMTAuMDEsMTAuMDFzNC40OCwxMC4wMSwxMC4wMSwxMC4wMSwxMC4wMS00LjQ4LDEwLjAxLTEwLjAxLTQuNDgtMTAuMDEtMTAuMDEtMTAuMDFoMFoiLz48L2c+PGc+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjI3MS41IiBjeT0iMzA0LjgxIiByPSI5LjUxIi8+PHBhdGggY2xhc3M9ImUiIGQ9Ik0yNzEuNSwyOTUuOGM0Ljk3LDAsOS4wMSw0LjA0LDkuMDEsOS4wMXMtNC4wNCw5LjAxLTkuMDEsOS4wMS05LjAxLTQuMDQtOS4wMS05LjAxLDQuMDQtOS4wMSw5LjAxLTkuMDFtMC0xYy01LjUzLDAtMTAuMDEsNC40OC0xMC4wMSwxMC4wMXM0LjQ4LDEwLjAxLDEwLjAxLDEwLjAxLDEwLjAxLTQuNDgsMTAuMDEtMTAuMDEtNC40OC0xMC4wMS0xMC4wMS0xMC4wMWgwWiIvPjwvZz48Zz48Y2lyY2xlIGNsYXNzPSJoIiBjeD0iMzM2LjAxIiBjeT0iMzA0LjgxIiByPSI5LjUxIi8+PHBhdGggY2xhc3M9ImUiIGQ9Ik0zMzYuMDEsMjk1LjhjNC45NywwLDkuMDEsNC4wNCw5LjAxLDkuMDFzLTQuMDQsOS4wMS05LjAxLDkuMDEtOS4wMS00LjA0LTkuMDEtOS4wMSw0LjA0LTkuMDEsOS4wMS05LjAxbTAtMWMtNS41MywwLTEwLjAxLDQuNDgtMTAuMDEsMTAuMDFzNC40OCwxMC4wMSwxMC4wMSwxMC4wMSwxMC4wMS00LjQ4LDEwLjAxLTEwLjAxLTQuNDgtMTAuMDEtMTAuMDEtMTAuMDFoMFoiLz48L2c+PHJlY3QgY2xhc3M9ImkiIHg9IjguNjkiIHk9IjI1MC41MyIgd2lkdGg9IjMxLjciIGhlaWdodD0iMzEuNyIgcng9IjYuMjIiIHJ5PSI2LjIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OS4wOCA1MzIuNzUpIHJvdGF0ZSgtMTgwKSIvPjxyZWN0IGNsYXNzPSJpIiB4PSI2OC4xIiB5PSIyNTAuNTMiIHdpZHRoPSIzMS43IiBoZWlnaHQ9IjMxLjciIHJ4PSI2LjIyIiByeT0iNi4yMiIvPjxyZWN0IGNsYXNzPSJpIiB4PSIxMjUuMDgiIHk9IjI1MC41MyIgd2lkdGg9IjMxLjciIGhlaWdodD0iMzEuNyIgcng9IjYuMjIiIHJ5PSI2LjIyIi8+PHJlY3QgY2xhc3M9ImkiIHg9IjE4NC4yNyIgeT0iMjUwLjUzIiB3aWR0aD0iMzEuNyIgaGVpZ2h0PSIzMS43IiByeD0iNi4yMiIgcnk9IjYuMjIiLz48Zz48cmVjdCBjbGFzcz0iaCIgeD0iMjQxLjYyIiB5PSIyNTEuMDMiIHdpZHRoPSIzMC43IiBoZWlnaHQ9IjMwLjciIHJ4PSI1LjcyIiByeT0iNS43MiIvPjxwYXRoIGNsYXNzPSJlIiBkPSJNMjY2LjYsMjUxLjUzYzIuODgsMCw1LjIyLDIuMzQsNS4yMiw1LjIydjE5LjI3YzAsMi44OC0yLjM0LDUuMjItNS4yMiw1LjIyaC0xOS4yN2MtMi44OCwwLTUuMjItMi4zNC01LjIyLTUuMjJ2LTE5LjI3YzAtMi44OCwyLjM0LTUuMjIsNS4yMi01LjIyaDE5LjI3bTAtMWgtMTkuMjdjLTMuNDMsMC02LjIyLDIuNzgtNi4yMiw2LjIydjE5LjI3YzAsMy40MywyLjc4LDYuMjIsNi4yMiw2LjIyaDE5LjI3YzMuNDMsMCw2LjIyLTIuNzgsNi4yMi02LjIydi0xOS4yN2MwLTMuNDMtMi43OC02LjIyLTYuMjItNi4yMmgwWiIvPjwvZz48dGV4dCBjbGFzcz0iZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDE1LjI2IDMwNS40NSkiPjx0c3BhbiB4PSIwIiB5PSIwIj5MPC90c3Bhbj48dHNwYW4gY2xhc3M9ImwiIHg9IjUuMTgiIHk9IjAiPmU8L3RzcGFuPjx0c3BhbiB4PSIxMC45OSIgeT0iMCI+YWYgTm9kZXM8L3RzcGFuPjwvdGV4dD48dGV4dCBjbGFzcz0iZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDE1LjI2IDI2Ny42NCkiPjx0c3BhbiBjbGFzcz0iYyIgeD0iMCIgeT0iMCI+UDwvdHNwYW4+PHRzcGFuIHg9IjUuOTYiIHk9IjAiPmE8L3RzcGFuPjx0c3BhbiBjbGFzcz0iYiIgeD0iMTEuNTgiIHk9IjAiPnI8L3RzcGFuPjx0c3BhbiBjbGFzcz0iayIgeD0iMTUuMjEiIHk9IjAiPmU8L3RzcGFuPjx0c3BhbiB4PSIyMC45NyIgeT0iMCI+bnRzPC90c3Bhbj48L3RleHQ+PHRleHQgY2xhc3M9ImYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxNS4yNiAyMjkuODQpIj48dHNwYW4gY2xhc3M9Im0iIHg9IjAiIHk9IjAiPlA8L3RzcGFuPjx0c3BhbiBjbGFzcz0iYiIgeD0iNi4xMSIgeT0iMCI+ZTwvdHNwYW4+PHRzcGFuIHg9IjExLjkxIiB5PSIwIj5hPC90c3Bhbj48dHNwYW4gY2xhc3M9ImwiIHg9IjE3LjU0IiB5PSIwIj5rPC90c3Bhbj48dHNwYW4geD0iMjIuNTQiIHk9IjAiPnM8L3RzcGFuPjwvdGV4dD48dGV4dCBjbGFzcz0iZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDE1LjI2IDE5Mi4wNCkiPjx0c3BhbiBjbGFzcz0ibSIgeD0iMCIgeT0iMCI+UDwvdHNwYW4+PHRzcGFuIGNsYXNzPSJiIiB4PSI2LjExIiB5PSIwIj5lPC90c3Bhbj48dHNwYW4geD0iMTEuOTEiIHk9IjAiPmE8L3RzcGFuPjx0c3BhbiBjbGFzcz0ibCIgeD0iMTcuNTQiIHk9IjAiPms8L3RzcGFuPjx0c3BhbiB4PSIyMi41NCIgeT0iMCI+czwvdHNwYW4+PC90ZXh0Pjx0ZXh0IGNsYXNzPSJmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTUuMjYgMTU0LjI0KSI+PHRzcGFuIHg9IjAiIHk9IjAiPlJvb3Q8L3RzcGFuPjwvdGV4dD48L3N2Zz4="},9828:function(M,j){j.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjkuMzEgMzE0LjgyIj48ZGVmcz48c3R5bGU+LmJ7bGV0dGVyLXNwYWNpbmc6LS4wMWVtO30uY3tsZXR0ZXItc3BhY2luZzotLjAyZW07fS5ke2ZpbGw6IzY3Yjc2Mzt9LmV7ZmlsbDojZmY5NjgyO30uZiwuZ3tmaWxsOiMzNjNhM2Y7fS5oe2ZpbGw6IzgzYWZmZjt9Lml7ZmlsbDojZjRmNGY1O30uaSwuantzdHJva2U6IzM2M2EzZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Lmp7ZmlsbDpub25lO30ua3tsZXR0ZXItc3BhY2luZzotLjAyZW07fS5se2xldHRlci1zcGFjaW5nOjBlbTt9Lmd7Zm9udC1mYW1pbHk6TWFucm9wZS1NZWRpdW0sIE1hbnJvcGU7Zm9udC1zaXplOjEwcHg7fS5te2xldHRlci1zcGFjaW5nOjBlbTt9PC9zdHlsZT48L2RlZnM+PGc+PHBhdGggY2xhc3M9ImQiIGQ9Ik0zOTEuOTksMzE0LjMyYy02Ljg5LDAtMTIuNDktNS42LTEyLjQ5LTEyLjQ5czUuNi0xMi40OSwxMi40OS0xMi40OSwxMi40OSw1LjYsMTIuNDksMTIuNDktNS42LDEyLjQ5LTEyLjQ5LDEyLjQ5WiIvPjxwYXRoIGNsYXNzPSJmIiBkPSJNMzkxLjk5LDI4OS44NGM2LjYxLDAsMTEuOTksNS4zOCwxMS45OSwxMS45OXMtNS4zOCwxMS45OS0xMS45OSwxMS45OS0xMS45OS01LjM4LTExLjk5LTExLjk5LDUuMzgtMTEuOTksMTEuOTktMTEuOTltMC0xYy03LjE4LDAtMTIuOTksNS44Mi0xMi45OSwxMi45OXM1LjgyLDEyLjk5LDEyLjk5LDEyLjk5LDEyLjk5LTUuODIsMTIuOTktMTIuOTktNS44Mi0xMi45OS0xMi45OS0xMi45OWgwWiIvPjwvZz48bGluZSBjbGFzcz0iaiIgeDE9IjI0LjU0IiB5MT0iMjY2LjM3IiB4Mj0iMTY5LjE4IiB5Mj0iMTUuODUiLz48bGluZSBjbGFzcz0iaiIgeDE9IjE0MC45MiIgeTE9IjI2Ni4zNyIgeDI9IjE3MC40MSIgeTI9IjIxNC45MyIvPjxsaW5lIGNsYXNzPSJqIiB4MT0iMjU2Ljk3IiB5MT0iMjY2LjM3IiB4Mj0iMTQwLjc2IiB5Mj0iNjUuMDciLz48bGluZSBjbGFzcz0iaiIgeDE9IjIwMC4xMiIgeTE9IjI2Ni4zNyIgeDI9IjExMi4zMyIgeTI9IjExNC4zMiIvPjxsaW5lIGNsYXNzPSJqIiB4MT0iODMuOTUiIHkxPSIyNjYuMzciIHgyPSI1NC4yNCIgeTI9IjIxNC45MyIvPjxyZWN0IGNsYXNzPSJpIiB4PSI4LjY5IiB5PSIyNTAuNTMiIHdpZHRoPSIzMS43IiBoZWlnaHQ9IjMxLjciIHJ4PSI2LjIyIiByeT0iNi4yMiIvPjxnPjxyZWN0IGNsYXNzPSJoIiB4PSI5Ni45OCIgeT0iOTguOTciIHdpZHRoPSIzMC43IiBoZWlnaHQ9IjMwLjciIHJ4PSI1LjcyIiByeT0iNS43MiIvPjxwYXRoIGNsYXNzPSJmIiBkPSJNMTIxLjk2LDk5LjQ3YzIuODgsMCw1LjIyLDIuMzQsNS4yMiw1LjIydjE5LjI3YzAsMi44OC0yLjM0LDUuMjItNS4yMiw1LjIyaC0xOS4yN2MtMi44OCwwLTUuMjItMi4zNC01LjIyLTUuMjJ2LTE5LjI3YzAtMi44OCwyLjM0LTUuMjIsNS4yMi01LjIyaDE5LjI3bTAtMWgtMTkuMjdjLTMuNDMsMC02LjIyLDIuNzgtNi4yMiw2LjIydjE5LjI3YzAsMy40MywyLjc4LDYuMjIsNi4yMiw2LjIyaDE5LjI3YzMuNDMsMCw2LjIyLTIuNzgsNi4yMi02LjIydi0xOS4yN2MwLTMuNDMtMi43OC02LjIyLTYuMjItNi4yMmgwWiIvPjwvZz48cmVjdCBjbGFzcz0iaSIgeD0iMzguMzkiIHk9IjE5OS4wOCIgd2lkdGg9IjMxLjciIGhlaWdodD0iMzEuNyIgcng9IjYuMjIiIHJ5PSI2LjIyIi8+PHJlY3QgY2xhc3M9ImkiIHg9IjE1NC41NyIgeT0iMTk5LjA4IiB3aWR0aD0iMzEuNyIgaGVpZ2h0PSIzMS43IiByeD0iNi4yMiIgcnk9IjYuMjIiLz48cmVjdCBjbGFzcz0iaSIgeD0iMTI0LjkxIiB5PSI0OS4yMyIgd2lkdGg9IjMxLjciIGhlaWdodD0iMzEuNyIgcng9IjYuMjIiIHJ5PSI2LjIyIi8+PGxpbmUgY2xhc3M9ImoiIHgxPSIzMzYuMDEiIHkxPSIzMDQuODEiIHgyPSIxNjkuMTgiIHkyPSIxNS44NSIvPjxnPjxyZWN0IGNsYXNzPSJlIiB4PSIxNTMuODMiIHk9Ii41IiB3aWR0aD0iMzAuNyIgaGVpZ2h0PSIzMC43IiByeD0iNS43MiIgcnk9IjUuNzIiLz48cGF0aCBjbGFzcz0iZiIgZD0iTTE3OC44MSwxYzIuODgsMCw1LjIyLDIuMzQsNS4yMiw1LjIyVjI1LjQ4YzAsMi44OC0yLjM0LDUuMjItNS4yMiw1LjIyaC0xOS4yN2MtMi44OCwwLTUuMjItMi4zNC01LjIyLTUuMjJWNi4yMmMwLTIuODgsMi4zNC01LjIyLDUuMjItNS4yMmgxOS4yN00xNzguODEsMGgtMTkuMjdjLTMuNDMsMC02LjIyLDIuNzgtNi4yMiw2LjIyVjI1LjQ4YzAsMy40MywyLjc4LDYuMjIsNi4yMiw2LjIyaDE5LjI3YzMuNDMsMCw2LjIyLTIuNzgsNi4yMi02LjIyVjYuMjJDMTg1LjAzLDIuNzgsMTgyLjI0LDAsMTc4LjgxLDBoMFoiLz48L2c+PGc+PHBhdGggY2xhc3M9ImUiIGQ9Ik0zODQuMDksMTM4LjEzaDE1Ljc5YzIuNTQsMCw0LjYsMi4wNiw0LjYsNC42djE1Ljc5YzAsMi41NC0yLjA2LDQuNi00LjYsNC42aC0xNS43OWMtMi41NCwwLTQuNi0yLjA2LTQuNi00LjZ2LTE1LjhjMC0yLjU0LDIuMDYtNC42LDQuNi00LjZaIi8+PHBhdGggY2xhc3M9ImYiIGQ9Ik0zOTkuODksMTM4LjYzYzIuMjYsMCw0LjEsMS44NCw0LjEsNC4xdjE1Ljc5YzAsMi4yNi0xLjg0LDQuMS00LjEsNC4xaC0xNS43OWMtMi4yNiwwLTQuMS0xLjg0LTQuMS00LjF2LTE1Ljc5YzAtMi4yNiwxLjg0LTQuMSw0LjEtNC4xaDE1Ljc5bTAtMWgtMTUuNzljLTIuODEsMC01LjEsMi4yOC01LjEsNS4xdjE1Ljc5YzAsMi44MSwyLjI4LDUuMSw1LjEsNS4xaDE1Ljc5YzIuODEsMCw1LjEtMi4yOCw1LjEtNS4xdi0xNS43OWMwLTIuODEtMi4yOC01LjEtNS4xLTUuMWgwWiIvPjwvZz48Zz48cGF0aCBjbGFzcz0iaCIgZD0iTTM4NC4wOSwxNzUuOTNoMTUuOGMyLjU0LDAsNC42LDIuMDYsNC42LDQuNnYxNS43OWMwLDIuNTQtMi4wNiw0LjYtNC42LDQuNmgtMTUuNzljLTIuNTQsMC00LjYtMi4wNi00LjYtNC42di0xNS43OWMwLTIuNTQsMi4wNi00LjYsNC42LTQuNloiLz48cGF0aCBjbGFzcz0iZiIgZD0iTTM5OS44OSwxNzYuNDNjMi4yNiwwLDQuMSwxLjg0LDQuMSw0LjF2MTUuNzljMCwyLjI2LTEuODQsNC4xLTQuMSw0LjFoLTE1Ljc5Yy0yLjI2LDAtNC4xLTEuODQtNC4xLTQuMXYtMTUuNzljMC0yLjI2LDEuODQtNC4xLDQuMS00LjFoMTUuNzltMC0xaC0xNS43OWMtMi44MSwwLTUuMSwyLjI4LTUuMSw1LjF2MTUuNzljMCwyLjgxLDIuMjgsNS4xLDUuMSw1LjFoMTUuNzljMi44MSwwLDUuMS0yLjI4LDUuMS01LjF2LTE1Ljc5YzAtMi44MS0yLjI4LTUuMS01LjEtNS4xaDBaIi8+PC9nPjxnPjxwYXRoIGNsYXNzPSJoIiBkPSJNMzkxLjk5LDIzOC43MmMtNi44OSwwLTEyLjQ5LTUuNi0xMi40OS0xMi40OXM1LjYtMTIuNDksMTIuNDktMTIuNDksMTIuNDksNS42LDEyLjQ5LDEyLjQ5LTUuNiwxMi40OS0xMi40OSwxMi40OVoiLz48cGF0aCBjbGFzcz0iZiIgZD0iTTM5MS45OSwyMTQuMjNjNi42MSwwLDExLjk5LDUuMzgsMTEuOTksMTEuOTlzLTUuMzgsMTEuOTktMTEuOTksMTEuOTktMTEuOTktNS4zOC0xMS45OS0xMS45OSw1LjM4LTExLjk5LDExLjk5LTExLjk5bTAtMWgwYy03LjE4LDAtMTIuOTksNS44Mi0xMi45OSwxMi45OXM1LjgyLDEyLjk5LDEyLjk5LDEyLjk5aDBjNy4xOCwwLDEyLjk5LTUuODIsMTIuOTktMTIuOTlzLTUuODItMTIuOTktMTIuOTktMTIuOTloMFoiLz48L2c+PHJlY3QgY2xhc3M9ImkiIHg9IjM3OSIgeT0iMjUxLjAzIiB3aWR0aD0iMjUuOTkiIGhlaWdodD0iMjUuOTkiIHJ4PSI1LjEiIHJ5PSI1LjEiLz48bGluZSBjbGFzcz0iaiIgeDE9IjI0LjU0IiB5MT0iMjY2LjM3IiB4Mj0iMTAuMDEiIHkyPSIzMDQuODEiLz48bGluZSBjbGFzcz0iaiIgeDE9IjI0LjU0IiB5MT0iMjY2LjM3IiB4Mj0iMzkuMDYiIHkyPSIzMDQuODEiLz48bGluZSBjbGFzcz0iaiIgeDE9IjgzLjk1IiB5MT0iMjY2LjM3IiB4Mj0iNjkuNDIiIHkyPSIzMDQuODEiLz48bGluZSBjbGFzcz0iaiIgeDE9IjgzLjk1IiB5MT0iMjY2LjM3IiB4Mj0iOTguNDciIHkyPSIzMDQuODEiLz48bGluZSBjbGFzcz0iaiIgeDE9IjE0MC45MiIgeTE9IjI2Ni4zNyIgeDI9IjEyNi40IiB5Mj0iMzA0LjgxIi8+PGxpbmUgY2xhc3M9ImoiIHgxPSIxNDAuOTIiIHkxPSIyNjYuMzciIHgyPSIxNTUuNDUiIHkyPSIzMDQuODEiLz48bGluZSBjbGFzcz0iaiIgeDE9IjIwMC4xMiIgeTE9IjI2Ni4zNyIgeDI9IjE4NS41OSIgeTI9IjMwNC44MSIvPjxsaW5lIGNsYXNzPSJqIiB4MT0iMTk4Ljg2IiB5MT0iMjY1Ljg3IiB4Mj0iMjE0LjY0IiB5Mj0iMzA0LjgxIi8+PGxpbmUgY2xhc3M9ImoiIHgxPSIyNTYuOTciIHkxPSIyNjYuMzciIHgyPSIyNDIuNDQiIHkyPSIzMDQuODEiLz48bGluZSBjbGFzcz0iaiIgeDE9IjI1Ni45NyIgeTE9IjI2Ni4zNyIgeDI9IjI3MS41IiB5Mj0iMzA0LjgxIi8+PGc+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjEwLjAxIiBjeT0iMzA0LjgxIiByPSI5LjUxIi8+PHBhdGggY2xhc3M9ImYiIGQ9Ik0xMC4wMSwyOTUuOGM0Ljk3LDAsOS4wMSw0LjA0LDkuMDEsOS4wMXMtNC4wNCw5LjAxLTkuMDEsOS4wMS05LjAxLTQuMDQtOS4wMS05LjAxLDQuMDQtOS4wMSw5LjAxLTkuMDFtMC0xQzQuNDgsMjk0LjgsMCwyOTkuMjgsMCwzMDQuODFzNC40OCwxMC4wMSwxMC4wMSwxMC4wMSwxMC4wMS00LjQ4LDEwLjAxLTEwLjAxLTQuNDgtMTAuMDEtMTAuMDEtMTAuMDFoMFoiLz48L2c+PGc+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjM5LjA2IiBjeT0iMzA0LjgxIiByPSI5LjUxIi8+PHBhdGggY2xhc3M9ImYiIGQ9Ik0zOS4wNiwyOTUuOGM0Ljk3LDAsOS4wMSw0LjA0LDkuMDEsOS4wMXMtNC4wNCw5LjAxLTkuMDEsOS4wMS05LjAxLTQuMDQtOS4wMS05LjAxLDQuMDQtOS4wMSw5LjAxLTkuMDFtMC0xYy01LjUzLDAtMTAuMDEsNC40OC0xMC4wMSwxMC4wMXM0LjQ4LDEwLjAxLDEwLjAxLDEwLjAxLDEwLjAxLTQuNDgsMTAuMDEtMTAuMDEtNC40OC0xMC4wMS0xMC4wMS0xMC4wMWgwWiIvPjwvZz48Zz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iNjkuNDIiIGN5PSIzMDQuODEiIHI9IjkuNTEiLz48cGF0aCBjbGFzcz0iZiIgZD0iTTY5LjQyLDI5NS44YzQuOTcsMCw5LjAxLDQuMDQsOS4wMSw5LjAxcy00LjA0LDkuMDEtOS4wMSw5LjAxLTkuMDEtNC4wNC05LjAxLTkuMDEsNC4wNC05LjAxLDkuMDEtOS4wMW0wLTFjLTUuNTMsMC0xMC4wMSw0LjQ4LTEwLjAxLDEwLjAxczQuNDgsMTAuMDEsMTAuMDEsMTAuMDEsMTAuMDEtNC40OCwxMC4wMS0xMC4wMS00LjQ4LTEwLjAxLTEwLjAxLTEwLjAxaDBaIi8+PC9nPjxnPjxjaXJjbGUgY2xhc3M9ImQiIGN4PSI5OC40NyIgY3k9IjMwNC44MSIgcj0iOS41MSIvPjxwYXRoIGNsYXNzPSJmIiBkPSJNOTguNDcsMjk1LjhjNC45NywwLDkuMDEsNC4wNCw5LjAxLDkuMDFzLTQuMDQsOS4wMS05LjAxLDkuMDEtOS4wMS00LjA0LTkuMDEtOS4wMSw0LjA0LTkuMDEsOS4wMS05LjAxbTAtMWMtNS41MywwLTEwLjAxLDQuNDgtMTAuMDEsMTAuMDFzNC40OCwxMC4wMSwxMC4wMSwxMC4wMSwxMC4wMS00LjQ4LDEwLjAxLTEwLjAxLTQuNDgtMTAuMDEtMTAuMDEtMTAuMDFoMFoiLz48L2c+PGc+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjEyNi40IiBjeT0iMzA0LjgxIiByPSI5LjUxIi8+PHBhdGggY2xhc3M9ImYiIGQ9Ik0xMjYuNCwyOTUuOGM0Ljk3LDAsOS4wMSw0LjA0LDkuMDEsOS4wMXMtNC4wNCw5LjAxLTkuMDEsOS4wMS05LjAxLTQuMDQtOS4wMS05LjAxLDQuMDQtOS4wMSw5LjAxLTkuMDFtMC0xYy01LjUzLDAtMTAuMDEsNC40OC0xMC4wMSwxMC4wMXM0LjQ4LDEwLjAxLDEwLjAxLDEwLjAxLDEwLjAxLTQuNDgsMTAuMDEtMTAuMDEtNC40OC0xMC4wMS0xMC4wMS0xMC4wMWgwWiIvPjwvZz48Zz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iMTU1LjQ1IiBjeT0iMzA0LjgxIiByPSI5LjUxIi8+PHBhdGggY2xhc3M9ImYiIGQ9Ik0xNTUuNDUsMjk1LjhjNC45NywwLDkuMDEsNC4wNCw5LjAxLDkuMDFzLTQuMDQsOS4wMS05LjAxLDkuMDEtOS4wMS00LjA0LTkuMDEtOS4wMSw0LjA0LTkuMDEsOS4wMS05LjAxbTAtMWMtNS41MywwLTEwLjAxLDQuNDgtMTAuMDEsMTAuMDFzNC40OCwxMC4wMSwxMC4wMSwxMC4wMSwxMC4wMS00LjQ4LDEwLjAxLTEwLjAxLTQuNDgtMTAuMDEtMTAuMDEtMTAuMDFoMFoiLz48L2c+PGc+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjE4NS41OSIgY3k9IjMwNC44MSIgcj0iOS41MSIvPjxwYXRoIGNsYXNzPSJmIiBkPSJNMTg1LjU5LDI5NS44YzQuOTcsMCw5LjAxLDQuMDQsOS4wMSw5LjAxcy00LjA0LDkuMDEtOS4wMSw5LjAxLTkuMDEtNC4wNC05LjAxLTkuMDEsNC4wNC05LjAxLDkuMDEtOS4wMW0wLTFjLTUuNTMsMC0xMC4wMSw0LjQ4LTEwLjAxLDEwLjAxczQuNDgsMTAuMDEsMTAuMDEsMTAuMDEsMTAuMDEtNC40OCwxMC4wMS0xMC4wMS00LjQ4LTEwLjAxLTEwLjAxLTEwLjAxaDBaIi8+PC9nPjxnPjxjaXJjbGUgY2xhc3M9ImQiIGN4PSIyMTQuNjQiIGN5PSIzMDQuODEiIHI9IjkuNTEiLz48cGF0aCBjbGFzcz0iZiIgZD0iTTIxNC42NCwyOTUuOGM0Ljk3LDAsOS4wMSw0LjA0LDkuMDEsOS4wMXMtNC4wNCw5LjAxLTkuMDEsOS4wMS05LjAxLTQuMDQtOS4wMS05LjAxLDQuMDQtOS4wMSw5LjAxLTkuMDFtMC0xYy01LjUzLDAtMTAuMDEsNC40OC0xMC4wMSwxMC4wMXM0LjQ4LDEwLjAxLDEwLjAxLDEwLjAxLDEwLjAxLTQuNDgsMTAuMDEtMTAuMDEtNC40OC0xMC4wMS0xMC4wMS0xMC4wMWgwWiIvPjwvZz48Zz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iMjQyLjQ0IiBjeT0iMzA0LjgxIiByPSI5LjUxIi8+PHBhdGggY2xhc3M9ImYiIGQ9Ik0yNDIuNDQsMjk1LjhjNC45NywwLDkuMDEsNC4wNCw5LjAxLDkuMDFzLTQuMDQsOS4wMS05LjAxLDkuMDEtOS4wMS00LjA0LTkuMDEtOS4wMSw0LjA0LTkuMDEsOS4wMS05LjAxbTAtMWMtNS41MywwLTEwLjAxLDQuNDgtMTAuMDEsMTAuMDFzNC40OCwxMC4wMSwxMC4wMSwxMC4wMSwxMC4wMS00LjQ4LDEwLjAxLTEwLjAxLTQuNDgtMTAuMDEtMTAuMDEtMTAuMDFoMFoiLz48L2c+PGc+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjI3MS41IiBjeT0iMzA0LjgxIiByPSI5LjUxIi8+PHBhdGggY2xhc3M9ImYiIGQ9Ik0yNzEuNSwyOTUuOGM0Ljk3LDAsOS4wMSw0LjA0LDkuMDEsOS4wMXMtNC4wNCw5LjAxLTkuMDEsOS4wMS05LjAxLTQuMDQtOS4wMS05LjAxLDQuMDQtOS4wMSw5LjAxLTkuMDFtMC0xYy01LjUzLDAtMTAuMDEsNC40OC0xMC4wMSwxMC4wMXM0LjQ4LDEwLjAxLDEwLjAxLDEwLjAxLDEwLjAxLTQuNDgsMTAuMDEtMTAuMDEtNC40OC0xMC4wMS0xMC4wMS0xMC4wMWgwWiIvPjwvZz48Zz48Y2lyY2xlIGNsYXNzPSJoIiBjeD0iMzM2LjAxIiBjeT0iMzA0LjgxIiByPSI5LjUxIi8+PHBhdGggY2xhc3M9ImYiIGQ9Ik0zMzYuMDEsMjk1LjhjNC45NywwLDkuMDEsNC4wNCw5LjAxLDkuMDFzLTQuMDQsOS4wMS05LjAxLDkuMDEtOS4wMS00LjA0LTkuMDEtOS4wMSw0LjA0LTkuMDEsOS4wMS05LjAxbTAtMWMtNS41MywwLTEwLjAxLDQuNDgtMTAuMDEsMTAuMDFzNC40OCwxMC4wMSwxMC4wMSwxMC4wMSwxMC4wMS00LjQ4LDEwLjAxLTEwLjAxLTQuNDgtMTAuMDEtMTAuMDEtMTAuMDFoMFoiLz48L2c+PHJlY3QgY2xhc3M9ImkiIHg9IjguNjkiIHk9IjI1MC41MyIgd2lkdGg9IjMxLjciIGhlaWdodD0iMzEuNyIgcng9IjYuMjIiIHJ5PSI2LjIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OS4wOCA1MzIuNzUpIHJvdGF0ZSgtMTgwKSIvPjxyZWN0IGNsYXNzPSJpIiB4PSI2OC4xIiB5PSIyNTAuNTMiIHdpZHRoPSIzMS43IiBoZWlnaHQ9IjMxLjciIHJ4PSI2LjIyIiByeT0iNi4yMiIvPjxyZWN0IGNsYXNzPSJpIiB4PSIxMjUuMDgiIHk9IjI1MC41MyIgd2lkdGg9IjMxLjciIGhlaWdodD0iMzEuNyIgcng9IjYuMjIiIHJ5PSI2LjIyIi8+PHJlY3QgY2xhc3M9ImkiIHg9IjE4NC4yNyIgeT0iMjUwLjUzIiB3aWR0aD0iMzEuNyIgaGVpZ2h0PSIzMS43IiByeD0iNi4yMiIgcnk9IjYuMjIiLz48Zz48cGF0aCBjbGFzcz0iaCIgZD0iTTI0Ny4zNCwyNTEuMDNoMTkuMjdjMy4xNSwwLDUuNzIsMi41Niw1LjcyLDUuNzJ2MTkuMjdjMCwzLjE1LTIuNTYsNS43Mi01LjcyLDUuNzJoLTE5LjI3Yy0zLjE1LDAtNS43Mi0yLjU2LTUuNzItNS43MnYtMTkuMjZjMC0zLjE2LDIuNTYtNS43Miw1LjcyLTUuNzJaIi8+PHBhdGggY2xhc3M9ImYiIGQ9Ik0yNjYuNiwyNTEuNTNjMi44OCwwLDUuMjIsMi4zNCw1LjIyLDUuMjJ2MTkuMjdjMCwyLjg4LTIuMzQsNS4yMi01LjIyLDUuMjJoLTE5LjI3Yy0yLjg4LDAtNS4yMi0yLjM0LTUuMjItNS4yMnYtMTkuMjdjMC0yLjg4LDIuMzQtNS4yMiw1LjIyLTUuMjJoMTkuMjdtMC0xaC0xOS4yN2MtMy40MywwLTYuMjIsMi43OC02LjIyLDYuMjJ2MTkuMjdjMCwzLjQzLDIuNzgsNi4yMiw2LjIyLDYuMjJoMTkuMjdjMy40MywwLDYuMjItMi43OCw2LjIyLTYuMjJ2LTE5LjI3YzAtMy40My0yLjc4LTYuMjItNi4yMi02LjIyaDBaIi8+PC9nPjx0ZXh0IGNsYXNzPSJnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTUuMjYgMzA1LjQ1KSI+PHRzcGFuIHg9IjAiIHk9IjAiPkw8L3RzcGFuPjx0c3BhbiBjbGFzcz0ibCIgeD0iNS4xOCIgeT0iMCI+ZTwvdHNwYW4+PHRzcGFuIHg9IjEwLjk5IiB5PSIwIj5hZiBOb2RlczwvdHNwYW4+PC90ZXh0Pjx0ZXh0IGNsYXNzPSJnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTUuMjYgMjY3LjY0KSI+PHRzcGFuIGNsYXNzPSJjIiB4PSIwIiB5PSIwIj5QPC90c3Bhbj48dHNwYW4geD0iNS45NiIgeT0iMCI+YTwvdHNwYW4+PHRzcGFuIGNsYXNzPSJiIiB4PSIxMS41OCIgeT0iMCI+cjwvdHNwYW4+PHRzcGFuIGNsYXNzPSJrIiB4PSIxNS4yMSIgeT0iMCI+ZTwvdHNwYW4+PHRzcGFuIHg9IjIwLjk3IiB5PSIwIj5udHM8L3RzcGFuPjwvdGV4dD48dGV4dCBjbGFzcz0iZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDE1LjI2IDIyOS44NCkiPjx0c3BhbiBjbGFzcz0ibSIgeD0iMCIgeT0iMCI+UDwvdHNwYW4+PHRzcGFuIGNsYXNzPSJiIiB4PSI2LjExIiB5PSIwIj5lPC90c3Bhbj48dHNwYW4geD0iMTEuOTEiIHk9IjAiPmE8L3RzcGFuPjx0c3BhbiBjbGFzcz0ibCIgeD0iMTcuNTQiIHk9IjAiPms8L3RzcGFuPjx0c3BhbiB4PSIyMi41NCIgeT0iMCI+czwvdHNwYW4+PC90ZXh0Pjx0ZXh0IGNsYXNzPSJnIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTUuMjYgMTkyLjA0KSI+PHRzcGFuIGNsYXNzPSJtIiB4PSIwIiB5PSIwIj5QPC90c3Bhbj48dHNwYW4gY2xhc3M9ImIiIHg9IjYuMTEiIHk9IjAiPmU8L3RzcGFuPjx0c3BhbiB4PSIxMS45MSIgeT0iMCI+YTwvdHNwYW4+PHRzcGFuIGNsYXNzPSJsIiB4PSIxNy41NCIgeT0iMCI+azwvdHNwYW4+PHRzcGFuIHg9IjIyLjU0IiB5PSIwIj5zPC90c3Bhbj48L3RleHQ+PHRleHQgY2xhc3M9ImciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxNS4yNiAxNTQuMjQpIj48dHNwYW4geD0iMCIgeT0iMCI+Um9vdDwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg=="}}]);