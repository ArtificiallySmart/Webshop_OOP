Vue.component("vin-navbar", {
props: ["isLoggedIn"],
template: `
<div>
    <nav class="navbar">
        <div class="container-fluid">

            <a class="navbar-brand lobsterFont justify-content-center" href="index.html">
                <h2 class="display-2">Vintastic</h2>
            </a>

            <div class="col-auto">
                <label class="visually-hidden" for="autoSizingInputGroup">Search</label>
                <div class="input-group">

                    <input type="text" class="form-control " id="autoSizingInputGroup" placeholder="Search">
                    <div class="input-group-text"><i class="bi bi-search"></i></div>
                </div>
            </div>
        </div>
    </nav>
</div>
`,
});