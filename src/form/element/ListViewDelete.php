<?php
return [
	'ListItem',
	'name'=>'operation',
	'text'=>'操作',
	'attr_style'=>'min-width:120px;',
	[
		[
			'button',
			'attr_class'=>'btn btn-secondary btn-sm xq-edit',
			'attr_style'=>'margin-right:5px;',
			'attr_value'=>'查看',
			
		],
		[
			'button',
			'attr_class'=>'btn btn-danger btn-sm xq-delete',
			'attr_style'=>'margin-right:5px;',
			'attr_value'=>'删除',
			
		],
	],
];
