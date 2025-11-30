<?php
return [
	'ListItem',
	'text'=>'状态',
	'attr_style'=>'min-width:70px;',
	'event'=>[
		'export'=>function($element,$value){
			if($value==0)
			{
				return '关闭';
			}
			else
			{
				return '正常';
			}
		},
	],	
	[
		[
			'div',
			'attr_style'=>'width:32px;margin:auto;',
			'attr_class'=>'form-check form-switch',
			[
				[
					'check',
					'name'=>'status',
					'attr_class'=>'form-check-input',
				],
			],
		],
	],
];
