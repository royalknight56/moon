/*
 * @Author: RoyalKnight
 * @LastEditTime: 2022-10-13 13:39:23
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
  // console.log(ph)
  let ac = ph * 2 * Math.PI;
  // console.log(ac,Math.abs(Math.cos(ac)/2));
  let rad = Math.abs(Math.cos(ac)/2) * 100;
  if (ph >= 0 && ph < 0.25) {
    h2c = (0.25 - ph) * 4 * 50;
    return [0, rad, true, true]
  } else if (ph >= 0.25 && ph < 0.5) {
    h1c = (ph - 0.25) * 4 * 50;
    return [rad, 0, true, true]
  } else if (ph >= 0.5 && ph < 0.75) {
    h2c = (0.75 - ph) * 4 * 50;
    return [50, rad, true, false]
  } else if (ph >= 0.75 && ph <= 1) {
    h1c = (ph - 0.75) * 4 * 50;
    return [rad, 50, false, true]
  }
  return [0, 0, false, false]
}
export {
  calcStyleFromPh
}