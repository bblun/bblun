import{_ as t}from"./chunks/AutoDoc.C9fRF2mX.js";import{c as o,j as n,a as r,G as i,k as a,o as c}from"./chunks/framework.BEZymiH2.js";const _={create_custom_event:{doc:!0,zhname:"创建事件",tooltip:"创建新的事件。事件分为三部分：创建事件、触发事件和监听事件。"},dispatch_custom_event:{doc:!0,zhname:"触发事件",tooltip:`触发事件，向事件的监听者发出通知。
参数：
数据 - 通过接收一个对象，可以在派发事件时携带参数。`},listen_custom_event:{doc:!0,zhname:"监听事件",tooltip:"当事件触发时执行插槽中的拼图。通过该拼图右键菜单中的事件数据拼图，可获取触发事件拼图传递的数据。"},custom_event_data:{doc:!0,zhname:"事件数据",tooltip:"发送给事件处理函数的数据。"},listen_pointer_event:{doc:!0,zhname:"监听指针事件",tooltip:`用于监听指针事件。
参数：
忽略背面 - 勾选表示忽略网格背面
事件类型：
指针双击
指针按下
指针移动
指针单击
指针轻击
指针抬起
指针滚动`},picking_info:{doc:!0,zhname:"点击信息",tooltip:`返回指针事件的信息（点击信息、网格、点、法线），可用于监听指针事件拼图、射线相交网格拼图、网格动作拼图，并可通过这些拼图（不包括网格动作拼图）的右键菜单创建该拼图。
参数 - 用于接收网格动作拼图的事件，通过自定义函数的参数传递给该拼图。`},get_normal_from_picking_info:{doc:!0,zhname:"获取法线",tooltip:`获取点击击中的面的法线。注意，返回的法线始终朝向拾取射线。
世界坐标 - 生成的法线是否使用世界坐标
顶点法线 - 是否使用顶点法线，而非法线贴图来计算法线
点击信息 - 点击事件信息`},listen_keyboard_event:{doc:!0,zhname:"监听键盘事件",tooltip:`用于监听键盘的按下和抬起事件。
参数：
重复 - 勾选时表示当一直按住键盘时，重复触发键盘事件；否则，只触发一次键盘事件`},get_key_input:{doc:!0,zhname:"按键",tooltip:"返回用户按下的按键或按键码。"},listen_scene_event:{doc:!0,zhname:"监听场景事件",tooltip:`场景渲染时 - 在场景渲染前触发此事件（紧跟在动画和物理之后）
场景就绪时 - 当场景就绪时触发此事件`},event_add_actions_to_mesh:{doc:!0,zhname:"添加网格动作",tooltip:`动作用于在场景中快速实现交互，当事件被触发时就会运行一个动作。
当有多个动作时，动作会按照顺序依次执行，但只有第一个动作的事件有效。`},event_mesh_action:{doc:!0,zhname:"网格动作",tooltip:`创建一个网格动作。此拼图仅用于添加网格动作拼图的动作插槽。
动作的类型：
无
设置值 - 设置一个数值
切换布尔 - 在真假值之间切换
插值 - 在两个数值之间插值，可用于动画
递增值 - 使一个数值递增或递减
执行函数 - 执行一个指定的函数，注意这里是函数名
合并 - 合并多个网格动作
事件类型：
无
当点击
当双击
当点击按下
当点击抬起
当点击移出
当左键单击
当右键单击
当中键单击
当长按
当指针经过
当指针移出
当相交进入
当相交退出`},event_multi_frame:{doc:!0,zhname:"多帧",tooltip:"用于处理跨帧逻辑。主要解决在单帧中运算量大时，通过分散到多个帧中缓解计算压力，提高性能。"},event_next_frame:{doc:!0,zhname:"下一帧",tooltip:"跳到下一渲染帧。用于多帧拼图。"},event_await_delay:{doc:!0,zhname:"等待",tooltip:"等待N秒。用于多帧拼图。"},create_ray:{doc:!0,zhname:"创建射线",tooltip:`创建射线。射线是一条从场景中某点发出的有长度的虚拟射线。通常用于拾取网格。
参数：
源点：向量3 射线从哪个点发出的
方向：射线指向哪个方向
长度：射线长度，指定长度有助于减少运算量`},ray_intersects_mesh:{doc:!0,zhname:"射线相交网格事件",tooltip:"检测射线与网格（或一组网格）是否相交，若相交执行完成插槽中的拼图。交点信息可通过点击信息拼图获取，可在当前拼图右键菜单中创建。"},EVENT:{doc:!1,ACTION:"动作",EVENT:"事件",LISTEN:"监听",DISPATCH:"触发",IGNOR_BACKFACE:"忽略背面",REPEAT:"重复",PICKING_INFO:"点击信息",EVENT_DATA:"事件数据",KEY_INPUT:"按键",get_normal_from_picking_info_title:["获取法线","世界坐标","顶点法线","点击信息"],ray_intersects_mesh_title:["当射线","相交于"],POINTERDOUBLETAP:"指针双击",POINTERDOWN:"指针按下",POINTERMOVE:"指针移动",POINTERPICK:"指针单击",POINTERTAP:"指针轻击",POINTERUP:"指针抬起",POINTERWHEEL:"指针滚动",DoNothingAction:"无",SetValueAction:"设置值",SwitchBooleanAction:"切换布尔",InterpolateValueAction:"插值",IncrementValueAction:"递增值",PlayAnimationAction:"播放动画",PlaySoundAction:"播放音频",StopSoundAction:"停止音频",ExecuteCodeAction:"执行函数",CombineAction:"合并",NothingTrigger:"无",OnPickTrigger:"当点击",OnDoublePickTrigger:"当双击",OnPickDownTrigger:"当点击按下",OnPickUpTrigger:"当点击抬起",OnPickOutTrigger:"当点击移出",OnLeftPickTrigger:"当左键单击",OnRightPickTrigger:"当右键单击",OnCenterPickTrigger:"当中键单击",OnLongPressTrigger:"当长按",OnPointerOverTrigger:"当指针经过",OnPointerOutTrigger:"当指针移出",OnIntersectionEnterTrigger:"当相交进入",OnIntersectionExitTrigger:"当相交退出",pickingInfo_all:"点击信息",pickingInfo_mesh:"点击的网格",pickingInfo_point:"点击的位置",pickingInfo_normal:"点击的法线",keyboardEvent_keydown:"键盘按下",keyboardEvent_keyup:"键盘抬起",keyboardInput_key:"按键",keyboardInput_keyCode:"按键码",onBeforeRenderObservable:"场景渲染时",onReadyObservable:"场景就绪时"}},g=JSON.parse('{"title":"事件 Events","description":"","frontmatter":{},"headers":[],"relativePath":"blocks-reference/events.md","filePath":"blocks-reference/events.md"}'),l={name:"blocks-reference/events.md"},u=Object.assign(l,{setup(s){return(d,e)=>(c(),o("div",null,[e[0]||(e[0]=n("h1",{id:"事件-events",tabindex:"-1"},[r("事件 Events "),n("a",{class:"header-anchor",href:"#事件-events","aria-label":'Permalink to "事件 Events"'},"​")],-1)),e[1]||(e[1]=n("p",null,"这类拼图提供了指针、键盘事件，以及自定义事件和射线，用于处理各种设备下的交互。",-1)),i(t,{data:a(_)},null,8,["data"])]))}});export{g as __pageData,u as default};
