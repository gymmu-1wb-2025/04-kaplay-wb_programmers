import k from "../main";

export default function hunt(repeatTime = 2.5) {
	return {
		id: "hunt",

		add() {
			// Schiess-Loop schiesst alle 2.5 Sekunden
			this.shootLoop = k.loop(repeatTime, () => {
				const player = k.get("player")[0];
				if (!player) return;

				// Nur schiessen wenn Spieler in Reichweite
				const distance = Math.abs(player.pos.x - this.pos.x);
				if (distance < 750) {
					this.enemyShoot(player.pos);
				}
			});
		},


		enemyShoot(targetPos) {
			const direction = targetPos.x > this.pos.x ? 1 : -1;
			const radius = 54;
			const speed = 300;

			const projectile = k.add([
				k.anchor("center"),
				k.circle(radius),
				k.color(k.RED),
				k.pos(this.pos.x + (direction * 30), this.pos.y+66),
				k.body({ gravityScale: 0, isStatic: true }),
				k.area({isStatic: true}),
				k.move(k.RIGHT, direction * speed),
				"enemyProjectile",
			]);


			// Projektil nach 3 Sekunden entfernen
			k.wait(3, () => {
				if (projectile.exists()) {
					projectile.destroy();
				}
			});
		},

		destroy() {
			// Loop beenden wenn NPC zerstört wird
			if (this.shootLoop) {
				this.shootLoop.cancel();
			}
		}
	};
}
