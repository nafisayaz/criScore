

var socket = io();


$(document).ready(function(){

	$.get("/fetch",function(save_msg){

		console.log("This from fetch method");

		save_msg.forEach(function(data){
			
			if(data.teamName === "IND" || data.teamName === "PAK" || data.teamName === "AUS" || 
				data.teamName === "ENG" || data.teamName === "SRI" || data.teamName === "AFRICA" ||
				data.teamName === "HOLLAND" || data.teamName === "KENYA"  ){
				set_matches(data);
			}
			else{
				set_created_matches(data);
			}

		});

	});

});

function show(className){

	var body = {
		teamName: className
	};

	$.post("/show",body, function(save_msg){

		$("#viewTable pre").remove();
		for( var i = save_msg.length-1; i>=0; --i){
			$("#viewTable").append($("<pre><li>").text(save_msg[i].teamName+":   "+save_msg[i].TotalScoreDetail));
		}
	});

}


$(document).ready(function(){
	
	$("#id_1").mouseover(function(){
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


$(document).ready(function(){
	
	$("#msg").mouseover(function(){
		console.log("DIV.MSG-------------->");
		$("#msg").css("background-color",  "#AAA");
	});
	$("#msg").mouseout(function(){
		$("#msg").css("background-color", "#ccc");
	});

});

function set_created_matches(msg){

		var div = $('<div>').addClass(msg.teamName).css({
				"height": "100px",
				"width": "510px",
				"background": "#ccc",
				"margin-left": "25px",
				"margin-top": "2%"
				
			}).append($("<h3>").text(msg.teamName +" Vs "+ msg.teamName));

		var player 	= $('<h4>').attr('id', 'player').css({
				
				"margin-left": "200px",
				"margin-top": "-7%"
				
			}).text(msg.player); 
		
		
		
		var run		= $('<h4>').attr('id', 'run').css({
					
				"margin-left": "270px",
				"margin-top": "-8%"
				
			}).text(msg.run); 
		
		var per		= $('<h4>').attr('id', 'run').css({
					
				"margin-left": "300px",
				"margin-top": "-8%"
				
			}).text("/"); 
		
		
		var	ball 	= $('<h4>').attr('id', 'ball').css({
					
				"margin-left": "310px",
				"margin-top": "-7%"
				
				}).text(msg.over); 
		
		
		var stats 	= $('<h4>').addClass('id', 'status').css({
					
				"margin-left": "400px",
				"margin-top": "-8%"
				
				}).text(msg.stats); 
		
		
		var teamName = $('<h2>').attr('id', 'teamName').text(msg.teamName).css({
				"color":"blue",
				"margin-left": "0%",
				"margin-top": "12%"
				
				}); 
		
		var TotalScoreDetail = $('<h4>').attr('id', 'TotalScoreDetail').css({
					
				"margin-left": "150px",
				"margin-top": "-8%"
				
				}).text(msg.run+"/"+msg.over+" Over:"+msg.over); 
		
		var view = $('<h4>').attr('id', 'view').css({
					
				"margin-left": "400px",
				"margin-top": "-8%"
				
				}).text("view"); 

		div.append(player);
		div.append(run);
		div.append(per);
		div.append(ball);
		div.append(stats);
		div.append(teamName);
		div.append(TotalScoreDetail);
		div.append(view);

	$("#body").append(div);

}

socket.on('create_match',function(msg){	

	set_created_matches(msg);
});



/*

$(document).ready(function(){

	$.get('/fetchCreatedMatches', function(list_matches){

		console.log("list --------> fetchCreatedMatches()");
		list_matches.forEach(function(data){
			set_created_matches(data);
		});

	});
});


*/


