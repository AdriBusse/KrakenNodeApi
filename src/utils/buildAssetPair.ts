import { AssetInfoObj } from '../interfaces/AssetInfoObj';

export const buildAssetPair = (data: { error: []; result: any }) => {
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
};
