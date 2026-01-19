<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\EmailCode as BaseEmailCode;
class EmailCode extends BaseEmailCode
{
    protected $name = 'email_code';
    protected $text = '邮箱码';
    protected $attrs = [
        'class' => 'form-control',
        'required' => 1,
        'placeholder' => '验证码',
        'style' => 'float:left;width:100px;',
    ];
    protected $vt = [
        ['required'],
        ['Emailcode'],
    ];
    protected $filters = ['string'];
    protected $template = '@default';
}