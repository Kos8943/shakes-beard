<?php
$page_title = '';
require __DIR__ . '/parts/__connect_db.php';

$stmt = $pdo->query("SELECT * FROM `product` LIMIT 60");

$row = $stmt->fetchAll();
$search = $pdo->query("SELECT * FROM `product` WHERE name like '%藍%'")->fetchAll();

?>
<?php require __DIR__ . '/parts/__html_head.php'; ?>
<?php include __DIR__ . '/parts/__navbar.php'; ?>
<style>
	.toTop-arrow {
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
		margin: 0;
		border: 0;
		border-radius: 33%;
		opacity: 0.6;
		background: #000;
		cursor: pointer;
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		display: none;
	}

	.toTop-arrow::before,
	.toTop-arrow::after {
		width: 18px;
		height: 5px;
		border-radius: 3px;
		background: #f90;
		position: absolute;
		content: "";
	}

	.toTop-arrow::before {
		transform: rotate(-45deg) translate(0, -50%);
		left: 0.5rem;
	}

	.toTop-arrow::after {
		transform: rotate(45deg) translate(0, -50%);
		right: 0.5rem;
	}

	.toTop-arrow:focus {
		outline: none;
	}

	.button {
		background-color: white;
		color: black;
		border: 2px solid #4CAF50;
	}

	.button:hover {
		background-color: #4CAF50;
		/* Green */
		color: white;
	}


	.img-fluid {
		transition: all 200ms ease-in-out;
	}

	.img-fluid:hover {
		opacity: .2;
	}

	.img-fluid:hover ~p{
		opacity: 1;
		/* color: white; */
		font-weight: bolder;
	}

	.on-top {
		position: absolute;
		opacity: 0;
		transition: all 200ms ease-in-out;
		top: 30%;
		left: 35%;
	}

	.heart-svg{
		width: 15px;
	}

	.heart-svg-clicked{
		fill:red;
	}

</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<button type="button" id="BackTop" class="toTop-arrow"></button>
<script>
	$(function() {
		$('#BackTop').click(function() {
			$('html,body').animate({
				scrollTop: 0
			}, 333);
		});
		$(window).scroll(function() {
			if ($(this).scrollTop() > 300) {
				$('#BackTop').fadeIn(222);
			} else {
				$('#BackTop').stop().fadeOut(222);
			}
		}).scroll();
	});
</script>
<div class="container">
	<table class="table table-striped">
		<!-- `sid`, `name`, `email`, `mobile`, `birthday`, `address`, `created_at` -->
		<thead>

		<div id="productArea" class="row">
				<?php foreach ($row as $r) : ?>


					<div class="col-3">
						<!-- <ul class="item-list"> -->
						<div class="holder">
							<img src="<?= WEB_ROOT ?>test/product/upload/<?= $r['img-name'] ?>" class="img-fluid" alt="">
							<p class="on-top">See More
							</p>
						</div>
						<p><a><?= $r['name'] ?></a></p>
						<p>NT.<?= $r['price'] ?> <span>
						<svg class="heart-svg" viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"/></svg></p></span>

					</div>


				<?php endforeach; ?>
			</div>

			
</div>

</thead>
</table>

</div>


<?php include __DIR__ . '/parts/__scripts.php'; ?>

<script>$('#searchForm').show();</script>

<script>
	$('#searchForm').find('.btn').on('click',function(event){
		event.preventDefault();
		console.log('hi');
		console.log($('#searchForm').find('input').val());
		
	const fd = new FormData();
    fd.append('search_input', JSON.stringify($('#searchForm').find('input').val()));

    fetch('proj-front-search-api.php', {
        method: 'POST',
        body: fd
      })
      .then(r => r.json())
      .then(obj => {

		let productArea = document.querySelector('#productArea');

		console.log(obj.row[0]['img-name']);
		let htmlString = '';
		for (let i=0; i< obj.row.length; i ++){
			

			htmlString = htmlString + `<div class="col-3">
						<!-- <ul class="item-list"> -->
						<div class="holder">
							<img src="/mfee09/mfee09/test/product/upload/${obj.row[i]['img-name']}" class="img-fluid" alt="">
							<p class="on-top">See More
							</p>
						</div>
						<p><a>${obj.row[i]['name']}</a></p>
						<p>NT.${obj.row[i]['price']}<span>
								<img src="./img/heart.svg" style="width: 15px;"></p></span>

					</div>`
		}

		productArea.innerHTML = htmlString;
		

      });
	})
	
	$('.heart-svg').on('click',function(){
		console.log('hi');
		if($(this).hasClass('heart-svg-clicked')){
			$(this).removeClass('heart-svg-clicked');
		}
		else{
			$(this).addClass('heart-svg-clicked');
		}
		
	})
	
</script>

<?php include __DIR__ . '/parts/__html_foot.php'; ?>