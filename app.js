/**
 * @author Raju Konga
 */

$(function() {

	var worker1 = new Worker("worker1.js");
	var worker2 = new Worker("worker2.js");
	var channel=new MessageChannel();
	
	
	worker1.onmessage = function(e) {
		$("#log").append("<br>" + e.data);
		console.log(e.data);
	}

	worker1.postMessage({
		code : "start",
		msg : "ping"
	},[channel.port1]);
	
	
	
	worker2.onmessage = function(e) {
		$("#log").append("<br>" + e.data);
		console.log(e.data);
	}

	worker2.postMessage({
		code : "start",
		msg : "ping"
	},[channel.port2]);
	

	$("#send1").click(function() {
		var msg = $("#msg").val();
		if (msg && msg != "start")

			worker1.postMessage({
				code : "msgw",
				msg : "ping2"
			});

		$("#msg").val("");

	})
	$("#send2").click(function() {
		var msg = $("#msg").val();
		if (msg && msg != "start")

			worker2.postMessage({
				code : "msgw",
				msg : "ping3"
			});

		$("#msg").val("");

	})
	
	$("#send3").click(function() {
		var msg = $("#msg").val();
		if (msg && msg != "start")

		worker1.postMessage({
				code : "msgch",
				msg : "ping3"
			});

		$("#msg").val("");

	});
	
	
	$("#send4").click(function() {
		var msg = $("#msg").val();
		if (msg && msg != "start")

		worker2.postMessage({
				code : "msgch",
				msg : "ping3"
			});

		$("#msg").val("");

	})
	
});
