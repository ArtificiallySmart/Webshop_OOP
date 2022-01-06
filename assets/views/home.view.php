<!-- Navbar -->
<double-nav :link=true :catarr="catArr"></double-nav>
<!-- /Navbar -->

<!-- Banner -->
<div class="position-relative">
    <img src="https://res.cloudinary.com/dezwo7e6f/image/upload/c_fill,g_auto,h_250,w_1200/b_rgb:000000,e_gradient_fade,y_-0.50/v1639920642/vintastic/images/48544860554171.5a514f8673446_a0lu0r.png" class="img-fluid w-100" alt="">
    <h3 class="position-absolute top-0 start-0 banner blur px-2 py-2 d-none d-md-block">Brighten up your
        home this winter
    </h3>
    <h3 class="position-absolute bottom-0 end-0 mx-2 my-2 banner blur d-none d-md-block">Browse our lighting
        category!
    </h3>
</div>
<!-- /Banner -->

<!-- Spotlight-->
<card-row :items="spotlightItems">In the spotlight:</card-row>
<!-- /Spotlight-->

<!-- New -->
<card-row :items="newItems">New items:</card-row>
<!-- /New -->

<!-- Random -->
<card-row :items="randomItems">A random selection:</card-row>
<!-- /Random -->