<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListViewDelete extends ListItem
{
    protected $name = 'operation';
    protected $text = '操作';
    protected $attrs = [
        'style' => 'min-width:120px;',
    ];
    protected $el = [
        [
            'button',
			'attrs'=>[
				'class'=>'btn btn-secondary btn-sm xq-edit px-2',
				'style'=>'margin-right:5px;',
				'value' => '查看',
			],
        ],
        [
            'button',
			'attrs'=>[
				'class'=>'btn btn-danger btn-sm xq-delete px-2',
				'style'=>'margin-right:5px;',
				'value' => '删除',
			],
        ],
    ];
}
