new Vue({
  el: "#app",
  data: {
    inCart: false,
  },
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
      for (let i = 0; i < 6; i++) {
        rowItems.push(
          items[
          indexArray.splice(Math.floor(Math.random() * indexArray.length), 1)
          ]
        );
      }
      return rowItems;
    },
    pageItem: function () {
      let itemID = window.location.hash;
      itemID = itemID.slice(1);
      return items.filter(item => item.ID == itemID)[0];
    },
    addToCartText: function (){
      if(localStorage.getItem(this.pageItem.ID)|| this.inCart){
        return 'Toegevoegd aan winkelwagen'
      } else {
        return 'Toevoegen aan winkelwagen'
    }
  }
  },
  methods: {
    addToCart: function (event) {
      if(localStorage.getItem(this.pageItem.ID)){
        alert('This item is already in your cart')
      } else {
      localStorage.setItem(this.pageItem.ID, 1);
      this.inCart = true;
      }
    }
  },
  
});

Vue.config.devtools = true
Vue.config.productionTip = false