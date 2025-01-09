const o={uOffset:{doc:!0,zhname:"u偏移",shadow:["NUM",0],tooltip:"定义纹理沿UV坐标的u轴的偏移值"},uScale:{doc:!0,zhname:"u缩放",shadow:["NUM",1],tooltip:"定义纹理沿UV坐标的u轴的缩放值"},uAng:{doc:!0,zhname:"u角度",shadow:["NUM",0],tooltip:"定义纹理沿UV坐标的u轴旋转的度数（单位弧度）"},uRotationCenter:{doc:!0,zhname:"u旋转中心",shadow:["NUM",.5],tooltip:"定义旋转的中心 (U)"},vOffset:{doc:!0,zhname:"v偏移",shadow:["NUM",0],tooltip:"定义纹理沿UV坐标的v轴的偏移值"},vScale:{doc:!0,zhname:"v缩放",shadow:["NUM",1],tooltip:"定义纹理沿UV坐标的v轴的缩放值"},vAng:{doc:!0,zhname:"v角度",shadow:["NUM",0],tooltip:"定义纹理沿UV坐标的v轴旋转的度数（单位弧度）"},vRotationCenter:{doc:!0,zhname:"v旋转中心",shadow:["NUM",.5],tooltip:"定义旋转的中心 (V)"},wAng:{doc:!0,zhname:"w角度",shadow:["NUM",0],tooltip:"定义纹理沿UV坐标的w轴旋转的度数（单位弧度）"},wRotationCenter:{doc:!0,zhname:"w旋转中心",shadow:["NUM",0],tooltip:"定义纹理沿UV坐标的v轴旋转的度数（单位弧度）"},wrapU:{doc:!0,zhname:"平铺U",shadow:["TEXTURE_WARP_DROPDOWN",0],tooltip:`贴图平铺方式
0-裁切
1-重复
2-镜像`},wrapV:{doc:!0,zhname:"平铺V",shadow:["TEXTURE_WARP_DROPDOWN",0],tooltip:`贴图平铺方式
0-裁切
1-重复
2-镜像`},wrapR:{doc:!0,zhname:"平铺R",shadow:["TEXTURE_WARP_DROPDOWN",0],tooltip:`贴图平铺方式
0-裁切
1-重复
2-镜像`},coordinatesIndex:{doc:!0,zhname:"UV通道",shadow:["NUM",0],tooltip:"定义要使用的UV通道，从0开始，默认为0。"},coordinatesMode:{doc:!0,zhname:"映射模式",shadow:["TEXTURE_COORDINATES_MODE_DROPDOWN",null],tooltip:`纹理映射方式 
0-直接模式
1-球形模式
2-平面模式
3-立方体模式
4-投射模式
5-天空盒模式
6-逆立方体模式
7-等矩圆柱模式
8-固定等矩圆柱模式
9-固定等矩圆柱镜像模式`},hasAlpha:{doc:!0,zhname:"含Alpha",shadow:["BOOL","TRUE"],tooltip:"纹理中是否包含Alpha通道。"},level:{doc:!0,zhname:"级别",shadow:["NUM",1],tooltip:"纹理的强度或力度。"},anisotropicFilteringLevel:{doc:!0,zhname:"各向异性过滤级别",shadow:["NUM",4],tooltip:"需要兼容的硬件和浏览器（支持各向异性过滤），用于定义纹理中各向异性过滤的级别。越高越好，但越慢。默认值为4，兼顾质量和效率。"},url:{doc:!0,zhname:"地址",shadow:["NUM",0],tooltip:"纹理地址。"},invertZ:{doc:!0,zhname:"反转Z",shadow:["NUM",0],tooltip:"立方体纹理沿Z轴反转。"},rotationY:{doc:!0,zhname:"旋转Y",shadow:["NUM",0],tooltip:"立方体纹理沿Y轴旋转的弧度数。"},onDisposeObservable:{doc:!0,zhname:"当销毁时",shadow:[null,null],tooltip:"获取当纹理销毁时事件。"},onLoadObservable:{doc:!0,zhname:"当加载时",shadow:[null,null],tooltip:"获取当纹理加载时事件。"}};export{o as t};
