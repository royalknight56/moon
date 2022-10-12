/*
 * @Author: RoyalKnight
 * @LastEditTime: 2022-10-12 14:12:52
 * @Description: 
 */

const synmonth = 29.530588853;     //synodic month (new Moon to new Moon)
let phase: number;	//定義phase為全域變數

// function GetMoonPhase() {
//   //取得輸入之陽曆年月日值
//   let yr = in1.value - 0;	//取得年之輸入值
//   let mh = in2.value - 0;	//取得月之輸入值
//   let dy = in3.value - 0;	//取得日之輸入值
//   let op = false;

//   //限定範圍
//   if (yr < -7000 || yr > 7000) {
//     alert("超出計算能力");
//     return false;
//   }
//   if (yr < -1000 || yr > 3000) {
//     alert("适用于西元-1000年至西元3000年，超出此范围误差较大");
//   }

//   //驗證輸入日期的正確性,若不正確則跳離
//   if (ValidDate(op, yr, mh, dy) == false) { return false; }



//   let jd = Jdays(false, yr, mh, dy, 12);
//   let mnm1 = MeanNewMoonDay(jd);   //求得自2000年1月起第kn個平均朔望日之JD值
//   phase = (jd - mnm1) / synmonth;	//取得月內日數隊平均每月日數之比值,此即為相位(0-1之間)


// }
function getPhaseFromDate(yr: number, mh: number, dy: number) {
  let jd = Jdays(false, yr, mh, dy, 12);
  // console.log(jd)
  let mnm1 = MeanNewMoonDay(jd || 0);   //求得自2000年1月起第kn個平均朔望日之JD值
  if (jd) {
    phase = (jd - mnm1) / synmonth;	//取得月內日數隊平均每月日數之比值,此即為相位(0-1之間)
  }


  let phai = phase * 2 * Math.PI;
  console.log(`${yr},${mh},${dy}`, phase, phai);
  return phase;
}

// function ValidDate(op, yy, mm, dd) {//驗證日期是否有效
//   var vd = true;
//   if (mm <= 0 || mm > 12) {
//     alert("月份超出範圍");
//     vd = false;
//   }
//   else {
//     var ndf1 = -(yy % 4 == 0);	//可被四整除
//     var ndf2 = ((yy % 400 == 0) - (yy % 100 == 0)) && (((yy > 1582) && (!op)) || op);
//     var ndf = ndf1 + ndf2;
//     var dom = 30 + ((Math.abs(mm - 7.5) + 0.5) % 2) - (mm == 2) * (2 + ndf);
//     if (dd <= 0 || dd > dom) {
//       if (ndf == 0 && mm == 2 && dd == 29) {
//         alert("此年無閏月");
//       }
//       else {
//         alert("日期超出範圍");
//       }
//       vd = false;
//     }
//   }
//   if ((yy == 1582 && mm == 10 && dd >= 5 && dd < 15) && !op) {
//     alert("此日期不存在");
//     vd = false;
//   }
//   return vd;
// }

function Jdays(op: boolean, yr: number, mh: number, dy: number, hr: number) {//將年月日時，轉换爲儒略日
  if (yr < -400000 || yr > 400000) return false;
  var yp = yr + Math.floor((mh - 3) / 10);
  if (((yr > 1582) || (yr == 1582 && mh > 10) || (yr == 1582 && mh == 10 && dy >= 15)) || op) {
    var init = 1721119.5;
    var jdy = Math.floor(yp * 365.25) - Math.floor(yp / 100) + Math.floor(yp / 400);
  }
  else {
    if ((yr < 1582) || (yr == 1582 && mh < 10) || (yr == 1582 && mh == 10 && dy <= 4)) {
      var init = 1721117.5;
      var jdy = Math.floor(yp * 365.25);
    }
    else { return false; }
  }
  var mp = Math.floor(mh + 9) % 12;
  var jdm = mp * 30 + Math.floor((mp + 1) * 34 / 57);
  var jdd = dy - 1;
  var jdh = hr / 24;
  var jd = jdy + jdm + jdd + jdh + init;
  return jd;
}

//副程式功能：對於指定日期時刻所屬的朔望月，求出其均值新月點的月序數
function MeanNewMoonDay(jd: number) {
  let t, thejd, jdt;
  //k為從2000年1月6日14時20分36秒起至指定年月日之陰曆月數,以synodic month為單位
  let k = Math.floor((jd - 2451550.09765) / synmonth); //2451550.09765為2000年1月6日14時20分36秒之JD值。
  jdt = 2451550.09765 + k * synmonth;
  //Time in Julian centuries from 2000 January 0.5.
  t = (jdt - 2451545) / 36525;  //以100年為單位,以2000年1月1日12時為0點
  thejd = jdt + 0.0001337 * t * t - 0.00000015 * t * t * t + 0.00000000073 * t * t * t * t;
  //2451550.09765為2000年1月6日14時20分36秒，此為2000年後的第一個均值新月
  return thejd;
}
export {
  getPhaseFromDate
}