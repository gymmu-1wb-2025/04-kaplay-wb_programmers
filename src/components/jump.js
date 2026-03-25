import k from "../main";

/**
 * @typedef {import("kaplay").GameObj} GameObj
 */

export default function jump() {
	return {
		id: "jump",
		required: ["body"],




		add() {


			// Springen nur einmal pro Bodenkontakt
			this.onKeyDown("space", () => {
				if (this.isGrounded()) {
					this.jump();
				}
			});
		}
	};
}
