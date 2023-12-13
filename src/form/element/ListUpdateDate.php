<?php
return [
	'ListItem',
	'name'=>'update_time',
	'class'=>'xq-order',
	'text'=>'更新日期',
	'attr_style'=>'width:120px;',
	'event'=>[
		'format'=>function($element,$value){
			return date('Y-m-d',$value);
		},
	],	
];
