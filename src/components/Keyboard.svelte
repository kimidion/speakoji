<script>
  import { onMount, onDestroy } from 'svelte';
  import Speak from './Speak.svelte';
  import { fade } from 'svelte/transition';
  import { page, filter, filterOpen, settingsOpen, expandEnabled, keyboardEnabled } from '../stores/user.js';
  import { speak } from '../stores/speech.js';
  import { actions } from '../constants/actions';
  import { keyGrid } from '../constants/keyGrid';
  import { colors } from '../constants/colors';
  import { vocab } from '../vocab/index.js';

  let loading = false;
  let filterArr = [];
  const keyboard = keyGrid;
  $: expandedWord = "###";
  
  const unsubscribePage = page.subscribe(value => {
    loading = true;
    setTimeout(() => {
      vocab[value].words.forEach((w) => {
        keyboard[w.y][w.x] = w;
      });
      checkFilters();
      loading = false;
    }, 200);
  });
  const unsubscribeFilter = filter.subscribe(value => {
    filterArr = value && value !== '' ? value.split(',') : [];
    checkFilters();
  });

  onDestroy(unsubscribePage, unsubscribeFilter);

  function checkFilters() {
    for (let r = 0; r < keyboard.length; r += 1) {
      for (let k = 0; k < keyboard[r].length; k += 1) {
        const w = keyboard[r][k];
        if (w.word && w.word !== "") {
          w.filtered = filterArr.indexOf(w.word.toUpperCase()) !== -1;
          if (filterArr.length && w.action === actions.page && vocab[w.word]) {
            for (let i = 0; i < vocab[w.word].words.length; i += 1) {
              const childWord = vocab[w.word].words[i];
              if (childWord.word && childWord.word !== "" && filterArr.indexOf(childWord.word.toUpperCase()) !== -1) {
                w.filtered = true;
                // exit
                i = vocab[w.word].words.length;
              }
            }
          }
        }
      }
    }
  }

  function choose(word) {
    if (!word.word || word.word === '') {
      return false;
    }
    switch (word.action) {
      case actions.page:
        if (!vocab[word.word]) {
          return false;
        }
        return page.set(word.word);
      case actions.clear:
        return speak.set(null);
      case actions.back:
        return page.set('core');
      case actions.keyboard:
        // this will enable the device keyboard
        return keyboardEnabled.update(i => !i);
      case actions.pluralize:
        // this will pluralize the previously entered word
        return true;
      case actions.expand:
        // toggle the expand functionality off/on
        return expandEnabled.update(i => !i);
      case actions.filter:
        // this will open the filter box
        return filterOpen.update(i => !i);
      case actions.settings:
        // this will open the settings menu
        return settingsOpen.update(i => !i);
      default:
        if (word.action) {
          return false;
        }
        // if expand is enabled and the word has expansions, show the expansions on first click
        if ($expandEnabled && word.expand && word.expand.length && word.word !== expandedWord) {
          return expandedWord = word.word;
        }
        expandedWord = "###";
        speak.set(word.word);
        return page.set('core');
        // returning with the below line will allow the user to enter the same word more than once
        // stopping this for now until the option is moved into a setting
        // #preventButtonMashing
        // return speak.set('#reset');
    }
  }
</script>

