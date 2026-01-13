<?php
return [
	'ListItem',
	'name'=>'operation',
	'text'=>'操作',
	'attr_style'=>'min-width:120px;',
	[
		[
			'button',
			'attr_class'=>'btn btn-secondary btn-sm xq-edit px-2',
			'attr_style'=>'margin-right:5px;',
			'attr_value'=>'编辑',
			
		],
		[
			'button',
			'attr_class'=>'btn btn-danger btn-sm xq-delete px-2',
			'attr_style'=>'margin-right:5px;',
			'attr_value'=>'删除',
			
		],
	],
];
