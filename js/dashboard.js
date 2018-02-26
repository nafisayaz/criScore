


var socket = io();
		
$(function($){

	$('#scoreBoard').submit(function(e){
		e.preventDefault();
		
		var team = $("#team").val();
		var player = $("#player").val();
		var run = $("#run").val();
		var over = $("#over").val();
		var wckt = $("#wckt").val();
		var is_out = $("#is_out").val();


		var TotalScoreDetail = run+'/'+wckt+'  Over:'+over;

		var body = {
			player : player,
			run: run,
			over : over,
			is_out : is_out,
			teamName: team,
			TotalScoreDetail: TotalScoreDetail
		};

		$.post("/save", body, function(save_msg){
			console.log(save_msg);

			socket.emit('send_score', save_msg);
			
		});

	});
});

$(function($){
	
	$("#createMatch").submit(function(e){
		e.preventDefault();
		
		var team1 = $("#team1").val();
		var team2 = $("#team2").val();

		var body = {
			team1 : team1,
			team2 : team2

		};

		$.post('/createMatch', body, function(msg){		
			
			socket.emit('create_match', msg);
			
		});

	});
});





