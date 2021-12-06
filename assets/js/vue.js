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

Vue.component("item-card", {
  props: ["item"],
  template: `
    <div class="card h-100">
      <img :src='item.image'class="card-img-top" alt="..." />
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

new Vue({
  el: "#app",
  data: {
    items: [
      {
        ID: "1",
        name: "Piebald vaas",
        description:
          "Uitzonderlijke Murano vaas van ontwerper Fulvio Bianconi.",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248993/webshop/Piebald_hpe2zc.jpg",
        number: "1",
        material: "glass",
        designer: "Fulvio Bianconi",
        brand: "Murano",
        style: "modern",
        period: "1960",
        state: "as new",
        sellerId: "1",
      },
      {
        ID: "2",
        name: "Arclumis kandelaars",
        description: "Stijlvol en tijdloos ontwerp van Matthew Hilton.",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248993/webshop/3/swan_yxts4u.jpg",
        images: [
          "https://res.cloudinary.com/dezwo7e6f/image/upload/v1638785944/webshop/3/bda9591b-894a-4cd8-97d9-ad940ec72b42_wvye67.jpg",
          "https://res.cloudinary.com/dezwo7e6f/image/upload/v1638785975/webshop/3/94a3850f-a642-4b5f-a953-779f549a31ff_zbdivy.jpg",
          "https://res.cloudinary.com/dezwo7e6f/image/upload/v1638786022/webshop/3/46b5cdc9-1ee5-4dc0-ad20-92866e66eda5_pnazjw.jpg",
          "https://res.cloudinary.com/dezwo7e6f/image/upload/v1638786105/webshop/3/feef3a63-ffe7-44d9-a5a2-6bcd4eae197c_htnkvr.jpg",
          "https://res.cloudinary.com/dezwo7e6f/image/upload/v1638786128/webshop/3/7987aee3-4020-473f-a842-78e7cdd1ec19_vor2lo.jpg"
        ],
        number: "2",
        material: "aluminium",
        designer: "Matthew Hilton",
        brand: "-",
        style: "modern",
        period: "1970",
        state: "as new",
        sellerId: "1",
        price: '61,00'
      },
      {
        ID: "3",
        name: "Flow Fruitschaal",
        description:
          "Prachtige verzilverde fruitschaal gemaakt door Gijs bakker voor Keltum.",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1637263115/webshop/GB/174_Fruit-Bowl_2000_kvj5ch.jpg",
        number: "1",
        material: "aluminium, zilver",
        designer: "Gijs Bakker",
        brand: "Keltum",
        style: "modern",
        period: "2000",
        state: "used",
        sellerId: "2",
        price: '152,00',
      },
      {
        ID: "4",
        name: "3 Point 7 Necklace",
        description: "Zeer zeldzame ketting gemaakt voor Jan Matthesius.",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1637263108/webshop/GB/389_3_Point_7_Necklace_worn_HD_kopie_zitnph.jpg",
        number: "1",
        material:
          "acrylic, glass, aluminium, gold, jade, silver, stainless steel, tantalum, titanium",
        designer: "Gijs Bakker",
        brand: "-",
        style: "modern",
        period: "2014",
        state: "new",
        sellerId: "3",
        price: '699,90',
      },
      {
        ID: "5",
        name: "Blue Sea Broche",
        description:
          "Unieke broche uit de Real serie, gemaakt van saffier en witgoud.",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1637263933/webshop/GB/REAL1_BlueSeaBrooch_m98uyw.jpg",
        number: "1",
        material: "sapphire, gold",
        designer: "Gijs Bakker",
        brand: "",
        style: "modern",
        period: "2004",
        state: "as new",
        sellerId: "4",
        price: '1890,00',
      },
      {
        ID: "6",
        name: "Bolpoottafel",
        description: "Uniek ontwerp gemaakt voor het Holes Project in '93.",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1637263116/webshop/GB/135.Bolpoottafel.1993_sbt4iz.jpg",
        number: "1",
        material: "maple wood",
        designer: "Gijs Bakker",
        brand: "-",
        style: "modern",
        period: "1993",
        state: "used",
        sellerId: "4",
        price: '595,00',
      },
      {
        ID: "7",
        name: "Saw-cut Chair",
        description:
          "Unieke variant van de 'Finger Chair', ontworpen voor Designum",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/c_crop,h_1600,w_1600/v1637264067/webshop/GB/098.Saw-cut-chair.1983_sqvkpr.jpg",
        number: "1",
        material: "steel, mahogany",
        designer: "Gijs Bakker",
        brand: "Designum",
        style: "modern",
        period: "1983",
        state: "used",
        sellerId: "4",
        price: '2490,00'
      },
      {
        ID: "8",
        name: "Joyride",
        description:
          "Een penisvormige pijp van zwart porselein in opdracht van Ornamentum Gallery",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/c_crop,h_871,w_871/v1637263110/webshop/GB/Joyride_2020_r8xf8w.png",
        number: "1",
        material: "black porcelain",
        designer: "Gijs Bakker",
        brand: "Ornamentum Gallery",
        style: "modern",
        period: "2020",
        state: "new",
        sellerId: "4",
        price: '75,00'
      },
      {
        ID: "9",
        name: "Mahoniehouten serveerwagen",
        description: "Prachtige serveerwagen uit Milan, jaren 50.",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248994/webshop/trolley_n4d9pc.jpg",
        number: "1",
        material: "mahogany, copper",
        designer: "-",
        brand: "-",
        style: "MCM",
        period: "1950",
        state: "used",
        sellerId: "1",
        price: '249,00',
      },
      {
        ID: "10",
        name: "Teakhouten ladekast",
        description:
          "Mooi vintage kastje met 2 lades. Gemaakt in de jaren 60 te Duitsland.",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248992/webshop/teak_mopbxe.jpg",
        number: "1",
        material: "teak wood",
        designer: "-",
        brand: "-",
        style: "MCM",
        period: "1960",
        state: "used",
        sellerId: "5",
        price: '149,95'
      },
      {
        ID: "11",
        name: "Glazen vaas Kovaca",
        description:
          "Prachtige glazen vaas naar ontwerp van Kovaca voor glasblazerij Leerdam 2006.",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248991/webshop/blue_kgfyxx.jpg",
        number: "1",
        material: "glass",
        designer: "Kovaca",
        brand: "Leerdam",
        style: "modern",
        period: "2006",
        state: "new",
        sellerId: "6",
        price: '156,00'
      },
      {
        ID: "12",
        name: "Marmer zwart en gouden salontafel",
        description: "Elegante tafel van zwart marmer en goud voor TM Design.",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248993/webshop/marble_ldb73q.jpg",
        number: "1",
        material: "marble, gold",
        designer: "-",
        brand: "TM Design",
        style: "modern",
        period: "-",
        state: "new",
        sellerId: "7",
        price: '450,00'
      },
      {
        ID: "13",
        name: "Wierookhouder",
        description:
          "Bijzondere wierookhouder in strak vormgegeven Art Deco stijl uit de jaren 20.",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248993/webshop/wierook_vzwrsl.jpg",
        number: "1",
        material: "silver",
        designer: "-",
        brand: "-",
        style: "Art Deco",
        period: "1920",
        state: "used",
        sellerId: "8",
        price: '60,00'
      },
      {
        ID: "14",
        name: "Art Deco windhond",
        description:
          "Mooie bronzen windhond in Art Deco stijl op zwart marmeren sokkel.",
        image:
          "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248993/webshop/greyhound_y9gbkg.jpg",
        number: "1",
        material: "bronze, marble",
        designer: "-",
        brand: "-",
        style: "Art Deco",
        period: "1920",
        state: "used",
        sellerId: "9",
        price: '130,00'
      },
    ],
  },
  computed: {
    spotlightItems: function () {
      return this.items.filter(function (item) {
        return item.designer == "Gijs Bakker";
      });
    },
    newItems: function () {
      let newArray = [];
      for (let i = 1; i <= 6; i++) {
        newArray.push(this.items[this.items.length - i]);
      }
      return newArray;
    },
    randomItems: function () {
      let rowItems = [];
      let indexArray = [];
      for (let i = 0; i < this.items.length; i++) {
        indexArray[i] = i;
      }
      console.log(indexArray);
      for (let i = 0; i < 6; i++) {
        rowItems.push(
          this.items[
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
      return this.items.filter(item => item.ID == itemID)[0];
    },
  },
});
