Vue.component('new-user-form', {
    props: ["token"],
    data() {
        return {
            username: "",
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            confirm_password: "",
            mailingList: false,
            usernameerr: "Please enter a username",
            emailerr: "Please enter a valid email address"
        }
    },
    mounted() {
        this.getElementsById();
    },
    template:
        `
<div class="container-fluid my-3 mx-3">


    <form class="needs-validation" id="new-user-form" novalidate>
        <div class="row">

            <div class="col">

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input class="form-control" id="firstname" name="first_name" placeholder="First Name"
                                v-model="firstName" required>
                            <label for="firstname" class="form-label">First name</label>
                            <div class="invalid-feedback">
                                Please enter your first name.
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input class="form-control" id="lastname" name="last_name" placeholder="Last Name"
                                v-model="lastName" required>
                            <label for="lastname" class="form-label">Last name</label>
                            <div class="invalid-feedback">
                                Please enter your last name.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-floating mb-3">
                    <input class="form-control" id="username" name="username" placeholder="username"
                        @change="validateUsername" required>
                    <label for="username" class="form-label">Username</label>
                    <div class="invalid-feedback">
                        {{ usernameerr }}
                    </div>
                </div>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com"
                        @change="validateEmail" required>
                    <label for="email" class="form-label">E-mail</label>
                    <div class="invalid-feedback">
                        {{ emailerr }}
                    </div>
                </div>

                <div class="form-floating mb-3">
                    <input type="password" class="form-control" name="password" placeholder="password" id="password"
                        @change="validatePassword" required>
                    <label for="password" class="form-label">Password</label>
                    <div class="invalid-feedback">
                        Please enter a valid password.
                    </div>
                </div>

                <div class="form-floating mb-3">
                    <input type="password" class="form-control" placeholder="password" id="confirm_password"
                        @keyup="validatePassword" required>
                    <label for="password" class="form-label">Confirm password</label>
                    <div class="invalid-feedback">
                        Passwords don't match.
                    </div>
                </div>

            </div>

            <div class="col">

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="invalidCheck" required>
                    <label class="form-check-label" for="invalidCheck">I agree with the <a data-bs-toggle="collapse"
                            href="#collapseExample" role="button" aria-expanded="false"
                            aria-controls="collapseExample">terms and conditions</a></label>
                    <div class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>

                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        By making an account on this website, you agree to the facts that I'm in week 3 of learning PHP
                        and
                        MySQL, I know next to nothing about data protection, and there's a fat chance that your data
                        will be
                        leaked.
                    </div>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="mailing_list" id="mailinglist"
                        v-model="mailingList">
                    <label class="form-check-label" for="mailinglist">I would like to receive promotional
                        emails.</label>
                </div>
            </div>

        </div>
        <button class="btn btn-primary" @click.prevent="submitForm">submit</button>
    </form>
</div>
`,
    methods: {
        getElementsById: function () {
            this.password = document.getElementById("password");
            this.confirm_password = document.getElementById("confirm_password");
            this.username = document.getElementById("username")
            this.email = document.getElementById("email")
        },
        validatePassword: function () {
            if (this.password.value != this.confirm_password.value) {
                this.confirm_password.setCustomValidity("Passwords Don't Match");
                this.confirm_password.classList.add("is-invalid");
            } else {
                this.confirm_password.setCustomValidity('');
                this.confirm_password.classList.remove("is-invalid");
            }
        },
        validateUsername: function () {
            let self = this;
            let form = new FormData();
            form.append('type', 'username');
            form.append('value', this.username.value);
            form.append('f_token', this.token);
            axios({
                method: 'POST',
                url: `/register/validate`,
                data: form,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            }).then(function (response) {
                if (response.data.message) {
                    console.log(response.data.message);
                    self.username.setCustomValidity("username already exists");
                    self.usernameerr = username.validationMessage;
                    self.username.classList.add("is-invalid");
                } else {
                    self.username.setCustomValidity("");
                    self.username.classList.remove("is-invalid");
                }
            }).catch(function (error) {
            });
        },
        validateEmail: function () {
            let self = this;
            let form = new FormData();
            form.append('type', 'email');
            form.append('value', this.email.value);
            form.append('f_token', this.token);
            axios({
                method: 'POST',
                url: `/register/validate`,
                data: form,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            }).then(function (response) {
                if (response.data.message) {
                    console.log(response.data.message);
                    self.email.setCustomValidity("email already exists");
                    self.emailerr = email.validationMessage;
                    self.email.classList.add("is-invalid");
                } else {
                    self.email.setCustomValidity("");
                    self.email.classList.remove("is-invalid");
                }
            }).catch(function (error) {

            });
        },
        submitForm: function () {

            let form = document.getElementById("new-user-form")
            form.classList.add('was-validated')

            let formData = new FormData();
            formData.append('first_name', this.firstName);
            formData.append('last_name', this.lastName);
            formData.append('username', this.username.value);
            formData.append('email', this.email.value);
            formData.append('password', this.password.value);
            formData.append('mailing_list', this.mailingList ? '1' : '0');
            formData.append('f_token', this.token);

            if (form.checkValidity()) {
                axios({
                    method: 'POST',
                    url: `/register`,
                    data: formData,
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error)
                });
                window.location.href = "/";
            }
        }
    }
});