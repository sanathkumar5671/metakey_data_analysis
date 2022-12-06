import sys
sys.path.insert(1, 'D:/Desktop/metakey/')
from metakey_data.read_data import Metakeydata
import pandas as pd
import unittest

class Testing(unittest.TestCase):
    def test_unique_holders_percentage_is_List(self):
        metakey_instance = Metakeydata()
        excepted_value =  [{ "name": "Edition 1", "value": 6.16 },{ "name": "Edition 2", "value": 9.47 },{ "name": "Edition 3", "value": 12.61 },{ "name": "Edition 4", "value": 71.76 }]
        actual_value = metakey_instance.unique_holders_percentage()
        self.assertListEqual(excepted_value, actual_value)

    def test_unique_holding_wallets_number_is_List(self):
        metakey_instance = Metakeydata()
        excepted_value =  [{ "name": "Edition 1", "unique holding wallets": 448 },{ "name": "Edition 2", "unique holding wallets": 689 },{ "name": "Edition 3", "unique holding wallets": 918 },{ "name": "Edition 4", "unique holding wallets": 5223 }]
        actual_value = metakey_instance.unique_holding_wallets_number()
        self.assertListEqual(excepted_value, actual_value)

    def test_distribution_percentage_is_List(self):
        metakey_instance = Metakeydata()
        excepted_value =  [{ "distribution percentage": 89.6, "name": "Edition 1" },{ "distribution percentage": 91.9, "name": "Edition 2" },{"distribution percentage": 91.8, "name": "Edition 3" },{ "distribution percentage": 69.6, "name": "Edition 4" }]
        actual_value = metakey_instance.distribution_percentage()
        self.assertListEqual(excepted_value, actual_value)

    def test_unique_holders_percentage_with_differnt_column_name(self):
        metakey_instance = Metakeydata()
        metakey_instance.df = pd.read_csv('backend_unit_testing/unique_metakey_holders_test.csv')
        excepted_value =  []
        actual_value = metakey_instance.unique_holders_percentage()
        self.assertListEqual(excepted_value, actual_value)
    
    def test_unique_holding_wallets_number_with_differnt_column_name(self):
        metakey_instance = Metakeydata()
        metakey_instance.df = pd.read_csv('backend_unit_testing/unique_metakey_holders_test.csv')
        excepted_value =  []
        actual_value = metakey_instance.unique_holding_wallets_number()
        self.assertListEqual(excepted_value, actual_value)
        
    def test_distribution_percentage_with_differnt_column_name(self):
        metakey_instance = Metakeydata()
        metakey_instance.df = pd.read_csv('backend_unit_testing/unique_metakey_holders_test.csv')
        excepted_value =  []
        actual_value = metakey_instance.distribution_percentage()
        self.assertListEqual(excepted_value, actual_value)

if __name__ == '__main__':
    unittest.main()