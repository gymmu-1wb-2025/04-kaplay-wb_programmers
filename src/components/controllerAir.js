/**
 * @typedef {import("kaplay").GameObj} GameObj
 */

export default function controllerAir(speed) {
	return {
		id: "controllerAir",

		/** @this {GameObj} */
		add() {
			this.speed = speed;

		// RECHTS
			this.onKeyDown("d", () => {
				this.move(this.speed, 0);
			});
		// LINKS
            this.onKeyDown("a", () => {
				this.move(-this.speed, 0);
			});
        // HOCH
	        this.onKeyDown("w", () => {
		    this.move(0, -this.speed);
	        });

	    // RUNTER
	        this.onKeyDown("s", () => {
		    this.move(0, this.speed);
	        });

		},

		update() {
			console.log(this.pos.y);
		},
	};
}