$(document).ready(function(){
	SportNews();
});
		// url:'https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=latest&apiKey=329824d689004139b48d23d6386b1238',

		function SportNews() {
			$.ajax({
				
				url:'https://newsapi.org/v1/articles?source=bbc-sport&apiKey=329824d689004139b48d23d6386b1238',
				type: 'GET',
				success: function (sport) {

					handleSport(sport);
				}
			});
		}
		
		function handleSport(sport){
			var html='<ul>';
			$.each(sport.articles,function(index,item){
				html+=`<li> <div><img width="300" height="300" src="${item.urlToImage}" alt="" /></div></br>`;
				html+=`<a href="${item.url}" target="_blank" >${item.title}</a>`;  

				
				
				html+=`<p>"${item.description}"</p>`;
				html+=`<h6>"${item.author}"</h6>`;
				html+=`<h5>"${item.publishedAt}"</h5></li>`;
			})
			html+='</ul>';

			$('#result-sports').html(html);

		}