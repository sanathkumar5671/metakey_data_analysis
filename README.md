<h1>WELCOME TO METAKEY DATA ANALYSIS PROJECT</h1>

This is a simple web application to display metakey data in the form of graphs. The application is built using FLASK API backend and TypeScript React front-End. Also the application is hosted on www.heroku.com ---> https://serene-plains-58099.herokuapp.com/.

The application overview can be best explained using the flow chart diagram below. 

<p align="center">
  <img src="https://github.com/sanathkumar5671/metakey_data_analysis/blob/main/images/FlowDiagram.png" />
</p>

As shown in the diagram above the application has three main components.

1. CSV file: This files contains the metakey_data which was extracted from DUNE analytics query https://dune.com/queries/1691829 .
The query extracted each metakey edition data from the contract address '\x10DaA9f4c0F985430fdE4959adB2c791ef2CCF83'. 

Since the API is not available for public use, I have directly stored all the table data in a CSV file for this project. However, another option was to do web page scraping to extract the table data but this seems to be a huge process itself (consuming a lot of time.).

Please view the CSV file here https://github.com/sanathkumar5671/metakey_data_analysis/blob/main/metakey_data/unique_metakey_holders.csv

2. Flask API (https://serene-plains-58099.herokuapp.com/api) -> Uses Flask Framework to create a API endpoint which processes the data from a CSV files and responds to the web page request by sending formatted data or sending an error message such as 404 error.

    * In app.py file you can view the flask endpoint /api being created which creates an instance of the Metakeydata Class and calls its child functions accordingly.

    *In the metakey_data/read_data.py file you can view the Metakeydata class which consists of three main functions
      
      - unique_holders_percentage: which calculates the percentage of the number of unique holders and sends a formatted  list of 
        dictionary of values.

      - unique_holding_wallets_number: which sends a list of unique holders wallets number for each metakey edition from the 
        .csv file.
     
      - distribution_percentage: which sends a percentage of the distribution percentage of unique holders for each metakey 
        edition. This data is directly retrieved from the .csv file.

    Note: a minimum level of error handling for each function has been added accordingly.

3. Web Page (https://serene-plains-58099.herokuapp.com/) -> The TypeScript React front-end uses <a href="https://recharts.org">Recharts JS Library</a> to display three main graph:

        - Unique Holders Percentage For Each Metakey Edition (PIE CHART): displaying the percentage of unique holders for each 
          metakey edition.

        - Unique Holding Wallets Numbers For Each Metakey Edition (BAR CHART): displaying the number of holding wallets for each 
          metakey edition.

        - Distribution Percentage for each Metakey Edition (HISTOGRAM CHART): displaying the distribution percentage for each 
          metakey edition.
  
    to display these graphs the data is requested from a FLASK RESTful API endpoint.

     * APP.tsx is the main component which renders the chart components in the Charts directory.

     Note: The front-end also handles minimum errors, one such is by displaying an "INTERNAL SERVER ERROR" message when the API endpoint is unavailable.

<h2>UNIT TEST</h2>

Initial Steps to start RUN unit tests:

STEP 1: Create a new python environment to run this project locally.

STEP 2: run command `pip install -r requirements.txt` 

STEP 3: cd Dashboard

STEP 4: run `npm install` to install TypeScript libraries and its dependencies.

<h3>Backend Unit Test</h3>
FILE NAME: backend_unit_testing/metakey_testing.py

Use Cases Considered:

1. Check if each function in the metakey/read_data.py Metakey class are returning a valid list of data. The valid values are inserted manually, as the data set is really small.

2. Check if error is handled for each function in the metakey/read_data.py Metakey class, if the column does not exist the functions should return an an empty list `[]`. 

Only these two cases are considered for now, however there are many other cases which can be considered. As we can see in backend_unit_testing/metakey_testing.py these cases have already produced 6 different functions.

TO RUN this unit test file, `python -m unittest -v backend_unit_testing/metakey_testing.py` is used. The below diagram is the passed tests screenshot

<p align="center">
  <img src="https://github.com/sanathkumar5671/metakey_data_analysis/blob/main/images/backend_unit_test_results.png" />
</p>

<h3>Frontend Unit Test</h3>

FILE Location: dashboard/src/App.test.tsx

Use Cases considered:

1. Check if each heading of the graph is present and check if the all the three charts are present

2. Check if the "INTERNAL SERVER ERROR" is displayed when the api endpoint is not available.

TO RUN this unit test, please following the below steps:

STEP 5: After completing the initial STEPS mentioned above, GO TO STEP 6 below.

STEP 6: Run `flask run` in the root directory of the project

STEP 7: Open another terminal and `cd dashboard`

STEP 8: run `npm test`

The below is the screenshot to pass all the tests:

<p align="center">
  <img src="https://github.com/sanathkumar5671/metakey_data_analysis/blob/main/images/dashboard_unit_test_results.png" />
</p>

