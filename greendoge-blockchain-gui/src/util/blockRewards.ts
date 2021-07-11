import Big from 'big.js';

const MOJO_PER_GREENDOGE = Big(1000000000000);
const BLOCKS_PER_YEAR = 1681920;

export function calculatePoolReward(height: number): Big {
  if (height === 0) {
    return MOJO_PER_GREENDOGE.times(21000000).times(7 / 8);
  }
  if (height < (3 / 12) * BLOCKS_PER_YEAR) {
    return MOJO_PER_GREENDOGE.times(100).times(7 / 8);
  }
  if (height < 3 * BLOCKS_PER_YEAR) {
    return MOJO_PER_GREENDOGE.times(20).times(7 / 8);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return MOJO_PER_GREENDOGE.times(10).times(7 / 8);
  }
  if (height < 9 * BLOCKS_PER_YEAR) {
    return MOJO_PER_GREENDOGE.times(5).times(7 / 8);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MOJO_PER_GREENDOGE.times(2.5).times(7 / 8);
  }

  return MOJO_PER_GREENDOGE.times(1.25).times(7 / 8);
}

export function calculateBaseFarmerReward(height: number): Big {
  if (height === 0) {
    return MOJO_PER_GREENDOGE.times(21000000).times(1 / 8);
  }
  if (height < (3 / 12) * BLOCKS_PER_YEAR) {
    return MOJO_PER_GREENDOGE.times(100).times(1 / 8);
  }
  if (height < 3 * BLOCKS_PER_YEAR) {
    return MOJO_PER_GREENDOGE.times(20).times(1 / 8);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return MOJO_PER_GREENDOGE.times(10).times(1 / 8);
  }
  if (height < 9 * BLOCKS_PER_YEAR) {
    return MOJO_PER_GREENDOGE.times(5).times(1 / 8);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MOJO_PER_GREENDOGE.times(2.5).times(1 / 8);
  }

  return MOJO_PER_GREENDOGE.times(1.25).times(1 / 8);
}
