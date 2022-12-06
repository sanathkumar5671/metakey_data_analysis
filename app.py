from flask import Flask, abort
from metakey_data.read_data import Metakeydata
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory

app = Flask(__name__, static_folder='dashboard/build', static_url_path='')
# The CORS is using to create a cross_origin to the typescript react server which is the frontend.
CORS(app)

"""
    This is the main function of the application.
    It is responsible for:
    1. Reading the metakey data and sending a api with the data in the format shown below:
         metakey_display_data = {'unique_holders_percentage': [], 'unique_holding_wallets_number': [], 'distribution_percentage': []}
    2. Rendering the react build index.html page: this connects the frontend server to the backend server.
    
"""
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/api")
@cross_origin()
def metakey_data():
    metakey_display_data = {}
    #try and except is to handle errors occurred during reading the metakey data. if an exception is encountered a 404 message is returned.
    try:
        metakey_data_instance = Metakeydata()
        metakey_display_data = {'unique_holders_percentage': metakey_data_instance.unique_holders_percentage(), 'unique_holding_wallets_number': metakey_data_instance.unique_holding_wallets_number(), 'distribution_percentage': metakey_data_instance.distribution_percentage()}
    except:
        abort(404)
    return metakey_display_data

if __name__ == '__main__':
    app.run()
