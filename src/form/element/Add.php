<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Button;
class Add extends Button
{
	protected $name = 'add';
	protected $attrs= [
		'value'=>'添加',
		'class'=>'btn btn-primary mr-1 xq-add',
	];
	protected $template = '@default';
}
