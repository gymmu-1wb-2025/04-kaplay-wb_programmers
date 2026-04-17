import k from "../main";

export default function hunt(repeatTime = 2.5, startDelay = 0) {
	return {
		id: "hunt",

		add() {
			this.shootLoop = null;
			this.startWait = null;

			// Erst nach startDelay mit dem Schiess-Loop beginnen
			this.startWait = k.wait(startDelay, () => {
				this.shootLoop = k.loop(repeatTime, () => {
					const player = k.get("player")[0];
					if (!player) return;

					// Nur schiessen wenn Spieler in Reichweite
					const distance = Math.abs(player.pos.x - this.pos.x);
					if (distance < 750) {
						this.enemyShoot(player.pos);
					}
				});
			});
		},

		enemyShoot(targetPos) {
			const direction = targetPos.x > this.pos.x ? 1 : -1;
			const radius = 56;
			const speed = 300;
			const projectile = k.add([
				k.anchor("center"),
				k.circle(radius),
				k.color(k.RED),
				k.pos(this.pos.x + direction * 30, this.pos.y + 66),
				k.body({ gravityScale: 0, isStatic: true }),
				k.area({ isStatic: true }),
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
			if (this.startWait) {
				this.startWait.cancel();
			}
		},
	};
}