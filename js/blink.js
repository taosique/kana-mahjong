var BLINK_ID_ARRAY = [];
var BLINK_ITERATION_TIME = 200;
var BLINK_TOTAL_DURATION_TIME = 2000;

function blinkForTime(id, blinkStyle, blinkFinalStyle) {
	BLINK_ID_ARRAY[id] = setInterval('toggleStyle("' + id + '", "' + blinkStyle + '", "' + blinkFinalStyle + '")', BLINK_ITERATION_TIME);
	setTimeout('stopBlinking("' + id + '", "' + blinkStyle + '", "' + blinkFinalStyle + '")', BLINK_TOTAL_DURATION_TIME);
}
function stopBlinking(id, blinkStyle, blinkFinalStyle) {
	clearInterval(BLINK_ID_ARRAY[id]);
	e = document.getElementById(id);
	e.removeClassName(blinkStyle);
	e.addClassName(blinkFinalStyle);
}
function toggleStyle(id, blinkStyle) {
	var e = document.getElementById(id);
	if (e.hasClassName(blinkStyle)) {
		e.removeClassName(blinkStyle);
	} else {
		e.addClassName(blinkStyle);	
	}
}