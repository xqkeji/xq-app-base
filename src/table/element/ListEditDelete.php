<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListEditDelete extends ListItem
{
    protected $name = 'operation';
    protected $text = '操作';
    protected $attrs = [
        'style' => 'min-width:120px;',
    ];
    protected $el = [
        [
            '$button',
            'name' => 'edit',
			'attrs'=>[
				'class'=>'btn btn-secondary btn-sm xq-edit px-2',
				'style'=>'margin-right:5px;',
				'value' => '编辑',
			],
        ],
        [
            '$button',
            'name' => 'delete',
			'attrs'=>[
				'class'=>'btn btn-danger btn-sm xq-delete px-2',
				'style'=>'margin-right:5px;',
				'value' => '删除',
			],
        ],
    ];
}
