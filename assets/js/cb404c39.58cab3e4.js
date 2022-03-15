"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[5277],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,p=f["".concat(l,".").concat(d)]||f[d]||h[d]||r;return n?o.createElement(p,i(i({ref:t},u),{},{components:n})):o.createElement(p,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7093:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return h}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],c={sidebar_position:9},l="A Cascading Chain",s={unversionedId:"minimawhitepaper/ acascadingchain",id:"minimawhitepaper/ acascadingchain",title:"A Cascading Chain",description:"The power of hashing ensures that an unbroken chain of blocks cannot be altered in any way. The power of hashing also ensures that sometimes someone will find a very high difficulty PoW when looking for a much lower one. If you take this into account pre-PoW you can construct block headers that reference multiple block parents at different levels of difficulty. Instead of having 2 difficulty values for a user to mine in the Tx-PoW, the Transaction Difficulty set to 10 seconds of work on average, and the Block Difficulty set to 1 block every 10 seconds, let us add 1 more difficulty, the Super Block Difficulty set to twice the current block difficulty...",source:"@site/docs/minimawhitepaper/ acascadingchain.md",sourceDirName:"minimawhitepaper",slug:"/minimawhitepaper/ acascadingchain",permalink:"/docs/minimawhitepaper/ acascadingchain",editUrl:"https://github.com/arnimedia/arnimedia.github.io.git/docs/minimawhitepaper/ acascadingchain.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Energy",permalink:"/docs/minimawhitepaper/energy"},next:{title:"Storage-less MMR UTXO",permalink:"/docs/minimawhitepaper/storagelessmmrutxo"}},u={},h=[],f={toc:h};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"a-cascading-chain"},"A Cascading Chain"),(0,r.kt)("p",null,"The power of hashing ensures that an unbroken chain of blocks cannot be altered in any way. The power of hashing also ensures that sometimes someone will find a very high difficulty PoW when looking for a much lower one. If you take this into account pre-PoW you can construct block headers that reference multiple block parents at different levels of difficulty. Instead of having 2 difficulty values for a user to mine in the Tx-PoW, the Transaction Difficulty set to 10 seconds of work on average, and the Block Difficulty set to 1 block every 10 seconds, let us add 1 more difficulty, the Super Block Difficulty set to twice the current block difficulty..."),(0,r.kt)("p",null,"Every block references its direct parent and the last Super Block. Now a Tx-PoW has 3 possible levels, Transaction, Block and Super Block. If the Block hash difficulty is high enough it becomes a Super Block (which is also a valid block). Eventually, all blocks and data are discarded and only a chain of Super Block headers is kept as a long term store of the total PoW in the chain. Now instead of only 1 Super Block Level, let us use 256. 1 for each bit in a 32-byte hash. Each level twice the difficulty of the level below. These are the only difficulty values for each block, each linking back to it\u2019s Super Block Level parent."),(0,r.kt)("p",null,"The proof chain grows logarithmically, so that an almost limitless amount of PoW can be stored in a finite chain of headers, since every level stores blocks that are twice as difficult as the level below. Thus, an exponentially shorter unbroken chain of more PoWerful blocks is kept in place of a longer unbroken chain of less PoWerful ones. Due to the nature of randomised hash mining, the sum of the Tx-PoW difficulty of the higher-level blocks will on average equal the sum of the Tx-PoW difficulty of the lower level blocks."),(0,r.kt)("p",null,"The cascading chain allows each user to keep the total cumulative PoW without requiring the storage of every block. Only certain lucky blocks are kept, all of which reference each other, to keep a short unbroken chain of ever-increasing total PoW."),(0,r.kt)("p",null,"Almost all blocks and transactions are pruned. Pruning has no effect on the security of the user doing-the-pruning. Once a transaction has been checked by a user, that transaction need never be checked again, a simple reference will suffice. Blocks are kept for a certain period of time, a week would be fine, before being pruned. This way any user that logs on to the network can always catch up a weeks' worth of blocks. So as long as a user logs on to the network once a week he can validate every transaction on layer 1 and run a Complete node, full validating and full TxPoW mining, without needing increasing amounts of storage."),(0,r.kt)("p",null,"For a new user, who has no previous history of the chain and no coins, Nakamoto Consensus can objectively and independently tell which chain is the current valid chain - the Cascading Chain with the most PoW."))}d.isMDXComponent=!0}}]);