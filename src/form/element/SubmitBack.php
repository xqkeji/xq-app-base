<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Div;
class SubmitBack extends Div
{
	protected $name = 'submit_back';
	protected $text = '';
	protected $attrs= [
		'class'=>'form-group row',
	];
	protected $el=[
		'@Col4Submit',
		'@Col4Back',
	];
	
}