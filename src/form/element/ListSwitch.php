<?php
return [
	'ListItem',
	'text'=>'状态',
	'attr_style'=>'width:70px;',
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
