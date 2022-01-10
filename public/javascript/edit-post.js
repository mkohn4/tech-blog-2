
async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('textarea[name="post-body"]').value.trim();
    console.log(event.target.children);

    console.log('edit button clicked');
    console.log(window.location.toString().split('/'));
    const urlArray = window.location.toString().split('/');
    const id = urlArray[urlArray.length - 1];
    //need to find a way to get the post title here
    console.log(title, post_body);
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: title,
            post_body: post_body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response);
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}



document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

//added query selector for post-body element
//updated input[name="post-body"] => textarea[name="post-body"]