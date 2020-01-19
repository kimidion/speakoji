<script>
    import { onMount, onDestroy } from 'svelte';
    import { page, filter } from './user.js';

    if (typeof window !== "undefined") {
        const selectedPage = localStorage.getItem("page");
        const selectedFilter = localStorage.getItem("filter");
        // subscribe to filter
        const unsubscribeFilter = filter.subscribe(value => {
            localStorage.setItem("filter", value);
        });
        // subscribe to page
        const unsubscribePage = page.subscribe(value => {
            localStorage.setItem("page", value);
        });
        if (selectedFilter && selectedFilter !== "null") {
            filter.set(selectedFilter);
        }
        if (selectedPage && page !== null) {
            page.set(selectedPage);
        }

        onDestroy(unsubscribePage, unsubscribeFilter);
    }

</script>