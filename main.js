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
    prompt.innerHTML = `<span style='color: #00ff00;'>${text}</span> <span style='color: white;'>></span>`;
}

function clearTerminal() {
    terminalOutput.innerHTML = "";
}

function displayWelcomeMessage() {
    addLine("<br> Welcome to my Portfolio!"); // Add the welcome message with the new class
    addLine("Type 'help' for a list of available commands.");
    addLine(""); // Adds an empty line for spacing
}

// function displayWelcomeMessage() {
//     addLine('<span class="welcome-message">Welcome to my Portfolio!</span>'); // Add the welcome message with a class
//     addLine("Type 'help' for a list of available commands.");
//     addLine(""); // Adds an empty line for spacing
// }

function executeCommand(command) {
    const args = command.trim().split(" ");
    const cmd = args[0].toLowerCase();

    switch (cmd) {
        case "help":
            addLine("Available commands: help, about, clear, projects, contact");
            break;
        case "about":
            addLine("I'm a junior software developer with skills in C, C++, Java, JavaScript, and more.");
            break;
        case "projects":
            addLine("Projects: <br>");
            addLine('<a href="https://github.com/em1e/42_cub3d" target="_blank">cub3D</a> - A 3D game made in C. <br>');
            addLine('<a href="https://github.com/em1e/oopsies" target="_blank">oopsies</a> - My first 2D game made using SFML and C++. <br>');
            addLine('<a href="https://github.com/em1e/42_so_long" target="_blank">so_long</a> - A 2D game made in C. <br>');
            addLine('<a href="https://github.com/em1e/42_minishell" target="_blank">minishell</a> - Rewritten version of Bash made in C. <br>');
            break;
        case "contact":
            addLine("Contact me via email at example@example.com.");
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
            addLine(`<span style='color: #00ff00;'>portfolio.sh</span> <span style='color: white;'>></span> <span style='color: white;'>${command}</span>`, true); // Keep the prompt in green and the command in white
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
