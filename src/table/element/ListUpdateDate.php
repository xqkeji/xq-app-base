<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListUpdateDate extends ListItem
{
    protected $name = 'update_time';
    protected $text = '更新日期';
    protected $attrs = [
        'class' => 'xq-order',
        'style' => 'min-width:120px;',
    ];
    public static function format($element,$value)
    {
        return date('Y-m-d', $value);
    }
    
}
