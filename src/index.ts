import axios from 'axios';
import { Currencies } from './interfaces/enums/Currencies';
import { StatusObj } from './interfaces/StatusObj';
import { Kraken } from './Kraken';
import * as fs from 'fs';

const kraken = new Kraken();

async function main() {
  //const status = await kraken.serverTime();
  //console.log(status);
  //const li = await kraken.assetInfo();
  //const res = await kraken.assetInfo([Currencies.XBT, Currencies.AAVE]);
  //console.log(res);
  const { data } = await axios.get(
    'https://api.kraken.com/0/public/AssetPairs'
  );
  //console.log(Object.keys(data.result));
  // const obj = Object.keys(data.result);
  // var file = fs.createWriteStream('array.txt');
  // file.on('error', function (err) {
  //   console.log(`error while creating`);
  // });
  // obj.forEach(function (v) {
  //   file.write(v.concat("= '", v, "',\n"));
  // });
  // file.end();
}
main();
