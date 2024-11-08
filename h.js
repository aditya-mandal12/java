// Function for marking activities as done
function markActivityAsDone(button) {
    button.innerText = 'Done';
    button.disabled = true;
    button.style.backgroundColor = '#999';
  }
  
  // JavaScript for dynamically setting user info
  const userName = document.getElementById('userName');
  const userBio = document.getElementById('userBio');
  const userAbout = document.getElementById('userAbout');
  
  // Example of setting user details dynamically
  userName.innerText = "Jane Smith";
  userBio.innerText = "Software Engineer & Blogger";
  userAbout.innerText = "Hi! I'm Jane, a software engineer specializing in front-end development. I enjoy coding, writing, and exploring new web technologies.";
  