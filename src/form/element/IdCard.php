<?php
return [
    'text',
    'name'=>'id_card',
	'text'=>'身份证',
	'attr_required'=>'true',
	'validators'=>[
        ['required'],
        [
            'regex',            
			'pattern'=>'/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/',
			'message'=>'身份证号码格式错误',
        ]
    ],
    
];