<style>
  .grid {
    height: 94%;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(12, calc(100%/12));
    grid-template-rows: repeat(6, calc(100%/8));
    grid-gap: 0;
    grid-auto-flow: dense;
    padding: 0.1%;
    position: absolute;
    bottom: 6%;
    left: 0;
    right: 0;
    background-color: transparent;
    user-select: none;
  }
  .grid:selection, .key-button:selection {
      background: transparent
  }
  .key {
    margin: 1px;
  }
  .key-button {
    opacity: 1;
    height: 100%;
    width: 100%;
    border: 0px;
    text-transform: none !important;
    overflow: hidden;
    font-size: .5rem;
    min-width: 10px !important;
    background-color: white;
    position: relative;
    color: #263238;
    font-weight: 500;
    letter-spacing: 1px;
    white-space: nowrap;
    background-position: center;
    transition: background 0.1s, opacity 100ms;
    border:2px solid rgb(228, 228, 228);
    border-radius: 5px;
    box-shadow: inset 0 0 12px rgb(228, 228, 228);
  }
  .loading .key-button {
    opacity: 0;
  }
  .loading .key-button.BACK,
  .loading .key-button.CLEAR,
  .loading .key-button.QWERTY,
  .loading .key-button.PLURAL,
  .loading .key-button.EXPAND,
  .loading .key-button.FILTER,
  .loading .key-button.SETTINGS {
    opacity: 1;
  }
  .key-button.BACK,
  .key-button.CLEAR,
  .key-button.QWERTY,
  .key-button.PLURAL,
  .key-button.EXPAND,
  .key-button.FILTER,
  .key-button.SETTINGS {
    opacity:1;
    pointer-events: all;
  }
  .hide {
    opacity: 0;
    pointer-events: none;
  }
  .key-button:active {
    outline: none;
    background-color: rgb(228, 228, 228);
    background-size: 100%;
    transition: background 0.1s;
  }
  .key-button:focus {
    outline: none;
  }
  .key-button.inactive {
    pointer-events: none;
  }
  .key.expanded .key-button {
    z-index: 2;
  }
  #overlay {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #263238;
    opacity: .4;
    z-index: 1;
    pointer-events: all;
  }
  .bg {
    border-radius: 50%;
    width: calc(100vw/8);
    height: calc(100vw/9);
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -33%);
  }
  .wordSpan {
    position: absolute;
    top: 5%;
    left: 5%;
    color: #94a0a7;
  }
  .icon {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: .8rem;
  }
  .material-icons {
    font-size: 1rem;
    margin-top: 4px;
  }
  .material-icons.check {
    color: green;
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
  .expandable {
    background-color: #94a0a7;
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
    padding: 2px;
  }
  .options {
    position: absolute;
    background-color: white;
    height: calc((100vw/12));
    opacity: 0;
    pointer-events: none;
    transition: opactiy 500ms linear;
  }
  .key.expanded .expandable {
    opacity: 0;
  }
  .key.expanded .options {
    opacity: 1;
    pointer-events: all;
  }
  .options .key-button {
    width: calc((100vw/12 - 2px));
    height: calc((100vh/9));
    display: inline-block;
    margin: 1px;
  }
  @media only screen and (min-width: 825px) {
    .key {
      margin: 2px;
    }
    .key-button {
      font-size: .75rem;
    }
    .bg {
      width: calc(100vw/8);
      height: calc(100vw/9);
      transform: translate(-50%, -50%);
    }
    .icon {
      font-size: 1.5rem;
    }
    .material-icons {
      font-size: 1.9rem;
    }
    .options .key-button {
      margin: 2px;
      width: calc((100vw/12 - 4px));
      height: calc((100vh/9 - 2px));
    }
  }
</style>

<div class="grid" class:loading class:filtered={filterArr.length}>
  <Speak />
  {#each keyboard as row, i}
    {#each row as word, j}
      <div class="key {word.word}" class:expanded={word.word === expandedWord} class:filtered={filterArr.length && word.filtered}>
        <button
          transition:fade="{{ duration: 200 }}"
          class="key-button {word.word}"
          class:inactive={!word.word || word.word === ''}
          class:hide={filterArr.length && !word.filtered}
          on:click={() => choose(word)}
        >
          {#if word.word && word.word !== ''}
            <span class="bg" style="background-color: {word.action && word.action === actions.page ? colors.actionbg : word.bg || 'transparent'}" />
            {#if word.word && word.word.indexOf('core') !== 0}
              <span class="wordSpan">{word.word}</span>
            {/if}
            {#if word.icon && word.icon !== ''}
              <span class="icon"><i class="material-icons">{word.icon}</i></span>
            {:else if word.emoji && word.emoji !== ''}
              <span class="icon">{word.emoji}</span>
            {:else if word.emoji === '' && word.icon === ''}
              <span class="icon"><i class="material-icons">play_for_work</i></span>
            {/if}
            {#if word.action && ((word.action === actions.expand && $expandEnabled) || (word.action === actions.keyboard && $keyboardEnabled))}
              <i class="material-icons check" transition:fade>check_circle</i>
            {/if}
            {#if $expandEnabled && word.expand && word.expand.length}
              <span class="expandable" />
            {/if}
          {/if}
        </button>
        {#if $expandEnabled && word.expand && word.expand.length}
          <div class="options">
            {#each word.expand as option}
              <button
                class="key-button"
                on:click={() => choose({word: option})}
              >
                {option}
              </button>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  {/each}
  {#if $expandEnabled && expandedWord !== "###"}
    <div id="overlay" role="button" on:click={() => { expandedWord = "###" }} transition:fade />
  {/if}
</div>
