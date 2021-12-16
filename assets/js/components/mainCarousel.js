Vue.component("main-carousel", {
props: ["carouselslides"],
template: `
<div class="container my-3">

    <div class="row justify-content-center">
        <div class="col-12 col-lg-9">
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">

                <div class="carousel-inner">

                    <div v-for="(image, index) in carouselslides" class="carousel-item align-items-center"
                        :class="{ active: index == 0 }">
                        <img :src="image.url" class="d-block w-100 carimg" />
                        <div
                            class="carousel-caption-upper d-none d-md-block w-20 position-absolute top-0 start-50 translate-middle-x">
                            <h2>{{image.uppertext}}</h2>
                        </div>
                        <div
                            class="carousel-caption-lower d-none d-md-block w-20 position-absolute bottom-0 start-50 translate-middle-x">
                            <p class="carouselText2">{{image.lowertext}}</p>
                        </div>
                    </div>

                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    </div>

</div>
`,
});