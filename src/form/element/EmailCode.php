<?php
return [
    'Emailcode',
    'name'=>'email_code',
    'text'=>'邮箱码',
    'attrs'=>[
		'class'=>'form-control',
		'required'=>1,
		'placeholder'=>'验证码',
        'style'=>'float:left;width:100px;',
	],
    'validators'=>[
        ['required'],
        ['Emailcode'],
    ],
];