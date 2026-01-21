<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Password;
class ConfirmPassword extends Password
{
    protected $name = 'confirm_password';
    protected $text = '确认密码';
    protected $attrs = [
        'class' => 'form-control',
        'required' => 1,
        'placeholder' => '请输入确认密码',
    ];
    protected $vt = [
        ['$required'],
        [
            '$confirm',
            'allowEmpty' => false,
            'with' => 'password',
        ]
    ];
    protected $template = '@row';
}