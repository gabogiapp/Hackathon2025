async function sendOllamaRequest(prompt) {
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'deepseek-r1', // Change this to the model you are using
                prompt: prompt,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Ollama Response:', data.response);
        return data.response;
    } catch (error) {
        console.error('Request failed:', error);
    }
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    console.log("Received message:", message);

    if (message.action === "cartData") {
        console.log("Got message and here is content: " + message.data);

        let response = await sendOllamaRequest(message.data);

        console.log("Ollama Response:", response);

        // Send a response back to content.js
        sendResponse({ status: "done", response: response });
    }
    return true; // Keep the message port open for async response
});
