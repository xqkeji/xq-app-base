<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\FileInput;
class ImageFile extends FileInput
{
    protected $name = 'attach_image';
    protected $text = '封面图';
    protected $template = '@row';
}