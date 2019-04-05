"use strict";

var _mjmlReact = require("mjml-react");

var _basic = require("./emails/basic");

var _render = (0, _mjmlReact.render)((0, _basic.generate)(), {
  validationLevel: 'soft'
}),
    html = _render.html;

console.log(html);