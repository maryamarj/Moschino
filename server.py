import base64
import json
import os

from flask import Flask, request, send_file
from PIL import Image
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/get_image/<room_name>', methods=['GET'])
def retrieve_similar(room_name):
    file_path = './assets/{}.jpeg'.format(room_name)
    print(file_path)
    image_data = None

    with open(file_path, 'rb') as f:
        image_data = f.read()

    return image_data
    

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=50001, )
