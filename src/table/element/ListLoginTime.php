<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListLoginTime extends ListItem
{
    protected $name = 'login_time';
    protected $text = '最后登录时间';
    protected $attrs = [
        'style' => 'min-width:180px;',
    ];
    public static function format($element, $value)
    {
        return date('Y-m-d H:i:s', $value);
    }
    
}
