import k from "../main";

/**
 * @typedef {import("kaplay").GameObj} GameObj
 */

export default function jump() {
	return {
		id: "jump",
		/** @this {GameObj} */
		add() {
			let canJump = true;

			// Springen nur einmal pro Bodenkontakt
			this.onKeyDown("space", () => {
				if (canJump && this.isGrounded()) {
					this.jump();
					canJump = false;
				}
			});

			// Erst wenn man wieder landet, darf man erneut springen
			this.onGround(() => {
				canJump = true;
			});

			this.onCollide("npc", (npc, col) => {
				// Von oben auf NPC
				if (col.normal.y < 0) {
					npc.hp -= 1;
					this.jump();
				} else {
					this.hp -= 1;
				}
			});
		},
	};
}
