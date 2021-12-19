Vue.component("offcanvas", {
props: ["items", "totalprice"],
template: `
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h3 id="offcanvasRightLabel" class="lobsterFont">Shopping cart</h3>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body d-flex flex-column justify-content-between">
        <ul class="list-group" style="overflow: auto;">
            <li v-for="item in items" :key="item.ID" class="list-group-item">
                <!--
                <button @click="$emit('remove-from-cart', item.ID)"><i class="bi bi-trash"
                        style="font-size: 1.5rem;"></i></button> -->

                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <a :href="'/item.html#' + item.ID">
                            <h5>{{item.name}}</h5>
                        </a>
                        <small>{{item.amount}} x {{formattedPrice(item.price)}}
                        </small>

                        <button type="button" class=" d-block btn btn-secondary btn-sm">remove from cart</button>
                    </div>

                    <div>
                        {{formattedPrice(item.price*item.amount)}}
                    </div>



                </div>

            </li>
        </ul>
        <div>Totaalprijs: {{formattedPrice(totalprice)}}</div>
    </div>
</div>
`,
methods: {
formattedPrice: function (price) {
return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'EUR' }).format(price);
}
},
})

Vue.component("offcanvasbutton", {
props: [],
template: `
<button class="btn btn-outline-secondary lobsterColor" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight">
    <slot></slot>
</button>

`,
})