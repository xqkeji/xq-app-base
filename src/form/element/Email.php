<?php
return [
	'email',
	'name'=>'email',
	'text'=>'邮箱地址',
	'attr_required'=>'true',
	'validators'=>[
		['required'],
		['email'],
	],
];