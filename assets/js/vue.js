let app = new Vue({
	el: "#app",
	data: {
		items: [],
		inCart: false,
		cart: Object.entries(localStorage) || '',
		counter: 1,
		$_GET: $_GET,
		pageItem: {},
		catResults: [],
		searchResults: [],
		cartItems: []
	},
	created() {
		this.fetchCart();
		if ($_GET.itemid) this.getPageItem();
		if ($_GET.category) this.getCatResults();
		if ($_GET.search) this.getSearchResults();
	},
	mounted() {
		validateform();
	},
	computed: {
		amtItemsInCart: function () {
			let amount = 0;
			this.cartItems.forEach(item => {
				amount += parseInt(item.amount);
			})
			return amount;
		},
		addToCartText: function () {
			if (localStorage.getItem(this.pageItem.ID) || this.inCart) {
				return "Toegevoegd aan winkelwagen";
			} else {
				return "Toevoegen aan winkelwagen";
			}
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
		getPageItem() {
			let self = this;

			axios({
				method: 'GET',
				url: `?page=item&action=getitem&params=${$_GET.itemid}`,
				headers: {
					"X-Requested-With": "XMLHttpRequest"
				}
			}).then(function (response) {
				if (response.data.success) {
					self.pageItem = response.data.item[0];
				}
			}).catch(function (error) {

			});
		},
		getCatResults: function () {
			let self = this;

			axios({
				method: 'GET',
				url: `?page=mysql&action=getByCategory&params=${$_GET.category}`,
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
				url: `?page=mysql&action=search&params=${$_GET.search}`,
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
			axios({
				method: 'POST',
				url: `?page=shoppingcart&action=addtocart`,
				data: {
					id: ID,
					amt: amt
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
		newQuery: function (newQuery) {
			this.query = newQuery;
			this.hash = "";
		},
		newHash: function (newHash) {
			this.hash = newHash;
		}
	},
});

Vue.config.devtools = true;
Vue.config.productionTip = false;
