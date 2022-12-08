<?php
return [
	'ListItem',
	'name'=>'update_time',
	'text'=>'更新时间',
	'attr_style'=>'width:180px;',
	'event'=>[
		'format'=>function($element,$value){
			return date('Y-m-d H:i:s',$value);
		},
	],	
];
