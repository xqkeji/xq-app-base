<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Div;
class Col8Submit extends Div
{
	protected $name = 'col8submit';
	protected $text = '';
	protected $attrs= [
		'class'=>'col-8 text-center',
	];
	protected $el=[
		'@Submit',
	];
}
