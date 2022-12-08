<?php
return [
	'div',
	'attr_class'=>'form-group row',
	[
		[
			'div',
			'attr_class'=>'col-4 text-end',
			[
				[
					'submit',
					'name'=>'submit',
					'attr_class'=>'btn btn-primary',
					'attr_style'=>'width:100px;margin-bottom:1rem;',
					'attr_value'=>'确定',
				]
			],
		],
		[
			'div',
			'attr_class'=>'col-4 text-start',
			[
				[
					'button',
					'name'=>'back',
					'attr_class'=>'btn btn-secondary xq-backpage',
					'attr_value'=>'返回',
					'attr_style'=>'width:100px;margin-bottom:1rem;',
				]
			],
		],
	],
];