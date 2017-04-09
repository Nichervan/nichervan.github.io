$(document).ready(function(){
	$()
});

function SportNews() {
	$.ajax({
		url:'https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=latest&apiKey=329824d689004139b48d23d6386b1238',
		type: 'GET',
		success: function (sport) {

			handleRresult(sport);
		}
	})