
// Populate the posts on the page when the page loads.
function populatePosts(posts) {
    console.log(posts)
    postArray = '<hr>'
    for (i = 0; i < posts.length; i++) { // for each post
        postArray += `
        <div class="card">
        <div class="card-body">
        <h5 class="card-title"><b>Title: ${posts[i].eventTitle}</b></h5>
        <img class="card-img-top" src="https://picsum.photos/seed/picsum/500/500?random=6" alt="Card image cap">
        <p class="card-text felix-test">Description: ${posts[i].eventDescription} </p>
        <a href="../communityPost/${posts[i]._id}" class="btn btn-warning">View Post</a>
        <p class="card-text"><small class="text-muted">Posted by: ${posts[i].firstName} ${posts[i].lastName} at: ${posts[i].time}</small></p>
        </div>
        </div>
        `
    }
    $('#posts').html(postArray)
}


function directPost(){
    postId=$(this).attr('id')
    console.log(postId)
    $.ajax({
        url: ` https://2800project.azurewebsites.net///communityPost/${postId}`,
        // url: `http://localhost:5002/communityPost/${postId}`,
        type: 'GET',
        success: (x)=>{
            console.log(x)
        }
    })
}



{/* // Ajax call to get all posts from the database and call populatePosts to populate the page, when the page loads. */}
function getPosts() {
    $.ajax({
        url:' https://2800project.azurewebsites.net///communityPost/read',
        // url: 'http://localhost:5002/communityPost/read',
        type: 'GET',
        success: populatePosts
    })
}




// Opens direct chat with the user who posted the post.
function directChat() {
    otherUserId = $(this).attr('id')
    console.log(otherUserId)
    $.ajax({
        url: ` https://2800project.azurewebsites.net///chat/${otherUserId}`,
        // url: `http://localhost:5002/chat/${otherUserId}`,
        type: 'GET',
        success: (x) => {
            console.log(x)
        }
    })
}




function setup() {
    getPosts()
    $('body').on('click', '.chat', directChat)
    // $('body').on('click', '.btn', directPost)
}



$(document).ready(setup)