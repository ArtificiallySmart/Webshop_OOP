let app = new Vue({
	el: "#app",
	data: {
		items: items,
		inCart: false,
		cart: Object.entries(localStorage) || '',
		counter: 1,
		query: decodeURI((window.location.search).slice(8)),
		hash: decodeURI((window.location.hash).slice(1)),
		catArr: catArr,
		catRad: ""
	},
	computed: {
		catList: function () {
			return items.filter(item => {
				return item.subcategory.includes(this.catRad)
			})
		},
		cartItems: function () {
			const cartItems = [];
			if (this.cart) {
				this.cart.forEach(key => {
					let cartItem = (items.filter(item => item.ID == key[0]));
					cartItem[0].amount = key[1];
					cartItems.push(...cartItem);
				});
			}
			return cartItems;
		},
		amtItemsInCart: function () {
			let amount = 0;
			this.cartItems.forEach(item => {
				amount += parseInt(item.amount);
			})
			return amount;
		},
		spotlightItems: function () {
			const spot = [];
			spot.push(items[0], items[10], items[13], items[17], items[2], items[1]);
			return spot;
		},
		newItems: function () {
			let newArray = [];
			for (let i = 1; i <= 6; i++) {
				newArray.push(items[items.length - i]);
			}
			return newArray;
		},
		randomItems: function () {
			let rowItems = [];
			let indexArray = [];
			for (let i = 0; i < items.length; i++) {
				indexArray[i] = i;
			}
			for (let i = 0; i < 6; i++) {
				rowItems.push(
					items[
					indexArray.splice(Math.floor(Math.random() * indexArray.length), 1)
					]
				);
			}
			return rowItems;
		},
		pageItem: function () {
			return items.filter((item) => item.ID == this.hash)[0];
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
		searchResults: function () {

			return items.filter(item => {
				return item.name.toLowerCase().includes(this.query.toLowerCase()) || item.description.toLowerCase().includes(this.query.toLowerCase())
			})
		}
	},
	methods: {
		removeFromCart: function (ID) {
			this.cart.forEach((item, index) => {
				if (item[0] == ID && item[1]) {
					this.cart.splice(index, 1)
				}
			})
			// this.cart.splice(this.cart.indexOf(ID), 1);
			localStorage.removeItem(ID);
		},
		addToCart: function (ID) {
			if (this.counter) {
				if (localStorage.getItem(ID)) {
					alert('This item is already in your cart')
				} else {
					localStorage.setItem(ID, this.counter);
					this.cart.push([ID, this.counter]);
					this.counter = 1;
					this.inCart = true;
				}
			}
		},
		itemCounter: function (num) {
			if (num == 1 && this.counter < this.pageItem.stock) {
				this.counter++;
			}
			if (num == -1 && this.counter > 0) {
				this.counter--;
			}
		},
		advancedSearch: function () {
			console.log('yaay')
		},
	},
});

Vue.config.devtools = true;
Vue.config.productionTip = false;
