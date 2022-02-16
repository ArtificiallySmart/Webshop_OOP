Vue.component('login-modal', {
    props: ["token"],
    data() {
        return {
            username: "",
            password: "",
            loginError: "",
        }
    },
    mounted() {

    },
    template:
        /*html*/`
<div class="modal fade " id="loginModal" tabindex="-1" aria-labelledby="LoginModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="LoginModalLabel">Login</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form class="needs-validation" id="login-form" novalidate>
                <div class="modal-body">

                    <div class="form-floating mb-3">
                        <input class="form-control" id="login-username" name="username" placeholder="username"
                            v-model="username" required>
                        <label for="username" class="form-label">Username</label>
                        <div class="invalid-feedback">
                            Please enter your username.
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" name="password" placeholder="password"
                            id="login-password" v-model=password required>
                        <label for="password" class="form-label">Password</label>
                        <div class="invalid-feedback">
                            Please enter your password.
                        </div>
                    </div>
                    {{ loginError }}
                </div>
            </form>
            <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="validateSubmit">Login</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>

        </div>
    </div>
</div>
`,
    methods: {
        validateSubmit: function () {
            let self = this;
            let form = document.getElementById("login-form")
            form.classList.add('was-validated')
            let userInfo = new FormData();
            userInfo.append('username', this.username);
            userInfo.append('password', this.password);
            userInfo.append('f_token', this.token);

            if (form.checkValidity()) {
                axios({
                    method: 'POST',
                    url: `/login`,
                    data: userInfo,
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                    }
                }).then(function (response) {
                    if (response.data.success) {
                        document.cookie = "loggedIn=true";
                        window.location.href = "/";
                    } else {
                        self.username = "";
                        self.password = "";
                        form.classList.remove('was-validated');
                        self.loginError = "Incorrect username or password. Please try again"
                    }
                }).catch(function (error) {
                    console.log("error:", error)
                });

            }
        }
    }
});