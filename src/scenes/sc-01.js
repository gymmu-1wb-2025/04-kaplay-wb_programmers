import camCenter from "../components/camCenter";
import controller from "../components/controller";
import jump from "../components/jump";
import shoot from "../components/shoot";
import hunt from "../components/hunt";
import k from "../main";

export default function sc01() {
	k.setGravity(1600);

	const player = k.add([
		k.circle(20),
		k.pos(100, 240),
		k.body(),
		k.area(),
		controller(320),
		jump(),
		shoot(),
		"player",
	]);

player. onUpdate(() => {

player.pos.x = k.clamp(player.pos.x, 0, k.width());
player.pos.y = k.clamp(player.pos.y, 0, k.height());

});
const enemy = k.add([
		k.rect(125, 250),
		k.pos(700, 395),
		k.area(),
		k.body(),
		k.color(255, 0, 0), // Rot
		k.anchor("center"),
		k.health(3),
		"npc",
	]);



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






	player.onCollideEnd("world", () => {
		player.color = k.WHITE;
	});


k.setBackground(94, 185, 255)



}
