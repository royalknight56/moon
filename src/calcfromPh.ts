/*
 * @Author: RoyalKnight
 * @LastEditTime: 2022-10-12 14:30:45
 * @Description: 
 */
function calcStyleFromPh(ph: number): [number, number, boolean, boolean] {
  // 0 全黑
  // 0.25 左黑右白
  // 0.5 全白
  // 0.75 左白右黑
  // 1 全黑
  let h1c = 0;
  let h2c = 0;
  let h1bg = 0;
  let h2bg = 0;
  console.log(ph)
  // ph = Math.sin(ph * Math.PI/2 );
  // console.log(ph)
  if (ph >= 0 && ph < 0.25) {
    h2c = (0.25 - ph) * 4 * 50;
    return [0, h2c, true, true]
  } else if (ph >= 0.25 && ph < 0.5) {
    h1c = (ph - 0.25) * 4 * 50;
    return [h1c, 0, true, true]
  } else if (ph >= 0.5 && ph < 0.75) {
    h2c = (0.75 - ph) * 4 * 50;
    return [50, h2c, true, false]
  } else if (ph >= 0.75 && ph <= 1) {
    h1c = (ph - 0.75) * 4 * 50;
    return [h1c, 50, false, true]
  }
  return [0, 0, false, false]
}
export {
  calcStyleFromPh
}