import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
	state: () => ({
		return: {
			toggleMenu: true,
		},
	}),

	actions: {},

	getters: {
		getToggleMenu() {
			return this.toggleMenu;
		},
	},
});
