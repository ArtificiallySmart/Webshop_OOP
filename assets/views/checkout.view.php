<div class="container mb-3">

    <h1>Checkout</h1>

    <div class="row">


        <div class="col">
            <h3>Shopping Cart</h3>
            <div v-for="(item, i) in cartItems" :key="item.id" class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img :src="item.thumbnail" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body d-flex flex-column h-100 justify-content-between">
                            <div class="d-flex justify-content-between">
                                <a :href="'/?page=item&itemid=' + item.id">
                                    <h5 class="card-title">{{item.name}}</h5>
                                </a>
                                <button type="button" class="btn-close text-reset"
                                    @click="$emit('remove-from-cart', item.product_id)" aria-label="Close"></button>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="row text-center">
                                    <div class="col"><i class="bi bi-dash-lg"></i></div>
                                    <div class="col">{{item.amount}}</div>
                                    <div class="col"><i class="bi bi-plus-lg"></i></div>
                                </div>
                                <p class="card-text">{{new
                                    Intl.NumberFormat(undefined, { style: 'currency', currency: 'EUR'
                                    }).format(item.price * item.amount)}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>Total price: {{totalPrice}}</div>
        </div>
        <div class="col">
            <h3>Shipping address</h3>

            <?php if($_SESSION["loggedin"]): ?>

            <div>
                <?= $user->first_name ?>
                <?= $user->last_name ?>
            </div>
            <div>
                <?= $user->street ?>
                <?= $user->house_number ?>
                <?= $user->addition ? "- $user->addition" : ""?>
            </div>
            <div>
                <?= $user->postal_code ?>,
                <?= $user->city ?>
            </div>
            <button class="btn btn-outline-secondary">Check out</button>
            <?php else: ?>
            <p>Please login or register to continue.</p>
            <?php endif; ?>
        </div>
    </div>
</div>