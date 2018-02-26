

var save ={
	IND:	[],
	PAK: 	[],
	AUS:	[],
	ENG: 	[],
	SRI: 	[],
	AFRICA:	[],
	HOLLAND:[],
	KENYA:	[]

};

var createMatch  = [];
var createdMatches = [];


function insert(body){
	createdMatches.push(body);
}


exports.save_data = function(body, func){

	var bool = false;

	if(body.teamName === "IND")
	{
		save.IND.push(body);
		bool = true;
	}
	else if(body.teamName === "PAK")
	{
		save.PAK.push(body);
		bool = true;
	}

	else if(body.teamName === "AUS")
	{
		save.AUS.push(body);
		bool = true;
	}
	else if(body.teamName === "ENG")
	{
		save.ENG.push(body);
		bool = true;
	}
	else if(body.teamName === "SRI")
	{
		save.SRI.push(body);
		bool = true;
	}
	else if(body.teamName === "AFRICA")
	{
		save.AFRICA.push(body);
		bool = true;
	}
	else if(body.teamName === "HOLLAND")
	{
		save.HOLLAND.push(body);
		bool = true;
	}
	else if(body.teamName === "KENYA")
	{
		save.KENYA.push(body);
		bool = true;
	}
	
	if(Boolean(bool)){
		return func(body);
	}
	else if(Boolean(bool === false)){
		createMatch.forEach(function(data){
			if(data.team1 === body.teamName){
				insert(body);
			}
		});
		return func(body);
	}
	return func(""); 
}

exports.fetch_data = function(func){

	var list_scoreDetails = []; 

	if( save.IND.length > 0)
		list_scoreDetails.push(save.IND[(save.IND.length)-1]);
	
	if( save.PAK.length > 0)
		list_scoreDetails.push(save.PAK[(save.PAK.length)-1]);
	
	if( save.AUS.length > 0)
		list_scoreDetails.push(save.AUS[(save.AUS.length)-1]);
	
	if( save.ENG.length > 0)
		list_scoreDetails.push(save.ENG[(save.ENG.length)-1]);
	
	if( save.SRI.length > 0)
		list_scoreDetails.push(save.SRI[(save.SRI.length)-1]);
	
	if( save.AFRICA.length > 0)
		list_scoreDetails.push(save.AFRICA[(save.AFRICA.length)-1]);
	
	if( save.HOLLAND.length > 0)
		list_scoreDetails.push(save.HOLLAND[(save.HOLLAND.length)-1]);
	
	if( save.KENYA.length >  0)
		list_scoreDetails.push(save.KENYA[(save.KENYA.length)-1]);

	createdMatches.forEach(function(data){
		list_scoreDetails.push(data);
	});

	return list_scoreDetails;

}


exports.show_data = function(body, func){


	var ListDetails = [];

	if( body.teamName === "IND")
		ListDetails = save.IND;
	
	else if( body.teamName === "PAK")
		ListDetails = save.PAK;
	
	else if( body.teamName === "AUS")
		ListDetails = save.AUS;
	
	else if( body.teamName === "ENG")
		ListDetails = save.ENG;
	
	else if( body.teamName === "SRI")
		ListDetails = save.SRI;
	
	else if( body.teamName === "AFRICA")
		ListDetails = save.AFRICA;
	
	else if( body.teamName === "HOLLAND")
		ListDetails = save.HOLLAND;
	
	else if( body.teamName === "KENYA")
		ListDetails = save.KENYA;
	

	return func(ListDetails);

}



exports.create_match = function(body, func){
	createMatch.push(body);
	return func(body);
}


exports.fetch_created_matches = function(func){
	return func(createMatch);
}





