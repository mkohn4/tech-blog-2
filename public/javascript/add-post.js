async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('textarea[name="post-body"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title, post_body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response);
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

//updated input[name="post-body"] => textarea[name="post-body"]