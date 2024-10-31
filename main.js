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
        line.classList.add("command"); // Apply command styling
    }
    line.innerHTML = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to bottom as new lines are added
}

function setPrompt(text) {
    // Set "portfolio.sh" to green and ">" to white
    prompt.innerHTML = `<b style='color: #4f4527;'>${text}</b> <span style='color: #008000;'>></span>`;
}

function clearTerminal() {
    terminalOutput.innerHTML = "";
}

function displayWelcomeMessage() {
    addLine('<br><h3 style="color: #4c2229;">Welcome to my Portfolio!</h3>'); // Add the welcome message with the new class
    addLine('Type <b style="color: #4c2229;">help</b> for a list of available commands.');
    addLine("-------------------------------------------------------------------");
    addLine(""); // Adds an empty line for spacing
    executeCommand("about");
}

function executeCommand(command) {
    const args = command.trim().split(" ");
    const cmd = args[0].toLowerCase();

    switch (cmd) {
        case "help":
            addLine('<br><h3 style="color: #cd6858;">Available commands:</h3>');
            addLine("help       - Display this help message.");
            addLine("about      - Display information about me.");
            addLine("projects   - Display a list of my projects.");
            addLine("contact    - Display my contact information.");
            addLine("socials    - Display my social media links.");
            addLine("clear      - Clear the terminal screen.");
            addLine("");
            break;
        case "about":
            addLine("");
            addLine('<h1 style="color: #cd6858;">Hey! Mie here</h1>');
            addLine("<p>Some of you might know me by my real name too, which I'm totally cool with being called. Anything works <3");
            addLine("");
            addLine("<p>I'm a 21 yo Software Developer still trying to find their true passion, someone who's typically quite learning-oriented, detail-focused, and always full of creative ideas. Currently, I'm working on my last projects at Hive Helsinki, which I should be done with mid-spring 2025. In my free time I enjoy swimming, cooking, reading, as well as doing anything creative. I love picking up skills, networking, and spending time with my friends playing games. In other words, I'm your typical nerd just hidden in a shell that you might not see through at the first glance.");
            // addLine("");
            addLine('<br><h3 style="color: #cd6858;">Skills:</h3>');
            addLine("C, C++, Java, JavaScript, HTML, CSS, Git, Bash, Shell scripting");
            addLine("");
            break;
        case "projects":
            addLine('<br><h3 style="color: #cd6858;">Projects: </h3>');
            addLine('<a href="https://github.com/em1e/42_cub3d" target="_blank">cub3D</a> - A 3D game made in C. <br>');
            addLine('<a href="https://github.com/em1e/oopsies" target="_blank">oopsies</a> - My first 2D game made using SFML and C++. <br>');
            addLine('<a href="https://github.com/em1e/42_so_long" target="_blank">so_long</a> - A 2D game made in C. <br>');
            addLine('<a href="https://github.com/em1e/42_minishell" target="_blank">minishell</a> - Rewritten version of Bash made in C. <br>');
            addLine("");
            break;
        case "contact":
            addLine('<br><h3 style="color: #cd6858;">Contact:</h3>');
            addLine("You can reach me through emi.projects@outlook.com.");
            addLine("");
            break;
        case "socials":
            addLine('<br><h3 style="color: #cd6858;">Socials:</h3>');
            addLine('<a href="https://discordapp.com/users/700341252880597095" target="_blank">Discord</a> - DM me if you dare p<p <br>');
            addLine('<a href="https://github.com/em1e" target="_blank">GitHub</a> - Do check it out <br>');
            addLine('<a href="https://www.linkedin.com/in/em1e/" target="_blank">LinkedIn</a> - Connect with me if you haven\'t <br>');
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

// Initialize prompt and display initial output
setPrompt("portfolio.sh");
displayWelcomeMessage(); // Display the welcome message on load
