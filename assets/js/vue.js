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
      return items.filter(item => item.ID == itemID)[0];
    },
  },
});
