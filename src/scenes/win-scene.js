import k from "../main";

export default function () {
	k.add([
		k.text("YOU WIN!"),
		k.pos(k.width() / 2, k.height() / 2),
		k.anchor("center"),
	]);

	k.onKeyPress("enter", () => {
		k.go("init");
	});
}