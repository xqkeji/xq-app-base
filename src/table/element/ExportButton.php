<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\Button;
class ExportButton extends Button
{
	protected $name = 'export';
	protected $attrs= [
		'value'=>'导出',
		'class'=>'btn btn-warning me-1 xq-export',
	];
}
