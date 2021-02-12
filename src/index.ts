import axios from 'axios';
import { Currencies } from './interfaces/enums/Currencies';
import { StatusObj } from './interfaces/StatusObj';
import { Kraken } from './Kraken';
import * as fs from 'fs';
import { Pairs } from './interfaces/enums/Pairs';

const kraken = new Kraken();

async function main() {
  //const status = await kraken.serverTime();
  //console.log(status);
  //const li = await kraken.assetInfo();
  //const res = await kraken.assetInfo([Currencies.XBT, Currencies.AAVE]);
  //console.log(res);
  console.log(await kraken.assetInfo([Currencies.ADA, Currencies.AAVE]));
}
main();
