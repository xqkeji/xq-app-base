<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Email as BaseEmail;
class Email extends BaseEmail
{
    protected $name = 'email';
    protected $text = '邮箱地址';
    protected $attrs = [
        'class' => 'form-control',
        'required' => 1,
        'placeholder' => '请输入邮箱地址',
    ];
    protected $vt = [
        ['required'],
        ['email'],
    ];
}