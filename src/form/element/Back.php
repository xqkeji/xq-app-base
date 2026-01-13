<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Button;
class Back extends Button
{
	protected $name = 'back';
	protected $text = '';
	protected $attrs= [
		'class'=>'btn btn-secondary xq-backpage',
		'style'=>'width:100px;margin-bottom:1rem;',
		'value'=>'返回',
	];
}
