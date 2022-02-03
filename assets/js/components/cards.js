Vue.component("item-card", {
	props: ["item"],
	template: `
<div class="card h-100">
	<img :src='item.thumbnail' class="card-img-top" alt="..." />
	<div class="card-body">
		<h5 class="card-title">{{item.name}}</h5>
		<p class="card-text"> {{item.short}} </p>
	</div>
	<div class="card-footer">
		<a :href="'?page=item&itemid=' + item.id" class="btn btn-outline-secondary">To item</a>
	</div>
</div>
`,
});

Vue.component("card-row", {
	props: ["type"],
	data: function () {
		return {
			items: []
		}
	},
	created() {
		this.fillCards(this.type);
	},
	methods: {
		fillCards(type) {
			let self = this;
			axios({
				method: 'GET',
				url: `home/${type}`,
				headers: {
					"X-Requested-With": "XMLHttpRequest"
				}
			}).then(function (response) {
				if (response.data.success) {
					self.items = response.data.items;
				}
			}).catch(function (error) {

			});
		}
	},
	template: `
<div class="container my-3">
	<div class="lobsterFont">
		<h3>
			<slot></slot>
		</h3>
	</div>
	<div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
		<div v-for="item in items" class="col">
			<item-card v-bind:item="item"></item-card>
		</div>
	</div>
</div>
`,
});