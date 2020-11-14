<script lang="ts">
    export let digits: Set<number>;
    export let updateDigits: (digits: Set<number>) => void;

    const EVENS = new Set([0, 2, 4, 6, 8]);
    const ODDS = new Set([1, 3, 5, 7, 9]);

    const clear = () => updateDigits(new Set());

    const toggleDigit = (digit: number) => {
        const newDigits = new Set(digits);

        if (newDigits.has(digit)) {
            newDigits.delete(digit);
        } else {
            newDigits.add(digit);
        }

        updateDigits(newDigits);
    };

    const setEvens = () => updateDigits(EVENS);
    const setOdds = () => updateDigits(ODDS);

    const allDigits = [];
    for (let i = 0; i < 10; i++) {
        allDigits.push(i);
    }
</script>

<style>
    .digit {
        display: inline-block;
        margin-right: 0.5rem;
    }
</style>

<div>
    {#each allDigits as digit}
        <div class="digit">
            <input
                type="checkbox"
                on:click={() => toggleDigit(digit)}
                checked={digits.has(digit)} />
            {digit}
        </div>
    {/each}
</div>

<div>
    <button on:click={setEvens}>Even</button>
    <button on:click={setOdds}>Odd</button>
    <button on:click={clear}>Clear</button>
</div>
