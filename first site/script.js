document.getElementById('sbm').addEventListener("click", function(event) {
	event.preventDefault();
	addArticle();
})

function addArticle() {
	const name = document.getElementById('name').value; // heading 6
	const desc = document.getElementById('desc').value; // description atricle
	const date = document.getElementById('date').value; // date post 06-06-2021

	const mainDiv = document.getElementById('articles');

	const article = document.createElement('div');
	const article_text = document.createElement('div');
	const article_img = document.createElement('div');

	const p_header = document.createElement('p');
	const p_desc = document.createElement('p');
	const p_date = document.createElement('p');

	const img = document.createElement('img');

	article.className = "article";
	article_text.className = "article_text";
	p_header.className = "heading";
	p_desc.className = "desc";
	p_date.className = "date"
	article_img.className = "article_img";

	p_header.innerText = name;
	p_desc.innerText = desc;
	p_date.innerText = date;

	article_text.append(p_header);
	article_text.append(p_desc);
	article_text.append(p_date);

	img.src = "https://source.unsplash.com/random/" + Math.floor(145 + Math.random() * 10) + "x" + Math.floor(145 + Math.random() * 10); //min + math.random() * (max - min)
	
	article_img.append(img);
	article.append(article_text);
	article.append(article_img);
	mainDiv.append(article);
	// mainDiv -> article -> article_text -> heading, desc, date
	//                    -> article_img - > img
}