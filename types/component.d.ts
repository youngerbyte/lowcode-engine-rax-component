/// <reference types="rax" />
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
declare const RefComponent: import("rax").ForwardRefExoticComponent<ComponentProps & import("rax").RefAttributes<any>>;
export default RefComponent;
