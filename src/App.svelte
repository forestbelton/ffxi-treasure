<script lang="ts">
	import ChoiceMatrix from "./ChoiceMatrix.svelte";
	import Digit from "./Digit.svelte";
	import {
		getChoices,
		newState,
		updateDigitSet,
		updateGte,
		updateLte,
		updateOneIs,
	} from "./State";
	import Stats from "./Stats.svelte";

	let state = newState();
	$: choices = getChoices(state);

	const resetState = () => (state = newState());
	const updateOnes = (digits: Set<number>) =>
		(state = updateDigitSet(state, "ones", digits));
	const updateTens = (digits: Set<number>) =>
		(state = updateDigitSet(state, "tens", digits));
	const onGteUpdate = (ev) =>
		(state = updateGte(state, parseInt(ev.target.value)));
	const onLteUpdate = (ev) =>
		(state = updateLte(state, parseInt(ev.target.value)));
	const onOneIsUpdate = (ev) => {
		const oneIs = ev.target.value !== "" ? parseInt(ev.target.value) : null;
		state = updateOneIs(state, oneIs);
	};
</script>

<style>
	main {
		margin: 0 auto;
		max-width: 960px;
	}

	h1 {
		text-align: center;
		margin-bottom: 3rem;
	}

	.content {
		display: flex;
	}

	@media screen and (max-width: 960px) {
		.content {
			flex-direction: column;
		}
	}

	.one-is {
		margin-bottom: 1rem;
	}

	.between > input,
	.one-is > input {
		display: inline-block;
		max-width: 3rem;
		max-height: 1.5rem;
	}

	.label,
	.constraints-label {
		font-weight: bold;
		margin-bottom: 0.25rem;
		margin-top: 1rem;
	}

	.constraints-label {
		margin-top: 0;
	}

	.v-pad {
		margin-bottom: 1rem;
	}

	.h-pad {
		margin-left: 1rem;
	}

	.reset-btn {
		margin-top: 1rem;
	}
</style>

<main>
	<h1>FFXI Treasure Chest Helper</h1>
	<div class="content">
		<div>
			<Stats {choices} />
			<div class="v-pad" />
			<ChoiceMatrix {choices} />
		</div>
		<div class="h-pad" />
		<div>
			<div class="constraints-label">Constraints</div>
			<div class="between">
				Between
				<input type="number" value={state.gte} on:keyup={onGteUpdate} />
				and
				<input type="number" value={state.lte} on:keyup={onLteUpdate} />
			</div>
			<div class="one-is">
				One of the digits is
				<input
					type="number"
					value={state.oneIs || ''}
					on:keyup={onOneIsUpdate} />
			</div>
			<div class="label">First digit</div>
			<Digit digits={state.tenDigits} updateDigits={updateTens} />
			<div class="label">Second digit</div>
			<Digit digits={state.oneDigits} updateDigits={updateOnes} />
			<button class="reset-btn" on:click={resetState}>Reset</button>
		</div>
	</div>
</main>
