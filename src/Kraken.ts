import { StatusObj } from './interfaces/StatusObj';
import { ServerTimeObj } from './interfaces/ServerTimeObj';
import axios from 'axios';
import { AssetInfoObj } from './interfaces/AssetInfoObj';
import { Currencies } from './interfaces/enums/Currencies';
import { Pairs } from './interfaces/enums/Pairs';
import { TradableAssetPair } from './interfaces/TradableAssetPair';
import { buildTradableAssetPair } from './utils/buildTradableAssetPair';
import { buildAssetPair } from './utils/buildAssetPair';
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

      return buildAssetPair(data);
    } else {
      let query = '?asset=';
      assets.forEach((one) => (query = query + one + ','));

      query = query.slice(0, -1);

      const { data } = await axios.get(
        `https://api.kraken.com/0/public/Assets${query}`
      );

      return buildAssetPair(data);
    }
  }
  async assetPairInfo(assetPairs?: Pairs[]): Promise<TradableAssetPair[]> {
    if (assetPairs == undefined) {
      const { data } = await axios.get(
        'https://api.kraken.com/0/public/AssetPairs'
      );
      return buildTradableAssetPair(data);
    } else {
      let query = '?pair=';
      assetPairs.forEach((one) => (query = query + one + ','));
      query = query.slice(0, -1);

      const { data } = await axios.get(
        `https://api.kraken.com/0/public/AssetPairs${query}`
      );
      return buildTradableAssetPair(data);
    }
  }
}
