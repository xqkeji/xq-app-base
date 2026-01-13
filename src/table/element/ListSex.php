<?php
return [
	'ListItem',
	'name'=>'sex',
	'text'=>'性别',
	'attr_style'=>'min-width:80px;',
	'event'=>[
		'format'=>function($element,$value){
			if($value==1)
			{
				return '男';
			}
			else
			{
				return '女';
			}
		},
	],	
];
