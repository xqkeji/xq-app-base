<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Text;
class Url extends Text
{
    protected $name = 'url';
    protected $text = '链接地址';
    protected $attrs = [
        'class' => 'form-control',
        'required' => 'true',
    ];
    protected $filters = ['url'];
    protected $vt = [['required']];
    protected $template = '@row';
}