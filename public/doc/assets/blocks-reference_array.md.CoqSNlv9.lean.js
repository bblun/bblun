import{_ as t}from"./chunks/AutoDoc.C9fRF2mX.js";import{c as o,j as a,a as e,G as n,k as _,o as l}from"./chunks/framework.BEZymiH2.js";const i={array_create:{doc:!0,zhname:"创建数组",tooltip:`创建数组，快捷键Shift + A。数组一个有序的元素序列。
要向数组中添加元素，请执行以下步骤：
1. 取消勾选“空”
2. 在拼图上执行右键-创建 元素，快捷键Shift + Alt/Option + A
3. 将新创建的“元素”拖入插槽并设置值`},array_length:{doc:!0,zhname:"求数组长度",tooltip:"返回数组元素的数量。"},array_is_empty:{doc:!1,zhname:"数组空否",tooltip:"判断数组是否为空。"},array_index_of:{doc:!0,zhname:"检索数组",tooltip:`检查数组中是否包含某元素，如果包含，则返回其索引（数组中元素的索引从0开始）；否则返回-1。
参数：
第一个 - 表示从前往后查找
最后一个 - 表示从后往前查找`},array_includes:{doc:!0,zhname:"数组包含",tooltip:"检查数组中是否包含某元素，若包含，返回真；否则返回假。"},array_get_index:{doc:!0,zhname:"获取数组元素",tooltip:`从指定位置查找或删除元素（数组中的元素从0开始索引）。
参数：
获取 - 查找元素，返回元素索引
获取移除 - 查找并删除元素，返回删除元素的索引
移除 - 删除元素`},array_set_index:{doc:!0,zhname:"设置数组元素",tooltip:`将元素添加到数组指定位置。
参数：
设置 - 将数组中指定位置的元素替换为其他元素（数组的长度保持不变）
插入 - 在指定的位置向数组中添加一个新元素，将移动先前位于该位置的元素（增加数组的长度）`},array_get_subarray:{doc:!0,zhname:"截取数组",tooltip:"截取两个指定位置之间的数组片段为新数组。不会更改原始数组。"},array_split:{doc:!0,zhname:"文本数组转换",tooltip:`通过拆分文本来创建一个数组，或者相反，将数组的元素连接成文本。
参数：
分割符 - 用来拆分文本的分割符号`},array_sort:{doc:!0,zhname:"排序数组",tooltip:`从原始数组创建一个新的数组，其中的元素按升序或降序排序。不会改变原始数组。
参数：
数字顺序 - 按数字大小排序
字母顺序 - 按字母顺序排序
字母顺序，忽略大小写 - 按字母排序，不区分大小写
升序 - 升序排列
降序 - 降序排列`},array_reverse:{doc:!0,zhname:"反转数组",tooltip:"从原始数组创建一个新数组，其元素按照与原始数组相反顺序排列。不会改变原始数组。"},array_for_each:{doc:!0,zhname:"遍历数组",tooltip:"遍历数组的每个元素。在拼图上执行右键 - 创建 元素/索引，可创建每次迭代的元素和索引，注意，它只能用于“遍历数组”拼图内部。"},array_element_index:{doc:!0,zhname:"元素/索引",tooltip:"在“遍历数组”拼图中每次迭代时的元素和索引。"},array_methods:{doc:!0,zhname:"查找筛选映射数组",tooltip:`查找：返回数组中满足条件的第一个元素
筛选：返回一个新数组，包含所有满足条件的元素
映射：根据条件返回一个新数组
条件是一个带有返回值的函数`},MSG:{array_is_empty_title:["为空?","不为空?"],array_includes_title:"是否包含",_SUBARRAY:"截取",_INDEX_OF:"检索",_FOR_EACH:"遍历",_FIND:"查找",_FILTER:"筛选",_MAP:"映射",_CONDITION:"条件",array_first:"第一个",array_last:"最后一个",array_random:"随机",array_from_start:"#",array_from_end:"倒数#"}},p=JSON.parse('{"title":"数组 Array","description":"","frontmatter":{},"headers":[],"relativePath":"blocks-reference/array.md","filePath":"blocks-reference/array.md"}'),s={name:"blocks-reference/array.md"},h=Object.assign(s,{setup(d){return(c,r)=>(l(),o("div",null,[r[0]||(r[0]=a("h1",{id:"数组-array",tabindex:"-1"},[e("数组 Array "),a("a",{class:"header-anchor",href:"#数组-array","aria-label":'Permalink to "数组 Array"'},"​")],-1)),r[1]||(r[1]=a("p",null,[e("这类拼图用于创建和操作"),a("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noreferrer"},"数组Array"),e("。")],-1)),n(t,{data:_(i)},null,8,["data"])]))}});export{p as __pageData,h as default};
