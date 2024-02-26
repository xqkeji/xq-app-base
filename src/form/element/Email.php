<?php
return [
	'email',
	'name'=>'email',
	'text'=>'邮箱地址',
	'attrs'=>[
		'class'=>'form-control',
		'required'=>1,
		'placeholder'=>'请输入邮箱地址',
	],
	'validators'=>[
		['required'],
		['email'],
	],
];