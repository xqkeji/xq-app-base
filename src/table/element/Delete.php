<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class Delete extends ListItem
{
    protected $name = 'operation';
    protected $text = '操作';
    protected $attrs = [
        'style' => 'min-width:80px;width:80px;',
    ];
    protected $el = [
        [
            '$Button',
			'attrs'=>[
				'class'=>'btn btn-danger btn-sm xq-delete',
				'value' => '删除',
			],
        ],
    ];
}
