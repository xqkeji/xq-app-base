<?php
return [
	'ListItem',
	'name'=>'update_time',
	'text'=>'更新日期',
	'attr_style'=>'width:120px;',
	'event'=>[
		'format'=>function($element,$value){
			return date('Y-m-d',$value);
		},
	],	
];
