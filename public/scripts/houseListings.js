// New branch

// Populate the posts on the page when the page loads.
function populatePosts(posts) {
    console.log(posts)
    postArray = '<hr>'
    for (i = 0; i < posts.length; i++) { // for each post
        postArray += `
        <div class="card">
        <div class="card-body">
        <h5 class="card-title"><b>Title: ${posts[i].title}</b></h5>
        <img class="card-img-top" src=${posts[i].image} alt="Card image cap">
        <p class="card-text felix-test">Description: ${posts[i].description} </p>
        <a href="../housePosts/${posts[i]._id}" class="btn btn-warning">View Post</a>
        <p class="card-text"><small class="text-muted">Posted by: ${posts[i].username} at: ${posts[i].time}</small></p>
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
<<<<<<< HEAD
        url: ` https://2800project.azurewebsites.net//housePosts/${postId}`,
=======
        url: ` https://2800azurehostv2.azurewebsites.net//housePosts/${postId}`,
>>>>>>> 1e3830dacff6bec009a1d10ab311643d19769b88
        // url: `http://localhost:5002/housePosts/${postId}`,
        type: 'GET',
        success: (x)=>{
            console.log(x)
        }
    })
}

{/* // Ajax call to get all posts from the database and call populatePosts to populate the page, when the page loads. */}
function getPosts() {
    $.ajax({
<<<<<<< HEAD
        url:' https://2800project.azurewebsites.net//housePosts/read',
=======
        url:' https://2800azurehostv2.azurewebsites.net//housePosts/read',
>>>>>>> 1e3830dacff6bec009a1d10ab311643d19769b88
        // url: 'http://localhost:5002/housePosts/read',
        type: 'GET',
        success: populatePosts
    })
}

// Opens direct chat with the user who posted the post.
function directChat() {
    otherUserId = $(this).attr('id')
    console.log(otherUserId)
    $.ajax({
<<<<<<< HEAD
        url: ` https://2800project.azurewebsites.net//chat/${otherUserId}`,
=======
        url: ` https://2800azurehostv2.azurewebsites.net//chat/${otherUserId}`,
>>>>>>> 1e3830dacff6bec009a1d10ab311643d19769b88
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