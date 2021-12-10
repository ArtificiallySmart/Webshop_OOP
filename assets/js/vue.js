let app = new Vue({
	el: "#app",
	data: {
		items: items,
		inCart: false,
		cart: Object.keys(localStorage) || ''
		// cart: function () {
		// 	if (localStorage.length) {
		// 		cart = Object.keys(localStorage);
		// 	} else {
		// 		cart = ''
		// 	}
		// },
		// cart: localStorage.length ? Object.entries(localStorage) : '',
		// locStor: Object.entries(localStorage),
	},
	computed: {
		cartItems: function () {
			const cartItems = [];
			if (this.cart) {
				this.cart.forEach(key => {
					cartItems.push(...items.filter(item => item.ID == key))
				});
			}
			return cartItems;
		},
		spotlightItems: function () {
			return items.filter(function (item) {
				return item.designer == "Gijs Bakker";
			});
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
			let itemID = window.location.hash;
			itemID = itemID.slice(1);
			return items.filter((item) => item.ID == itemID)[0];
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
				this.cartItems.forEach(item => total += item.price);
			}
			return total;
		},
	},
	methods: {
		removeFromCart: function (ID) {
			this.cart.splice(this.cart.indexOf(ID), 1);
			localStorage.removeItem(ID);
		},
		addToCart: function (ID) {
			if (localStorage.getItem(ID)) {
				alert('This item is already in your cart')
			} else {
				localStorage.setItem(ID, 1);
				this.cart.push(ID);
				this.inCart = true;
			}
		},
	},
});

Vue.config.devtools = true;
Vue.config.productionTip = false;


// for (let i = 0; i <= 10; i++) localStorage.setItem(i, 1)