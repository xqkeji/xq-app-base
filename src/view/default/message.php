<?php
$this->setMainView("admin");
?>
<div class="card" style="margin-top:10px;">
  <div class="card-header bg-success">
  <?=$pageTitle?>
  </div>
  <div class="card-body">
    <p class="card-text">
    <?php
	  $this->outputFlash();
	  ?>
    </p>
          
  </div>
</div>


