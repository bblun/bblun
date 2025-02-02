import{_ as o}from"./chunks/AutoDoc.C9fRF2mX.js";import{t as a}from"./chunks/textureOptions.DbU3dxic.js";import{c as n,j as e,a as r,G as l,k as i,o as s}from"./chunks/framework.BEZymiH2.js";const p={coordinatesIndex:{doc:!0,zhname:"UV通道",shadow:["NUM",0],tooltip:"定义要使用的UV通道，从0开始，默认为0。"},coordinatesMode:{doc:!0,zhname:"映射模式",shadow:["TEXTURE_COORDINATES_MODE_DROPDOWN",null],tooltip:`纹理映射方式 
0-直接模式
1-球形模式
2-平面模式
3-立方体模式
4-投射模式
5-天空盒模式
6-逆立方体模式
7-等矩圆柱模式
8-固定等矩圆柱模式
9-固定等矩圆柱镜像模式`},hasAlpha:{doc:!0,zhname:"含Alpha",shadow:["BOOL","TRUE"],tooltip:"纹理中是否包含Alpha通道。"},level:{doc:!0,zhname:"级别",shadow:["NUM",1],tooltip:"纹理的强度或力度。"},anisotropicFilteringLevel:{doc:!0,zhname:"各向异性过滤级别",shadow:["NUM",4],tooltip:"需要兼容的硬件和浏览器（支持各向异性过滤），用于定义纹理中各向异性过滤的级别。越高越好，但越慢。默认值为4，兼顾质量和效率。"},url:{doc:!0,zhname:"地址",shadow:["NUM",0],tooltip:"纹理地址。"},invertZ:{doc:!0,zhname:"反转Z",shadow:["NUM",0],tooltip:"立方体纹理沿Z轴反转。"},rotationY:{doc:!0,zhname:"旋转Y",shadow:["NUM",0],tooltip:"立方体纹理沿Y轴旋转的弧度数。"},onDisposeObservable:{doc:!0,zhname:"当销毁时",shadow:[null,null],tooltip:"获取当纹理销毁时事件。"},onLoadObservable:{doc:!0,zhname:"当加载时",shadow:[null,null],tooltip:"获取当纹理加载时事件。"}},d={autoPlay:{doc:!0,zhname:"自动播放",shadow:["BOOL","FALSE"],tooltip:"默认视频是否播放。浏览器中的媒体内容需要用户触发才能播放，设置为自动播放的视频将会静音播放。"},loop:{doc:!0,zhname:"循环",shadow:["BOOL","FALSE"],tooltip:"视频是否循环播放。"},muted:{doc:!0,zhname:"静音",shadow:["BOOL","FALSE"],tooltip:"视频是否静音。"},poster:{doc:!0,zhname:"海报",shadow:["TEXT","assets/media/poster.jpg"],tooltip:"视频的海报图。"}},u={size:{doc:!0,zhname:"分辨率",shadow:["NUM",512],tooltip:"贴图分辨率"},refreshRate:{doc:!0,zhname:"刷新率",shadow:["TEXTURE_REFRESHRATE_DROPDOWN",""],tooltip:"设置实时纹理将如何刷新。默认每帧刷新"},meshes:{doc:!0,zhname:"渲染网格",shadow:["ARRAY",null],tooltip:"要渲染到立方体纹理的网格"},root:{doc:!0,zhname:"根网格",shadow:["MESH",""],tooltip:`立方体纹理要应用到的网格。
要获得最佳渲染效果，应当指定立方体纹理的中心，可通过根网格或探针位置两种方法之一来设置`},probePosition:{doc:!0,zhname:"探针位置",shadow:["VECTOR3",[0,0,0]],tooltip:`反射探针的位置。
要获得最佳渲染效果，应当指定立方体纹理的中心，可通过根网格或探针位置两种方法之一来设置`}},c={create_texture:{doc:!0,zhname:"创建纹理",shadow:["TEXTURE",""],tooltip:"用于创建纹理、立方体纹理。",children:{Texture:{doc:!0,zhname:"纹理",tooltip:"用于创建纹理。通过右键菜单-创建选项，可进一步设置纹理属性。",children:a},CubeTexture:{doc:!0,zhname:"立方体纹理",tooltip:"用于创建立方体纹理。通过右键菜单-创建选项，可进一步设置纹理属性。",children:p}}},create_texture_from_base64:{doc:!0,zhname:"从base64创建纹理",tooltip:"从base64创建纹理"},texture_property:{doc:!0,zhname:"纹理属性",tooltip:"设置或获取纹理属性。"},get_texture_by_name:{doc:!0,zhname:"获取纹理",tooltip:"根据名称或地址获取纹理，根据场景检查中显示的纹理名称确认。"},create_video_texture:{doc:!0,zhname:"视频纹理",tooltip:"用于创建视频纹理。",children:d},video_texture_playback:{doc:!0,zhname:"视频纹理回放",tooltip:"用于控制视频纹理的播放、暂停。"},create_realtime_cube_texture:{doc:!0,zhname:"实时立方体纹理",tooltip:"实时创建可用于反射或折射的立方体纹理，即反射探针。",children:u},user_upload_texture:{doc:!0,zhname:"用户上传纹理",tooltip:`允许用户从本地上传一张图片作为纹理。注意，因为上传行为需要由用户触发，所以此拼图通常在事件拼图内部使用。
在此拼图右键菜单中可创建“上传的纹理”拼图。`},get_uploaded_texture:{doc:!0,zhname:"上传的纹理",tooltip:"获取用户上传的纹理。此拼图仅用于“用户上传纹理”回调插槽。"},clone_texture:{doc:!0,zhname:"克隆纹理",tooltip:"根据提供的纹理克隆一个新的纹理。"},get_texture_size:{doc:!0,zhname:"获取纹理大小",tooltip:"获取纹理的大小、宽、高及宽高比信息。"},update_texture_url:{doc:!0,zhname:"更新纹理",tooltip:"更新纹理地址。"},dispose_texture:{doc:!0,zhname:"销毁纹理",tooltip:"销毁纹理并释放依赖的资源"},MSG:{doc:!1,anisotropicFilteringLevel_tooltip:"anisotropicFilteringLevel-定义纹理中的各向异性过滤级别，需要兼容的硬件和浏览器(支持各向异性过滤)。越高越好，但会越慢。默认为4，是理想方案",invertZ_tooltip:"invertZ-纹理是否翻转z轴(用于立方体贴图).",level_tooltip:"level-纹理强度",onDisposeObservable_tooltip:"onDisposeObservable-当纹理销毁时触发该事件",onLoadObservable_tooltip:"onLoadObservable-当纹理加载完成时触发此事件",uAng_tooltip:"uAng-定义纹理沿UV坐标的u轴旋转的度数（单位弧度）",uOffset_tooltip:"uOffset-定义纹理沿UV坐标的u轴的偏移值",uRotationCenter_tooltip:"uRotationCenter-定义旋转的中心 (U)",url_tooltip:"url-定义纹理地址",uScale_tooltip:"uScale-定义纹理沿UV坐标的u轴的缩放值",rotationY_tooltip:"rotationY-设置或获取纹理矩阵沿Y轴的旋转值（弧度",vAng_tooltip:"vAng-定义纹理沿UV坐标的v轴旋转的度数（单位弧度）",vOffset_tooltip:"vOffset-定义纹理沿UV坐标的v轴的偏移值",vRotationCenter_tooltip:"vRotationCenter-定义旋转的中心 (V)",vScale_tooltip:"vScale-定义纹理沿UV坐标的v轴的缩放值",wAng_tooltip:"wAng-定义纹理沿UV坐标的w轴旋转的度数（单位弧度）",wRotationCenter_tooltip:"wRotationCenter-定义旋转的中心 (W)",wrapR_tooltip:`wrapR-贴图平铺方式
0-裁切
1-重复
2-镜像`,coordinatesIndex_tooltip:"coordinatesIndex-定义要使用的UV通道，从0开始，默认为0。",coordinatesMode_tooltip:`coordinatesMode-纹理映射方式 
0-直接模式
1-球形模式
2-平面模式
3-立方模式
4-投射模式
5-天空盒模式
6-逆立方模式
7-等矩圆柱模式
8-固定等矩圆柱模式
9-固定等矩圆柱镜像模式`,hasAlpha_tooltip:"hasAlpha-定义纹理是否带有透明通道",invertY_tooltip:"invertY-纹理是否翻转y轴",wrapU_tooltip:`wrapU-贴图平铺方式
0-裁切
1-重复
2-镜像`,wrapV_tooltip:`wrapV-贴图平铺方式
0-裁切
1-重复
2-镜像`}},O=JSON.parse('{"title":"纹理 Textures","description":"","frontmatter":{},"headers":[],"relativePath":"blocks-reference/texture.md","filePath":"blocks-reference/texture.md"}'),h={name:"blocks-reference/texture.md"},w=Object.assign(h,{setup(_){return(m,t)=>(s(),n("div",null,[t[0]||(t[0]=e("h1",{id:"纹理-textures",tabindex:"-1"},[r("纹理 Textures "),e("a",{class:"header-anchor",href:"#纹理-textures","aria-label":'Permalink to "纹理 Textures"'},"​")],-1)),t[1]||(t[1]=e("p",null,"这类拼图用于创建和操作纹理。",-1)),l(o,{data:i(c)},null,8,["data"])]))}});export{O as __pageData,w as default};
