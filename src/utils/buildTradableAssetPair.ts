import { TradableAssetPair } from '../interfaces/TradableAssetPair';

export const buildTradableAssetPair = (data: { error: []; result: any }) => {
  let pairs = Object.keys(data.result);
  let res: TradableAssetPair[] = [];
  pairs.forEach((element) => {
    const p: TradableAssetPair = {
      altname: data.result[element].altname,
      wsname: data.result[element].wsname,
      aclass_base: data.result[element].aclass_base,
      base: data.result[element].base,
      aclass_quote: data.result[element].aclass_quote,
      quote: data.result[element].quote,
      lot: data.result[element].lot,
      pair_decimals: data.result[element].pair_decimals,
      lot_decimals: data.result[element].lot_decimals,
      lot_multiplier: data.result[element].lot_multiplier,
      leverage_buy: data.result[element].leverage_buy,
      leverage_sell: data.result[element].leverage_sell,
      fees: data.result[element].fees,
      fees_maker: data.result[element].fees_maker,
      fee_volume_currency: data.result[element].fee_volume_currency,
      margin_call: data.result[element].margin_call,
      margin_stop: data.result[element].margin_stop,
      ordermin: data.result[element].ordermin,
    };
    res.push(p);
  });
  return res;
};
