"use strict";

exports.__esModule = true;
exports.default = void 0;

var _rax = require("rax");

var _raxView = _interopRequireDefault(require("rax-view"));

var _raxText = _interopRequireDefault(require("rax-text"));

var _raxImage = _interopRequireDefault(require("rax-image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 示例组件
 * @param props
 * @constructor
 */
function ExampleComponent(props, ref) {
  return (0, _rax.createElement)(_raxView.default, {
    ref: ref,
    style: _extends({
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'green'
    }, props.style)
  }, (0, _rax.createElement)(_raxImage.default, {
    source: {
      uri: props.uri
    },
    style: {
      width: props.imgWidth,
      height: props.imgHeight
    }
  }), (0, _rax.createElement)(_raxView.default, {
    style: {
      flexDirection: 'column'
    }
  }, (0, _rax.createElement)(_raxText.default, {
    style: {
      fontSize: props.nameFontSize
    }
  }, props.name), (0, _rax.createElement)(_raxText.default, {
    style: {
      fontSize: props.contentFontSize
    }
  }, props.content)));
}

var RefComponent = (0, _rax.forwardRef)(ExampleComponent);
RefComponent.defaultProps = {
  name: '默认标题',
  content: '默认内容',
  uri: '',
  imgHeight: 50,
  imgWidth: 50,
  nameFontSize: 10,
  contentFontSize: 10
};
RefComponent.displayName = 'RaxComponentText';
var _default = RefComponent;
exports.default = _default;