$(document).ready(function () {
	loadSkills();
});

function loadSkills() {
	$.getJSON("skills.json",result).fail(function(xhr){console.log(xhr.responseText)})
}
function result(data) {
	var html='';
	console.log(data)
	html+= '<ul>';
	$.each(data.skills, function (i,item) {
		html+= '<li><h1>' + item.name + '</h1>';
		html+= '<p>' + item.description + '</p></li>';
	})
	$('.container').html(html);
}

