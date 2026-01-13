<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Div;
class SubmitReset extends Div
{
	protected $name = 'submit_reset';
	protected $text = '';
	protected $attrs= [
		'class'=>'form-group row',
	];
	protected $el=[
		'@Col4Submit',
		'@Col4Reset',
	];
}

