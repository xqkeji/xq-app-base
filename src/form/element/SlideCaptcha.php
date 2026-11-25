<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\SlideCaptcha as BaseCaptcha;
class SlideCaptcha extends BaseCaptcha
{
    protected $name = 'slide-captcha';
    protected $text = '滑动验证码';
    protected $attrs=[
		'style'=>'flex: 1 1 auto;min-width: 0;width: auto;',
	];
    protected $vt = [
        '$required',
        '$SlideCaptcha',
    ];
    protected $template = '@row';
}