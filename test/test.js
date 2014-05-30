/*!
 * Test Page
 *
 * 2014-05-29
 */

(function() {
	var avScript = new AvScript(document.querySelector("#wrapper"));

	test("AVScript", function() {
		var now = "2014/05/29 10:35:00";
		ok(avScript.setOption({
			"duration" : 100
		}), "setOption");

		ok(avScript.setWrapper(document.querySelector("#wrapper")), "setWrapper");

		ok(avScript.on(), "on");

		ok(avScript.setVideoAttribute({
			"auto-play" : true
		}), "setAttribute (Auto-play)");
	});


	console.log(avScript);
})();
