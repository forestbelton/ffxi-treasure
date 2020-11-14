export type State = {
    oneDigits: Set<number>,
    tenDigits: Set<number>,

    gte: number,
    lte: number,
    oneIs: number | null,
}

export const newState = (): State => {
    const oneDigits: Set<number> = new Set();
    for (let i = 0; i < 10; i++) {
        oneDigits.add(i)
    }

    const tenDigits: Set<number> = new Set();
    for (let i = 0; i < 10; i++) {
        tenDigits.add(i)
    }

    return {
        oneDigits,
        tenDigits,
        gte: 0,
        lte: 99,
        oneIs: null,
    }
}

// Projections
export const getChoices = (state: State): Set<number> => {
    const choices: Set<number> = new Set();

    for (let i = 0; i < 100; i++) {
        if (i < state.gte || i > state.lte) {
            continue
        }

        const tensDigit = Math.floor(i / 10)
        const onesDigit = i % 10

        if (state.oneIs !== null) {
            console.log(state.oneIs, tensDigit, onesDigit)
        }

        if (state.oneIs !== null && tensDigit != state.oneIs && onesDigit != state.oneIs) {
            continue
        }

        if (!state.tenDigits.has(tensDigit) || !state.oneDigits.has(onesDigit)) {
            continue
        }

        choices.add(i)
    }

    return choices
}

// Updates
type DigitSet = "ones" | "tens"

export const updateDigitSet = (state: State, digitSet: DigitSet, digits: Set<number>): State => {
    const oneDigits = digitSet === "ones" ? digits : state.oneDigits
    const tenDigits = digitSet === "tens" ? digits : state.tenDigits

    return {
        ...state,
        oneDigits,
        tenDigits,
    }
}

export const updateGte = (state: State, gte: number): State => ({
    ...state,
    gte,
})

export const updateLte = (state: State, lte: number): State => ({
    ...state,
    lte,
})

export const updateOneIs = (state: State, oneIs: number | null): State => ({
    ...state,
    oneIs,
})
