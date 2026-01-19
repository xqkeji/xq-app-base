<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListId extends ListItem
{
    protected $text = '选择';
    protected $attrs = [
        'field' => '_id',
        'class' => 'xq-order',
        'style' => 'min-width:60px;',
    ];
    protected $el = [
        [
            'check',
            'name' => 'id',
            'useChecked' => false,
        ],
    ];
}
