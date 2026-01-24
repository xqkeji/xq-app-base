<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Number;
class Age extends Number
{
	protected $name = 'age';
	protected $text = '年龄';
	protected $attrs= [
        'class' => 'form-control',
		'required'=>'true',
        'style'=>'width:80px;',
	];
	protected $vt = [['required']];
    protected $filters = ['int'];
    protected $defaultValue = 0;
    protected $template = '@row';
}
