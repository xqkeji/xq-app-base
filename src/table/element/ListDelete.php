<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListDelete extends ListItem
{
    protected $name = 'operation';
    protected $text = '操作';
    protected $attrs = [
        'style' => 'min-width:80px;',
    ];
    protected $el = [
        [
            'button',
			'attrs'=>[
				'class'=>'btn btn-danger btn-sm xq-delete',
				'value' => '删除',
			],
        ],
    ];
}
