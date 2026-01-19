<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListEmail extends ListItem
{
    protected $name = 'email';
    protected $text = '邮箱';
    protected $attrs = [
        'style' => 'min-width:200px;',
    ];
}