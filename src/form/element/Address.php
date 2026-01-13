<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Text;
class Address extends Text
{
	protected $name = 'address';
	protected $text = '地址';
	protected $attrs= [
		'required'=>'true',
	];
	protected $vt = [['required']];
	protected $template = '@default';
}
