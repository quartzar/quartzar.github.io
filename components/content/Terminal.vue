<!-- <template>
    <div class="terminal">
        <div class="terminal-header">
            <div class="terminal-buttons">
                <div class="terminal-button terminal-button-red"></div>
                <div class="terminal-button terminal-button-yellow"></div>
                <div class="terminal-button terminal-button-green"></div>
            </div>
        </div>
        <pre class="terminal-body">
            <ContentSlot :use="$slots.default"/>
      </pre>
    </div>
</template> -->
  
<template>
    <div class="terminal">
        <div class="terminal-header">
            <div class="terminal-buttons">
                <div class="terminal-button terminal-button-red"></div>
                <div class="terminal-button terminal-button-yellow"></div>
                <div class="terminal-button terminal-button-green"></div>
            </div>
        </div>
        <pre class="terminal-body">
            <ContentSlot :use="$slots.default"/>
      </pre>
    </div>
</template>
  
<script>

</script>

<style scoped>

.terminal {
    background: #0000003b;
    color: #fff;
    border-radius: 10px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 5px;
    width: 100%;
    margin: 20px auto;
    -webkit-box-shadow: 4px 4px 32px -8px rgba(0,0,0,1);
    -moz-box-shadow: 4px 4px 32px -8px rgba(0,0,0,1);
    box-shadow: 4px 4px 32px -8px rgba(0,0,0,1);
    --at-apply: font-jbmono;
}

.terminal-header {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 5px;
    padding-top: 5px;
}

.terminal-buttons {
    display: flex;
}

.terminal-button {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin-right: 5px;
}

.terminal-button-red {
    background-color: #ff5f56;
}

.terminal-button-yellow {
    background-color: #ffbd2e;
}

.terminal-button-green {
    background-color: #27c93f;
}

.terminal-body {
    /* margin-bottom: 0; */

    white-space: pre-wrap;
    /* CSS 3 */
    white-space: -moz-pre-wrap;
    /* Mozilla, since 1999 */
    white-space: -pre-wrap;
    /* Opera 4-6 */
    white-space: -o-pre-wrap;
    /* Opera 7 */
    word-wrap: break-word;
    /* Internet Explorer 5.5+ */
    overflow: auto; 
    /* add a scrollbar when content overflows */
}


</style>