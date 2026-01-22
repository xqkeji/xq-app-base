<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\Button;
class BatchDelete extends Button
{
    protected $name = 'b_delete';
    protected $attrs = [
        'value' => '删除',
        'class' => 'btn btn-danger me-1 xq-batch',
    ];
}