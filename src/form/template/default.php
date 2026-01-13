<?php
namespace xqkeji\app\base\form\template;
class Default
{
    public static function getTemplate()
    {
        return '<div class="form-group row align-items-center px-3">
	<label class="col-12 col-md-2 col-form-label text-start text-md-end"><?=$text?></label>
	<div class="col-12 col-md-4 mt-2 mt-md-0">
		<?=$content?>
	</div>
</div>';
    }
}