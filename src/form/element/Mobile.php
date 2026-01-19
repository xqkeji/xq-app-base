<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Text;
class Mobile extends Text
{
    protected $name = 'mobile';
    protected $text = '手机号码';
    protected $attrs = [
        'class' => 'form-control',
        'required' => 1,
        'placeholder' => '请输入手机号码',
    ];
    protected $vt = [
        ['required'],
        [
            'regex',
            [
                'pattern' => '/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/',
                'message' => '手机号码格式错误',
            ]
        ],
    ];
    protected $template = '@default';
}