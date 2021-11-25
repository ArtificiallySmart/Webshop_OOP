Vue.component("vin-navbar", {
  props: ["isLoggedIn"],
  template: `
  <div>
    <nav class="navbar">
        <div class="container-fluid">
            <div></div>
            <a class="navbar-brand lobsterFont justify-content-center">
                <h1>Vintastisch</h1>
            </a>
            <div>
                <button type="button" class="btn btn-outline-secondary" v-if="!isLoggedIn" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    Inloggen
                </button>
                <div class="nav-item dropdown" v-if="isLoggedIn">
                    <a href="#" class="btn btn-outline-secondary dropdown-toggle" id="profileDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Profiel</a>
                    <ul class="dropdown-menu" aria-labelledby="profileDropdown">
                        <li><a class="dropdown-item" href="#">Profiel</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#" @click="isLoggedIn = false">Uitloggen</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content bgClassBlue darkGreen">

                <div class="modal-header ">
                    <h4 class="modal-title lobsterFont" id="exampleModalLabel">Inloggen</h4>
                    <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <!-- Modal Login form -->
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Gebruikersnaam</label>
                            <input type="text" class="form-control" id="exampleInputEmail1">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Wachtwoord</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Onthoudt mijn gegevens</label>
                        </div>
                    </form>
                    <!-- /Modal login form -->
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Terug</button>
                    <button type="button" class="btn btn-outline-secondary"
                        @click="isLoggedIn = true">Inloggen</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    `,
  data: {
    isLoggedIn: false,
  },
});

new Vue({
  el: "#app",
});
