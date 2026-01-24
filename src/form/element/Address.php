<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Text;
class Address extends Text
{
	protected $name = 'address';
	protected $text = '地址';
	protected $attrs= [
        'class' => 'form-control',
		'required'=>'true',
	];
	protected $filters = ['string'];
	protected $vt = [['required']];
	protected $template = '@row';
}
