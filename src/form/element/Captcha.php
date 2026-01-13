<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Captcha as BaseCaptcha;
class Captcha extends BaseCaptcha
{
    protected $name = 'captcha';
    protected $text = '图象码';
    protected $attrs = [
        'class' => 'form-control',
        'required' => 1,
        'placeholder' => '验证码',
        'style' => 'float:left;width:100px;',
    ];
    protected $vt = [
        ['required'],
        ['captcha'],
    ];
    protected $template = '@default';
}