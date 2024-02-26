<?php
return [
    'captcha',
    'name'=>'captcha',
    'text'=>'图象码',
    'attrs'=>[
		'class'=>'form-control',
		'required'=>1,
		'placeholder'=>'验证码',
        'style'=>'float:left;width:100px;',
	],
    'validators'=>[
        ['required'],
        ['captcha'],
    ],
];