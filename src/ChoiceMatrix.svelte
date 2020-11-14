<script lang="ts">
    export let choices: Set<number>;

    let allChoices: Array<number> = [];
    for (let i: number = 0; i < 100; i++) {
        allChoices.push(i);
    }
</script>

<style>
    .matrix {
        border: 1px solid black;
        border-radius: 2px;
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.5rem;
        max-width: 525px;
        padding: 0.5rem;
    }

    .choice {
        flex: 1 0 9%;
        padding-right: 0.25rem;
    }
</style>

<div>
    <b>Valid choices:</b>
    <div class="matrix">
        {#each allChoices as choice}
            <span class="choice">
                <input type="checkbox" disabled checked={choices.has(choice)} />
                {choice}
            </span>
        {/each}
    </div>
</div>
