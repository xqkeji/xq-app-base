<?php
return [
	'ListItem',
	'name'=>'update_time',
	'attr_class'=>'xq-order',
	'text'=>'更新时间',
	'attr_style'=>'min-width:180px;',
	'event'=>[
		'format'=>function($element,$value){
			return date('Y-m-d H:i:s',$value);
		},
	],	
];
