function changeContent() {


    function changePhotos() {
        const JATEUSZ_PHOTO_URL = "https://z-p3-scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/46170045_723043544736253_8450186384936796160_n.jpg?_nc_cat=106&_nc_ht=z-p3-scontent-waw1-1.xx&oh=880f1071415abe1985f0091e09b9a6ad&oe=5CF364C6";
        let personalConversationPhotos = Array.prototype.filter.call(document.getElementsByClassName("img"), photo => photo.className === "img");
        let groupConversationPhotoDivs = Array.prototype.filter.call(document.querySelectorAll('[style*=background-image]'), photo => photo.className === "");
		
        Array.prototype.forEach.call(personalConversationPhotos, photo => photo.src = JATEUSZ_PHOTO_URL);
        Array.prototype.forEach.call(groupConversationPhotoDivs, photoDiv => {
            photoDiv.style.backgroundImage = 'url("' + JATEUSZ_PHOTO_URL + '")';
        });
		
		let images = document.querySelectorAll('span._4jzq._jf4 img, img._5bli._2_a2.img, div._3szp img, ._6f3k img, span._4kf5 img, span._1z8r img, div._4eby._2c9i img, img._1ift.img, img._2qgu _7ql img_1m6h img');
		Array.prototype.forEach.call(images, photo => photo.src = JATEUSZ_PHOTO_URL);
		
		
    }


    function changeConversationsNames() {
        const JATEUSZ_NAME = "Jateusz Machniak";
		const SHORTED_JATEUSZ = "Jateusz";
        let spans = document.querySelectorAll('[id*="row_header_id"] span._1ht6, h2 span._3oh-, span._2jnv span, div._364g, h5._ih3, div._3s-8._3-9b._3-8w, ._3oh- a');

        Array.prototype.forEach.call(spans, span => span.innerHTML = JATEUSZ_NAME);
		
		let mainName = document.querySelectorAll('h1._1tqi');
		Array.prototype.forEach.call(mainName, main => main.innerHTML = SHORTED_JATEUSZ);
		
		let search = document.querySelectorAll('input._58al');
		Array.prototype.forEach.call(search, input => input.placeholder = JATEUSZ_NAME);
		
    }

	function changeUserMessages() {
		
		const BEST_NAME = "Jati";
		const BEST_DESCRIPTION = ": im here :)";
		
		let userName = document.querySelectorAll('span._1vp5');
		Array.prototype.forEach.call(userName, span => span.innerHTML = BEST_NAME);
		
		let lastMessage = document.querySelectorAll('span._1htf');
		Array.prototype.forEach.call(lastMessage, span => span.innerHTML = BEST_NAME+BEST_DESCRIPTION);
    }
	
    setInterval(function () {
        changePhotos();
        changeConversationsNames();
		changeUserMessages();
    }, 50);
}


window.onload = changeContent();