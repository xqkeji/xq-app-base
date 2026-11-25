<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\ClickCaptcha as BaseCaptcha;
class ClickCaptcha extends BaseCaptcha
{
    protected $name = 'click-captcha';
    protected $text = '点击验证';
	protected $attrs=[
		'style'=>'flex: 1 1 auto;min-width: 0;width: auto;',
	];
    protected $vt = [
        '$required',
        '$ClickCaptcha',
    ];
    protected $template = '@row';
}