<?php
return [
    'number',
    'name'=>'price',
    'text'=>'价格',
    'attr_required'=>'true',
    'attr_style'=>'width:120px;',
    'attr_step'=>'0.01',
    'validators'=>[['required']],
    'filters'=>['float'],
    'defaultValue'=>0.00,
];