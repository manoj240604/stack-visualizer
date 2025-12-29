const stack = [];
const maxSize = 5;

const stackDiv = document.getElementById("stack");
const message = document.getElementById("message");

function renderStack(peekIndex = -1) {
    stackDiv.innerHTML = "";
    stack.forEach((value, index) => {
        const el = document.createElement("div");
        el.className = "stack-item";
        if (index === peekIndex) el.classList.add("peek");
        el.textContent = value;
        stackDiv.appendChild(el);
    });
}

function push() {
    const input = document.getElementById("valueInput");
    const value = input.value;

    if (stack.length === maxSize) {
        message.textContent = "⚠ Stack Overflow";
        return;
    }
    if (value === "") {
        message.textContent = "Enter a value";
        return;
    }

    stack.push(value);
    input.value = "";
    message.textContent = `Pushed: ${value}`;
    renderStack();
}

function pop() {
    if (stack.length === 0) {
        message.textContent = "⚠ Stack Underflow";
        return;
    }
    const removed = stack.pop();
    message.textContent = `Popped: ${removed}`;
    renderStack();
}

function peek() {
    if (stack.length === 0) {
        message.textContent = "Stack is empty";
        return;
    }
    message.textContent = `Top: ${stack[stack.length - 1]}`;
    renderStack(stack.length - 1);
}
