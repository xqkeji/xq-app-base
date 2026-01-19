<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListDesc extends ListItem
{
    protected $name = 'desc';
    protected $text = '描述';
    protected $attrs = [
        'style' => 'min-width:200px;',
    ];
}
