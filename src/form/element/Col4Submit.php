<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Div;
class Col4Submit extends Div
{
	protected $name = 'col4submit';
	protected $text = '';
	protected $attrs= [
		'class'=>'col-4 text-center',
	];
	protected $el=[
		'@Submit',
	];
}
