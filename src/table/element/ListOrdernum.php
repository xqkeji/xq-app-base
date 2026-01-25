<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListOrdernum extends ListItem
{
    protected $text = '序号';
    protected $name = 'list-ordernum';
    protected $attrs = [
        'style' => 'min-width:80px;',
    ];
    protected $el = [
        [
            '$Number',
            'name' => 'ordernum',
            'text' => '序号',
            'attrs' => [
                'style' => 'width:80px;',
                'class' => 'form-control',
            ],
            
        ],
    ];
}