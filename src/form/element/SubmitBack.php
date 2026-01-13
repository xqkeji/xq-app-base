<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Div;
class SubmitBack extends Div
{
	protected $name = 'submit_back';
	protected $text = '';
	protected $attrs= [
		'class'=>'form-group row',
	];
	protected $el=[
		'@Col4Submit',
		'@Col4Back',
	];
}
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