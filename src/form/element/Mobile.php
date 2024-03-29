<?php
return [
	'text',
	'name'=>'mobile',
	'text'=>'手机号码',
	'attrs'=>[
		'class'=>'form-control',
		'required'=>1,
		'placeholder'=>'请输入手机号码',
	],
	'validators'=>[
		['required'],
		[
			'regex',
			[
				'pattern'=>'/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/',
				'message'=>'手机号码格式错误',
			]
			
		],
	],
];