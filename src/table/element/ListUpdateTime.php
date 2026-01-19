<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListUpdateTime extends ListItem
{
    protected $name = 'update_time';
    protected $text = '更新时间';
    protected $attrs = [
        'class' => 'xq-order',
        'style' => 'min-width:180px;',
    ];
    public static function format($element,$value)
    {
        return date('Y-m-d H:i:s', $value);
    }
    
}
