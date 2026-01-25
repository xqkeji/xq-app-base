<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListFoot as BaseListFoot;
class ListFootExport extends BaseListFoot
{
    protected $name = 'list_foot_export';
    protected $el = [
        '@ListCheckAll',
        '@ListToolbarExport'
    ];
      
}
