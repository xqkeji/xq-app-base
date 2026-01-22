<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListCreateTime extends ListItem
{
    protected $name = 'create_time';
    protected $text = '创建时间';
    protected $attrs = [
        'class' => 'xq-order',
        'style' => 'min-width:180px;',
    ];
    public static function format($element,$value)
    {
        return date('Y-m-d H:i:s', $value);
    }
}