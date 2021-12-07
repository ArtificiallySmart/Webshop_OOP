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