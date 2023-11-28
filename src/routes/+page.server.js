import { uuidv4 } from "$lib/utils"

export const actions = {
	default: async ({ request }) => {
		const { origin, destiny, precio } = Object.fromEntries(await request.formData())
		const user_id = uuidv4();



		return { success: true };
	}
};