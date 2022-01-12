Vue.component("catresults", {
    props: ["type"],
    data: function () {
        return {
            items: []
        }
    },
    created() {
        this.getSearch(this.type);
    },
    methods: {
        getSearch() {
            let self = this;
            axios({
                method: 'GET',
                url: `?page=mysql&action=get${type}`,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            }).then(function (response) {
                if (response.data.success) {
                    self.items = response.data.items;
                }
            }).catch(function (error) {

            });
        }
    },
    template: `
`,
});