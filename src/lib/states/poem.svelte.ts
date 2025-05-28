interface PoemLine {
	entity: number;
	phrase: string;
}

interface FormState {
	isSubmited: boolean;
	poem: PoemLine[] | string;
}

export const formState = $state<FormState>({
	isSubmited: false,
	poem: []
});
