<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\TableDiv;
class ListAddDeleteExport extends TableDiv
{
	protected $name = 'list-add-delete-export';
	protected $attrs= [
		'class'=>'me-auto',
	];
	protected $el=[
		[
			'$Button',
			'name'=>'add',
			'attrs'=>[
				'value'=>'添加',
				'class'=>'btn btn-primary me-1 xq-add',
			],
		],
		[
			'$Button',
			'name'=>'b_delete',
			'attrs'=>[
				'value'=>'删除',
				'class'=>'btn btn-danger me-1 xq-batch',
			],
		],
		[
			'$Button',
			'name'=>'export',
			'attrs'=>[
				'value'=>'导出',
				'class'=>'btn btn-danger me-1 xq-export',
			],
		],
	];
}
