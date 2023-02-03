const newFormHandler = async function(event) {
    event.preventDefault();
  
    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postContent = document.querySelector('textarea[name="post-body"]').value;
  
    
  
    await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({
        postTitle,
        postContent,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  console.log(postTitle);
    console.log(postContent);
    document.location.replace('/market');
  };
  
  document
    .querySelector('#new-post-form').addEventListener('submit', newFormHandler);