

var socket = io();


$(document).ready(function(){

	$.get("/fetch",function(save_msg){

		console.log("This from fetch method");

		console.log(save_msg);

		save_msg.forEach(function(data){

			set_matches(data)
		});

	});

});

function show(className){
	
	console.log(className);

	var body = {
		teamName: className
	};



	$.post("/show",body, function(save_msg){

		$("#viewTable pre").remove();
		console.log("This from show() ----> "+save_msg );
		for( var i = save_msg.length-1; i>=0; --i){
			$("#viewTable").append($("<pre><li>").text(save_msg[i].teamName+":   "+save_msg[i].TotalScoreDetail));
		}
	});

}


$(document).ready(function(){
	
	$("#id_1 ").mouseover(function(){
		$("#id_1").css("background-color",  "#AAA");
	});
	$("#id_1").mouseout(function(){
		$("#id_1").css("background-color", "#ccc");
	});


	$("#id_2").mouseover(function(){
		$("#id_2").css("background-color",  "#AAA");
	});
	$("#id_2").mouseout(function(){
		$("#id_2").css("background-color", "#cccc");
	});
	

	$("#id_3").mouseover(function(){
		$("#id_3").css("background-color",  "#AAA");
	});
	$("#id_3").mouseout(function(){
		$("#id_3").css("background-color", "#ccc");
	});
	

	$("#id_4").mouseover(function(){
		$("#id_4").css("background-color",  "#AAA");
	});
	$("#id_4").mouseout(function(){
		$("#id_4").css("background-color", "#ccc");
	});

});



function set_matches(msg){

	
	var player = "div."+msg.teamName+" #player";
	var run = "div."+msg.teamName+" #run";
	var ball = "div."+msg.teamName+" #ball";
	var stats = "div."+msg.teamName+" #status";
	var team = "div."+msg.teamName+" #teamName";
	var score = "div."+msg.teamName+" #TotalScoreDetail";

	$(player).text(msg.player);
	$(run).text(msg.run);
	$(ball).text(msg.over);
	$(stats).text(msg.is_out);
	$(team).text(msg.teamName);
	$(score).text(msg.TotalScoreDetail);

}



socket.on('send_score',function(msg){	
		set_matches(msg);
});


