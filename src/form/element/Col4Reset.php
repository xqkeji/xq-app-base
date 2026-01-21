<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Div;
class Col4Reset extends Div
{
	protected $name = 'col4reset';
	protected $text = '';
	protected $attrs= [
		'class'=>'col-4 text-start',
	];
	protected $el=[
		'@Reset',
	];
	
}
