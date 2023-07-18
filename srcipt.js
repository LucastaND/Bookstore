window.onscroll = () =>{
	if (window.scrollY >80 ) {
		document.querySelector('.header .menu').classList.add('active')
	}
	else{
		document.querySelector('.header .menu').classList.add('active')
	}
}

document.addEventListener('DOMContentLoaded', function(event) {
	document.getElementById('add_to_cart').addEventListener('click', function(){
		//localStorage.removeItem('books');
		var books = JSON.parse(localStorage.getItem('books'));
		if (!books) {
			books = [];
		}

		var book_info = {
			'image': document.getElementById('image').getAttribute('src'),
			'name': document.getElementById('name').value,
			'price': document.getElementById('price').innerHTML,
			'quantity': document.getElementById('quantity').value
		};

		books.push(book_info);
		localStorage.setItem('books', JSON.stringify(books));
		alert('Added to cart successfully');

		console.log(JSON.parse(localStorage.getItem('books')))

		
	});
})
