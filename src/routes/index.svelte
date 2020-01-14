<script>
    import Keyboard from '../components/Keyboard.svelte';
    import Filter from '../components/Filter.svelte';
    import Settings from '../components/Settings.svelte';
    import UpdatePrompt from '../components/UpdatePrompt.svelte';
    import RotatePrompt from '../components/RotatePrompt.svelte';
</script>
<style>
    .mainKeyboard {
        height: 100%;
        width: 100%;
        /*background: #fffc00;
        background: -webkit-linear-gradient(to bottom, #ffffff, #fffc00);
        background: linear-gradient(to bottom, #ffffff, #fffc00); */
    }
</style>

<svelte:head>
    <title>Speakoji - Motor Memory AAC</title>
</svelte:head>

<div class="mainKeyboard">
    <Keyboard />
</div>
<Filter />
<Settings />
<UpdatePrompt />
<RotatePrompt />
