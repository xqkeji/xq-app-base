<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class UpdateDate extends ListItem
{
    protected $name = 'update_time';
    protected $text = '更新日期';
    protected $attrs = [
        'class' => 'xq-order',
        'style' => 'min-width:120px;width:120px;',
    ];
    public function format($value)
    {
        return date('Y-m-d', $value);
    }
    
}
