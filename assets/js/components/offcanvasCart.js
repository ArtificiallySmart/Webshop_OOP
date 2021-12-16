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
                <div>{{item.name}}</div>
                <div class="d-flex justify-content-between align-items-center"><small>{{item.amount}} x {{new
                        Intl.NumberFormat(undefined,{style: 'currency', currency:
                        'EUR'}).format(item.price)}} = {{new
                        Intl.NumberFormat(undefined,{style: 'currency', currency:
                        'EUR'}).format(item.price*item.amount)}}</small>

                </div>
                <button @click="$emit('remove-from-cart', item.ID)"><i class="bi bi-trash"
                        style="font-size: 1.5rem;"></i></button>
            </li>
        </ul>
        <div>Totaalprijs: {{new
            Intl.NumberFormat(undefined,{style: 'currency', currency:
            'EUR'}).format(totalprice)}}</div>
    </div>
</div>
`,
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