<?php
return [
	'ListItem',
	'name'=>'education',
	'text'=>'学历',
	'attr_style'=>'width:80px;',
	'event'=>[
		'format'=>function($element,$value){
			$items=[
                1=>'初中','中职/高中','专科','本科','硕士','博士'
			];
			if(isset($items[$value]))
			{
				return $items[$value];
			}
			else
			{
				return '';
			}
		},
	],	
];