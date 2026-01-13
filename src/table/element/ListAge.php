<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\ListItem;
class ListAge extends ListItem
{
    protected $name = 'age';
    protected $text = '年龄';
    protected $attrs = [
        'style' => 'min-width:80px;',
    ];
}