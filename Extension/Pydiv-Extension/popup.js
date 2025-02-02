document.addEventListener("DOMContentLoaded", async function () {
    const runButton = document.getElementById("run-btn");
    const output = document.getElementById("output");
    const codeInput = document.getElementById("python-code");

    let pyodide = await loadPyodide();
    output.textContent = "Pyodide loaded. Ready to run Python.";

    runButton.addEventListener("click", async () => {
        try {
            let result = pyodide.runPython(codeInput.value);
            output.textContent = result;
        } catch (error) {
            output.textContent = "Error: " + error.message;
        }
    });
});
