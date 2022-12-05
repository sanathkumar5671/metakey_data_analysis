from flask import Flask, abort
from metakey_data.read_data import Metakeydata
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory

app = Flask(__name__, static_folder='dashboard/build', static_url_path='')
CORS(app)

@app.route("/api")
@cross_origin()
def metakey_data():
    metakey_display_data = {}
    try:
        metakey_data_instance = Metakeydata()
        metakey_display_data = {'unique_holders_percentage': metakey_data_instance.unique_holders_percentage(), 'unique_holding_wallets_number': metakey_data_instance.unique_holding_wallets_number(), 'distribution_percentage': metakey_data_instance.distribution_percentage()}
    except:
        abort(404)

    return metakey_display_data


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
