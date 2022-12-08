<?php
$this->setMainView("admin");
?>
<div id="xqkeji-page-body">
	<div class="card-header bg-success align-items-center">
		<div class="row">
			<div class="col-4">
				<h5 class="align-items-center"><?=$pageTitle?></h5>
			</div>
			<div class="col-8 text-end">
				<?=$searchForm?>
			</div>
		</div>	
	</div>
	<div class="card-body">
		<?php
			$this->outputFlash();
			echo $form;
			echo $pager;
		?>
	</div>
</div>

