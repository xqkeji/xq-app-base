<?php
return [
	'form_foot',
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
					'reset',
					'name'=>'reset',
					'attr_class'=>'btn btn-secondary',
					'attr_value'=>'重置',
					'attr_style'=>'width:100px;margin-bottom:1rem;',
				]
			],
		],
	],
];