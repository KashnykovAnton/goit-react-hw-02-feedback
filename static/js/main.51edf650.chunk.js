(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(3),i=c.n(a),s=(c(13),c(14),c(4)),o=c(5),j=c(6),d=c(8),b=c(7),l=(c(15),c(0)),u=function(e){var t=e.good,c=e.neutral,n=e.bad,r=e.total,a=e.positivePercentage;return Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{children:"Good:"}),Object(l.jsx)("p",{children:t})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{children:"Neutral:"}),Object(l.jsx)("p",{children:c})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{children:"Bad:"}),Object(l.jsx)("p",{children:n})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{children:"Total:"}),Object(l.jsx)("p",{children:r})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{children:"Positive feedback:"}),0===r?Object(l.jsx)("p",{children:"0%"}):Object(l.jsx)("p",{children:a})]})]})},h=c(19),O=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(l.jsx)("div",{children:Object.keys(t).map((function(e){return Object(l.jsx)("button",{type:"button",name:e,onClick:c,children:e},Object(h.a)())}))})},x=function(e){var t=e.title,c=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:t}),c]})},v=function(e){var t=e.message;return Object(l.jsx)("h3",{children:t})},p=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var c=t.target.name;e.setState((function(e){return Object(s.a)({},c,e[c]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.round(t/e.countTotalFeedback()*100)+"%"},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this.state,t=e.good,c=e.neutral,n=e.bad,r=this.onLeaveFeedback,a=this.countTotalFeedback,i=this.countPositiveFeedbackPercentage;return Object(l.jsxs)("div",{children:[Object(l.jsx)(x,{title:"Please leave feedback",children:Object(l.jsx)(O,{options:this.state,onLeaveFeedback:r})}),Object(l.jsx)(x,{title:"Statistics",children:0===a()?Object(l.jsx)(v,{message:"No feedback given"}):Object(l.jsx)(u,{good:t,neutral:c,bad:n,total:a(),positivePercentage:i()})})]})}}]),c}(n.Component),f=p;i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.51edf650.chunk.js.map