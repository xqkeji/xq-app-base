<?php
namespace xqkeji\app\base\form\template;
class Search
{
    public static function getTemplate()
    {
        return '<div class="form-group d-flex align-items-center justify-content-end flex-grow-1">
  <label class="me-2 col-form-label text-sm"><?=$text?></label>
  <?=$content?>
</div>';
    }
}