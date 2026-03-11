import k from "../main";

export default function sc00() {
	k.add([k.text("Press Space To Start"), k.pos(320, 400), k.anchor("center")]);
	k.onKeyPress("space", () => {
		k.go("lvl-01");
	});
}
