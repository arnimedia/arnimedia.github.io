"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[7266],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(t),p=i,h=d["".concat(l,".").concat(p)]||d[p]||c[p]||o;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},208:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],s={sidebar_position:6},l="Linux VPS",m={unversionedId:"runanode/linux_vps",id:"runanode/linux_vps",title:"Linux VPS",description:"How to download and Install Minima on your Linux Server/Desktop (Debian OS including Ubuntu)",source:"@site/docs/runanode/linux_vps.md",sourceDirName:"runanode",slug:"/runanode/linux_vps",permalink:"/docs/runanode/linux_vps",editUrl:"https://github.com/arnimedia/arnimedia.github.io.git/docs/runanode/linux_vps.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Linux Desktop",permalink:"/docs/runanode/linux_desktop"},next:{title:"Ambassador Program",permalink:"/docs/ambassador"}},u={},c=[{value:"How to download and Install Minima on your Linux Server/Desktop (Debian OS including Ubuntu)",id:"how-to-download-and-install-minima-on-your-linux-serverdesktop-debian-os-including-ubuntu",level:2},{value:"How to set up your Incentive Program account to receive rewards",id:"how-to-set-up-your-incentive-program-account-to-receive-rewards",level:2},{value:"Useful Commands",id:"useful-commands",level:2}],d={toc:c};function p(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"linux-vps"},"Linux VPS"),(0,o.kt)("h2",{id:"how-to-download-and-install-minima-on-your-linux-serverdesktop-debian-os-including-ubuntu"},"How to download and Install Minima on your Linux Server/Desktop (Debian OS including Ubuntu)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in as the root user. (You may need to create a secure connection to your server using PuTTY, Terminal or a similar tool)"),(0,o.kt)("li",{parentName:"ol"},"Open the command prompt, ensure you are in the root directory"),(0,o.kt)("li",{parentName:"ol"},"If you have any older versions of Minima installed, please uninstall them before moving to the next step.\nPlease run this script to uninstall minima:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget -O minima_cleanup_v98.sh https://raw.githubusercontent.com/minima-global/Minima/master/scripts/minima_cleanup_v98.sh && chmod +x minima_cleanup_v98.sh && sudo ./minima_cleanup_v98.sh\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"If you have not run Minima before, please ensure you have the latest version of Java installed on the server ",(0,o.kt)("a",{parentName:"li",href:"https://java.com/en/"},"https://java.com/en/")),(0,o.kt)("li",{parentName:"ol"},"From the root directory, please run the following script:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget -O minima_setup.sh https://raw.githubusercontent.com/minima-global/Minima/master/scripts/minima_setup.sh && chmod +x minima_setup.sh && sudo ./minima_setup.sh -r 9002 -p 9001\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Wait a few minutes for Minima to start.")),(0,o.kt)("p",null,"Running multiple nodes on one server?\nYou can specify different port numbers on the end to do this,\nFor example (using 9122 and 9121): "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget -O minima_setup.sh https://raw.githubusercontent.com/minima-global/Minima/master/scripts/minima_setup.sh && chmod +x minima_setup.sh && sudo ./minima_setup.sh -r 9122 -p 9121\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-set-up-your-incentive-program-account-to-receive-rewards"},"How to set up your Incentive Program account to receive rewards"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://incentive.minima.global/"},"https://incentive.minima.global/")," - ")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Previous users")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you had an account prior to 6th December 2021, you will need to reset your password using the Forgot Password button (this is because encrypted passwords could not be migrated to the new system.)\nYou can set your new password to be the same as your old one.\n",(0,o.kt)("a",{parentName:"p",href:"https://incentive.minima.global/account/forgot-password"},"https://incentive.minima.global/account/forgot-password"),"\nPlease check your junk mail for the reset password email."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"New users")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"After you have registered, simply login to your account"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Once the Minima is running, connect your Incentive Program account to your node by copying YOUR OWN Node ID from the Incentive Program website above and typing the following directly into the command line: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install curl\ncurl 127.0.0.1:9002/incentivecash%20uid:xxx-xxx-xxx-xxx-xxx\nExample:\ncurl 127.0.0.1:9002/incentivecash%20uid:00F3E50D-5A52-444B-8F1A-0DA72D6CAA84\n")),(0,o.kt)("p",null,"You should receive a return status of true and see your previous reward balance (if any) including missed rewards (if any)."),(0,o.kt)("p",null,"If you have multiple nodes on one server, you will need to change the port number in the curl command to update the second node using the port number after -r\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl 127.0.0.1:9122/incentivecash%20uid:xxx-xxx-xxx-xxx-xxx\n")),(0,o.kt)("p",null,"Your Incentive Program account is now connected to your node!"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Current rewards")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is the total of old and new rewards. It includes any reward collections you previously missed that were paid to you at the Hard Fork."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Last Ping")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is the last date and time your node sent a PING message. For every day your node pings us, we'll add 1 Minima to your rewards."))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Your node will then ping us so we know it's running. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For every day your node pings us, we'll add 1 Minima to your DAILY REWARDS. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To check your rewards, type IncentiveCash into the Command Line.\nYou may need to type journalctl -u minima -f to show the Minima Logs before running the IncentiveCash command. "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'incentivecash\n{\n  "command":"incentivecash",\n  "status":true,\n  "response":{\n    "uid":"731ae11b-b602-4dea-8564-7cb4edbe07b7",\n    "details":{\n      "lastPing":"2022-03-14T17:28:38.709Z",\n      "inviteCode":"BAEPAAD0",\n      "rewards":{\n        "dailyRewards":60,\n        "previousRewards":100.0,\n        "communityRewards":50.0,\n        "inviterRewards":10.0\n      }\n    }\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There will temporarily be no MiniHub or MiniDapps - based on community feedback we are working hard to improve the MiniDapp system for a future release! "))),(0,o.kt)("h2",{id:"useful-commands"},"Useful Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ctrl-c : Exits the Minima logs (Minima will continue to run in the background)\njournalctl -u minima_9001 -f : Show the Minima logs\nsudo ps -fC java : Shows all running Java processes\n\nsudo apt install curl : allows you to use curl commands to interact with minima\nThen y (for Yes)\n\nsudo apt install jq : allows you to use jq to make the output look readable\nThen y (for Yes)\n\nStopping/starting Minima (Service must be called minima.service)\nsudo systemctl stop minima_9001 - Stop the Minima service\nsudo systemctl disable minima_9001 - Disable the Minima service\nsudo systemctl enable minima_9001 - Enable the Minima service \nsudo systemctl start minima_9001 - Start the Minima service\n\nInteracting with Minima\ncurl 127.0.0.1:9002/status | jq - shows the status of Minima \ncurl 127.0.0.1:9002/incentivecash | jq - shows your incentive cash balance\ncurl 127.0.0.1:9002/help | jq - shows the full list of commands\n")))}p.isMDXComponent=!0}}]);