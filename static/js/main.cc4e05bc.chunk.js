(window["webpackJsonpreact-recipe-app"]=window["webpackJsonpreact-recipe-app"]||[]).push([[0],{1:function(e,a){var t="6220bdba80c64c71f7674f546eef3872";e.exports={getRecipe:function(e){var a="https://api.edamam.com/search?q=".concat(e,"&app_id=").concat("a23e2e90","&app_key=").concat(t,"&from=0&to=20");return fetch(a,{method:"GET",headers:{"Content-Type":"application/json"}})},filteredRecipes:function(e,a){var c="";a.forEach(function(e){c+="&diet=".concat(e)});var n="https://api.edamam.com/search?q=".concat(e,"&app_id=").concat("a23e2e90","&app_key=").concat(t,"&from=0&to=20").concat(c);return fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}})}}},10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(4),l=t.n(r),i=t(2),s=t(5),o=t(6),m=t(8),h=t(7),u=t(9),p=function(e){var a=e.submit,t=e.change;return n.a.createElement("form",{onSubmit:a},n.a.createElement("div",{className:"controls"},n.a.createElement("input",{className:"input-field",type:"text",placeholder:"Enter Ingredients",value:e.value,onChange:t}),n.a.createElement("button",{className:"search-button"},"Search")))},d=function(e){var a=e.click;return n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"checkboxes",className:"checkbox"},n.a.createElement("input",{type:"checkbox",className:"checkboxes",value:"balanced",onClick:a}),"Balanced"),n.a.createElement("label",{htmlFor:"checkboxes",className:"checkbox"},n.a.createElement("input",{type:"checkbox",className:"checkboxes",value:"high-protein",onClick:a}),"High-Protein"),n.a.createElement("label",{htmlFor:"checkboxes",className:"checkbox"},n.a.createElement("input",{type:"checkbox",className:"checkboxes",value:"low-fat",onClick:a}),"Low-Fat"),n.a.createElement("label",{htmlFor:"checkboxes",className:"checkbox"},n.a.createElement("input",{type:"checkbox",className:"checkboxes",value:"low-carb",onClick:a}),"Low-Carb"))},f=function(e){var a=e.items;return n.a.createElement("div",{className:"recipe-container"},a.map(function(e,a){return n.a.createElement("div",{key:a,className:"recipe"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{className:"recipe-img",src:e.recipe.image,alt:""}),n.a.createElement("a",{href:e.recipe.url,rel:"noreferrer noopener",target:"_blank"},n.a.createElement("h3",null,e.recipe.label))),n.a.createElement("div",{className:"recipe-content"},n.a.createElement("div",{className:"recipe-div-1"},n.a.createElement("div",{className:"recipe-info"},n.a.createElement("h3",null,n.a.createElement("i",{className:"fas fa-info-circle"})," Information"),n.a.createElement("hr",null),n.a.createElement("p",null,"Cook Time: ",e.recipe.totalTime?e.recipe.totalTime+" minutes":"Unavailable"," "),n.a.createElement("p",null,"Calories: ",Math.round(e.recipe.calories)),n.a.createElement("p",null,"Servings: ",e.recipe.yield)),n.a.createElement("div",{className:"health-facts"},n.a.createElement("h3",null,n.a.createElement("i",{className:"fas fa-heart"})," Health Facts"),n.a.createElement("hr",null),n.a.createElement("ul",null,e.recipe.healthLabels.map(function(e,a){return n.a.createElement("li",{key:a},e)})))),n.a.createElement("div",{className:"recipe-div-2"},n.a.createElement("div",{className:"ingredients"},n.a.createElement("h3",null,n.a.createElement("i",{className:"fas fa-clipboard-list"})," Ingredients"),n.a.createElement("hr",null),n.a.createElement("ul",null,e.recipe.ingredientLines.map(function(e,a){return n.a.createElement("li",{key:a},e)}))))))}))},E=(t(15),t(1)),b=t.n(E),v=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(h.a)(a).call(this,e))).handleChange=function(e){t.setState({ingredient:e.target.value})},t.handleRecipes=function(){var e=t.state.ingredient;b.a.getRecipe(e).then(function(e){return e.json()}).then(function(e){var a=e.hits;a.length?(t.setState({error:!1}),a.forEach(function(e){t.setState(function(a){return{recipes:[].concat(Object(i.a)(a.recipes),[e])}})})):t.setState({error:!0})})},t.handleFilteredRecipes=function(){var e=t.state,a=e.ingredient,c=e.checkboxes;b.a.filteredRecipes(a,c).then(function(e){return e.json()}).then(function(e){var a=e.hits;a.length?(t.setState({error:!1}),a.forEach(function(e){t.setState(function(a){return{recipes:[].concat(Object(i.a)(a.recipes),[e])}})})):t.setState({error:!0})})},t.handleSubmit=function(e){e.preventDefault();var a=t.state,c=a.checkboxes,n=a.ingredient;c.length?t.handleFilteredRecipes(n):t.handleRecipes(n),t.setState({recipes:[]})},t.isChecked=function(){for(var e=document.getElementsByClassName("checkboxes"),a=[],c=0;c<e.length;c++)!0===e[c].checked&&a.push(e[c].value);t.setState({checkboxes:a})},t.state={recipes:[],checkboxes:[],ingredient:"",error:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state,a=e.error,t=e.ingredient,c=e.recipes;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"title"},n.a.createElement("i",{className:"fas fa-utensils"})," Find A Recipe ",n.a.createElement("i",{className:"fas fa-hamburger"})),n.a.createElement(p,{change:this.handleChange,value:t,submit:this.handleSubmit}),n.a.createElement("div",{className:"checkbox-container"},n.a.createElement(d,{click:this.isChecked}))),n.a.createElement("section",null,a&&n.a.createElement("p",{style:{color:"red"}},"Unable to find recipe. Please try again."),n.a.createElement(f,{items:c})))}}]),a}(c.Component);l.a.render(n.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.cc4e05bc.chunk.js.map