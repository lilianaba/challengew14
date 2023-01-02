const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#post-comment').value.trim();
  
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create project');
      }
    }
  };


  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);
