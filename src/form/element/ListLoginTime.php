<?php
return [
	'ListItem',
	'name'=>'login_time',
	'text'=>'最后登录时间',
	'attr_style'=>'min-width:180px;',
	'event'=>[
		'format'=>function($element,$value){
			return date('Y-m-d H:i:s',$value);
		},
	],	
];
