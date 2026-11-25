<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\ClickCaptcha as BaseCaptcha;
class ClickCaptcha extends BaseCaptcha
{
    protected $name = 'click-captcha';
    protected $text = '点击验证';
    protected $vt = [
        '$required',
        '$ClickCaptcha',
    ];
    protected $template = '@row';
}