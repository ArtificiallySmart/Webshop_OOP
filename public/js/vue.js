let app = new Vue({
	el: "#app",
	data: {
		items: [],
		counter: 1,
		$_GET: $_GET,
		pageItem: {},
		catResults: [],
		searchResults: [],
		cartItems: [],
		loggedIn: false,
		path: window.location.pathname
	},
	created() {
		this.isLoggedIn();
		//this.fetchCart();
		if (this.path.includes('/items/')) this.getPageItem();
		if (this.path.includes('/categories')) this.getCatResults();
		if ($_GET.search) this.getSearchResults();
	},
	mounted() {
	},
	computed: {
		amtItemsInCart: function () {
			let amount = 0;
			this.cartItems.forEach(item => {
				amount += parseInt(item.amount);
			})
			return amount;
		},
		totalPrice: function () {
			let total = 0;
			if (this.cartItems) {
				this.cartItems.forEach(item => total += (item.price * item.amount));
			}
			return total;
		},
	},
	methods: {
		validateForm: function () {
			'use strict'

			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.querySelectorAll('.needs-validation')

			// Loop over them and prevent submission
			Array.prototype.slice.call(forms)
				.forEach(function (form) {
					form.addEventListener('submit', function (event) {
						if (!form.checkValidity()) {
							event.preventDefault()
							event.stopPropagation()
						}

						form.classList.add('was-validated')
					}, false)
				})
		},
		isLoggedIn: function () {
			const cookieValue = document.cookie
				.split('; ')
				.find(row => row.startsWith('loggedIn='))
				.split('=')[1];
			this.loggedIn = cookieValue == "true" ? true : false;
		},
		getPageItem() {
			let self = this;

			axios({
				method: 'GET',
				url: `${this.path}/get`,
				headers: {
					"X-Requested-With": "XMLHttpRequest"
				}
			}).then(function (response) {
				if (response.data.success) {
					self.pageItem = response.data.item;
				}
			}).catch(function (error) {

			});
		},
		getCatResults: function () {
			let self = this;

			axios({
				method: 'GET',
				url: `/categories/getByCategory?category=${$_GET.category}`,
				headers: {
					"X-Requested-With": "XMLHttpRequest"
				}
			}).then(function (response) {
				if (response.data.success) {
					self.catResults = response.data.catResults;
				}
			}).catch(function (error) {

			});
		},
		getSearchResults: function () {
			let self = this;

			axios({
				method: 'GET',
				url: `/search?search=${$_GET.search}`,
				headers: {
					"X-Requested-With": "XMLHttpRequest"
				}
			}).then(function (response) {
				if (response.data.success) {
					self.searchResults = response.data.searchResults;
				}
			}).catch(function (error) {

			});
		},
		removeFromCart: function (ID) {
			axios({
				method: 'POST',
				url: `?page=shoppingcart&action=removefromcart`,
				data: {
					id: ID,
				},
				headers: {
					"X-Requested-With": "XMLHttpRequest"
				}
			}).then(function (response) {

			}).catch(function (error) {
				console.log(error)
			});
			this.fetchCart();
		},
		addToCart: function (ID, amt) {
			let cartItem = new FormData();
			cartItem.append('item', ID);
			cartItem.append('amount', amt)
			axios({
				method: 'POST',
				url: `/shoppingcart`,
				data: cartItem,
				headers: {
					"X-Requested-With": "XMLHttpRequest"
				}
			}).then(function (response) {

			}).catch(function (error) {
				console.log(error)
			});
			this.fetchCart();
		},
		fetchCart: function () {
			let self = this;
			axios({
				method: 'GET',
				url: `?page=shoppingcart&action=fetchcart`,
				headers: {
					"X-Requested-With": "XMLHttpRequest"
				}
			}).then(function (response) {
				self.cartItems = response.data.cartItems;
			}).catch(function (error) {
				console.log(error)
			});
		},
		itemCounter: function (num) {
			if (num == 1 && this.counter < this.pageItem.stock) {
				this.counter++;
			}
			if (num == -1 && this.counter > 0) {
				this.counter--;
			}
		},
	},
});

Vue.config.devtools = true;
Vue.config.productionTip = false;
