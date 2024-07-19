import requests

url = 'http://127.0.0.1:5000/predict_api'
r = requests.post(url,json={{
    "N": "1",
    "P": "2",
    "K": "3",
    "temperature": "2",
    "humidity": "2",
    "ph": "3",
    "rainfall": "4"
}})

print(r.json())