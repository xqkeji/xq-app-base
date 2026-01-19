<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\Div;
class ListPageSize extends Div
{
    protected $name = 'list-page-size';
    protected $el=[
        [
            '$PageSize',
            'name'=>'page-size',
            'attrs'=>[
                'id' => 'xq-page-size',
                'class' => 'form-select',
                'style' => 'width:80px',
            ],
            'items'=>[
                10 => 10,
                20 => 20,
                30 => 30,
                50 => 50        
            ],
            'defaultValue'=>10,
        ]
    ];

    
}