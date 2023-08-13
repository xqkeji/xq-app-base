<?php
return [
	'number',
	'name'=>'age',
	'text'=>'年龄',
	'attr_required'=>'true',
    'attr_style'=>'width:80px;',
    'validators'=>[['required']],
    'filters'=>['int'],
    'defaultValue'=>0,
];