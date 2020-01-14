<script>
    import { fade } from 'svelte/transition';
    import { settingsOpen } from '../stores/user.js';
</script>

<style>
    .closebtn {
        border: none;
        background: transparent;
        position: fixed;
        top: 1vw;
        right: 1vw;
    }
    .closebtn:focus, .closebtn:active {
        border: none;
        outline: none;
    }
    .settingsOverlay {
        background-color: white;
        box-shadow: 0px 3px 15px rgba(0,0,0,0.3);
        position: fixed;
        top: 0;
        right: 0px;
        height: 100%;
        width: 40vw;
        padding: 15px;
        line-height: 1.2;
    }
    .material-icons {
        font-size: 1.5rem;
    }
    @media only screen and (min-width: 825px) {
        .settingsOverlay {
            width: 25vw;
        }
        .material-icons {
            font-size: 2rem;
        }
    }
</style>

{#if $settingsOpen}
    <div class="settingsOverlay" transition:fade>
        <button class="closebtn" on:click={() => settingsOpen.update(i => !i)}>
            <i class="material-icons">close</i>
        </button>
        <h3><a href="/about">About</a></h3>
    </div>
{/if}
