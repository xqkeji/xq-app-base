<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Submit as BaseSubmit;
class Submit extends BaseSubmit
{
	protected $name = 'submit';
	protected $text = '';
	protected $attrs= [
		'class'=>'btn btn-primary',
		'style'=>'width:100px;margin-bottom:1rem;',
		'value'=>'确定',
	];
	
}
