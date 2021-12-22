Vue.component("vin-navbar", {
    props: {
        search: Boolean,
    },
    template: `
<div>
    <nav class="navbar navbar-expand-lg pb-0">
        <div class="container-fluid">
            <a class="navbar-brand lobsterFont " href="index.html">
                <h2 class="display-2">Vintastic</h2>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <i class="bi bi-list"></i>
                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="me-auto">
                </ul>
                <form action="/search.html">
                    <div class="input-group">
                        <input type="text" class="form-control " id="autoSizingInputGroup" placeholder="Search"
                            name="search">
                        <button class="btn btn-outline-secondary" type="submit" id="button-addon2"><i
                                class="bi bi-search"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </nav>
    <nav class="navbar navbar-expand-lg pt-0">
        <div class="container-fluid ">

            <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
                <nav role="navigation" class="primary-navigation w-100">
                            <ul class="w-100 d-none d-lg-flex justify-content-lg-between">
                                <li><a href="#">Lights</a>
                                    <ul class="dropdown">
                                        <li><a href="#">Table lights</a></li>
                                        <li><a href="#">Wall lights</a></li>
                                        <li><a href="#">Ceiling lights</a></li>
                                    </ul>
                                <li><a href="#">Decor</a>
                                    <ul class="dropdown">
                                        <li><a href="#">Clocks</a></li>
                                        <li><a href="#">Vases</a></li>
                                        <li><a href="#">Coat racks</a></li>
                                    </ul>
                                <li><a href="#">Furniture</a>
                                    <ul class="dropdown">
                                        <li><a href="#">Tables</a></li>
                                        <li><a href="#">chairs</a></li>
                                    </ul>
                                <li><a href="#">Textiles</a>
                                    <ul class="dropdown">
                                        <li><a href="#">Carpets and rugs</a></li>
                                    </ul>
                            </ul>
                        </nav>
                <a class="d-lg-none" data-bs-toggle="collapse" href="#collapseExample" role="button"
                    aria-expanded="false" aria-controls="collapseExample">
                    Categories
                </a>

                <div class="collapse d-lg-none" id="collapseExample">
                    <div>
                        <a class="nav-link" href="#">Lighting</a>
                        <a class="nav-link" href="#">Furniture</a>
                        <a class="nav-link" href="#">Decor</a>
                        <a class="nav-link" href="#">Textiles</a>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</div>
`,

});