import camCenter from "../components/camCenter";
import controller from "../components/controller";
import jump from "../components/jump";
import k from "../main";

export default function sc01() {
	k.setGravity(1600);

	const player = k.add([
		k.circle(20),
		k.pos(320, 240),
		k.body(),
		k.area(),
		controller(320),
		jump(),
		"player",
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




	player.onCollide("world", () => {
		player.color = k.RED;
	});

	player.onCollideEnd("world", () => {
		player.color = k.WHITE;
	});


k.setBackground(94, 185, 255)



}
