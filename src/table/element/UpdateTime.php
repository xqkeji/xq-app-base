<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class UpdateTime extends ListItem
{
    protected $name = 'update_time';
    protected $text = '更新时间';
    protected $attrs = [
        'class' => 'xq-order',
        'style' => 'min-width:180px;width:180px;',
    ];
    public function format($value)
    {
        return date('Y-m-d H:i:s', $value);
    }
    
}
