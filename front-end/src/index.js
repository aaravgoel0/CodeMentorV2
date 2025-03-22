document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById('root');

    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = "Welcome to CodeMentor";
    const button = document.createElement('button');
    button.textContent = "Use CodeMentor";
    button.addEventListener('click', function() {
        window.location.href = "/index.html"; // Redirect to the existing project page
    });

    header.appendChild(title);
    header.appendChild(button);
    root.appendChild(header);
});
