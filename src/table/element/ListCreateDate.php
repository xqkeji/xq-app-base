<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\ListItem;
class ListCreateDate extends ListItem
{
    protected $name = 'create_time';
    protected $text = '创建日期';
    protected $attrs = [
        'class' => 'xq-order',
        'style' => 'min-width:120px;',
    ];
    public static function format($element,$value)
    {
        return date('Y-m-d', $value);
    }
   
}