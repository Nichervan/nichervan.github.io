$(document).ready(function () {
	loadSkills();
});

function loadSkills() {
	$.ajax({
		url: "../skills.json",
		type: "GET",
		dataType: "JSON",
		success: function (data) {
			console.log(data)
			result(data);
		}
	})
}
function result(data) {
	var html='';
	html+= '<ul>';
	$.each(data.skills, function (i,item) {
		html+= '<li><h1>' + item.name + '</h1>';
		html+= '<p>' + item.description + '</p></li>';
	})
	$('.container').html(html);
}