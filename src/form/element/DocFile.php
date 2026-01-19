<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\FileInput;
class DocFile extends FileInput
{
    protected $name = 'doc';
    protected $text = '附件';
    protected $template = '@default';
}