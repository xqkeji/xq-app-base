<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListMobile extends ListItem
{
    protected $name = 'mobile';
    protected $text = '手机号码';
    protected $attrs = [
        'style' => 'min-width:120px;',
    ];
}