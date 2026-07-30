<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class IdCard extends ListItem
{
    protected $name = 'id_card';
    protected $text = '身份证号码';
    protected $attrs = [
        'style' => 'min-width:120px;width:120px;',
    ];
}