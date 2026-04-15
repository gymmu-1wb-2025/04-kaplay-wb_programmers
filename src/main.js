import kaplay from "kaplay";
import sc00 from "./scenes/sc-00";
import sc01 from "./scenes/sc-01";
import sc02 from "./scenes/sc-02";

const k = kaplay({
	height: 480,
	width: 800,
	canvas: document.getElementById("game-canvas"),
	background: "#000000",
	global: false,
	debug: true,
	debugKey: "r",
});

k.scene("init", sc00);
k.scene("lvl-01", sc01);
k.scene("lvl-02", sc02);

k.go("lvl-02");

export default k;
