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

Vue.component("item-card", {
  props: ["item"],
  template: `
    <div class="card h-100">
      <img :src='item.thumbnail'class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text"> {{item.description}} </p>
      </div>
      <div class="card-footer">
        <a :href="'item.html#' + item.ID" class="btn btn-outline-secondary">Naar item</a>
      </div>
    </div>
  `,
});

Vue.component("card-row", {
  props: ["items"],
  template: `
    <div class="container my-3">
      <div class="lobsterFont">
        <h3><slot></slot></h3>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
        <div v-for="item in items" class="col">
          <item-card v-bind:item="item"></item-card >
        </div>
      </div>
    </div>
  `,
});

Vue.component("item-carousel",{
  props: ["images"],
  template:`
  <div id="carouselExampleIndicators" class="carousel slide my-3" data-bs-ride="carousel">
                <div class="carousel-indicators">

                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>

                    <template v-for="n in images.length-1">
                    <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="n">
                        </button>
                    </template>

                </div>
                <div class="carousel-inner">
                    <template v-for="(image, index) in images">
                      <div class="carousel-item" :class="{ active: (index==0) }">
                          <div class="text-center" style="aspect-ratio: 16/9;">
                              <span class="carousel-helper"></span>
                              <img :src="image" class="carousel-image d-inline-block mx-auto">
                          </div>
                      </div>
                    </template>
                    
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
  `,
  computed: {
    aria: function () {
      return `slide ${this.n}`;
    }
  },
})

new Vue({
  el: "#app",
  computed: {
    spotlightItems: function () {
      return items.filter(function (item) {
        return item.designer == "Gijs Bakker";
      });
    },
    newItems: function () {
      let newArray = [];
      for (let i = 1; i <= 6; i++) {
        newArray.push(items[items.length - i]);
      }
      return newArray;
    },
    randomItems: function () {
      let rowItems = [];
      let indexArray = [];
      for (let i = 0; i < items.length; i++) {
        indexArray[i] = i;
      }
      console.log(indexArray);
      for (let i = 0; i < 6; i++) {
        rowItems.push(
          items[
          indexArray.splice(Math.floor(Math.random() * indexArray.length), 1)
          ]
        );
      }
      console.log(indexArray);
      return rowItems;
    },
    pageItem: function () {
      let itemID = window.location.hash;
      itemID = itemID.slice(1);
      // itemID = parseInt(itemID);
      return items.filter(item => item.ID == itemID)[0];
    },
  },
});
