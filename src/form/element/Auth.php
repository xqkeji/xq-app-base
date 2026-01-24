<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Auth as BaseAuth;
class Auth extends BaseAuth
{
    protected $name = 'auth';
    protected $text = '权限';
    protected $attrs = [
        'class' => 'form-control',
    ];
    protected $template = '@auth';
}