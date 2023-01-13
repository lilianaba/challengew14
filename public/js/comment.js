const post_id = document.querySelector('#post_id').value;
const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#post-comment').value.trim();
  
    console.log("this is the path",post_id);
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({content, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };


  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);
