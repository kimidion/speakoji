<script>
    import { settingsOpen } from '../stores/user.js';
    settingsOpen.set(false);
</script>
<style>
    .container {
        padding: 2%;
        min-width: 100%;
        min-height: 100%;
        background-color: white;
    }
</style>
<svelte:head>
    <title>About Speakoji</title>
</svelte:head>

<div class="container">
    <p><a href="/">BACK</a></p>
    <p>High quality, motor memory text-to-speech apps should be free for all and available on all devices! This app is in development.</p>
    <p>Email me at kim[dot]morphplay[at]gmail[dot]com</p>
    <h3>More info about AAC and motor planning/memory</h3>
    <ul>
        <li><a href="https://www.asha.org/PRPSpecificTopic.aspx?folderid=8589942773&section=Key_Issues" target="_blank" title="Augmentative and Alternative Communication">Augmentative and Alternative Communication</a></li>
        <li><a href="http://adaptingcreatively.blogspot.com/2012/07/one-easy-way-to-increase-vocabulary-on.html" target="_blank" title="Adapting Creatively: One Easy Way to Increase Vocabulary on AAC Devices">Adapting Creatively: One Easy Way to Increase Vocabulary on AAC Devices</a></li>
    </ul>
    <h3>Starter Vocabulary Reference List</h3>
    <ul>
        <li><a href="http://www.vocabularybuilding.org/500-most-commonly-used-english-words.html" target="_blank" title="500 Most Common English Words">500 Most Common English Words</a></li>
    </ul>
</div>