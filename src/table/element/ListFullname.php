<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListFullname extends ListItem
{
    protected $name = 'fullname';
    protected $text = '姓名';
    protected $attrs = [
        'style' => 'min-width:80px;',
    ];
}
