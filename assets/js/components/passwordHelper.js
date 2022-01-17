Vue.component('password-helper', {
    data() {
        return {
            password: "",
            confirm_password: "",
        }
    },
    mounted() {
        this.setpass();
    },
    template:
        `
<div>
    <div class="form-floating mb-3">
        <input type="password" class="form-control" name="password" placeholder="password" id="password"
             @change="validate" required>
        <label for="password" class="form-label">Password</label>
        <div class="invalid-feedback">
            Please enter a valid password.
        </div>
    </div>
    <div class="form-floating mb-3">
        <input type="password" class="form-control" placeholder="password" id="confirm_password"
             @keyup="validate" required>
        <label for="password" class="form-label">Confirm password</label>
        <div class="invalid-feedback">
            Passwords don't match.
        </div>
    </div>
</div>
`,
    methods: {
        setpass: function () {
            this.password = document.getElementById("password");
            this.confirm_password = document.getElementById("confirm_password");
        },
        validate: function () {
            if (this.password.value != this.confirm_password.value) {
                this.confirm_password.setCustomValidity("Passwords Don't Match");
            } else {
                this.confirm_password.setCustomValidity('');
            }
        }
    }
});