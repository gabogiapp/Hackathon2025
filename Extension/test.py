import requests
import json
url = "http://10.74.54.154:8080/api/chat/completions"
headers = {
    "Authorization": "Bearer sk-61c71ff4248a44468e2d0ad9253f245d",  # Remove this before sharing online!
    "Content-Type": "application/json"
}
data = {
    "model": "linguini",
    "messages": [
        {
            "role": "system",
            "content": "Always respond with just the extra ingredient. It should be name of ingredient new line and then next ingredient. FOLLOW THIS FORMAT Recipes made\n *Tomato Bisque Soup*: ingredient1, ingredient2, ingredient3, and so on  (extra ingredient)  \n *Mashed Potatoes and Carrots*: pasta, potatoes, carrots, mozzarella cheese, dill  (mozzarella cheese, dill)  \n *Tomato Mac and Cheese*: pasta, tomatoes, mozzarella cheese, parmesan  (mozzarella cheese, parmesan)"
        },
        {
            "role": "user",
            "content": "potatoes, onions, clams, carrots, beef"
        }
    ]
}

# Make the request
response = requests.post(url, headers=headers, json=data)

# Convert response to JSON
response_json = response.json()

# Extract content correctly based on typical OpenAI-style API responses
content = response_json.get("choices", [{}])[0].get("message", {}).get("content", "")

# Find where the "<think>" section ends
think_end = content.find("</think>")

# Extract everything after "<think>" is done
if think_end != -1:
    after_thinking = content[think_end + len("</think>"):].strip()
else:
    after_thinking = content.strip()

print(after_thinking)
