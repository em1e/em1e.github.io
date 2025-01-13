const terminal = document.getElementById("terminal");
const terminalOutput = document.getElementById("terminal-output");
const input = document.getElementById("input");
const prompt = document.getElementById("prompt");

let history = [];
let historyIndex = -1;

function addLine(text, isCommand = false) {
    const line = document.createElement("div");
    line.classList.add("output");
    if (isCommand) {
        line.classList.add("command");
    }
    line.innerHTML = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function setPrompt(text) {
    prompt.innerHTML = `<b style='color: #4f4527;'>${text}</b> <span style='color: #008000;'>></span>`;
}

function clearTerminal() {
    terminalOutput.innerHTML = "";
}

function openProjectInfo(content, link, videoType) {
    const projectInfo = document.getElementById("project-info");
    projectInfo.classList.add("visible");
    const projectContent = projectInfo.querySelector(".project-content");
    projectContent.innerHTML = ""; // Clear previous content
    
    // // Header and Description
    // const header = document.createElement("h2");
    // header.textContent = videoType;
    
    const description = document.createElement("p");
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in tincidunt lectus. Nullam pharetra sem eu felis fermentum, a auctor augue vulputate. Integer scelerisque neque sit amet arcu viverra, sed vulputate turpis auctor. Proin non mi neque. Sed id sem nec velit lacinia ullamcorper. Integer pretium neque a malesuada efficitur.";
    

    // Add Project Title
    const projectTitle = document.createElement("h1");
    projectTitle.textContent = videoType; // Use the project title here
    projectTitle.style.color = "#cd6858"; // Optional: style the title
    projectTitle.style.marginBottom = "10px"; // Optional: spacing

    projectContent.appendChild(projectTitle); // Add title to the project content
    // projectContent.appendChild(header);
    projectContent.appendChild(description);

    // Video Explanation and Video Element
    const videoCaption = document.createElement("div");
    videoCaption.classList.add("project-video-caption");
    
    let videoElement = document.createElement("video");
    videoElement.setAttribute("controls", "controls");
    // videoElement.setAttribute("autoplay", "autoplay");
    // videoElement.setAttribute("loop", "loop");
    videoElement.setAttribute("muted", "muted");
    videoElement.classList.add("project-video");
    videoElement.style.width = "100%"; // Adjust width as needed

    // Set video source based on videoType flag
    switch (videoType) {
        case "cub3D":
            videoElement.src = "https://github.com/em1e/em1e.github.io/raw/main/cub3d_video.mp4";
            videoElement.poster = "";
            description.textContent = "Cub3D is all about bringing that classic raycasting game feeling to life. It\’s a fun way to dive into the world of graphic design while figuring out how math fits into computer graphics. I did a lot of research beforehand, which helped us later on to make a 2D space feel like a 3D world more easily. That being said I'd argue cub3D isn\’t just any project; it\’s a creative playground where coding and math team up to create an awesome interactive experience!";
            videoCaption.textContent = "A Gameplay video demonstrating core mechanics:";
            break;
        case "ft_irc":
            videoElement.src = "https://github.com/em1e/em1e.github.io/raw/main/ft_irc_video.mp4";
            description.textContent = "ft_irc is a project where me and two other students worked together to create a fully functioning irc server, according to the RFC 1459 proticol.";
            videoCaption.textContent = "Here is a video demonstrating core mechanics:";
            break;
        case "so_long":
            videoElement.src = "https://github.com/em1e/em1e.github.io/raw/main/so_long_video.mp4";
            description.textContent = "C Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in tincidunt lectus. Nullam pharetra sem eu felis fermentum, a auctor augue vulputate. Integer scelerisque neque sit amet arcu viverra, sed vulputate turpis auctor. Proin non mi neque. Sed id sem nec velit lacinia ullamcorper. Integer pretium neque a malesuada efficitur.";
            videoCaption.textContent = "C Gameplay video demonstrating core mechanics:";
            break;
        case "minishell":
            videoElement.src = "https://github.com/em1e/em1e.github.io/raw/main/minishell_video.mp4";
            description.textContent = "D Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in tincidunt lectus. Nullam pharetra sem eu felis fermentum, a auctor augue vulputate. Integer scelerisque neque sit amet arcu viverra, sed vulputate turpis auctor. Proin non mi neque. Sed id sem nec velit lacinia ullamcorper. Integer pretium neque a malesuada efficitur.";
            videoCaption.textContent = "D Gameplay video demonstrating core mechanics:";
            break;
    }
    
    projectContent.appendChild(videoCaption);
    projectContent.appendChild(videoElement);

    // Link to Project
    const projectLink = projectInfo.querySelector(".project-link");
    projectLink.href = link;
    projectLink.textContent = "View on GitHub";
    
    // Show popup
    projectInfo.classList.add("visible");
}

function closeProjectInfo() {
    document.getElementById("project-info").classList.remove("visible");
}

function displayWelcomeMessage() {
    addLine('<br><h2>Welcome to my Portfolio!</h2>');
    addLine('<h3>Type <b style="color: #cd6858;">help</b> for a list of available commands.</h3>');
    addLine("-------------------------------------------------------------------");
    addLine("");
    executeCommand("about");
    executeCommand("help");
    addLine("-------------------------------------------------------------------");
}

function executeCommand(command) {
    const args = command.trim().split(" ");
    const cmd = args[0].toLowerCase();

    switch (cmd) {
        case "help":
            addLine('<br><h3 style="color: #4c2229;">Available commands:</h3>');
            addLine('<span style="color: #2e5e4e;">help </span>------ Displays this help message.');
            addLine('<span style="color: #2e5e4e;">about </span>----- Displays the about message.');
            addLine('<span style="color: #2e5e4e;">projects </span>-- View a list of my projects.');
            addLine('<span style="color: #2e5e4e;">contact </span>--- Get my contact information.');
            addLine('<span style="color: #2e5e4e;">socials </span>--- Check out my social medias.');
            addLine('<span style="color: #2e5e4e;">clear </span>----- Clear the terminal screen.');
            addLine("");
            break;
        case "about":
            addLine("");
            addLine('<h2 style="color: #cd6858;">About me:</h2>');
            addLine("Hey there! 👋 I'm Vilja, a 21 year old software engineering student at Hive Helsinki. There I learned C and C++ through multiple complex projects, and the unique peer to peer model has given me a lot of experience with code reviews, asking the right questions, team and project management as well as allowed me to share what I have learned with others.");
            addLine('<br><h3 style="color: #4c2229;">Skills:</h3>');
            addLine("C, C++, Java, JavaScript, HTML, CSS, Git, Bash, Shell scripting");
            addLine("");
            break;
        case "projects":
            addLine('<br><h3 style="color: #4c2229;">Projects: </h3>');
            addLine('<div id="project_button" onclick="openProjectInfo(`<h2>ft_irc</h2><p>Details about the irc server...</p>`, `https://github.com/em1e/42_ft_irc`, `ft_irc`)">ft_irc</div>');
            addLine('<div id="project_button" onclick="openProjectInfo(`<h2>cub3D</h2><p>Details about the 3D game...</p>`, `https://github.com/em1e/42_cub3d`, `cub3D`)">cub3D</div>');
            addLine('<div id="project_button" onclick="openProjectInfo(`<h2>so_long</h2><p>Details about the 2D game...</p>`, `https://github.com/em1e/42_so_long`, `so_long`)">so_long</div>');
            addLine('<div id="project_button" onclick="openProjectInfo(`<h2>minishell</h2><p>Details about the Bash remake...</p>`, `https://github.com/em1e/42_minishell`, `minishell`)">minishell</div>');
            addLine("");
            break;
        case "contact":
            addLine('<br><h3 style="color: #4c2229;">Contact:</h3>');
            addLine("You can reach me through emie.codes@outlook.com.");
            addLine("");
            break;
        case "socials":
            addLine('<br><h3 style="color: #4c2229;">Socials:</h3>');
            addLine('<a href="https://discordapp.com/users/700341252880597095" target="_blank">Discord</a> - DM me if you dare! (swear I don\'t bite) <br>');
            addLine('<a href="https://github.com/em1e" target="_blank">GitHub</a> - Do check it out. <br>');
            addLine("");
            break;
        case "clear":
            clearTerminal();
            break;
        default:
            addLine(`<span style="color: red;">Error: command not found: ${cmd}</span>`);
    }
}

// Input event listener
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const command = input.value.trim();
        if (command) {
            history.push(command);
            historyIndex = history.length;
            addLine(`<b style='color: #4f4527;'>portfolio.sh</b> <span style='color: #008000;'>></span> <span style='color: #008000;'>${command}</span>`, true); // Keep the prompt in green and the command in white
            executeCommand(command);
        }
        input.value = "";
    } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            input.value = history[historyIndex];
        }
    } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex < history.length - 1) {
            historyIndex++;
            input.value = history[historyIndex];
        } else {
            input.value = "";
        }
    }
});

setPrompt("portfolio.sh");
displayWelcomeMessage();
