<script lang="ts">
    export let choices: Set<number>;

    let median: string = "N/A";
    let guesses: string = "N/A";

    $: {
        median = "N/A";
        if (choices.size > 0) {
            const choiceList: Array<number> = [...choices];
            choiceList.sort((a, b) => a - b);
            median = choiceList[Math.floor(choiceList.length / 2)].toString();
        }

        guesses = "N/A";
        if (choices.size == 1) {
            guesses = "1";
        } else if (choices.size > 1) {
            guesses = Math.ceil(
                Math.log(choices.size) / Math.log(2)
            ).toString();
        }
    }
</script>

<style>
    .label {
        display: inline-block;
        font-weight: bold;
        min-width: 5rem;
    }
</style>

<div>
    <div><span class="label">Median:</span> {median}</div>
    <div><span class="label"># Guesses:</span> {guesses}</div>
</div>
