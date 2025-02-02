async function loadPyodide() {
    const pyodide = await import("https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.mjs");
    return pyodide.loadPyodide();
}
