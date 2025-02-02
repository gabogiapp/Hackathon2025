async function sendOllamaRequest(prompt) {
    const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'deepseek-r1', // Change this to the model you are using
            prompt: prompt,
            stream: false
        })
    });

    const data = await response.json();
    console.log('Ollama Response:', data.response);
    return data.response;
}

// Example usage:
sendOllamaRequest('What is the capital of France?');
