document.addEventListener('DOMContentLoaded', function() {
	const accountEle = document.querySelector('.account');
	const closeEle = document.querySelector('.mobile-ham .close');
	const hamburgerEle = document.querySelector('.mobile-ham .menu-icon');
	const navEle = document.querySelector('nav');
	const navParentEles = document.querySelectorAll('nav > ul li.parent');
	const navChildEles = document.querySelectorAll('nav > ul li.parent .child');
	const marqueeEles = document.querySelectorAll('marquee a');

	// Account on header hover
	accountEle.addEventListener('mouseover', function(){
		document.querySelector('.account-dropdown').classList.add('show');
	});
	accountEle.addEventListener('mouseout', function(){
		document.querySelector('.account-dropdown').classList.remove('show');
	});

	// Navigation script
	hamburgerEle.addEventListener('click', function(){
		closeEle.classList.add('show');
		hamburgerEle.classList.add('hide');
		navEle.classList.add('show');
	});
	closeEle.addEventListener('click', function(){
		hamburgerEle.classList.remove('hide');
		closeEle.classList.remove('show');
		navEle.classList.remove('show');
		navChildEles.forEach(function(navChild){
			if(navChild.classList.contains('show')) {
				navChild.classList.remove('show');
			}
		});
	});

	function checkNav(ele) {
		if(ele.querySelector('.child').classList.contains('show')) {
				ele.querySelector('.child').classList.remove('show');
		} else {
			navChildEles.forEach(function(navChild){
				if(navChild.classList.contains('show')) {
					navChild.classList.remove('show');
				}
			});
			ele.querySelector('.child').classList.add('show');
		}
	}
	navParentEles.forEach(function(navParentEle){
		navParentEle.addEventListener('mouseover', function(){
			checkNav(navParentEle);
		});
		navParentEle.addEventListener('mouseout', function(){
			navChildEles.forEach(function(navChild){
				if(navChild.classList.contains('show')) {
					navChild.classList.remove('show');
				}
			});
		});
		navParentEle.addEventListener('click', function(){
			checkNav(navParentEle);
		});
	});

	// Update Marquee 'current' class
	marqueeEles.forEach(function(marqueeEle){
		marqueeEle.addEventListener('click', function(){
			marqueeEles.forEach(function(marq){
				if (marq.classList.remove('current')) {
					marq.classList.remove('current');	
				}
			});
			marqueeEle.classList.add('current');
		});
	});


	var radius = 280; // adjust to move out items in and out 
	const fields = document.querySelectorAll('#welcome #container .item');
	const  container = document.querySelector('#welcome #container');
	var width = container.clientWidth;
	var height = container.clientHeight;
	var angle = 0,
	  step = (2 * Math.PI) / fields.length;
	fields.forEach(function(field) {

		var x = Math.round(width / 2 + radius * Math.cos(angle) - field.clientWidth / 2);
		var y = Math.round(height / 2 + radius * Math.sin(angle) - field.clientHeight / 2);

		field.style.left = x + 'px';
		field.style.top = y + 'px';

		angle += step;
	});

});