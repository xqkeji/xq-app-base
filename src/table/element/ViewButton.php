<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\Button;
class ViewButton extends Button
{
	protected $name = 'edit';
	protected $attrs= [
		'class'=>'btn btn-secondary btn-sm xq-edit px-2',
		'style'=>'margin-right:5px;',
		'value' => '查看',
	];
}
