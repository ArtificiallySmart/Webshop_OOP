Vue.component("double-nav", {
props: ['link', 'logged_in'],
data: function () {
return {
categories: [],
}
},
created() {
this.getCategories();
},
methods: {
logOut: function () {
document.cookie = "loggedIn=false";
axios({
method: 'GET',
url: '?page=login&action=logOut',
headers: {
"X-Requested-With": "XMLHttpRequest"
}
}).then(function (response) {
if (response.data.success) {
window.location.href = "/"
}
}).catch(function (error) {
});
},
getCategories() {
let self = this;

axios({
method: 'GET',
url: '/categories',
headers: {
"X-Requested-With": "XMLHttpRequest"
}
}).then(function (response) {
if (response.data.success) {
self.categories = response.data.categories;
}
}).catch(function (error) {
});
}
},
template: `
<div>
    <nav class="navbar navbar-expand-md pb-0">
        <div class="container-fluid">
            <a class="navbar-brand lobsterFont " href="/">
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
                <div>
                    <div v-if="!logged_in">
                        <button class="btn btn-outline-secondary" data-bs-toggle="modal"
                            data-bs-target="#loginModal">Login</button>
                        <a href="/register" class="btn btn-outline-secondary">Register</a>
                    </div>
                    <div v-else>
                        <button class="btn btn-outline-secondary" @click="logOut">Log out</button>
                        <a href="/user" class="btn btn-outline-secondary">Profile</a>
                    </div>

                    <form action="/search" method="GET">
                        <div class="input-group">
                            <input type="text" class="form-control " id="autoSizingInputGroup" placeholder="Search"
                                name="search">
                            <button class="btn btn-outline-secondary" type="submit" id="button-addon2"><i
                                    class="bi bi-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </nav>
    <nav class="navbar navbar-expand-md pt-0">
        <div class="container-fluid ">

            <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
                <nav role="navigation" class="primary-navigation w-100">

                    <ul class="w-100 d-none d-md-flex justify-content-md-between">
                        <li v-for="category in categories">
                            <a v-if="link" :href="'/categories/' + category.category">{{ category.category
                                }}</a>
                            <ul class="dropdown">
                                <li v-for="subcategory in category.subcategory">
                                    <a v-if="link" :href="'/categories/' + subcategory">{{
                                        subcategory }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>


                </nav>
            </div>
        </div>

    </nav>

</div>
`,
});