const id = document.querySelector('#post_id').value;

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#updated_title').value.trim();
    const content = document.querySelector('#updated_content').value.trim();
  
    console.log(title,content)
    if (title && content) {
      const response = await fetch(`/api/post/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  };
  
  const delButtonHandler = async () => {
      
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    };

  
  document
    .querySelector('#update-post')
    .addEventListener('click', newFormHandler);

  document
  .querySelector('#deletePost')
  .addEventListener('click', delButtonHandler);



