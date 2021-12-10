Vue.component("vin-navbar", {
  props: ["isLoggedIn"],
  template: `
<div>
    <nav class="navbar">
        <div class="container-fluid">
            <div></div>
            <a class="navbar-brand lobsterFont justify-content-center" href="index.html">
                <h1>Vintastisch</h1>
            </a>
            
            <div>
                <div>
                    <a href="checkout.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#deb992"
                            class="bi bi-cart4 mx-4 shadow" viewBox="0 0 16 16">
                            <path
                                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg></a>

                    <button type="button" class="btn btn-outline-secondary" v-if="!isLoggedIn" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Inloggen
                    </button>
                </div>
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
                    <button type="button" class="btn btn-outline-secondary" @click="isLoggedIn = true">Inloggen</button>
                </div>
            </div>
        </div>
    </div>
</div>
`,
  // data: function () {
  //     return {
  //         isLoggedIn: false,
  //     }
  // },
});
