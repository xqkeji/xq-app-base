<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListItem;
class ListSex extends ListItem
{
    protected $name = 'sex';
    protected $text = '性别';
    protected $attrs = [
        'style' => 'min-width:80px;',
    ];
    public function format( $value)
    {
        if ($value == 1) {
            return '男';
        } else {
            return '女';
        }
    }
    
}
