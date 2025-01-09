import{_ as e}from"./chunks/AutoDoc.Cae4M7x9.js";import{c as a,j as t,a as n,G as i,k as d,o as l}from"./chunks/framework.BTgeeuQa.js";const h={intensity:{doc:!0,zhname:"亮度",shadow:["NUM","1"],tooltip:"灯光的亮度。"},diffuse:{doc:!0,zhname:"漫反射",shadow:["COLOR3",[255,255,255]],tooltip:"灯光的基础颜色"},specular:{doc:!0,zhname:"高光",shadow:["COLOR3",[255,255,255]],tooltip:`灯光的高光颜色
注意: 不会影响PBR材质`},position:{doc:!0,zhname:"位置",shadow:["VECTOR3",[0,0,0]],tooltip:"灯光在场景中的位置"},parent:{doc:!0,zhname:"父级",shadow:["NODE",""],tooltip:"设置或获取节点的父级"},shadowEnabled:{doc:!0,zhname:"启用阴影",shadow:["BOOL","TRUE"],tooltip:"设置是否为该光源启用阴影。这可以帮助关闭/打开阴影,而不需要解除当前的阴影生成器"},shadowMinZ:{doc:!0,zhname:"阴影最小Z",shadow:["NUM","0"],tooltip:"阴影投射裁切最小z值"},shadowMaxZ:{doc:!0,zhname:"阴影最大Z",shadow:["NUM","0"],tooltip:"阴影投射裁切最大z值"},intensityMode:{doc:!0,zhname:"亮度模式",shadow:["LIGHT_INTENSITY_MODE_DROPDOWN",""],tooltip:"设置灯光亮度的衰减模式。它只与PBR材质相关"},lightmapMode:{doc:!0,zhname:"灯光贴图模式",shadow:["NUM","0"],tooltip:`设置该光源的灯光贴图模式
可选值:
0 - 默认
1 - 仅高光
2 - 仅阴影`},radius:{doc:!0,zhname:"半径",shadow:["NUM","10"],tooltip:`用于在PBR材质中模拟柔和的面光。
光滑的材质表面会把灯光反射成一个锐利的点，此参数可以使灯光边缘柔和。`},excludedMeshes:{doc:!0,zhname:"排除网格",shadow:["ARRAY",null],tooltip:"设置不受该灯光影响的网格"}},s={intensity:{doc:!0,zhname:"亮度",shadow:["NUM","1"],tooltip:"灯光的亮度。"},diffuse:{doc:!0,zhname:"漫反射",shadow:["COLOR3",[255,255,255]],tooltip:"灯光的基础颜色"},specular:{doc:!0,zhname:"高光",shadow:["COLOR3",[255,255,255]],tooltip:`灯光的高光颜色
注意: 不会影响PBR材质`},position:{doc:!0,zhname:"位置",shadow:["VECTOR3",[0,0,0]],tooltip:"灯光在场景中的位置"},direction:{doc:!0,zhname:"方向",shadow:["VECTOR3",[0,-1,0]],tooltip:"灯光的方向"},parent:{doc:!0,zhname:"父级",shadow:["NODE",""],tooltip:"设置或获取节点的父级"},autoCalcShadowZBounds:{doc:!0,zhname:"自动计算阴影Z边界",shadow:["BOOL","TRUE"],tooltip:'自动计算投影矩阵的"阴影最小Z"和"阴影最大Z"，以在每一帧上达到最佳拟合（包括所有阴影投射网格）。"自动更新扩展"必须设置为真才能正常工作'},autoUpdateExtends:{doc:!0,zhname:"自动更新扩展",shadow:["BOOL","TRUE"],tooltip:'自动计算投影矩阵的"阴影最小Z"和"阴影最大Z"，以在每一帧上达到最佳拟合（包括所有阴影投射网格）。'},shadowEnabled:{doc:!0,zhname:"启用阴影",shadow:["BOOL","TRUE"],tooltip:"设置是否为该光源启用阴影。这可以帮助关闭/打开阴影,而不需要解除当前的阴影生成器"},shadowMinZ:{doc:!0,zhname:"阴影最小Z",shadow:["NUM","0"],tooltip:"阴影投射裁切最小z值"},shadowMaxZ:{doc:!0,zhname:"阴影最大Z",shadow:["NUM","0"],tooltip:"阴影投射裁切最大z值"},intensityMode:{doc:!0,zhname:"亮度模式",shadow:["LIGHT_INTENSITY_MODE_DROPDOWN",""],tooltip:"设置灯光亮度的衰减模式。它只与PBR材质相关"},lightmapMode:{doc:!0,zhname:"灯光贴图模式",shadow:["NUM","0"],tooltip:`设置该光源的灯光贴图模式
可选值:
0 - 默认
1 - 仅高光
2 - 仅阴影`},excludedMeshes:{doc:!0,zhname:"排除网格",shadow:["ARRAY",null],tooltip:"设置不受该灯光影响的网格"}},r={intensity:{doc:!0,zhname:"亮度",shadow:["NUM","1"],tooltip:"灯光的亮度。"},diffuse:{doc:!0,zhname:"漫反射",shadow:["COLOR3",[255,255,255]],tooltip:"灯光的基础颜色"},specular:{doc:!0,zhname:"高光",shadow:["COLOR3",[255,255,255]],tooltip:`灯光的高光颜色
注意: 不会影响PBR材质`},position:{doc:!0,zhname:"位置",shadow:["VECTOR3",[0,0,0]],tooltip:"灯光在场景中的位置"},direction:{doc:!0,zhname:"方向",shadow:["VECTOR3",[0,-1,0]],tooltip:"灯光的方向"},angle:{doc:!0,zhname:"锥角",shadow:["NUM","90"],tooltip:"聚光灯锥角的弧度数"},innerAngle:{doc:!0,zhname:"内锥角",shadow:["NUM","0"],tooltip:"聚光灯圆锥体内角角度衰减，仅在gltf衰减模式中使用"},exponent:{doc:!0,zhname:"指数",shadow:["NUM","2"],tooltip:"灯光衰减随距离而变化的速度"},parent:{doc:!0,zhname:"父级",shadow:["NODE",""],tooltip:"设置或获取节点的父级"},shadowEnabled:{doc:!0,zhname:"启用阴影",shadow:["BOOL","TRUE"],tooltip:"设置是否为该光源启用阴影。这可以帮助关闭/打开阴影,而不需要解除当前的阴影生成器"},shadowMinZ:{doc:!0,zhname:"阴影最小Z",shadow:["NUM","0"],tooltip:"阴影投射裁切最小z值"},shadowMaxZ:{doc:!0,zhname:"阴影最大Z",shadow:["NUM","0"],tooltip:"阴影投射裁切最大z值"},intensityMode:{doc:!0,zhname:"亮度模式",shadow:["LIGHT_INTENSITY_MODE_DROPDOWN",""],tooltip:"设置灯光亮度的衰减模式。它只与PBR材质相关"},lightmapMode:{doc:!0,zhname:"灯光贴图模式",shadow:["NUM","0"],tooltip:`设置该光源的灯光贴图模式
可选值:
0 - 默认
1 - 仅高光
2 - 仅阴影`},excludedMeshes:{doc:!0,zhname:"排除网格",shadow:["ARRAY",null],tooltip:"设置不受该灯光影响的网格"}},p={intensity:{doc:!0,zhname:"亮度",shadow:["NUM","1"],tooltip:"灯光的亮度。"},diffuse:{doc:!0,zhname:"漫反射",shadow:["COLOR3",[255,255,255]],tooltip:"灯光的基础颜色"},specular:{doc:!0,zhname:"高光",shadow:["COLOR3",[255,255,255]],tooltip:`灯光的高光颜色
注意: 不会影响PBR材质`},groundColor:{doc:!0,zhname:"底光",shadow:["COLOR3",[0,0,0]],tooltip:"底光是与灯光方向相反的灯光。可以将漫反射和高光视为从光源处发出的光，而底光是从相反方向发出的光。"},direction:{doc:!0,zhname:"方向",shadow:["VECTOR3",[0,-1,0]],tooltip:"灯光的方向"},parent:{doc:!0,zhname:"父级",shadow:["NODE",""],tooltip:"设置或获取节点的父级"}},c={bias:{doc:!0,zhname:"偏移",shadow:["NUM",0],tooltip:"设置偏移: 偏移用于深度防止阴影错误 (在灯光方向上)."},normalBias:{doc:!0,zhname:"法线偏移",shadow:["NUM",0],tooltip:"设置法线偏移：偏移用于深度防止阴影错误(沿法线方向并与灯光/法线角度成比例)"},darkness:{doc:!0,zhname:"暗度",shadow:["NUM",0],tooltip:"设置或获取实际阴影暗度"},mapSize:{doc:!0,zhname:"贴图大小",shadow:["NUM",1024],tooltip:"获取或设置存储阴影的纹理的大小"},transparencyShadow:{doc:!0,zhname:"透明阴影",shadow:["BOOL","FALSE"],tooltip:"获取或设置是否开启透明阴影"},blurBoxOffset:{doc:!0,zhname:"模糊框偏移",shadow:["NUM",0],tooltip:`设置模糊方框偏移：偏移用于模糊通道
仅当使用内核模糊为false时有效`},blurScale:{doc:!0,zhname:"模糊缩放",shadow:["NUM","1"],tooltip:`设置模糊缩放：与主阴影贴图相比,模糊纹理的比例
2表示半尺寸`},depthScale:{doc:!0,zhname:"深度缩放",shadow:["NUM","1"],tooltip:"在ESM模式下设置深度比例。这会覆盖存储在灯光中的缩放"},filter:{doc:!0,zhname:"过滤模式",shadow:["SHADOW_FILTER_DROPDOWN",null],tooltip:`设置或获取当前阴影生成器模式。返回值是一个数字，它代表阴影贴图中的一个模式。
0 - NONE
1 - Exponential
2 - Poisson
3 - Blurred exponential
4 - Close exponential
5 - Blurred close exponential
6 - PCF
7 - PCSS`},filteringQuality:{doc:!0,zhname:"过滤质量",shadow:["NUM",0],tooltip:`设置PCF或PCSS质量。
0-高质量
1-中质量
2-低质量`},contactHardeningLightSizeUVRatio:{doc:!0,zhname:"半影比率",shadow:["NUM",0],tooltip:"此参数影响阴影边缘虚化效果，在PCSS中有效。"},useKernelBlur:{doc:!0,zhname:"使用内核模糊",shadow:["BOOL","FALSE"],tooltip:"设置模糊通道是内核模糊(如果为真)还是方框模糊。仅在已过滤模式（使用模糊指数阴影贴图等）下有效"},blurKernel:{doc:!0,zhname:"模糊内核",shadow:["NUM",9],tooltip:`设置模糊内核：模糊通道内核大小
仅当使用内核模糊为true时有效`}},u={numCascades:{doc:!0,zhname:"级联数量",shadow:["NUM",4],tooltip:"用于CSM的级联数量1-4"},stabilizeCascades:{doc:!0,zhname:"稳定级联",shadow:["BOOL","FALSE"],tooltip:"如果希望阴影的边缘在旋转相机时不会“游泳”/“闪闪发光”，可设置此参数为真。要权衡的是，启用此设置时，阴影渲染会失去一些精度。"},lambda:{doc:!0,zhname:"lambda",shadow:["NUM",.5],tooltip:"设置lambda参数。此参数用于分割相机视锥体并创建级联。它是一个介于0-1之间的值。如果为0，视锥体的w分割为均匀分割，如果为1，为对数分割。介于两者之间的值，它是均匀分割算法和对数分割算法的线性组合。"},cascadeBlendPercentage:{doc:!0,zhname:"级联混合比例",shadow:["NUM",.1],tooltip:"获取或设置两个级联之间的混合百分比（值介于0-1）。默认为0.1（10%混合）。"},depthClamp:{doc:!0,zhname:"深度钳制",shadow:["BOOL","TRUE"],tooltip:`启用后，它可以提高阴影质量，因为不需要调整视锥体的近Z平面来考虑远处的阴影投射网。
请注意，此属性与PCSS过滤模式不兼容。`},autoCalcDepthBounds:{doc:!0,zhname:"自动计算深度边界",shadow:["BOOL","FALSE"],tooltip:"启用后，它可以大大提高阴影质量，但代价是需要更多的GPU工作。使用此选项时，应该增加lambda参数的值，甚至将其设置为1以获得最佳结果。"},shadowMaxZ:{doc:!0,zhname:"阴影最大Z",shadow:["NUM",1e3],tooltip:"阴影最大Z距离。这是不显示阴影的极限。默认为camera.maxZ"},bias:{doc:!0,zhname:"偏移",shadow:["NUM",1e-4],tooltip:"设置偏移: 偏移用于深度防止阴影错误 (在灯光方向上)."},normalBias:{doc:!0,zhname:"法线偏移",shadow:["NUM",0],tooltip:"设置法线偏移：偏移用于深度防止阴影错误(沿法线方向并与灯光/法线角度成比例)"},darkness:{doc:!0,zhname:"暗度",shadow:["NUM",0],tooltip:"设置或获取实际阴影暗度"},mapSize:{doc:!0,zhname:"贴图大小",shadow:["NUM",1024],tooltip:"获取或设置存储阴影的纹理的大小"},transparencyShadow:{doc:!0,zhname:"透明阴影",shadow:["BOOL","FALSE"],tooltip:"获取或设置是否开启透明阴影"},filter:{doc:!0,zhname:"过滤模式",shadow:["SHADOW_FILTER_DROPDOWN",null],tooltip:`设置或获取当前阴影生成器模式。返回值是一个数字，它代表阴影贴图中的一个模式。
0 - NONE
1 - Exponential
2 - Poisson
3 - Blurred exponential
4 - Close exponential
5 - Blurred close exponential
6 - PCF
7 - PCSS`},filteringQuality:{doc:!0,zhname:"过滤质量",shadow:["NUM",0],tooltip:`设置PCF或PCSS质量。
0-高质量
1-中质量
2-低质量`}},m={create_light:{doc:!0,zhname:"创建灯光",shadow:["LIGHT","light"],tooltip:"创建灯光。",children:{PointLight:{doc:!0,zhname:"点光源",tooltip:"在场景中创建一个点光源。点光源会向每个方向发光，可以产生阴影。",children:h},DirectionalLight:{doc:!0,zhname:"平行光",tooltip:"在场景中创建一盏平行光。平行光会从任何位置沿指定方向发光，可以产生阴影。",children:s},SpotLight:{doc:!0,zhname:"聚光灯",tooltip:`在场景中创建一盏聚光灯。聚光灯是类似锥形的灯光，可以产生阴影。
主要属性：
位置 - 灯光在场景中的位置
方向 - 灯光在场景中的方向 
角度 - 灯光锥角度数
指数 - 灯光距离光源的衰减速度`,children:r},HemisphericLight:{doc:!0,zhname:"半球光",tooltip:"在场景中创建一盏半球光。半球光模拟的是环境光，它的方向属性是灯光的反射方向，而不是来光方向。半球光不能产生阴影。",children:p}}},light_property:{doc:!0,zhname:"灯光属性",tooltip:"设置或获取灯光属性。"},set_light_target:{doc:!0,zhname:"设置灯光目标",tooltip:"将灯光的方向设置为指定的目标点。"},get_light_by_name:{doc:!0,zhname:"获取灯光",tooltip:"根据名称获取场景中的灯光。"},get_shadow_from_light:{doc:!0,zhname:"获取阴影",tooltip:"获取灯光阴影。"},dispose_light:{doc:!0,zhname:"销毁灯光",tooltip:"销毁灯光，并释放相关资源。"},create_shadow_for_light:{doc:!0,zhname:"创建阴影",tooltip:`创建阴影。
参数：
灯光：要产生阴影的灯光，平行光、聚光灯、点光源中的一种
选项：阴影选项，通过右键菜单-创建选项，创建选项拼图`,children:{ShadowGenerator:{doc:!0,zhname:"阴影",tooltip:"阴影生成器，支持平行光、点光、聚光灯",children:c},CascadedShadowGenerator:{doc:!0,zhname:"级联阴影",tooltip:"级联阴影生成器，仅支持平行光，用于模拟大型室外场景的太阳光阴影。",children:u}}},shadow_property:{doc:!0,zhname:"阴影属性",tooltip:"设置或获取阴影属性。"},add_shadow_caster:{doc:!0,zhname:"添加投影网格",tooltip:"将一个网格及其子级添加到阴影投射器列表中。"},LIGHT:{doc:!1,add_shadow_caster_title:"投影网格",PointLight:"点光源",DirectionalLight:"平行光",SpotLight:"聚光灯",HemisphericLight:"半球光",intensity:"亮度",diffuse:"漫反射",specular:"高光",exponent:"衰减指数",angle:"锥角",groundColor:"底光",direction:"方向",excludeWithLayerMask:"以图层蒙板排除",excludedMeshes:"排除网格",includedOnlyMeshes:"仅包含网格",includeOnlyWithLayerMask:"以图层蒙板仅包含网格",innerAngle:"内角",intensityMode:"亮度模式",lightmapMode:"灯光贴图模式",position:"位置",projectionTexture:"投影纹理",projectionTextureLightFar:"投影纹理灯光最远",projectionTextureLightNear:"投影纹理灯光最近",radius:"半径",range:"范围",shadowAngle:"阴影角度",shadowEnabled:"启用阴影",shadowMaxZ:"阴影最大Z",shadowMinZ:"阴影最小Z",shadowFrustumSize:"阴影锥体大小",shadowOrthoScale:"阴影正交缩放",diffuse_tooltip:"漫反射,赋予对象基础颜色",intensity_tooltip:"灯光强度",specular_tooltip:`高光
注意: 不会影响PBR材质`,exponent_tooltip:"灯光衰减随距离而变化的速度",angle_tooltip:"设置或获取聚光灯锥角的弧度数",groundColor_tooltip:"底光是与灯光方向相反的灯光。可以将漫反射和高光视为从光源处发出的光，而底光是从相反方向发出的光。",direction_tooltip:"设置或获取灯光方向用于产生阴影",excludeWithLayerMask_tooltip:"设置或获取图层id用于找出哪些网格不受灯光影响。为0无效果",excludedMeshes_tooltip:"设置或获取不受灯光影响的网格",includedOnlyMeshes_tooltip:"设置或获取仅被灯光影响的网格",includeOnlyWithLayerMask_tooltip:"设置或获取图层id用于找出哪些网格受灯光影响。为0无效果",innerAngle_tooltip:"聚光灯圆锥体内角角度衰减，仅在gltf衰减模式中使用",intensityMode_tooltip:"设置用于解释灯光强度的比例。它只与PBR材质相关,其中灯光强度可以用物理方式定义",lightmapMode_tooltip:`设置该光源的灯光贴图模式
可选值:
0 - 默认
1 - 仅高光
2 - 仅阴影`,position_tooltip:"设置或获取阴影从什么位置发射。也可以用作点光源和聚光灯的位置",projectionTexture_tooltip:"设置或获取灯光的投影纹理",projectionTextureLightFar_tooltip:"设置或获取用于投影纹理的聚光灯的远切面",projectionTextureLightNear_tooltip:"设置或获取用于投影纹理的聚光灯的近切面",radius_tooltip:"设置PBR材质用于模拟柔和的面光灯光半径",range_tooltip:`定义灯光可以影响场景中单位的距离有多远
注意: 未用于PBR材质`,shadowAngle_tooltip:"在提供方向的情况下,阴影将不使用立方体纹理,而是模拟一个聚光灯阴影作为衰减。这指定了阴影将使用什么角度来创建。默认为90度",shadowEnabled_tooltip:"设置是否为该光源启用阴影。这可以帮助关闭/打开阴影,而不需要解除当前的阴影生成器",shadowMaxZ_tooltip:"设置或获取阴影投射裁切最大z值",shadowMinZ_tooltip:"设置或获取阴影投射裁切最小z值",shadowFrustumSize_tooltip:"为阴影生成器固定视锥体大小。如果值为0则禁用",shadowOrthoScale_tooltip:"设置或获取阴影投影比例。默认为0.1,表示投影窗口从最佳大小增加10%。这不会影响固定视锥大小(shadowFrustumSize设置)",enableSoftTransparentShadow_tooltip:`启用或禁用基于透明度的不同强度的阴影。
启用该选项后,阴影的强度等于网格的可见度。
如果在材质上启用了alpha纹理,则纹理中的红色通道也会合并以计算强度（网格可见度乘以纹理红通道）。
默认使用的纹理是漫反射,但可以通过设置“使用不透明度贴图用于透明阴影useOpacityTextureForTransparentShadow”来设置为不透明度。
注意,根据定义,必须将“透明阴影transparencyShadow”设置为true才能启用“柔和透明阴影SoftTransparentShadow”！`,forceBackFacesOnly_tooltip:"如果为true,则通过渲染网格背面而不是正面生成阴影贴图。这可以帮助解决自阴影问题,因为构成物体背面的几何图形会稍微偏移。另一方面,这也会造成阴影悬浮。",frustumEdgeFalloff_tooltip:"控制阴影在视锥体边缘淡出的程度",useOpacityTextureForTransparentShadow_tooltip:"如果为true,那么在透明阴影中使用不透明度贴图opacity texture的alpha通道,而不是漫反射通道。",bias_tooltip:"设置偏移: 偏移用于深度防止阴影错误 (在灯光方向上).",blurBoxOffset_tooltip:`设置模糊方框偏移：偏移用于模糊通道
仅当使用内核模糊为false时有效`,blurKernel_tooltip:`设置模糊内核：模糊通道内核大小
仅当使用内核模糊为true时有效`,blurScale_tooltip:`设置模糊缩放：与主阴影贴图相比,模糊纹理的比例
2表示半尺寸`,contactHardeningLightSizeUVRatio_tooltip:"此参数影响阴影边缘虚化效果，在PCSS中有效。",darkness_tooltip:"设置或获取实际阴影暗度",depthScale_tooltip:"在ESM模式下设置深度比例。这会覆盖存储在灯光中的缩放",filter_tooltip:`设置或获取当前阴影生成器模式。返回值是一个数字，它代表阴影贴图中的一个模式。
0 - NONE
1 - Exponential
2 - Poisson
3 - Blurred exponential
4 - Close exponential
5 - Blurred close exponential
6 - PCF
7 - PCSS`,filteringQuality_tooltip:`设置PCF或PCSS质量。
0-高质量
1-中质量
2-低质量`,mapSize_tooltip:"获取或设置存储阴影的纹理的大小",normalBias_tooltip:"设置法线偏移：偏移用于深度防止阴影错误(沿法线方向并与灯光/法线角度成比例)",transparencyShadow_tooltip:"获取或设置是否开启透明阴影",useBlurCloseExponentialShadowMap_tooltip:'设置当前过滤模式为filtered "close ESM"（使用指数的倒数来防止急剧衰减伪影）',useBlurExponentialShadowMap_tooltip:"设置当前过滤器是否设置为已过滤的ESM",useCloseExponentialShadowMap_tooltip:'设置当前过滤模式为"close ESM"（使用指数的倒数来防止急剧衰减伪影）',useContactHardeningShadow_tooltip:'设置当前过滤模式为"PCSS"接触硬化阴影',useExponentialShadowMap_tooltip:"设置当前过滤模式为ESM指数阴影贴图",useKernelBlur_tooltip:"设置模糊通道是内核模糊(如果为真)还是方框模糊。仅在已过滤模式（使用模糊指数阴影贴图等）下有效",usePercentageCloserFiltering_tooltip:'设置当前过滤模式为"PCF"百分比接近过滤',usePoissonSampling_tooltip:"设置当前过滤模式为泊松采样"}},S=JSON.parse('{"title":"灯光 Lights","description":"","frontmatter":{},"headers":[],"relativePath":"blocks-reference/lights.md","filePath":"blocks-reference/lights.md"}'),w={name:"blocks-reference/lights.md"},g=Object.assign(w,{setup(z){return(_,o)=>(l(),a("div",null,[o[0]||(o[0]=t("h1",{id:"灯光-lights",tabindex:"-1"},[n("灯光 Lights "),t("a",{class:"header-anchor",href:"#灯光-lights","aria-label":'Permalink to "灯光 Lights"'},"​")],-1)),o[1]||(o[1]=t("p",null,"这类拼图用于创建灯光和阴影。",-1)),i(e,{data:d(m)},null,8,["data"])]))}});export{S as __pageData,g as default};
