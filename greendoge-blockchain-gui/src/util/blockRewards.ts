import Big from 'big.js';

const DOG_PER_GREENDOGE = Big(1000000000000);
const BLOCKS_PER_YEAR = 1681920;

export function calculatePoolReward(height: number): Big {
  if (height === 0) {
    return DOG_PER_GREENDOGE.times(21000000).times(7 / 8);
  }
  if (height < (1 / 12) * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(100).times(7 / 8);
  }
  if (height < (6 / 12) * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(20).times(7 / 8);
  }
  if (height < 1 * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(10).times(7 / 8);
  }
  if (height < 2 * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(5).times(7 / 8);
  }
  if (height < 4 * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(2.5).times(7 / 8);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(1.25).times(7 / 8);
  }
  if (height < 8 * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(0.625).times(7 / 8);
  }

  return DOG_PER_GREENDOGE.times(0.3125).times(7 / 8);
}

export function calculateBaseFarmerReward(height: number): Big {
  if (height === 0) {
    return DOG_PER_GREENDOGE.times(21000000).times(1 / 8);
  }
  if (height < (1 / 12) * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(100).times(1 / 8);
  }
  if (height < (6 / 12) * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(20).times(1 / 8);
  }
  if (height < 1 * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(10).times(1 / 8);
  }
  if (height < 2 * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(5).times(1 / 8);
  }
  if (height < 4 * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(2.5).times(1 / 8);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(1.25).times(1 / 8);
  }
  if (height < 8 * BLOCKS_PER_YEAR) {
    return DOG_PER_GREENDOGE.times(0.625).times(1 / 8);
  }

  return DOG_PER_GREENDOGE.times(0.3125).times(1 / 8);
}
