<!-- Navbar -->
<double-nav :catarr="catArr" @newquery="newQuery" @newhash="newHash" :link=true></double-nav>
<!-- /Navbar -->

<p>Showing all items in the <template v-if="$data.$_GET.subcategory"> {{$data.$_GET.subcategory}} subcategory:</template> <template v-else>
        {{$data.$_GET.category}} category:</template></p>

<ul class="list-group" v-if="catResults">
    <li v-for="item in catResults" class="list-group-item" style="height: 200px;">
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
                    <p>{{new Intl.NumberFormat(undefined,{style:'currency',currency:'EUR'}).format(item.price)}}
                    </p>
                </div>
            </div>
        </div>
    </li>
</ul>