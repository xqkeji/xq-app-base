<?php
return [
	'ListItem',
	'name'=>'create_time',
	'attr_class'=>'xq-order',
	'text'=>'创建日期',
	'attr_style'=>'width:120px;',
	'event'=>[
		'format'=>function($element,$value){
			return date('Y-m-d',$value);
		},
	],	
];
