<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Reset as BaseReset;
class Reset extends BaseReset
{
	protected $name = 'reset';
	protected $text = '';
	protected $attrs= [
		'class'=>'btn btn-primary',
		'style'=>'width:100px;margin-bottom:1rem;',
		'value'=>'重置',
	];
	
}
