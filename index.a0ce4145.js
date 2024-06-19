var t=Array.from(document.querySelectorAll(".population")).map(function(t){return parseInt(t.textContent.replace(/,/g,""))}),e=t.reduce(function(t,e){return t+e},0),n=e/t.length;document.querySelector(".total-population").textContent=e.toLocaleString("en-US"),document.querySelector(".average-population").textContent=n.toLocaleString("en-US");
//# sourceMappingURL=index.a0ce4145.js.map
