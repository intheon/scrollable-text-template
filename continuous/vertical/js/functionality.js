$(document).ready(function(){

	allocateDimensions();

});	


function allocateDimensions()
{
	var panel = ".direction-horizontal";

	if (checkElExists(panel))
	{	
		var dim = getElSizes(panel);
		var multiplier = $(panel).length;

		console.log(multiplier);

		var w2 = dim.width * multiplier;

		console.log(w2);

		$(panel).css("width", dim.width);
		//$(panel).css("height", dim.height);
		$("body").css("width", w2 + 110);
	}
}	

function checkElExists(elName)
{
	if ($(elName).length === 0 || $(elName).length <= 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function getElSizes(elName)
{
	return {
		width: 	$(elName).width(),
		height: $(elName).height()
	}

}