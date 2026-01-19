<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Number;
class Ordernum extends Number
{
    protected $name = 'ordernum';
    protected $text = '序号';
    protected $attrs = [
        'required' => 'true',
        'style' => 'width:80px;',
    ];
    protected $vt = [['required']];
    protected $filters = ['int'];
    protected $defaultValue = 0;
    protected $template = '@col2';
}