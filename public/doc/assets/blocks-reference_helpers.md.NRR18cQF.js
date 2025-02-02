import{_ as t}from"./chunks/AutoDoc.C9fRF2mX.js";import{c as o,j as a,a as n,G as l,k as r,o as s}from"./chunks/framework.BEZymiH2.js";const p={display_axes:{doc:!0,zhname:"显示坐标轴",tooltip:`常用于快速显示世界和本地坐标轴以查看位置、旋转等
参数：
- 大小：坐标轴显示的大小
- 父级：用于显示父级节点本地坐标轴`},display_light_gizmo:{doc:!0,zhname:"显示灯光外观",tooltip:`在场景中显示灯光外形，便于查看灯光位置、方向
参数：
灯光 - 场景中要显示外观的灯光`},create_and_show_ray_helper:{doc:!0,zhname:"显示射线",tooltip:"将射线显示为一条有颜色的线条"},add_inspectable_custom_properties:{doc:!0,zhname:"检查器自定义属性",tooltip:"向场景检查器中添加自定义属性，添加的可调节属性在“CUSTOM”栏目下。",children:{label:{zhname:"标题",shadow:["TEXT",""],tooltip:"要显示的标签名称"},propertyName:{zhname:"属性名",shadow:["TEXT",""],tooltip:`要编辑的属性名称。
注意，是英文属性，可通过属性类拼图右键-打印属性查看。`},type:{zhname:"类型",shadow:["INSPECTABLE_TYPE_DROPDOWN",null],tooltip:`要编辑的属性类型 
0-单选框 
1-滑块 
2-向量3 
3-四元数 
4-颜色3 
5-文本 
6-按钮 
7-列表 
8-选项卡 
9-文件按钮
10-向量2`},max:{zhname:"最大值",shadow:["NUM","1"],tooltip:'获取在"滑块"模式下使用时属性的最大值'},min:{zhname:"最小值",shadow:["NUM","0"],tooltip:'获取在"滑块"模式下使用时属性的最小值'},step:{zhname:"步进",shadow:["NUM","0.1"],tooltip:'获取在"滑块"模式下使用时属性的步进值'},options:{zhname:"选项",shadow:["OBJECT",""],tooltip:"获取使用“列表”模式时的选项列表"},accept:{zhname:"扩展名",shadow:["TEXT",".jpg, .png"],tooltip:'获取使用“文件按钮”模式时要接受的扩展名。该值是一个逗号分隔的字符串，包含要接受的扩展名列表，例如，".jpg, .png, .tga, .dds, .env"。'},callback:{zhname:"回调函数",shadow:["FUNC",null],tooltip:"获取使用“按钮”模式时的回调函数"},fileCallback:{zhname:"文件回调函数",shadow:["FUNC",null],tooltip:"获取使用“文件按钮”模式时的回调函数"}}},debug_mode:{doc:!0,zhname:"调试模式",tooltip:"执行代码时，打开检查器并选中指定节点，方便调试"},listen_sidebar_color_picker:{doc:!0,zhname:"侧边栏拾色器",tooltip:`监听侧边栏拾色器的颜色变化事件。
注意，此拼图仅用于调试颜色，不能导出。`}},_=JSON.parse('{"title":"辅助 Helpers","description":"","frontmatter":{},"headers":[],"relativePath":"blocks-reference/helpers.md","filePath":"blocks-reference/helpers.md"}'),d={name:"blocks-reference/helpers.md"},u=Object.assign(d,{setup(i){return(h,e)=>(s(),o("div",null,[e[0]||(e[0]=a("h1",{id:"辅助-helpers",tabindex:"-1"},[n("辅助 Helpers "),a("a",{class:"header-anchor",href:"#辅助-helpers","aria-label":'Permalink to "辅助 Helpers"'},"​")],-1)),e[1]||(e[1]=a("p",null,"这类拼图提供了一些开发中会用到的工具。",-1)),l(t,{data:r(p)},null,8,["data"])]))}});export{_ as __pageData,u as default};
