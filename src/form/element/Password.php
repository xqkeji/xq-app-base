<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Password as PasswordElement;
class Password extends PasswordElement
{
    protected $name = 'password';
    protected $text = '密码';
    protected $attrs = [
        'class' => 'form-control',
        'required' => 1,
        'placeholder' => '请输入密码',
        'autocomplete' => 'new-password',
    ];
	public static function beforeAdd($element)
	{
		$controller = \xqkeji\App::getController();
		$actionName = $controller->getActionName();
		if ($actionName == 'edit') {
			$attributes = $element->getAttrs();
			unset($attributes['required']);
			$attributes['placeholder'] = '请输入密码(不用修改密码时，不要填写)';
			$element->setAttrs($attributes);
			$element->setValidators([]);
		}
	}
    protected $filters = ['string'];
    protected $vt = [
        [
            'required',
        ]
    ];
    protected $template = '@default';
}