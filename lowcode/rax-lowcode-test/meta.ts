
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const RaxLowcodeTestMeta: ComponentMetadata = {
  "componentName": "RaxLowcodeTest",
  "title": "RaxLowcodeTest",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "rax-lowcode-test",
    "version": "0.0.1-beta.1",
    "exportName": "default",
    "main": "src/index.tsx",
    "destructuring": false,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "name",
            "zh-CN": "名称111"
          },
          "tip": "name | 名称111"
        },
        "name": "name",
        "description": "名称111",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "content",
            "zh-CN": "内容222"
          },
          "tip": "content | 内容222"
        },
        "name": "content",
        "description": "内容222",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "uri",
            "zh-CN": "图片地址, 例如：'"
          },
          "tip": "uri | 图片地址, 例如：'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png'"
        },
        "name": "uri",
        "description": "图片地址, 例如：'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png'",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "imgHeight",
            "zh-CN": "图片高度"
          },
          "tip": "imgHeight | 图片高度"
        },
        "name": "imgHeight",
        "description": "图片高度",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": true,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "imgWidth",
            "zh-CN": "图片宽度"
          },
          "tip": "imgWidth | 图片宽度"
        },
        "name": "imgWidth",
        "description": "图片宽度",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": true,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "nameFontSize",
            "zh-CN": "名字字体大小"
          },
          "tip": "nameFontSize | 名字字体大小"
        },
        "name": "nameFontSize",
        "description": "名字字体大小",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": true,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "contentFontSize",
            "zh-CN": "内容字体大小"
          },
          "tip": "contentFontSize | 内容字体大小"
        },
        "name": "contentFontSize",
        "description": "内容字体大小",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": true,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "ref",
            "zh-CN": "ref"
          }
        },
        "name": "ref",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "T",
                            "zh-CN": "T"
                          }
                        },
                        "name": "T",
                        "setter": {
                          "componentName": "MixedSetter",
                          "isRequired": true,
                          "props": {}
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "current",
                            "zh-CN": "current"
                          }
                        },
                        "name": "current",
                        "setter": {
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "extraSetter": {
                                "componentName": "MixedSetter",
                                "isRequired": false,
                                "props": {}
                              }
                            }
                          },
                          "isRequired": true,
                          "initialValue": {}
                        }
                      }
                    ],
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                }
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "key",
            "zh-CN": "key"
          }
        },
        "name": "key",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              }
            ]
          }
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "RaxLowcodeTest",
    "screenshot": "",
    "schema": {
      "componentName": "RaxLowcodeTest",
      "props": {}
    }
  }
];

export default {
  ...RaxLowcodeTestMeta,
  snippets
};
