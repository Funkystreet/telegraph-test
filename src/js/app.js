const Utils = require('./utils');

new Utils();

// TODO Remove Console logs

// Fetch the comments data
fetch("https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // TODO Perhaps create a class with all the functions included     
    appendComments(data);
    commentsCount(data);
    sortComment();

  });

// Get and render total comments count
const commentsCount = (data) =>{
	commentCountWrapper = document.querySelector(".comments-count");
	let totalComments = data.length +1;
	commentCountWrapper.textContent = totalComments + " Comments";
    console.log(totalComments);
}

// TODO Create ARRAYS of the Likes and Dates to use to sort the comments

// Create Comment HTML Markup and append the comments
 const appendComments = (data) => {
    let commentsContainer = document.querySelector(".comments");
    for (let i = 0; i < data.length; i++) {
    	let commentDate = new Date(Date.parse(data[i].date)); // TODO Format Date as per design and create an ARRAY of the Dates that can be sorted on click 
        let commentWrapper = document.createElement("div");
        commentWrapper.className = "comment";
        commentWrapper.innerHTML = `	    	
				<div class="comment-title">
					<a href="#" class="comment-author">${data[i].name}</a>
					<time datetime="${commentDate}">${commentDate}</time>
					<div class="comment-likes"><span>${data[i].likes} Likes</span></div>
				</div>
				<div class="comment-body">
					<p>${data[i].body}</p>
				</div>`;
        commentsContainer.appendChild(commentWrapper);
    }

}

// Sort the comments by likes or Newest
const sortComment = () =>{
	const likesBtn = document.querySelector(".btn-likes");
	const newestBtn = document.querySelector(".btn-newest");

	likesBtn.addEventListener('click', event => {
	  console.log("likes button clicked");
	  // TODO invoke sort by likes
	});
	newestBtn.addEventListener('click', event => {
	  console.log("Newest button clicked");
	  // TODO invoke sort by Newest
	});
}

// TODO Write TESTS
