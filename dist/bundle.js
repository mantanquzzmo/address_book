!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";document.addEventListener("DOMContentLoaded",(function(){var e=function(){var e=window.localStorage,t=JSON.parse(e.getItem("contacts")),n=document.querySelector(".contact-list");if(t&&t.length>0){n.innerHTML="";var o=document.createElement("ul");t.forEach((function(e){var n=t.indexOf(e),r=document.createElement("li");r.innerHTML='\n            <div class="card">\n              <div class="ui card">\n                <div class="image">\n                  <img src="https://avatars.dicebear.com/v2/male/:'+e.name+'.svg"/>\n                </div>\n                <div class="content">\n                  <h1>'+e.name+"</h1>\n                  <h2>"+e.company+"</h2>\n                  <p>"+e.notes+"</p> \n                  "+e.email+' | \n                  <a href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+'</a>\n                </div>\n                <div class="remove" align="center">\n                    <button class="ui negative basic button" button id="remove-btn-'+n+'" class="remove-contact">Remove '+e.name+"</button>\n                    <br>\n                </div>\n              </div>\n            </div>\n           ",o.appendChild(r)})),n.appendChild(o)}else n.innerHTML="<p>You have no contacts in your address book</p>"};e();var t=document.querySelector(".new-contact-form");t.addEventListener("submit",(function(n){n.preventDefault();var o=window.localStorage,r=t.elements,a=r.name,c=r.email,i=r.phone,l=r.company,u=r.notes,s=r.twitter,d={id:Date.now(),name:a.value,email:c.value,phone:i.value,company:l.value,notes:u.value,twitter:s.value};console.log("Saving the following contact: "+JSON.stringify(d));var m=JSON.parse(o.getItem("contacts"))||[];m.push(d),o.setItem("contacts",JSON.stringify(m)),document.getElementById("contact-form").reset(),e(),location.reload()})),document.querySelector("ul").addEventListener("click",(function(e){var t=window.localStorage,n=e.target.id.replace("remove-btn-",""),o=JSON.parse(t.getItem("contacts"));1==confirm("Are you sure you want to remove "+o[n].name+"?")&&(o.splice(o[n],1),t.setItem("contacts",JSON.stringify(o)),window.location.reload())}))}))}]);