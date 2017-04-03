$(document).ready(function(){
	// body...
	// getDataByAjax();
	$('#btnFav').click(function(){
		$('#favourite').fadeIn();

	})
	$('#CurrentButten').click(getDataByAjax)
});

function getDataByAjax() {
	$.ajax({
		url:'https://api.github.com/users/nichervan/repos?sort=created&per_page=5',
		type: 'GET',
		success: function (data) {

			handleRresult(data);
		}
	})
}
function handleRresult(data){
	var html='<ul>';
	$.each(data,function(index,repo){
		html+=`<li><a href="${repo.html_url}" target="_blank" >${repo.name}</a></li>`;
	})
	html+='</ul>';

	$('#result').html(html);

}