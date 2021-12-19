Vue.component("vin-navbar", {
props: {
search: Boolean,
},
template: `
<div>
    <nav class="navbar">
        <div class="container-fluid">

            <a class="navbar-brand lobsterFont justify-content-center" href="index.html">
                <h2 class="display-2">Vintastic</h2>
            </a>

            <div class="col-auto">
                <label class="visually-hidden" for="autoSizingInputGroup">Search</label>
                <vin-navbar-search v-if="search"></vin-navbar-search>
            </div>
        </div>

    </nav>
</div>
`,

});

Vue.component("vin-navbar-search", {
template: `

<form action="/search.html">
    <div class="input-group">
        <input type="text" class="form-control " id="autoSizingInputGroup" placeholder="Search" name="search">
        <button class="btn btn-outline-secondary" type="submit" id="button-addon2"><i class="bi bi-search"></i></button>
    </div>
</form>

`,
});