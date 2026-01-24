<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Number;
class Price extends Number
{
    protected $name = 'price';
    protected $text = '价格';
    protected $attrs = [
        'class' => 'form-control',
        'required' => 'true',
        'style' => 'width:120px;',
        'step' => '0.01',
    ];
    protected $vt = [['required']];
    protected $filters = ['float'];
    protected $defaultValue = 0.00;
    protected $template = '@row';
}