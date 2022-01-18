Vue.component("item-carousel",{
props: ["images"],
template:`
<div v-if="images" id="carouselExampleIndicators" class="carousel slide my-3" data-bs-ride="carousel">
    <div class="carousel-indicators">

        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>

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
})