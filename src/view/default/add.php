<?php
$this->setMainView("admin");
$params=xqkeji\App::getActionParams();
?>
<div id="xqkeji-form">
  <h5 class="card-header bg-success">
    <span class="xq-backpage" style="margin-right:1rem;cursor:pointer;">
      <i class="fa fa-reply" ></i>
    </span>
    <?=$pageTitle?> 
  </h5>
  <div id="xqkeji-form-body">
    <?php
    $this->outputFlash();
    echo $form;
    ?>
  </div>
</div>




