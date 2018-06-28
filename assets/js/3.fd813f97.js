(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{155:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("p",[t._v("The problem with hooks is that they are configured at application setup time and usually fixed during the whole application lifecycle. It means you would have a to create an application instance for each pipeline you’d like to have, not so simple. This is the reason why krawler is mainly used as a command-line utility (CLI), where each execution setup a new application with a hooks pipeline according to the job to be done.")]),t._m(0),t._m(1),t._m(2),t._m(3),n("ul",[t._m(4),n("li",[n("strong",[t._v("options")]),t._v(":\n"),n("ul",[n("li",[n("strong",[t._v("cron")]),t._v(": a "),n("a",{attrs:{href:"https://github.com/kelektiv/node-cron",target:"_blank",rel:"noopener noreferrer"}},[t._v("CRON pattern"),n("OutboundLink")],1),t._v(" to schedule the job at regular intervals, e.g. "),n("code",[t._v("*/5 * * * * *")]),t._v(" will run it every 5 seconds, if not provided it will be run only once")]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12)])])]),n("p",[t._v("This function is responsible of parsing the job definition including all the required parameters to call the underlying services with the relevant hooks configured (see below).")]),t._m(13),n("p",[t._v("The jobfile is the sole mandatory argument of the CLI and options are read from the CLI arguments with the same names as in the internal API or using shortcuts like this:")]),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("However, using the CLI, you can also launch it as standard wep application/API. You can then POST job or task requests to the exposed services, e.g. on "),s("code",[this._v("localhost:3030/api/jobs")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"command-line-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface","aria-hidden":"true"}},[this._v("#")]),this._v(" Command-Line Interface")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"internal-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#internal-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Internal API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The underlying implementation is managed by the global "),s("strong",[this._v("run(jobfile, options)")]),this._v(" function:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("strong",[this._v("jobfile")]),this._v(": a path to a local job file or a jobfile JSON object")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("strong",[this._v("proxy")]),this._v(": proxy URL to be used for HTTP requests")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("strong",[this._v("proxy-https")]),this._v(": proxy URL to be used for HTTPS requests")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("strong",[this._v("user")]),this._v(": user name to be used for proxy")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("strong",[this._v("password")]),this._v(": user password to be used for proxy")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("strong",[this._v("debug")]),this._v(": output debug messages")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("strong",[this._v("port")]),this._v(": port to be used by the krawler (defaults to 3030)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("strong",[this._v("api")]),this._v(": launch the krawler as a web service/API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("strong",[this._v("api-prefix")]),this._v(": api prefix to be used when launching the krawler as a web service/API (defaults to "),s("code",[this._v("/api")]),this._v(")")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"external-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#external-api","aria-hidden":"true"}},[this._v("#")]),this._v(" External API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("krawler --user user_name -p password -P proxy_url --cron "),s("span",{attrs:{class:"token string"}},[this._v('"*/5 * * * * *"')]),this._v(" path_to_jobfile.json\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("A jobfile could be a JSON or JS file (it will be "),s("code",[this._v("require()")]),this._v(") and its structure is the following:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" job "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// Options for job executor")]),t._v("\n  options"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    workersLimit"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    faultTolerant"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// Store to be used for job output")]),t._v("\n  store"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'job-store'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// Common options for all generated tasks")]),t._v("\n  taskTemplate"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// Store to be used for task output")]),t._v("\n    store"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'job-store'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    id"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'<%= jobId %>-<%= taskId %>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'xxx'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// Hooks setup")]),t._v("\n  hooks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// Tasks service hooks")]),t._v("\n    tasks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// Hooks to be run after task creation")]),t._v("\n      after"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// Each entry is a hook name and associated options object")]),t._v("\n        computeSomething"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          hookOption"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// Jobs service hooks")]),t._v("\n    jobs"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// Hooks to be run before job creation")]),t._v("\n      before"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        generateTasks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          hookOption"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// Hooks to be run after job creation")]),t._v("\n      after"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        generateOutput"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          hookOption"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// The list of tasks to run if not generated by hooks")]),t._v("\n  tasks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("When running the krawler as a web API note that only the hooks pipeline is mandatory in the job file. Indeed, job and task objects will be then sent by requesting the exposed web services.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"known-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" Known issues")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"use-the-same-hook-multiple-times"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-the-same-hook-multiple-times","aria-hidden":"true"}},[this._v("#")]),this._v(" Use the same hook multiple times")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("By default hook names are used as JSON object keys so you cannot have the same hook appearing twice in your pipeline using this notation. However, you can also use the "),s("em",[this._v("named hook syntax")]),this._v(" if you want to use the same hook multiple times in your pipeline. In this case the key used in the configuration file can be whatever you want but the associated object value must have a "),s("code",[this._v("hook")]),this._v(" property containing the name of the hook to be run like this:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("tasks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  after"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    readXML"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    writeTemplateYaml"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      hook"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'writeTemplate'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      templateFile"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'mapproxy-template.yaml'")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    writeTemplateHtml"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      hook"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'writeTemplate'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      templateFile"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'leaflet-template.html'")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"use-parallelism"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-parallelism","aria-hidden":"true"}},[this._v("#")]),this._v(" Use parallelism")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("By default all hooks are run in sequence, if at given step of your pipeline you want a parallel execution of some you can use the reserved hook name "),s("code",[this._v("parallel")]),this._v(" and give the hooks to be run in parallel as an array of items each containing the hook name as a "),s("code",[this._v("hook")]),this._v(" property and its options as other properties:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("tasks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  after"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    readXML"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    parallel"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        hook"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'writeTemplate'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        templateFile"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'mapproxy-template.yaml'")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        hook"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'writeTemplate'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        templateFile"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'leaflet-template.html'")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"handling-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handling-error","aria-hidden":"true"}},[this._v("#")]),this._v(" Handling error")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can use the "),s("strong",[this._v("faultTolerant")]),this._v(" option to catch any error raised in a hook so that the hook chain will continue anyway. However, it is sometimes hard to ensure the pipeline will run fine until the end once an error occured. In this case, you'd better let the chain stop (the default behaviour) and register specific hooks to be run whenever an error occurs, such as one used to clear intermediate outputs:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("tasks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  after"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  error"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    clearOutputs"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);