import pandas as pd
from typing import Dict

class Metakeydata:
    df = {}
    def __init__(self):
        self.df = pd.read_csv('metakey_data/unique_metakey_holders.csv')

    def unique_holders_percentage(self) -> Dict[str,float]:
        unique_holders_percent_list = []
        unique_holders_list = {}
        if 'edition' in self.df.columns and 'Unique Holders' in self.df.columns:
            unique_holders_list = pd.Series(self.df['Unique Holders'].values,index=self.df['edition']).to_dict()
            for key, value in unique_holders_list.items():
                unique_holders_percent_dict = {}
                unique_holders_percent_dict['name'] = key 
                unique_holders_percent_dict['value'] = round((value/sum(unique_holders_list.values()))*100, 2) 
                unique_holders_percent_list.append(unique_holders_percent_dict)    
        return unique_holders_percent_list

    def unique_holding_wallets_number(self) -> Dict[str,int]:
        unique_holding_wallets_number_list = []
        unique_holders_list = {}
        if 'edition' in self.df.columns and 'Unique Holders' in self.df.columns:
            unique_holders_list = pd.Series(self.df['Unique Holders'].values,index=self.df['edition']).to_dict()
            for key, value in unique_holders_list.items():
                unique_holders_percent_dict = {}
                unique_holders_percent_dict['name'] = key
                unique_holders_percent_dict['unique holding wallets'] = value
                unique_holding_wallets_number_list.append(unique_holders_percent_dict)
        return unique_holding_wallets_number_list

    def distribution_percentage(self) -> Dict[str,str]:
        distribution_percentage_list = []
        unique_holders_list = {}
        if 'edition' in self.df.columns and '% Distribution' in self.df.columns:
            unique_holders_list = pd.Series(self.df['% Distribution'].values,index=self.df['edition']).to_dict()
            for key, value in unique_holders_list.items():
                unique_holders_percent_dict = {}
                unique_holders_percent_dict['name'] = key
                unique_holders_percent_dict['distribution percentage'] = round(value*100,2)
                distribution_percentage_list.append(unique_holders_percent_dict)
        return distribution_percentage_list

