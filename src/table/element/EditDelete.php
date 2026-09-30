<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class EditDelete extends ListItem
{
    protected $name = 'operation';
    protected $text = '操作';
    protected $attrs = [
        'style' => 'min-width:120px;width:120px;',
    ];
    protected $el = [
        '@EditButton',
        '@DeleteButton',
    ];
}
