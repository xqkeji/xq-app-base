<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\Button;
class DeleteButton extends Button
{
	protected $name = 'delete';
	protected $attrs= [
		'class'=>'btn btn-danger btn-sm xq-delete px-2',
		'style'=>'margin-right:5px;',
		'value' => '删除',
	];
}
