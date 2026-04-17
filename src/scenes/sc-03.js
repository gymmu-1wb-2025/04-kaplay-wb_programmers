import camCenter from "../components/camCenter";
import controllerAir from "../components/controllerAir";
import shoot from "../components/shoot";
import hunt from "../components/hunt";
import k from "../main";

export default function sc01() {
	k.setGravity(0);

	let sharedBossHp = 20;
let bossFightEnded = false;

function damageAllBosses(dmg = 1) {
	if (bossFightEnded) return;

	sharedBossHp -= dmg;

	if (sharedBossHp <= 0) {
		bossFightEnded = true;

		k.get("npc").forEach((boss) => {
			if (boss.exists()) boss.destroy();
		});

		k.go("win");
	}
}

	const player = k.add([
		k.circle(20),
		k.pos(100, 240),
		k.body(),
		k.area(),
		controllerAir(320),
		shoot(),
		{ hp: 3, maxHp: 3 }, // Spieler-Leben
		"player",
	]);

player. onUpdate(() => {

player.pos.x = k.clamp(player.pos.x, 0, k.width());
player.pos.y = k.clamp(player.pos.y, 0, k.height());

});

// Kollision mit NPC-Projektilen
	player.onCollide("enemyProjectile", (projectile) => {
		projectile.destroy();
		player.hp -= 1;

		// Visuelle Anzeige für Schaden
		player.color = k.RED;
		k.wait(0.2, () => {
			player.color = k.WHITE;
		});

		// Game Over bei 0 HP
		if (player.hp <= 0) {
			k.go("init"); // Neustart
		}
	});

	k.add([
		k.rect(800, 20),
		k.pos(0, 420),
		k.color(124, 252, 0),
		k.body({ isStatic: true }),
		k.area(),
		"world",
	]);

k.add([
		k.rect(800, 40),
		k.pos(0, 440),
		k.color(139, 69, 19),
		k.body({ isStatic: true }),
		k.area(),
		"world",
	]);


	k.add([
		k.rect(125, 100),
		k.pos(700, -16),
		k.area(),
		k.body({ isStatic: true }),
		k.color(255, 0, 0), // Rot
		k.anchor("center"),
		hunt(2.5, 0),
		{ hp: 150 }, // HP
		"npc",
	]);

	k.add([
		k.rect(125, 100),
		k.pos(700, 300),
		k.area(),
		k.body({ isStatic: true }),
		k.color(255, 0, 0), // Rot
		k.anchor("center"),
		hunt(2.5, 0.6),
		{ hp: 150 }, // HP
		"npc",
	]);

	k.add([
		k.rect(125, 100),
		k.pos(700, 130),
		k.area(),
		k.body({ isStatic: true }),
		k.color(255, 0, 0), // Rot
		k.anchor("center"),
		hunt(2.5, 1.2),
		{ hp: 150 }, // HP
		"npc",
	]);

k.add([
		k.rect(125, 500),
		k.pos(700, 190),
		k.area(),
		k.body({ isStatic: true }),
		k.color(255, 0, 0), // Rot
		k.anchor("center"),
		hunt(2.5, 1.8),
		{ hp: 150 }, // HP
		"npc",
	]);

k.add([
		k.rect(125, 500),
		k.pos(700, 75),
		k.area(),
		k.body({ isStatic: true }),
		k.color(255, 0, 0), // Rot
		k.anchor("center"),
		hunt(2.5, 2.4),
		{ hp: 150 }, // HP
		"npc",
	]);

	k.onCollide("playerBullet", "npc", (bullet, boss) => {
	if (!bullet.exists()) return;

	bullet.destroy();
	damageAllBosses(1);
});



	player.onCollideEnd("world", () => {
		player.color = k.WHITE;
	});


k.setBackground(94, 185, 255)

// Leben-Anzeige
	k.onDraw(() => {
		k.drawText({
			text: `Leben: ${player.hp}/${player.maxHp}`,
			pos: k.vec2(20, 20),
			size: 24,
			color: k.WHITE,
		});
	});
}
