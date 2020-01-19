<script>
    import LocalStorage from "../stores/localStorage.svelte";
</script>

<style>
    .screen {
        position: relative;
        background-color: #ffffff;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        margin: auto;
        overflow: hidden;
        overscroll-behavior-y: none;
    }
    h1 {
        font-size: 1rem;
        line-height: 6vh;
        font-family: sans-serif;
        padding: 0 2%;
        height: 6%;
        position: absolute;
        bottom: 0;
        background-color: rgb(252, 238, 140);
        width: 100%;
        margin: 0;
        z-index: 1;
    }
</style>

<div class="screen">
    <h1>Speakoji - Motor Memory AAC</h1>
    <slot></slot>
</div>
<LocalStorage />