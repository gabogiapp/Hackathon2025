async function generateRequest() {
    const url = "http://localhost:11434/api/generate";
    const headers = {
        "Content-Type": "application/json",
    };
    const data = {
        model: "deepseek-r1",
        prompt: "I have these ingredients. [pasta, tomato sauce, basil, red peppers, avocado]. Give me the top three recipes where I only need one more ingredient to make something. Tell me explicitly only the recipe name and the missing ingredient name.",
        stream: false,
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Response:", result);
        return result;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// Call the function when needed
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("run-request-btn").addEventListener("click", async () => {
        let outputElement = document.getElementById("output");
        outputElement.textContent = "Loading...";
        
        let result = await generateRequest();
        outputElement.textContent = result ? JSON.stringify(result, null, 2) : "Error fetching data.";
    });
});
