/*!
 * Test Page
 *
 * 2014-05-29
 */

(function() {
	var avScript = new AVscript();

	test("AVScript setOptions", function() {
		var now = "2014/05/29 10:35:00";
		ok(avScript.setOption({
			"duration" : 100
		}), "setOption");
	});
})();
