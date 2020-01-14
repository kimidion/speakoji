<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    $: notify = false;
    $: newWorker = {};
    $: refreshing = false;

    // The click event on the pop up notification
    function updateApp() {
        notify = false;
        newWorker.postMessage({ action: 'skipWaiting' });
    }
    onMount(() => {
        // if ('serviceWorker' in navigator) {
        //     navigator.serviceWorker.register('/service-worker-custom.js').then(reg => {
        //         reg.addEventListener('updatefound', () => {
        //             // A wild service worker has appeared in reg.installing!
        //             newWorker = reg.installing;
        //             newWorker.addEventListener('statechange', () => {
        //                 // Has network.state changed?
        //                 switch (newWorker.state) {
        //                     case 'installed':
        //                         if (navigator.serviceWorker.controller) {
        //                             // new update available
        //                             notify = true;
        //                         }
        //                         // No update available
        //                         break;
        //                 }
        //             });
        //             newWorker = newWorker;
        //         });
        //     });
        // }
        // navigator.serviceWorker.addEventListener('controllerchange', function () {
        //     if (refreshing) return;
        //     window.location.reload();
        //     refreshing = true;
        // });
    });
</script>

<style>
    #snackbar {
        max-width: 90%;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        padding: 16px;
        position: fixed;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
        bottom: 5%;
    }
    button {
        border: none;
        background-color: transparent;
        padding: 0;
        margin-left: 10px;
        font-weight: bold;
        color: turquoise;
    }
    button:focus, button:active {
        outline: none;
    }
</style>

{#if notify}
    <div id="snackbar" transition:fade>A new version of this app is available. <button on:click={updateApp}>UPDATE NOW</button></div>
{/if}