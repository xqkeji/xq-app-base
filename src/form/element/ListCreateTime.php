<?php
return [
	'ListItem',
	'name'=>'create_time',
	'text'=>'创建时间',
	'class'=>'xq-order',
	'attr_style'=>'width:180px;',
	'event'=>[
		'format'=>function($element,$value){
			return date('Y-m-d H:i:s',$value);
		},
	],	
];
