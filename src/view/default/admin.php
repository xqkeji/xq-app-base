<?php
$this->setMainView("admin");
?>
<div id="xqkeji-page-body" class="card">
	<div class="card-header bg-success d-flex flex-wrap align-items-center">
		<div class="header-container d-flex w-100">
			<div class="col-12 col-sm-8 mb-2 mb-sm-0 d-flex align-items-center">
				<h5 class="page-title mb-0"><?=$pageTitle?></h5>
			</div>
			<div class="col-12 col-sm-4 search-form">
				<?=$searchForm?>
			</div>
		</div>
	</div>
	<div class="card-body px-0 sm:px-2">
		<?php
			$this->outputFlash();
			echo $form;
		?>
	</div>
</div>


