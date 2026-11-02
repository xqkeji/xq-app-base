<?php
namespace xqkeji\app\base\form\element;
use xqkeji\form\element\FileInput;
class DocFile extends FileInput
{
    protected $name = 'attach_doc';
    protected $text = '附件';
    protected $template = '@row';
	protected $uploadUrl="/attach/doc/upload";
	protected $deleteUrl="/attach/doc/delete";
	protected $allowedFileExtensions=["doc","docx","xls","xlsx","ppt","pptx","pdf","wps","txt","zip","rar","tar","gz"];
}