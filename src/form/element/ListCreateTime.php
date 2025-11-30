<?php
return [
	'ListItem',
	'name'=>'create_time',
	'text'=>'创建时间',
	'attr_class'=>'xq-order',
	'attr_style'=>'min-width:180px;',
	'event'=>[
		'format'=>function($element,$value){
			return date('Y-m-d H:i:s',$value);
		},
	],	
];
