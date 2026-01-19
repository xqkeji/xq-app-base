<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Div;
class Col4Back extends Div
{
	protected $name = 'col4back';
	protected $text = '';
	protected $attrs= [
		'class'=>'col-4 text-center',
	];
	protected $el=[
		'@Back',
	];
	
}
