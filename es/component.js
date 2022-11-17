function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { forwardRef, createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

/**
 * 示例组件
 * @param props
 * @constructor
 */
function ExampleComponent(props, ref) {
  return createElement(View, {
    ref: ref,
    style: _extends({
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'green'
    }, props.style)
  }, createElement(Image, {
    source: {
      uri: props.uri
    },
    style: {
      width: props.imgWidth,
      height: props.imgHeight
    }
  }), createElement(View, {
    style: {
      flexDirection: 'column'
    }
  }, createElement(Text, {
    style: {
      fontSize: props.nameFontSize
    }
  }, props.name), createElement(Text, {
    style: {
      fontSize: props.contentFontSize
    }
  }, props.content)));
}

var RefComponent = forwardRef(ExampleComponent);
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
export default RefComponent;