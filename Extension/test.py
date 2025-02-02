import requests
import json

def generate_request():
    url = 'http://localhost:11434/api/generate'
    headers = {
        'Content-Type': 'application/json'
    }
    data = {
        'model': 'deepseek-r1',
        'prompt': 'I have these ingredients. [pasta, tomato sauce, basil, red peppers, avocadeo]. Give me the top three recipes where I only need one more ingredient to make something. Tell me explicitly only the recipe name and the missing ingredient name',
        'stream': False
    }

    try:
        response = requests.post(url, headers=headers, data=json.dumps(data))
        response.raise_for_status()  # Raise an error for bad responses (4xx or 5xx)
        return response.json()  # Return the response as JSON
    except requests.exceptions.RequestException as error:
        print(f'Error: {error}')
        return None

# Call the function and print the result
result = generate_request()
if result:
    print(result)
