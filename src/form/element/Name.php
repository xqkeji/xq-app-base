<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Text;
class Name extends Text
{
    protected $name = 'name';
    protected $text = '名称';
    protected $attrs = [
        'required' => 'true',
        'class' => 'form-control',
    ];
    protected $filters = ['string'];
    protected $vt = [['required']];
    protected $template = '@default';
}