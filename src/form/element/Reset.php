<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Reset as BaseReset;
class Reset extends BaseReset
{
	protected $name = 'reset';
	protected $text = '';
	protected $attrs= [
		'class'=>'btn btn-primary',
		'style'=>'width:100px;margin-bottom:1rem;',
		'value'=>'重置',
	];
}
return [
	'div',
	'attr_class'=>'form-group row',
	[
		[
			'div',
			'attr_class'=>'col-8 text-center',
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
	],
];
