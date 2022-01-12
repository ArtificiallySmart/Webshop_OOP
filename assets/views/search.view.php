<double-nav :link=true></double-nav>


<div class="container my-3">

    <p>Your search for "<i>{{$data.$_GET.search}}</i>" had {{searchResults.length}} results</p>

    <ul class="list-group" v-if="searchResults">
        <li v-for="item in searchResults" class="list-group-item" style="height: 200px;">
            <div class="d-flex h-100">
                <img :src=" item.thumbnail" class="img-thumbnail h-100" alt="...">
                <div class="d-flex flex-column justify-content-between my-3">
                    <div>
                        <a :href="'/item.html#' + item.ID">
                            <h5>{{item.name}}</h5>
                        </a>
                    </div>
                    <div>
                        <p>{{item.short}}</p>
                    </div>
                    <div>
                        <p>{{new
                                        Intl.NumberFormat(undefined,{style:'currency',currency:'EUR'}).format(item.price)}}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    </ul>

</div>