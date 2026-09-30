<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\Button;
class AddButton extends Button
{
	protected $name = 'add';
	protected $attrs= [
		'value'=>'添加',
		'class'=>'btn btn-primary me-1 xq-add',
	];
}
