(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(t,e,n){},148:function(t,e,n){"use strict";var i=n(141);n.n(i).a},149:function(t,e,n){"use strict";n(97),n(40),n(144),n(16),n(29),n(146),n(28),n(147),n(143),n(41),n(145);var i={name:"VueBootstrapTypeaheadListItem",props:{active:{type:Boolean},data:{},htmlText:{type:String},backgroundVariant:{type:String},textVariant:{type:String}},computed:{textClasses:function(){var t=["vbst-item","list-group-item","list-group-item-action"];return this.backgroundVariant&&t.push("bg-".concat(this.backgroundVariant)),this.textVariant&&t.push("text-".concat(this.textVariant)),t.join(" ")}}},s=n(27);function a(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;")}var r={name:"VueBootstrapTypeaheadList",components:{VueBootstrapTypeaheadListItem:Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{class:t.textClasses,attrs:{tabindex:"0",href:"#"},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:t.$emit("listItemBlur")},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:(e.stopPropagation(),e.preventDefault(),t.$emit("listItemBlur"))},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;e.preventDefault()},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;e.preventDefault()}],keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.$parent.selectNextListItem(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.$parent.selectPreviousListItem(e)}]}},[t._t("suggestion",[n("span",{domProps:{innerHTML:t._s(t.htmlText)}})],null,{data:t.data,htmlText:t.htmlText})],2)}),[],!1,null,null,null).exports},props:{data:{type:Array,required:!0,validator:function(t){return t instanceof Array}},query:{type:String,default:""},backgroundVariant:{type:String},disableSort:{type:Boolean},textVariant:{type:String},maxMatches:{type:Number,default:10},minMatchingChars:{type:Number,default:2},showOnFocus:{type:Boolean,default:!1},showAllResults:{type:Boolean,default:!1}},created:function(){this.$parent.$on("input",this.resetActiveListItem),this.$parent.$on("keyup.down",this.selectNextListItem),this.$parent.$on("keyup.up",this.selectPreviousListItem),this.$parent.$on("keyup.enter",this.hitActiveListItem)},data:function(){return{activeListItem:-1}},computed:{highlight:function(){var t=this;return function(e){if(e=a(e),0===t.query.length)return e;var n=new RegExp(t.escapedQuery,"gi");return e.replace(n,"<strong>$&</strong>")}},escapedQuery:function(){return a(this.query).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},matchedItems:function(){var t=this;if(!this.showOnFocus&&(0===this.query.length||this.query.length<this.minMatchingChars))return[];var e=new RegExp(this.showAllResults?"":this.escapedQuery,"gi");return this.data.filter((function(t){return null!==t.text.match(e)})).sort((function(n,i){if(t.disableSort)return 0;var s=n.text.indexOf(n.text.match(e)[0]),a=i.text.indexOf(i.text.match(e)[0]);return s<a?-1:s>a?1:0})).slice(0,this.maxMatches)}},methods:{handleHit:function(t,e){this.$emit("hit",t),e.preventDefault()},hitActiveListItem:function(){this.activeListItem>=0&&this.$emit("hit",this.matchedItems[this.activeListItem])},isListItemActive:function(t){return this.activeListItem===t},resetActiveListItem:function(){this.activeListItem=-1},selectNextListItem:function(){this.activeListItem<this.matchedItems.length-1?this.activeListItem++:this.activeListItem=0},selectPreviousListItem:function(){this.activeListItem<=0?this.activeListItem=this.matchedItems.length-1:this.activeListItem--}},watch:{activeListItem:function(t,e){if(0==this.$parent.isFocused&&(this.$parent.isFocused=!0),t>=0){var n=this.$refs.suggestionList,i=n.children[this.activeListItem],s=n.clientHeight,a=i.clientHeight,r=Math.floor(s/(a+20));n.scrollTop=t>=r?a*this.activeListItem:0,i.focus()}}}},u=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"suggestionList",staticClass:"list-group shadow"},t._l(t.matchedItems,(function(e,i){return n("vue-bootstrap-typeahead-list-item",t._g({key:i,attrs:{active:t.isListItemActive(i),data:e.data,"html-text":t.highlight(e.text),"background-variant":t.backgroundVariant,"text-variant":t.textVariant},nativeOn:{click:function(n){return t.handleHit(e,n)}},scopedSlots:t._u([{key:"suggestion",fn:function(e){var n=e.data,i=e.htmlText;return t.$scopedSlots.suggestion?[t._t("suggestion",null,null,{data:n,htmlText:i})]:void 0}}],null,!0)},t.$listeners))})),1)}),[],!1,null,null,null).exports,o=n(156),l={name:"VueBootstrapTypehead",components:{VueBootstrapTypeaheadList:u},props:{size:{type:String,default:null,validator:function(t){return["lg","sm"].indexOf(t)>-1}},value:{type:String},data:{type:Array,required:!0,validator:function(t){return t instanceof Array}},serializer:{type:Function,default:function(t){return t},validator:function(t){return t instanceof Function}},backgroundVariant:String,textVariant:String,inputClass:{type:String,default:""},maxMatches:{type:Number,default:10},minMatchingChars:{type:Number,default:2},disableSort:{type:Boolean,default:!1},showOnFocus:{type:Boolean,default:!1},showAllResults:{type:Boolean,default:!1},placeholder:String,prepend:String,append:String},computed:{sizeClasses:function(){return this.size?"input-group input-group-".concat(this.size):"input-group"},formattedData:function(){var t=this;return this.data instanceof Array?this.data.map((function(e,n){return{id:n,data:e,text:t.serializer(e)}})):[]}},methods:{resizeList:function(t){var e=t.getBoundingClientRect(),n=this.$refs.list.$el.style;if(n.width=e.width+"px",this.$refs.prependDiv){var i=this.$refs.prependDiv.getBoundingClientRect();n.marginLeft=i.width+"px"}},handleHit:function(t){void 0!==this.value&&this.$emit("input",t.text),this.inputValue=t.text,this.$emit("hit",t.data),this.$refs.input.blur(),this.isFocused=!1},handleChildBlur:function(){this.$refs.input.focus(),this.isFocused=!1},handleBlur:function(t){var e=t.relatedTarget;e&&e.classList.contains("vbst-item")||(this.isFocused=!1)},handleInput:function(t){this.isFocused=!0,this.inputValue=t,void 0!==this.value&&this.$emit("input",t)},handleEsc:function(t){""===t?this.isFocused=!1:this.inputValue=""}},data:function(){return{isFocused:!1,inputValue:this.value||""}},mounted:function(){var t=this;this.$_ro=new o.a((function(e){t.resizeList(t.$refs.input)})),this.$_ro.observe(this.$refs.input),this.$_ro.observe(this.$refs.list.$el)},beforeDestroy:function(){this.$_ro.disconnect()},watch:{value:function(t){this.inputValue=t}}},c=(n(148),Object(s.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:t.sizeClasses},[t.$slots.prepend||t.prepend?n("div",{ref:"prependDiv",staticClass:"input-group-prepend"},[t._t("prepend",[n("span",{staticClass:"input-group-text"},[t._v(t._s(t.prepend))])])],2):t._e(),t._v(" "),n("input",{ref:"input",class:"form-control "+t.inputClass,attrs:{type:"search",placeholder:t.placeholder,"aria-label":t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.isFocused=!0},blur:t.handleBlur,input:function(e){return t.handleInput(e.target.value)},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.handleEsc(e.target.value)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.$emit("keyup.down",e.target.value)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.$emit("keyup.up",e.target.value)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("keyup.enter",e.target.value)}]}}),t._v(" "),t.$slots.append||t.append?n("div",{staticClass:"input-group-append"},[t._t("append",[n("span",{staticClass:"input-group-text"},[t._v(t._s(t.append))])])],2):t._e()]),t._v(" "),n("vue-bootstrap-typeahead-list",{directives:[{name:"show",rawName:"v-show",value:t.isFocused&&t.data.length>0,expression:"isFocused && data.length > 0"}],ref:"list",staticClass:"vbt-autcomplete-list",attrs:{query:t.inputValue,data:t.formattedData,"background-variant":t.backgroundVariant,"text-variant":t.textVariant,maxMatches:t.maxMatches,minMatchingChars:t.minMatchingChars,disableSort:t.disableSort,showOnFocus:t.showOnFocus,showAllResults:t.showAllResults},on:{hit:t.handleHit,listItemBlur:t.handleChildBlur},scopedSlots:t._u([t._l(t.$scopedSlots,(function(e,n){return{key:n,fn:function(e){var i=e.data,s=e.htmlText;return[t._t(n,null,null,{data:i,htmlText:s})]}}}))],null,!0)})],1)}),[],!1,null,"184ee462",null));e.a=c.exports},177:function(t,e,n){},254:function(t,e,n){"use strict";var i=n(177);n.n(i).a},260:function(t,e,n){"use strict";n.r(e);n(14),n(155);var i=n(149),s=n(175),a={name:"APIExample",components:{VueBootstrapTypehead:i.a},data:function(){return{query:"",selecteduser:null,users:[]}},methods:{lookupUser:Object(s.debounce)((function(){var t=this;fetch("https://api.github.com/search/users?q=".concat(this.query)).then((function(t){return t.json()})).then((function(e){t.users=e.items}))}),500)}},r=(n(254),n(27)),u=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vue-bootstrap-typehead",{staticClass:"mb-4",attrs:{data:t.users,serializer:function(t){return t.login},placeholder:"Search Github Users"},on:{hit:function(e){t.selecteduser=e},input:t.lookupUser},scopedSlots:t._u([{key:"suggestion",fn:function(e){var i=e.data,s=e.htmlText;return[n("div",{staticClass:"d-flex align-items-center"},[n("img",{staticClass:"rounded-circle",staticStyle:{width:"40px",height:"40px"},attrs:{src:i.avatar_url}}),t._v(" "),n("span",{staticClass:"ml-4",domProps:{innerHTML:t._s(s)}}),t._v(" "),n("i",{staticClass:"ml-auto fab fa-github-square fa-2x"})])]}}]),model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),t._v("\n  Selected user: "),t.selecteduser?n("span",[t._v(t._s(t.selecteduser.login))]):t._e()],1)}),[],!1,null,null,null);e.default=u.exports}}]);