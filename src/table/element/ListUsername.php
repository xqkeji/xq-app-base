<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListUsername extends ListItem
{
    protected $name = 'username';
    protected $text = '用户名';
    protected $attrs = [
        'style' => 'min-width:120px;',
    ];
}
