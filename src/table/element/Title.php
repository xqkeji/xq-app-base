<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class Title extends ListItem
{
    protected $name = 'title';
    protected $text = '标题';
	protected $attrs = [
        'style' => 'min-width:200px;',
    ];
}