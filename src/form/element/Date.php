<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\Date as BaseDate;
class Date extends BaseDate
{
    protected $name = 'date';
    protected $text = '日期';
    protected $attrs = [
        'required' => 'true',
        'class' => 'form-control',
    ];
    protected $filters = ['string'];
    protected $vt = [['required']];
    protected $template = '@row';
}