<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Text;
class Username extends Text
{
    protected $name = 'username';
    protected $text = '用户名';
    protected $attrs = [
        'required' => '1',
        'class' => 'form-control',
        'placeholder' => '请输入用户名',
    ];
    protected $filters = ['string'];
    protected $vt = [['required']];
    protected $template = '@default';
}