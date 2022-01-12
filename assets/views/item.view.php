<double-nav :link=true></double-nav>

<div class="container my-3">

    <h2 class="lobsterFont">{{pageItem.name}}</h2>

    <!-- Carousel with thumbnails -->
    <item-carousel :images="pageItem.images"></item-carousel>
    <!-- Carousel with thumbnails -->

    <div class="row">
        <!-- product information ( left column if screen size >= md, else upper column )-->
        <div class="col-md-8 order-2 order-md-1 darkGreen">
            <h4 class="lobsterColor">Description</h4>
            <p> {{pageItem.description}} </p>

            <h4 class="lobsterColor">Information</h4>
            <table class="table table-borderless darkGreen">
                <tbody>
                    <tr>
                        <td>Material</td>
                        <td>{{pageItem.material}}</td>
                    </tr>
                    <tr>
                        <td>Designer/Artist</td>
                        <td>{{pageItem.designer}}</td>
                    </tr>
                    <tr>
                        <td>Manufacturer/Brand</td>
                        <td>{{pageItem.brand}}</td>
                    </tr>
                    <tr>
                        <td>Style</td>
                        <td>{{pageItem.style}}</td>
                    </tr>
                    <tr>
                        <td>Period</td>
                        <td>{{pageItem.period}}</td>
                    </tr>
                    <tr>
                        <td>Condition</td>
                        <td>{{pageItem.state}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- /product information ( left column if screen size >= md, else upper column )-->

        <!-- product information ( right column if screen size >= md, else lower column )-->
        <div class="col-md-4 order-1 order-md-2 darkGreen">
            <div class="lobsterColor">
                <h3 style="display: inline-block">€{{pageItem.price}}</h3>
                <span>price per piece</span>
            </div>
            <small class="text-muted">Excl. shipping</small>
            <div class="lobsterColor">
                <span> {{pageItem.stock}} in stock</span>
            </div>

            <div class="d-grid my-3">
                <div class="container w-50 my-3">
                    <div class="row text-center">
                        <div class="col"><i class="bi bi-dash-lg" @click="itemCounter(-1)"></i></div>
                        <div class="col">{{counter}}</div>
                        <div class="col"><i class="bi bi-plus-lg" @click="itemCounter(1)"></i></div>
                    </div>
                </div>
                <cart-button @click.native="addToCart(pageItem.ID)">{{addToCartText}}</cart-button>

            </div>

        </div>
        <!-- /product information ( right column if screen size >= md, else lower column )-->

    </div>
</div>