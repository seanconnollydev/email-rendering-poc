"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = void 0;

var _react = _interopRequireDefault(require("react"));

var _mjmlReact = require("mjml-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generate = function generate() {
  return _react["default"].createElement(_mjmlReact.Mjml, null, _react["default"].createElement(_mjmlReact.MjmlHead, null, _react["default"].createElement(_mjmlReact.MjmlTitle, null, "Last Minute Offer"), _react["default"].createElement(_mjmlReact.MjmlPreview, null, "Last Minute Offer..."), _react["default"].createElement(_mjmlReact.MjmlStyle, null, "\n          .blue-column {\n            background-color: blue;\n          }\n        "), _react["default"].createElement(_mjmlReact.MjmlStyle, {
    inline: true
  }, "\n          .red-column {\n            background-color: red;\n          }\n        ")), _react["default"].createElement(_mjmlReact.MjmlBody, {
    width: 500
  }, _react["default"].createElement(_mjmlReact.MjmlSection, {
    fullWidth: true,
    backgroundColor: "#efefef"
  }, _react["default"].createElement(_mjmlReact.MjmlColumn, null, _react["default"].createElement(_mjmlReact.MjmlImage, {
    src: "https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg"
  }))), _react["default"].createElement(_mjmlReact.MjmlSection, null, _react["default"].createElement(_mjmlReact.MjmlColumn, null, _react["default"].createElement(_mjmlReact.MjmlButton, {
    padding: "20px",
    backgroundColor: "#346DB7",
    href: "https://www.wix.com/"
  }, "I like it!"))), _react["default"].createElement(_mjmlReact.MjmlSection, null, _react["default"].createElement(_mjmlReact.MjmlColumn, {
    cssClass: "blue-column"
  }, _react["default"].createElement(_mjmlReact.MjmlText, null, "I am blue")), _react["default"].createElement(_mjmlReact.MjmlColumn, {
    cssClass: "red-column"
  }, _react["default"].createElement(_mjmlReact.MjmlText, null, "I am red")))));
};

exports.generate = generate;