import k from "../main";

/**
 * @typedef {import("kaplay").GameObj} GameObj
 */

export default function shoot() {
	const radius = 8;
	const speed = 600; // pixels pro sekunde; oder :60 falls pixel pro frame

	return {
		id: "shoot",

		/** @this {GameObj}  */
		add() {

			let canShoot = true;

			this.onKeyDown("enter", () => {
				if (!canShoot) return;

				canShoot = false;
				this.shoot();

				// Nach 0.5 Sekunden kann wieder geschossen werden
				k.wait(0.1, () => {
					canShoot = true;
				});
			});

			k.on("shoot", "npc", (npc) => {
				npc.jump();
			});
		},
		/** @this {GameObj}  */
		shoot() {
			const projectile = k.add([
				k.anchor("center"),
				k.circle(radius),
				k.color(k.BLUE),
				k.pos(this.pos.add(30 + radius, + 1, 0)),
				k.body({ gravityScale: 0 }),
				k.area({ restitution: 1 }),
				"projectile",
			]);
			projectile.applyImpulse(k.vec2(speed, 0));

projectile.on("collide", (gameObject) => {
    projectile.destroy();
    if (gameObject.is("npc")) {
        gameObject.hp -= 1; // Reduziert HP um 1

        // Zerstöre NPC wenn HP auf 0 oder weniger
        if (gameObject.hp <= 0) {
            gameObject.destroy();
			const sn = k.getSceneName()
			if (sn === "lvl-01") {
				k.go("lvl-02");
			} else if (sn === "lvl-02") {
				k.go("lvl-03");
			}
        }
    }
});


		},
	};
}
