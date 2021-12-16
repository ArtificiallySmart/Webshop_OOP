Vue.component("vin-navbar", {
props: ["query"],
template: `
<div>
    <nav class="navbar">
        <div class="container-fluid">

            <a class="navbar-brand lobsterFont justify-content-center" href="index.html">
                <h2 class="display-2">Vintastic</h2>
            </a>

            <div class="col-auto">
                <label class="visually-hidden" for="autoSizingInputGroup">Search</label>

                <form action="/search.html">
                    <div class="input-group">
                        <input v-model="text" type="text" class="form-control " id="autoSizingInputGroup"
                            placeholder="Search" name="search">
                        <button class="btn btn-outline-secondary" type="submit" id="button-addon2"><i
                                class="bi bi-search"></i></button>
                    </div>
                    <!-- <div class="input-group-text"><a :href="'/search.html#'+text"
                                @click="$emit('refresh-query', text)"><i class="bi bi-search"></i></a></div> -->
                </form>



            </div>
        </div>

    </nav>
</div>
`,
data: function () {
return {
text: ""
}
}
});