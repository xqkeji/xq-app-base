<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class Price extends ListItem
{
    protected $name = 'price';
    protected $text = '价格';
    protected $attrs = [
        'style' => 'min-width:120px;width:120px;',
    ];
}
