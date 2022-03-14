"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[866],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return n?i.createElement(m,r(r({ref:t},h),{},{components:n})):i.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7590:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],c={sidebar_position:5},l="The Blockchain",s={unversionedId:"learn/theblockchain",id:"learn/theblockchain",title:"The Blockchain",description:"Overview",source:"@site/docs/learn/theblockchain.md",sourceDirName:"learn",slug:"/learn/theblockchain",permalink:"/docs/learn/theblockchain",editUrl:"https://github.com/arnimedia/arnimedia.github.io.git/docs/learn/theblockchain.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"TxPoW Units (Blocks)",permalink:"/docs/learn/txpowunits"},next:{title:"Quantum Security",permalink:"/docs/learn/quantumsecurity"}},h={},u=[{value:"Overview",id:"overview",level:2},{value:"TxPoW Tree",id:"txpow-tree",level:2},{value:"The Cascading Chain",id:"the-cascading-chain",level:2},{value:"Ghost algorithm",id:"ghost-algorithm",level:2}],d={toc:u};function p(e){var t=e.components,c=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-blockchain"},"The Blockchain"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Minima blockchain is structured to be compact and \u2018lightweight\u2019, it is therefore heavily pruned to meet this requirement. The chain itself is a tree of TxPoW blocks which hold transactions. "),(0,o.kt)("p",null,"As the TxPow tree is pruned periodically, the headers from the \u2018heaviest\u2019 blocks (blocks with the highest difficulty by chance) are added into a \u2018Cascading\u2019 chain. The root of the TxPow tree always remains connected to the tip of the Cascading chain."),(0,o.kt)("p",null,"The TxPoW tree is the main blockchain, a chain of the most recent TxPoW units that met the difficulty required to become a block.\nThe Cascading chain is an unbroken chain of the headers of so called \u2018super blocks\u2019, designed to record and prove, in an immutable way, the total cumulative Proof-of-Work input into the network without having to keep a record of all individual blocks. Blocks are added to the Cascading chain on a periodic basis."),(0,o.kt)("h2",{id:"txpow-tree"},"TxPoW Tree"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"TxPoW tree")," is the main blockchain and has a root - the start of the chain, tip - end of the chain, blocks (nodes) and length (number of blocks).\nThe root of the chain meets the tip of the Cascade."),(0,o.kt)("p",null,"If a TxPoW unit becomes a block, it will have a static ",(0,o.kt)("strong",{parentName:"p"},"base weight")," equal to its difficulty and a total weight equal to its base weight plus the sum of the weights of its children. "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Weights")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Base weight")," = Difficulty (i.e. number of hashes it took to mine the block)"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Total weight")," = Base weight + Sum(Base weight of all children) "))),(0,o.kt)("p",null,"By default, all blocks in the chain are Level 0 blocks."),(0,o.kt)("p",null,"Branching in the tree can occur if multiple blocks with the same height (block number) are found simultaneously. Branching is a natural occurrence and will resolve over time as a heavier branch continues to be built on."),(0,o.kt)("p",null,"All blocks in the tree are stored in a fast link hash table which provides a quick method of searching for blocks and determining how many blocks are in the tree, where for each block:\nKey (K) - TxPoW ID\nValue (V) - TxPoW object"),(0,o.kt)("h2",{id:"the-cascading-chain"},"The Cascading Chain"),(0,o.kt)("h2",{id:"ghost-algorithm"},"Ghost algorithm"),(0,o.kt)("p",null,"The GHOST (Greedy Heaviest Observed SubTree) protocol is used by Minima nodes to come to consensus on which chain is the valid one when multiple branches are established. Branching occurs naturally when two blocks with the same number (block height) are found simultaneously. "),(0,o.kt)("p",null,"Rather than using the simple \u2018Longest chain\u2019 rule, where the valid chain is considered to be the one with the most number of blocks in it, GHOST considers the \u2018heaviest\u2019 chain to be the valid one. The \u2018heaviest\u2019 chain is the branch which has had the most Proof-of-Work put into it."),(0,o.kt)("p",null,"The faster the block time, the more likely it is that two blocks of the same number (height) will be found. If a simple \u2018Longest chain\u2019 rule applies, fast block times can reduce the security of the network if an attacker is able to secretly build a longer chain."),(0,o.kt)("p",null,"GHOST was originally proposed as an alternative to Longest Chain by Sompolinsky and Zohar in the paper Secure High-Rate Transaction Processing in Bitcoin. "),(0,o.kt)("p",null,"Diagram illustrating the the main chain according to GHOST:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Minima",src:n(1137).Z,width:"1306",height:"630"})))}p.isMDXComponent=!0},1137:function(e,t,n){t.Z=n.p+"assets/images/learn_7-60b4af811916e557475ac17f8f2c4e50.png"}}]);