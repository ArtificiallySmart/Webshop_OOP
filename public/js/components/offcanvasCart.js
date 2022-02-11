Vue.component("hidden-cart-list", {
    props: ["items", "totalprice"],
    template: `
<div class="offcanvas offcanvas-bottom cart-list" tabindex="-1" id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h3 id="offcanvasRightLabel" class="lobsterFont">Shopping cart</h3>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body d-flex flex-column justify-content-between bg-none">
        <!-- <ul class="list-group" style="overflow: auto;">
            <li v-for="item in items" :key="item.id" class="list-group-item"> -->
        <div style="overflow: auto;">
            <div v-for="(item, i) in items" :key="item.id" class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img :src="item.thumbnail" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body d-flex flex-column h-100 justify-content-between">
                            <div class="d-flex justify-content-between">
                                <a :href="'/?page=item&itemid=' + item.id">
                                    <h5 class="card-title">{{item.name}}</h5>
                                </a>
                                <button type="button" class="btn-close text-reset"
                                    @click="$emit('remove-from-cart', item.product_id)" aria-label="Close"></button>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="row text-center">
                                    <div class="col"><i class="bi bi-dash-lg" @click="itemMinus(i)"></i></div>
                                    <div class="col">{{item.amount}}</div>
                                    <div class="col"><i class="bi bi-plus-lg" @click="itemPlus(i)"></i></div>
                                </div>
                                <p class="card-text">{{formattedPrice(parseInt(item.price*item.amount))}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex align-items-center justify-content-between">
            <a class="btn btn-outline-secondary" href="/checkout">To checkout</a>
            <div>Total price: {{formattedPrice(totalprice)}}</div>
        </div>


    </div>
</div>
`,
    methods: {
        itemMinus: function (i) {
            let self = this;
            if (this.items[i].amount > 0) {
                this.items[i].amount--;
                axios({
                    method: 'POST',
                    url: `?page=shoppingcart&action=addtocart`,
                    data: {
                        id: self.items[i].product_id,
                        amt: -1
                    },
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }).then(function (response) {

                }).catch(function (error) {
                    console.log(error)
                });
            }
        },
        itemPlus: function (i) {
            let self = this;
            if (this.items[i].amount < this.items[i].stock) {
                this.items[i].amount++;
                axios({
                    method: 'POST',
                    url: `?page=shoppingcart&action=addtocart`,
                    data: {
                        id: self.items[i].product_id,
                        amt: 1
                    },
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }).then(function (response) {

                }).catch(function (error) {
                    console.log(error)
                });
            }
        }, formattedPrice: function (price) {
            return new
                Intl.NumberFormat(undefined, { style: 'currency', currency: 'EUR' }).format(price);
        }
    },
})
Vue.component("cart-button", {
    props: [], template: ` <button class="btn btn-outline-secondary lobsterColor"
    type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
    <slot></slot>
    </button>

    `,
})