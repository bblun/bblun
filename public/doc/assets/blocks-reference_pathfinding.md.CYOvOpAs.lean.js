import{_ as e}from"./chunks/AutoDoc.Cae4M7x9.js";import{c as n,j as a,a as i,G as o,k as _,o as l}from"./chunks/framework.BTgeeuQa.js";const r={pathfinding_create_nav_mesh:{doc:!0,zhname:"创建导航网格",tooltip:`创建导航网格。
参数：
- 网格 - 用于创建导航网格的网格数组
- 最大代理数量
- 最大代理半径
- 选项 - 创建导航网格参数，通过该拼图右键菜单-\`创建 选项\`创建选项拼图
- 调试模式 - 显示创建的导航网格
- 当完成时 - 创建完成时执行该插槽中的拼图`},pathfinding_data:{doc:!1,zhname:"寻径数据",tooltip:"寻径数据"},pathfinding_get_random_point_around:{doc:!0,zhname:"随机点",tooltip:`获取导航网格上指定半径内的一个位置。
参数
- 位置 - 世界坐标位
- 最大半径 - 距离指定世界坐标位置的最大距离`},pathfinding_get_closest_point:{doc:!0,zhname:"临近点 ",tooltip:`获取导航网格上临近参数位置的点。
参数：
- 位置 - 世界坐标位置`},pathfinding_compute_path:{doc:!0,zhname:"计算路径",tooltip:`从起点到终点计算一条导航路径。如果没有路径被算出，则返回一个空数组。
该拼图返回组成路径的世界坐标位置的数组。
参数:
- 起点 - 起点位置
- 终点 - 终点位置`},pathfinding_add_obstacle:{doc:!0,zhname:"添加障碍",tooltip:`添加一个立方体或圆柱体的障碍到导航网格。
立方体障碍参数：
- 位置 - 世界坐标位置
- 大小 - 用向量表示的立方体大小
- 角度 - 沿Y轴的旋转角度
- 调试模式 - 以网格形式显示障碍
圆柱体障碍参数：
- 位置 - 世界坐标位置
- 半径 - 圆柱体的半径
- 高度 - 圆柱体的高度
- 调试模式 - 以网格形式显示障碍`},pathfinding_remove_obstacle:{doc:!0,zhname:"删除障碍",tooltip:"删除障碍"},pathfinding_add_agent_to_crowd:{doc:!0,zhname:"添加代理",tooltip:`使用指定的参数和变换节点添加新代理。可以将任何内容附加到变换节点。变换节点的位置在场景中不断更新。
拼图返回代理索引。
参数:
- 位置 - 受导航网格约束的世界坐标位置
- 选项 - 代理参数，通过该拼图右键菜单-\`创建 选项\`创建选项拼图
- 变换节点 - 与不断更新的代理挂钩`},pathfinding_get_agents_from_crowd:{doc:!0,zhname:"所有代理 ",tooltip:"获取包含所有代理的数组。"},pathfinding_agent_goto:{doc:!0,zhname:"代理前进",tooltip:`获取导航网格上指定半径内的一个位置。
参数
- 位置 - 世界坐标位
- 最大半径 - 距离指定世界坐标位置的最大距离`},pathfinding_agent_teleport:{doc:!0,zhname:"代理传送",tooltip:`传送代理到一个新的位置。
参数:
索引 - 代理索引
目标 - 目标位置`},pathfinding_get_agent_position:{doc:!0,zhname:"代理位置",tooltip:`返回代理的世界坐标位置。
参数: 
索引 - 代理索引`},pathfinding_get_agent_velocity:{doc:!0,zhname:"代理速度",tooltip:`返回代理的世界坐标速度。
参数: 
索引 - 代理索引`},pathfinding_get_agent_next_target_path:{doc:!0,zhname:"代理下一目标点",tooltip:`返回代理在路径上的下一目标。
参数: 
索引 - 代理索引`},pathfinding_agent_reach_target_event:{doc:!0,zhname:"当代理到过终点时",tooltip:"当代理进入目标点到达半径范围时触发此事件。"},PATHFINDING:{doc:!1,pathfinding_create_nav_mesh_title:"导航",pathfinding_agent:"代理",pathfinding_agents:"所有代理",pathfinding_crowd:"群集",pathfinding_index:"索引",pathfinding_create_crowd_title:["最大代理数量","最大代理半径"],pathfinding_get_random_point_around_title:["随机点","最大半径"],pathfinding_get_closest_point_title:"临近点",pathfinding_compute_path_title:["计算路径","起点","终点"],pathfinding_add_obstacle_title:"障碍",pathfinding_add_agent_to_crowd_title:"变换节点",pathfinding_agent_goto_title:"代理前进",pathfinding_agent_teleport_title:"代理传送",pathfinding_get_agent_position_title:"代理位置",pathfinding_get_agent_velocity_title:"代理速度",pathfinding_get_agent_next_target_path_title:"代理下一目标点",pathfinding_agent_reach_target_event_title:"当代理到达终点时",navMesh_cs:"cs",navMesh_ch:"ch",navMesh_walkableSlopeAngle:"可行走坡度",navMesh_walkableHeight:"可行走高度",navMesh_walkableClimb:"可攀爬高度",navMesh_walkableRadius:"可行走半径",navMesh_maxEdgeLen:"最大边界长度",navMesh_maxSimplificationError:"最大简化距离",navMesh_minRegionArea:"最小区域",navMesh_mergeRegionArea:"合并区域",navMesh_maxVertsPerPoly:"多边形最大顶点数",navMesh_detailSampleDist:"细节采样距离",navMesh_detailSampleMaxError:"细节采样最大距离",navMesh_borderSize:"边界大小",navMesh_tileSize:"瓦片大小",agentParams_radius:"半径",agentParams_height:"高度",agentParams_maxAcceleration:"最大加速度",agentParams_maxSpeed:"最大速度",agentParams_collisionQueryRange:"碰撞查询范围",agentParams_pathOptimizationRange:"路径优化范围",agentParams_separationWeight:"分离权重",agentParams_reachRadius:"到达半径",navMesh_cs_tooltip:"cs - 网格被体素化，以计算可行走的导航网格。该参数以世界单位定义导航网格单元格宽度和深度大小[限制：> 0] [单位：世界单位]",navMesh_ch_tooltip:"ch - 导航网格单元格高度大小[限制：> 0] [单位：世界单位]",navMesh_walkableSlopeAngle_tooltip:"walkableSlopeAngle - 可行走的最大坡度[限制：0 <= 值 < 90] [单位：度]",navMesh_walkableHeight_tooltip:"walkableHeight - 地板到天花板的高度，在此范围内地板区域可以行走[限制：>= 3] [单位：体素]",navMesh_walkableClimb_tooltip:"walkableClimb - 可以通过的最大可攀爬高度[限制：>=0] [单位：体素]",navMesh_walkableRadius_tooltip:"walkableRadius - 可行走区域与障碍物的距离[限制：>=0] [单位：体素]",navMesh_maxEdgeLen_tooltip:"maxEdgeLen - 沿网格边界的轮廓边的最大长度[限制：>=0] [单位：体素]",navMesh_maxSimplificationError_tooltip:"maxSimplificationError - 简化轮廓线偏离原始轮廓线的最大距离[限制：>=0] [单位：体素]",navMesh_minRegionArea_tooltip:"minRegionArea - 形成孤岛区域的最小单元格数量。[限制：>=0] [单位：体素]",navMesh_mergeRegionArea_tooltip:"mergeRegionArea - 跨度小于此值的任何区域都可能与较大的区域合并[限制：>=0] [单位：体素]",navMesh_maxVertsPerPoly_tooltip:"maxVertsPerPoly - 轮廓到多边形转换过程中生成的多边形所允许的最大顶点数[限制：>= 3]",navMesh_detailSampleDist_tooltip:"detailSampleDist - 设置生成细节网格时要使用的采样距离（仅用于高度细节）[限制：0 或 >= 0.9] [单位：世界单位]",navMesh_detailSampleMaxError_tooltip:"detailSampleMaxError - 细节网格曲面与高度场数据之间的最大距离（仅用于高度细节）[限制：>=0] [单位：世界单位]",navMesh_borderSize_tooltip:"borderSize - (可选)高度场周围非导航边界的大小",navMesh_tileSize_tooltip:`tileSize - (可选)如果使用障碍物，导航网格必须在内部通过瓦片细分
该参数以世界单位定义了瓦片立方体的边长
如果不需要障碍，则将其保留为未定义或0`,agentParams_radius_tooltip:"radius - 代理半径 [限制: >= 0]",agentParams_height_tooltip:"height - 代理高度 [限制: >= 0]",agentParams_maxAcceleration_tooltip:"maxAcceleration - 最大加速度[限制：>=0]",agentParams_maxSpeed_tooltip:"maxSpeed - 最大速度[限制：>=0]",agentParams_collisionQueryRange_tooltip:"collisionQueryRange - 定义碰撞元素在准备转向之前必须接近的程度[限制：>0]",agentParams_pathOptimizationRange_tooltip:"pathOptimizationRange - 路径可见性优化范围[限制：>0]",agentParams_separationWeight_tooltip:"separationWeight - 避免与此代理碰撞的权重[限制：>=0]"}},m=JSON.parse('{"title":"寻径 Pathfinding","description":"","frontmatter":{},"headers":[],"relativePath":"blocks-reference/pathfinding.md","filePath":"blocks-reference/pathfinding.md"}'),p={name:"blocks-reference/pathfinding.md"},c=Object.assign(p,{setup(g){return(h,t)=>(l(),n("div",null,[t[0]||(t[0]=a("h1",{id:"寻径-pathfinding",tabindex:"-1"},[i("寻径 Pathfinding "),a("a",{class:"header-anchor",href:"#寻径-pathfinding","aria-label":'Permalink to "寻径 Pathfinding"'},"​")],-1)),t[1]||(t[1]=a("p",null,"该分类用于创建一个导航网格，在这个网格上可以实现AI、寻路等功能。使用该分类拼图前需要先导出一次，以加载需要的js文件。",-1)),o(e,{data:_(r)},null,8,["data"])]))}});export{m as __pageData,c as default};
