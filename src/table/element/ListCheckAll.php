<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\Td;
class ListCheckAll extends Td
{
    protected $name = "ListCheckAll";
    protected $el = [
        [
            '$Check',
            'name' => 'check_all',
            'attrs' => [
                'class' => 'form-check-input xq-check-all',
            ],
        
        ]
    ];
}
