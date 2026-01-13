<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Auth;
class Auth extends Auth
{
    protected $name = 'auth';
    protected $text = '权限';
    protected $attrs = [
        'class' => 'form-control',
    ];
    protected $template = '@auth';
}