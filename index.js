window.onload = function () {
    toggleUnderline('aboutButton');
};

function toggleUnderline(buttonId) {
    const buttons = document.querySelectorAll('.underlinedButtons button');
    const container = document.querySelector('.underlinedButtons');

    buttons.forEach(button => {
        button.classList.remove('underlined');
        button.classList.remove('selected');
    });

    const button = document.getElementById(buttonId);
    button.classList.add("underlined");
    button.classList.add("selected");

    updateUnderlinePosition(button);

    const contentBox = document.getElementById("contentBox");
    
    if (buttonId === 'projectsButton') {
        contentBox.innerHTML = '<p>Projects page coming soon!</p>';
    } else if (buttonId === 'aboutButton') {
        contentBox.innerHTML = "<p><b>Hi, I'm Matt.</b><br><br>I'm a fourth year Computing Science major at Simon Fraser University with a passion for design, games, and problem-solving.<br><br>I'm based in Vancouver, BC and enjoy hiking and snowboarding in my spare time.</p>";
    } else if (buttonId === 'contactButton') {
        contentBox.innerHTML = 
            `<div class="social-links">
                <a href="mailto:matthew.sass35@gmail.com" target="_blank">
                    <img src="email.png" alt="matthew.sass35@gmail.com" class="contact-logo">
                    <span>matthew.sass35@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/matthew-s-420941207/" target="_blank">
                    <img src="linkedin.png" alt="LinkedIn" class="contact-logo">
                    <span>Matthew Sass</span>
                </a> 
                <a href="https://github.com/matthew-sass" target="_blank">
                    <img src="github.png" alt="GitHub" class="contact-logo">
                    <span>matthew-sass</span>
                </a> 
            </div>`;
    }
}

function updateUnderlinePosition(button) {
    const containerRect = document.querySelector('.underlinedButtons').getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    const left = buttonRect.left - containerRect.left;
    const width = buttonRect.width;

    document.querySelector('.underlinedButtons').style.setProperty('--underline-left', `${left}px`);
    document.querySelector('.underlinedButtons').style.setProperty('--underline-width', `${width}px`);
}
