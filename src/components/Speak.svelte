<script>
  import { onMount,onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import { speak, speechStore } from '../stores/speech.js';
  import { keyboardEnabled } from '../stores/user.js';
  import Speech from 'speak-tts';

  let phrase = '';

  onMount(() => {
      const speech = new Speech(); // will throw an exception if not browser supported
      let success = false;
      speech.init({
        'volume': 1,
            'lang': 'en-US',
            'rate': 1,
            'pitch': 2,
            'splitSentences': true,
            'listeners': {
                'onvoiceschanged': (voices) => {
                    // console.log("Event voiceschanged", voices)
                }
            }
      }).then((data) => {
        // The "data" object contains the list of available voices and the voice synthesis params
        // console.log("Speech is ready, voices are available", data);
        speechStore.set(speech);
      }).catch(e => {
        alert(e);
        console.error("An error occured while initializing : ", e);
      });
  });
  function playSpeech(text) {
    const sayThis = text && text !== '' ? text : phrase;
    $speechStore.speak({
        text: sayThis.toLowerCase(),
        queue: false,
        listeners: {
          onstart: () => {
            // console.log("Start utterance");
          },
          onend: () => {
            // console.log("End utterance");
          },
          onresume: () => {
            // console.log("Resume utterance");
          },
          onboundary: event => {
            // console.log(
            //   event.name +
            //     " boundary reached after " +
            //     event.elapsedTime +
            //     " milliseconds."
            // );
          }
        }
      })
      .then(data => {
        // console.log("Success !", data);
      })
      .catch(e => {
        alert(e);
        console.error("An error occurred :", e);
      });
  }
  
  const unsubscribeSpeak = speak.subscribe(value => {
    if (value && value !== '#reset') {
      playSpeech(value);
      phrase = phrase + ' ' + value;
    }
    if (!value) {
      phrase = '';
    }
  });
  
  const unsubscribeKeyboardEnabled = keyboardEnabled.subscribe(value => {
    if (value) {
      document.getElementById('textBox').focus();
    }
  });

  onDestroy(unsubscribeSpeak, unsubscribeKeyboardEnabled);

  function deleteLastWord() {
    const words = phrase.split(' ');
    words.pop();
    phrase = words.join(' ');
  }
</script>
<style>
  #textBox {
    grid-column: 1 / 11;
    border:2px solid rgb(228, 228, 228);
    border-radius: 5px;
    box-shadow: inset 0 0 12px rgb(228, 228, 228);
    margin: 1px;
    -webkit-user-select: text;
    user-select: text;
    font-size: 1.2rem;
    font-family: sans-serif;
    padding: 10px;
    resize: none;
  }
  .key-button {
    opacity: 1;
    border: 0px;
    text-transform: none !important;
    overflow: hidden;
    font-size: 1rem;
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
    margin: 1px;
    text-align: center;
  }
  .material-icons {
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  .key-button:hover {
    background: white radial-gradient(circle, transparent 1%, #e9ecef 1%) center/15000%;
  }
  .key-button:active {
    border:2px solid rgb(211, 211, 211);
    border-radius: 5px;
    box-shadow: inset 0 0 25px rgb(211, 211, 211);
    outline: none;
    background-color: white;
    background-size: 100%;
    transition: background 0.1s;
  }
  .key-button:focus {
    /* border:2px solid rgb(211, 211, 211);
    border-radius: 5px;
    box-shadow: inset 0 0 25px rgb(211, 211, 211); */
    outline: none;
  }
  @media only screen and (min-width: 825px) {
    .key-button, #textBox {
      margin: 2px;
    }
    .key-button, .material-icons {
      font-size: 1.9rem;
    }
  }
</style>

<textarea id="textBox" readonly={!$keyboardEnabled} bind:value={phrase}></textarea>
<button class="delete key-button" on:click={deleteLastWord}>
  <i class="material-icons">backspace</i>
</button>
<button class="speak key-button" on:click={() => playSpeech(phrase)}>
  <i class="material-icons">play_circle_filled</i>
</button>
