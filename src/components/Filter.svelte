<script>
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import { page, filter, filterOpen } from '../stores/user.js';
  import { vocab } from '../vocab/index.js';
  import { actions } from '../constants/actions';

  let wordList = [];
  let filterArr = [];
  let lookup = '';
  let count = 0;
  const keys = Object.keys(vocab);
  keys.forEach((page) => {
    vocab[page].words.forEach((word) => {
      if (word.word && word.word !== '' && !word.action) {
        count += 1;
        wordList.push(word.word.toUpperCase());
        if (word.expand && word.expand.length > 0) {
          word.expand.forEach((w) => {
            count += 1;
            wordList.push(w.toUpperCase());
          });
        }
      }
    });
  });
  console.log(count);
  wordList = wordList.sort();

  const unsubscribe = filter.subscribe(value => {
    filterArr = value && value !== '' ? value.split(',') : [];
    page.set('core');
  });

  onDestroy(unsubscribe);

  $: isSelected = (word) => {
    return filterArr.indexOf(word) !== -1;
  }
  function filterWord(word) {
    // if it's already selected, remove from the filter list
    // else add it to the filter list
    if (isSelected(word)) {
      filterArr.splice(filterArr.indexOf(word), 1);
    } else {
      filterArr.push(word);
    }
    filter.set(filterArr.toString());
  }
</script>

<style>
  .closebtn {
    border: none;
    background: transparent;
    position: absolute;
    top: 1vw;
    right: 1vw;
  }
  .closebtn:focus, .closebtn:active {
    border: none;
    outline: none;
  }
  .filterOverlay {
    background-color: white;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.3);
    position: fixed;
    top: 110vh;
    right: 0px;
    width: 100%;
    height: 94%;
    padding: 15px;
    line-height: 1.2;
    overflow-y: auto;
    transition: top 500ms linear;
  }
  .filterOverlay.open {
    top: 0;
  }
  .material-icons {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 825px) {
    .material-icons {
      font-size: 2rem;
    }
  }
  .filter {
    display: block;
  }
  .wordList {
    margin-top: 5px;
    overflow-y: auto;
  }
  input {
    width: 75%;
    margin: 0 1%;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: white;
    border:1px solid #e9ecef;
  }
  button {
    margin: 4px 1%;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: white;
    border:1px solid #e9ecef;
  }
  button.selected {
    background-color: #e9ecef;
    font-weight: bolder;
  }
  button:focus, button:active {
    outline: none;
  }
  @media only screen and (min-width: 825px) {
    .filter {
      display: block;
    }
  }
</style>


  <div class="filterOverlay" class:open={$filterOpen} transition:fade>
    <button class="closebtn" on:click={() => filterOpen.update(i => !i)}>
        <i class="material-icons">close</i>
    </button>
    <div class="filter">
      <h3>
        <button class="resetFilters" on:click={() => { filter.set(''); lookup = ''; }}>RESET</button>
        Quick filter
      </h3>
      <input type="text" placeholder="search" bind:value={lookup} />
      <button class="clearInput" on:click={() => { lookup = ''; }}>CLEAR</button>
      <div class="wordList">
        {#each wordList as word}
          {#if lookup === '' || word.indexOf(lookup.toUpperCase()) === 0 }
            <button class="option {isSelected(word) ? 'selected' : ''}" on:click={() => filterWord(word)} transition:fade>
              {isSelected(word) ? '🔵 ' : '⚪ '}
              {word}
            </button>
          {/if}
        {/each}
      </div>
    </div>
  </div>

