<?php
namespace xqkeji\app\base\table\element;
use xqkeji\form\element\ListFoot as BaseListFoot;
class FootExport extends BaseListFoot
{
    protected $name = 'list_foot_export';
    protected $el = [
        '@CheckAll',
        '@ToolbarExport'
    ];
      
}
