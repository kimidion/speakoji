<script>

</script>

<style>
    #rotatePrompt {
        position:fixed;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        background-color: white;
        transition: opactiy 1000ms linear;
        z-index: 100;
    }
    .center {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 5vw;
    }
    .material-icons {
        display: block;
        margin-top: 2rem;
        font-size: 30vw;
    }
    @media screen and (orientation:landscape) {
        #rotatePrompt {
            opacity: 0;
            transition: opactiy 0ms linear;
            pointer-events: none;
            z-index: -1;
        }
     }
</style>

<div id="rotatePrompt">
    <div class="center">ROTATE DEVICE<i class="material-icons">screen_rotation</i></div>
</div>