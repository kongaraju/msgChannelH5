/**
 * @author Raju Konga
 */
var channelPort;
onmessage = function(e) {
	if (e.data.code == "start") {
		channelPort = e.ports[0];
		channelPort.postMessage(e.data.msg+" >> worker2 channel post");
		channelPort.onmessage = getChannelMessage;
	}else if(e.data.code=="msgw")
	{
		postMessage(e.data.msg+" >> worker2 got msg");
	}else if(e.data.code=="msgch")
	{
		channelPort.postMessage(e.data.msg+" >> worker2 got msg");
	}
}
function getChannelMessage(e){
	postMessage(e.data+" >> channel recieved msg in worker2");
}