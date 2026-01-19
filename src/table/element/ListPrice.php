<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListPrice extends ListItem
{
    protected $name = 'price';
    protected $text = '价格';
    protected $attrs = [
        'style' => 'min-width:120px;',
    ];
}
