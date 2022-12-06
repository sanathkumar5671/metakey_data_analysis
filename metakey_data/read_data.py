import pandas as pd
from typing import Dict
"""
Metakeydata Class reads metakey data which is downloaded form https://dune.com/embeds/1691829/2797561/e884500e-f0fb-4d7a-8b70-f6c255298bf1
The metakey data is split into 3 varies formats:
1. unique_holders_percentage -> in this function the percentage of the number of unique holders is calculated 
   uisng the fromula [(unique holders number/tottal number of unique holders)*100]. The output is in format -> [{name: Edition 1, value: 71%}]
2. unique_holding_wallets_number -> in this function the number of unique holders is extracted from the CSV file and returned in the format as shown below,
   -> [{name: Edition 2, unique holding wallets: 423}]
3. distribution_percentage -> in this function the percentage of distribution of the unique holding wallets is extracted from the CSV file and returned in the format as shown below,
   -> [{name: Edition 3, distribution percentage: 50%}]
"""
class Metakeydata:
    df = {}
    def __init__(self:object):
        self.df = pd.read_csv('metakey_data/unique_metakey_holders.csv')

    def unique_holders_percentage(self:object) -> Dict[str,float]:
        unique_holders_percent_list = []
        unique_holders_list = {}
        # This conditon is added for error handling
        if 'edition' in self.df.columns and 'Unique Holders' in self.df.columns:
            unique_holders_list = pd.Series(self.df['Unique Holders'].values,index=self.df['edition']).to_dict()
            for key, value in unique_holders_list.items():
                unique_holders_percent_dict = {}
                unique_holders_percent_dict['name'] = key 
                # the the fromula [(unique holders number/tottal number of unique holders)*100] is used 
                unique_holders_percent_dict['value'] = round((value/sum(unique_holders_list.values()))*100, 2) 
                unique_holders_percent_list.append(unique_holders_percent_dict)    
        return unique_holders_percent_list

    def unique_holding_wallets_number(self:object) -> Dict[str,int]:
        unique_holding_wallets_number_list = []
        unique_holders_list = {}
        # This conditon is added for error handling
        if 'edition' in self.df.columns and 'Unique Holders' in self.df.columns:
            unique_holders_list = pd.Series(self.df['Unique Holders'].values,index=self.df['edition']).to_dict()
            for key, value in unique_holders_list.items():
                unique_holders_percent_dict = {}
                unique_holders_percent_dict['name'] = key
                unique_holders_percent_dict['unique holding wallets'] = value
                unique_holding_wallets_number_list.append(unique_holders_percent_dict)
        return unique_holding_wallets_number_list

    def distribution_percentage(self:object) -> Dict[str,str]:
        distribution_percentage_list = []
        unique_holders_list = {}
        # This conditon is added for error handling
        if 'edition' in self.df.columns and '% Distribution' in self.df.columns:
            unique_holders_list = pd.Series(self.df['% Distribution'].values,index=self.df['edition']).to_dict()
            for key, value in unique_holders_list.items():
                unique_holders_percent_dict = {}
                unique_holders_percent_dict['name'] = key
                unique_holders_percent_dict['distribution percentage'] = round(value*100,2)
                distribution_percentage_list.append(unique_holders_percent_dict)
        return distribution_percentage_list

