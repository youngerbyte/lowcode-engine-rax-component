import { forwardRef, ForwardRefRenderFunction, createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

export interface ComponentProps {
  /**
   * 名称111
   */
  name: string;
  /**
   * 内容222
   */
  content: string;
  /**
   * 图片地址, 例如：'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png'
   */
  uri: string;
  /**
   * 图片高度
   */
  imgHeight: number;
  /**
   * 图片宽度
   */
  imgWidth: number;
  /**
   * 名字字体大小
   */
  nameFontSize: number;
  /**
   * 内容字体大小
   */
  contentFontSize: number;
  /**
   * 样式
   */
  style?: object;
}

/**
 * 示例组件
 * @param props
 * @constructor
 */
function ExampleComponent(props: ComponentProps, ref: any) {
  return (
    <View ref={ref} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'green', ...props.style }}>
      <Image source={{ uri: props.uri}} style={{ width: props.imgWidth, height: props.imgHeight }} />
      <View style={{ flexDirection: 'column'}}>
        <Text style={{ fontSize: props.nameFontSize}}>{props.name}</Text>
        <Text style={{ fontSize: props.contentFontSize}}>{props.content}</Text>
      </View>
    </View>
  );
}

const RefComponent = forwardRef(ExampleComponent as ForwardRefRenderFunction<any, ComponentProps>);

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
