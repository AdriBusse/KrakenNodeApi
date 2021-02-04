import { StatusObj } from './interfaces/StatusObj';
import { ServerTimeObj } from './interfaces/ServerTimeObj';
import axios from 'axios';
import { AssetInfoObj } from './interfaces/AssetInfoObj';
import { Currencies } from './interfaces/enums/Currencies';
export class Kraken {
  constructor() {}

  async status(): Promise<StatusObj> {
    const { data } = await axios.get(
      'https://api.kraken.com/0/public/SystemStatus'
    );
    //console.log(typeof data);

    if (!data) {
      throw new Error('Request went wrong');
    }
    return { status: data.result.status, timestamp: data.result.timestamp };
  }

  async serverTime(): Promise<ServerTimeObj> {
    const { data } = await axios.get('https://api.kraken.com/0/public/Time');
    if (!data) {
      throw new Error('Request went wrong');
    }
    return { unixtime: data.result.unixtime, rfc1123: data.result.rfc1123 };
  }

  async assetInfo(assets?: Currencies[]): Promise<AssetInfoObj[]> {
    if (assets === undefined) {
      const { data } = await axios.get(
        'https://api.kraken.com/0/public/Assets'
      );
      let curr = Object.keys(data.result);
      let res: AssetInfoObj[] = [];
      curr.forEach((element) => {
        const asset: AssetInfoObj = {
          assetClass: data.result[element].aclass,
          altname: data.result[element].altname,
          decimals: data.result[element].decimals,
          display_decimals: data.result[element].display_decimals,
        };
        res.push(asset);
      });
      return res;
    } else {
      let query = '?asset=';
      assets.forEach((one) => (query = query + one + ','));

      query = query.slice(0, -1);

      const { data } = await axios.get(
        `https://api.kraken.com/0/public/Assets${query}`
      );

      let curr = Object.keys(data.result);
      let res: AssetInfoObj[] = [];
      curr.forEach((element) => {
        const asset: AssetInfoObj = {
          assetClass: data.result[element].aclass,
          altname: data.result[element].altname,
          decimals: data.result[element].decimals,
          display_decimals: data.result[element].display_decimals,
        };
        res.push(asset);
      });
      return res;
    }
  }
}
