async function loadPyodide() {
    if (!window.pyodide) {
        window.pyodide = await import("https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.mjs");
        window.pyodide = await window.pyodide.loadPyodide();
    }
    return window.pyodide;
}
