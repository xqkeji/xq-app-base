<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class Age extends ListItem
{
    protected $name = 'age';
    protected $text = '年龄';
    protected $attrs = [
        'style' => 'min-width:80px;width:80px;',
    ];
}