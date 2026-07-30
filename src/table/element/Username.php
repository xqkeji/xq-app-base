<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class Username extends ListItem
{
    protected $name = 'username';
    protected $text = '用户名';
    protected $attrs = [
        'style' => 'min-width:120px;width:120px;',
    ];
}
