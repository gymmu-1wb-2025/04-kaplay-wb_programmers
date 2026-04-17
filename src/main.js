import kaplay from "kaplay";
import sc00 from "./scenes/sc-00";
import sc01 from "./scenes/sc-01";
import sc02 from "./scenes/sc-02";
import sc03 from "./scenes/sc-03";
import scWin from "./scenes/win-scene";

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
k.scene("lvl-03", sc03);
k.scene("win", scWin);
k.go("init");

export default k;
