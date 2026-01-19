<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListName extends ListItem
{
    protected $name = 'name';
    protected $text = '名称';
    protected $attrs = [
        'style' => 'min-width:350px;',
    ];
}
