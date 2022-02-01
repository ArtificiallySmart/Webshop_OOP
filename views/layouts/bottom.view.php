<!-- Shopping cart -->
<hidden-cart-list :items="cartItems" :totalprice="totalPrice" @remove-from-cart="removeFromCart">
</hidden-cart-list>
<div class="shopping-cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {{amtItemsInCart}}
        <span class="visually-hidden">amount of items in cart</span>
    </span>
    <i class="bi bi-cart4"></i>
</div>
<!-- /Shopping cart -->
<!-- Footer -->
<vin-footer></vin-footer>
<!-- /Footer -->

</div>
</div>

</body>

</html>