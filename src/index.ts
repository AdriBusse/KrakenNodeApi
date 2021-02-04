import axios from 'axios';
import { Currencies } from './interfaces/enums/Currencies';
import { StatusObj } from './interfaces/StatusObj';
import { Kraken } from './Kraken';

const kraken = new Kraken();

async function main() {
  //const status = await kraken.serverTime();
  //console.log(status);
  //const li = await kraken.assetInfo();
  const res = await kraken.assetInfo([Currencies.XBT, Currencies.AAVE]);
  console.log(res);
}
main();
