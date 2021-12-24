Vue.component("double-nav", {
props: [ 'catarr', 'link' ],
template: `
<div>
    <nav class="navbar navbar-expand-md pb-0">
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
    <nav class="navbar navbar-expand-md pt-0">
        <div class="container-fluid ">

            <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
                <nav role="navigation" class="primary-navigation w-100">

                    <ul class="w-100 d-none d-md-flex justify-content-md-between">
                        <li v-for="category in catarr">
                            <a v-if="link" :href="'/category.html?search=' + category[0][0]">{{ category[0][0] }}</a>
                            <button v-else class="btn" @click="$emit('newquery', category[0][0])">{{ category[0][0]
                                }}</button>
                            <ul class="dropdown">
                                <li v-for="subcategory in category[1]">
                                    <a v-if="link"
                                        :href="'/category.html?search=' + category[0][0] + '#' + subcategory">{{
                                        subcategory }}</a>
                                    <button v-else class="btn" @click="$emit('newhash', subcategory)">{{ subcategory
                                        }}</button>
                                </li>
                            </ul>
                        </li>
                    </ul>


                </nav>
                <a class="d-md-none" data-bs-toggle="collapse" href="#collapseExample" role="button"
                    aria-expanded="false" aria-controls="collapseExample">
                    Categories
                </a>

                <div class="collapse d-md-none" id="collapseExample">
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