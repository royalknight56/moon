/*
 * @Author: RoyalKnight
 * @LastEditTime: 2022-10-20 17:42:00
 * @Description: 
 */
function calcTime() {
  var today = new Date();
  yr = today.getFullYear();
  mh = today.getMonth() + 1;
  dy = today.getDate();
  document.getElementById("in1").value = yr;
  document.getElementById("in2").value = mh;
  document.getElementById("in3").value = dy;

  var synmonth = 29.530588853;     //synodic month (new Moon to new Moon)

  var area = "台灣、大陸、香港、澳門、外蒙古、美國、加拿大、朝鮮、韓國、日本、菲律賓、馬來西亞、印尼、新加坡、東帝汶、汶萊、越南、柬埔寨、寮國、緬甸、泰國、尼泊爾、錫金、不丹、孟加拉、印度、斯里蘭卡、馬爾代夫、哈薩克、吉爾吉斯、巴基斯坦、烏茲別克、阿富汗、塔吉克、土庫曼、阿曼、阿聯酋、卡塔爾、巴林、伊朗、亞塞拜然、科威特、亞美尼亞、沙烏地阿拉伯、葉門、伊拉克、敘利亞、黎巴嫩、約旦、以色列及巴勒斯坦、塞浦路斯、土耳其、羅馬尼亞、保加利亞、希臘、馬其頓、波蘭、南斯拉夫、阿爾巴尼亞、匈牙利、斯洛伐克、捷克、克羅地亞、斯洛文尼亞、馬爾他、奧地利、德國、丹麥、挪威、瑞典、芬蘭、瑞士、荷蘭、比利時、盧森堡、英國、愛爾蘭、法國、西班牙、葡萄牙、意大利、梵蒂岡、冰島、古巴、巴哈馬、牙買加、海地、墨西哥、危地馬拉、伯利茲、薩爾瓦多、洪都拉斯、尼加拉瓜、哥斯達黎加、巴拿馬、厄瓜多爾、哥倫比亞、秘魯、智利、多米尼加、委內瑞拉、玻利維亞、多米尼克國、阿根廷、圭亞那、巴拉圭、烏拉圭、蘇裏南、巴西、埃及、蘇丹、索馬裏、坦桑尼亞、烏幹達、中非、查德、利比亞、喀麥隆、突尼斯、加蓬、赤道幾內亞、阿爾及利亞、摩洛哥、西撒哈拉、茅利塔尼亞、塞內加爾、岡比亞、馬裏、象牙海岸、加納、肯雅、馬拉維、莫三比克、辛巴威、盧旺達、尚比亞、薩伊、剛果、安哥拉、南非、馬達加斯加、紐西蘭、澳大利亞、巴布亞新幾內亞、所羅門群島、斐濟、俄羅斯、白俄羅斯、烏克蘭、莫爾達瓦、立陶宛、愛沙尼亞";

  var city = "台北市、高雄市、基隆市、新竹市、台中市、台南市、台北縣、宜蘭縣市、桃園縣市、新竹縣、苗栗縣市、台中縣、彰化縣市、南投縣市、雲林縣、嘉義縣市、台南縣、高雄縣、屏東縣市、花蓮縣市、台東縣市、綠島、蘭嶼、澎湖縣、東引島、馬祖、金門@北京、天津、石家莊、保定、唐山、秦皇島、張家口、承德、太原、大同、臨汾、長治、呼和浩特、包頭、海拉爾、瀋陽、大連、鞍山、錦州、長春、吉林、哈爾濱、齊齊哈爾、牡丹江、上海、南京、無錫、蘇州、徐州、杭州、寧波、溫州、金華、合肥、蕪湖、安慶、福州、廈門、泉州、南昌、九江、贛州、濟南、煙臺、青島、鄭州、開封、洛陽、許昌、新鄉、武漢、宜昌、沙市、長沙、衡陽、湘潭、常德、廣州、深圳、汕頭、韶關、海口、南寧、桂林、柳州、悟州、成都、重慶、內江、瀘州、萬縣、貴陽、遵義、昆明、拉薩、日喀則、西安、寶雞、延安、蘭州、天水、酒泉、西寧、銀川、烏魯木齊、哈密、喀什、和田@香港@澳門@烏蘭巴托@波士頓、斯坦福、紐約、費城、巴爾的摩、華盛頓、匹茲堡、邁阿密、克利夫蘭、底特律、亞特蘭大、芝加哥、新奧爾良、堪薩斯城、休士頓、達拉斯、丹佛、洛杉磯、聖何塞、西雅圖、舊金山、火奴魯魯@多倫多、渥太華、蒙特利亞、魁北克、溫哥華@平壤@首爾、安養市、清洲、公洲、九里、水源、光州、大田、濟州、仁川、釜山@東京、千葉、廣島、兵庫、川越、神戶、尼崎、京都、名古屋、奈良、大阪、橫濱、神奈川、藤澤、長野、福岡、鹿兒島、登別、稚內@馬尼拉@怡保、文德甲、亞庇、納閩島、雙溪大年、萬津、吉藍丹、Sarikei、Lumut、芙蓉、森美蘭、新山、Johor Bahru、古來、麻坡、Bukit Kangkar、巴株吧轄、吉隆坡、關丹、麻六甲、檳城、古晉、詩巫、民都鲁@雅加達、巴東島@新加坡@帝力@斯裏巴加灣@河內、胡志明@金邊@萬象@仰光、瓦城@曼谷、清邁、Sakon Nakhon@加德滿都@甘托克@廷布@達卡@新德里、博帕爾、孟買、加爾各答、德里@可倫坡@馬累@阿拉木圖@比什凱克@伊斯蘭堡@塔什干@喀布爾@杜尚別@阿什哈巴德@馬斯喀特@迪拜、阿布扎比@多哈@麥納麥@德黑蘭@巴庫@科威特@埃里溫@杜拜、利雅得、麥迪那、麥加@薩那、亞丁@巴格達、巴士拉@大馬士革@貝魯特@安曼@耶路撒冷@尼科西亞@安哥拉@布加勒斯特@索非亞@雅典、斯巴達@斯科普里@華沙@貝爾格萊德@地拉那@布達佩斯@布拉迪斯拉發@布拉格@薩格勒布@盧布爾雅那@瓦萊塔@維也納@柏林、萊比錫、波茨坦、慕尼黑、漢堡、漢諾威、海德堡@哥本哈根@奧斯陸@斯德哥爾摩、哥德堡@赫爾辛基@日內瓦@阿姆斯特丹@布魯塞爾@盧森堡@倫敦、伯明罕、劍橋、愛丁堡、利物浦、曼徹斯特、南安普敦、牛津、朴次茅斯@都柏林@巴黎、普羅旺斯、馬賽@巴賽隆那、馬德里@里斯本@那不勒斯、羅馬、威尼斯、佛羅倫斯、比薩、米蘭@梵蒂岡城@雷克雅未克@哈瓦那@拿騷@金斯頓@太子港@墨西哥城@危地馬拉@貝爾莫潘@聖薩爾瓦多@特古西加爾巴@馬那瓜@聖何塞@巴拿馬城@基多@聖菲波哥大@利馬@聖地亞哥@聖多明各@加拉加斯@蘇克雷@羅索@布宜諾斯艾利斯@喬治敦@亞松森@蒙得維的亞@帕拉馬裏博@巴西利亞、里約熱內盧、聖保羅@開羅@喀土穆@摩加迪沙@達累斯薩拉姆@坎帕拉@班吉@恩賈梅納@的黎波裏@雅恩德@突尼斯@利伯維爾@馬拉博@阿爾及爾@拉巴特、卡薩布蘭卡@阿尤恩@努瓦克肖特@達喀爾@班珠爾@巴馬科@亞穆蘇克羅@阿克拉@內羅畢@利隆圭@馬布多@哈拉雷@基加里@盧薩卡@金沙薩@布拉柴維爾@羅安達@開普敦、約翰尼斯堡@塔那那利佛@奧克蘭@布裏斯班、坎培拉、墨爾本@莫爾茲比港@霍尼亞拉@蘇瓦@符拉迪沃斯托克、亞庫次克、布拉戈維申斯克、喀山、阿爾漢格爾斯克、莫斯科、摩爾曼斯克、斯摩棱斯克、聖彼德堡@明斯克@基輔@基希訥烏@維爾紐斯@塔林";
  var ct = new Array(31);



  ct[27] = new Array(8, 116, 28, 39, 54);	//北京
  ct[28] = new Array(8, 117, 10, 39, 10);	//天津
  ct[29] = new Array(8, 114, 26, 38, 03);	//石家莊
  ct[30] = new Array(8, 115, 28, 38, 53);	//保定
  ct[31] = new Array(8, 118, 09, 39, 37);	//唐山
  ct[32] = new Array(8, 119, 37, 39, 54);	//秦皇島
  ct[33] = new Array(8, 114, 55, 40, 51);	//張家口
  ct[34] = new Array(8, 117, 52, 40, 59);	//承德
  ct[35] = new Array(8, 112, 33, 37, 51);	//太原
  ct[36] = new Array(8, 113, 13, 40, 07);	//大同
  ct[37] = new Array(8, 111, 31, 36, 05);	//臨汾
  ct[38] = new Array(8, 113, 13, 36, 05);	//長治
  ct[39] = new Array(8, 111, 38, 40, 48);	//呼和浩特
  ct[40] = new Array(8, 110, 00, 40, 35);	//包頭
  ct[41] = new Array(8, 119, 43, 49, 14);	//海拉爾
  ct[42] = new Array(8, 123, 23, 41, 48);	//瀋陽


  var split1 = "、";
  var split2 = "@";
  var sitesclass1 = area.split(split1);
  var sitesclass2 = city.split(split2);  			//元素为以,隔开的mode串
  var k = 0

  //var tz = new Array(+8, +8, +8, +8, -8, -5);
  //var lg = new Array(121.5, 120.28, 116.46, 121.43, -118.25 ,-74);
  //var lt = new Array(25, 22.63, 39.92, 31.2,34.07, 40.72);


  initial_select();

  function RiseSet() {
    //       Rise and set times for Sun and Moon
    //       Adapted and modified from Montenbruck
    //       and Pfleger, 'Astronomy on the personal
    //       Computer' 3rd Edition, Springer
    //       section 3.8
    //       Accuracy of detection of 'always below' and 'always above'
    //       situations depends on the approximate routines used for Sun
    //       and Moon. For instance, 1999 Dec 25th, at 0 long, 67.43 lat
    //       this program will give an 8 minute long day between sunrise
    //       and sunset. More accurate programs say the Sun is always below
    //       the horizon on this day.
    //Dim obname(5) As String, thedate As Double, jdx As Double
    //Dim hmrise(3) As String, hmset(3) As String, hmabove(3) As Integer, arise(3) As Integer, aset(3) As Integer
    var op = false;
    var obname = new Array;
    var rads = Math.PI / 180;
    var degs = 180 / Math.PI;
    obname[1] = "月亮";
    obname[2] = "太陽";
    obname[3] = "海上微光";
    //取得輸入之陽曆年月日值,時差及經緯度
    var y = in1.value - 0;	//取得年之輸入值
    var m = in2.value - 0;	//取得月之輸入值
    var d = in3.value - 0;	//取得日之輸入值
    //var zone=in4.value-0;	//取得時差之輸入值
    //var glong=in5.value-0;	//取得經度之輸入值
    //var glat=in6.value-0;	//取得緯度之輸入值

    //var zone=tz[myform1.city.value];
    //var glong=lg[myform1.city.value];
    //var glat=lt[myform1.city.value];
    var cp = 0;
    cp = k + Number(sites.class2.value);
    var zone = ct[cp][0];
    var losgn = 1;
    var lasgn = 1;
    if (ct[cp][1] < 0) { losgn = -1; }
    if (ct[cp][3] < 0) { lasgn = -1; }
    var glong = ct[cp][1] + losgn * ct[cp][2] / 60;
    var glat = ct[cp][3] + lasgn * ct[cp][4] / 60;

    var hmabove = new Array, arise = new Array, aset = new Array, hmrise = new Array, hmset = new Array;
    var flag = 0;

    //限定範圍
    if (y < -7000 || y > 7000) {
      alert("超出計算能力");
      return false;
    }
    if (y < -1000 || y > 3000) {
      alert("适用于西元-1000年至西元3000年，超出此范围误差较大");
    }

    //驗證輸入日期的正確性,若不正確則跳離
    if (ValidDate(op, y, m, d) == false) { return false; }

    //*********************************************************************************************
    glong = -glong;  //routines use east longitude negative convention
    zone = zone / 24;
    var jdx = Jdays(op, y, m, d, 12); //求出指定年月日之JD值
    var thedate = jdx - 2400001 - zone;  //儒略日,減去2400001再減去8小時時差
    risenset(glong, glat, thedate, hmabove, arise, aset, hmrise, hmset);
    var out = "時區:";
    out = out + ct[cp][0] + ",   經度:";
    if (ct[cp][1] > 0) { out = out + "東經"; } else { out = out + "西經"; }
    out = out + Math.abs(ct[cp][1]) + "度" + ct[cp][2] + "分,   緯度:";
    if (ct[cp][3] > 0) { out = out + "北緯"; } else { out = out + "南緯"; }
    out = out + Math.abs(ct[cp][3]) + "度" + ct[cp][4] + "分" + "\r\n\r\n";
    //out+=hmrise[1]+"\r\n";    
    //STEP 6 of Web page description
    for (jobj = 1; jobj <= 3; jobj++) {
      out += "   " + obname[jobj] + "\r\n"; //顯示種類
      // logic to sort the various rise and set states
      if ((arise[jobj] == 1) || (aset[jobj] == 1)) {   //current object rises and sets today
        if (arise[jobj] == 1) {
          out += "升起:" + hmrise[jobj] + "\r\n";    //顯示升起
        } else {
          out += "升起:     ----" + "\r\n";          //此日無升起
        }
        if (aset[jobj] == 1) {
          out += "落下:" + hmset[jobj] + "\r\n";     //顯示下落
        } else {
          out += "落下:" + "    ----" + "\r\n";      //此日無下落
        }
      } else {              //current object not so simple
        if (hmabove[jobj] == 1) {
          switch (jobj) {
            case 1: out += "    always above horizon" + "\r\n"; break;
            case 2: out += "    always above horizon" + "\r\n"; break;
            case 3: out += "    always bright" + "\r\n"; break;
          }
        } else {
          switch (jobj) {
            case 1: out += "    always below horizon" + "\r\n"; break;
            case 2: out += "    always below horizon" + "\r\n"; break;
            case 3: out += "    always dark" + "\r\n"; break;
          }
        }
      }
      //STEP 7 of Web page description
    }
    show1.innerText = out;	//for IE
    show1.textContent = out;	//for mozilla
  }


  function ValidDate(op, yy, mm, dd) {//驗證日期是否有效
    var vd = true;
    if (mm <= 0 || mm > 12) {
      alert("月份超出範圍");
      vd = false;
    }
    else {
      var ndf1 = -(yy % 4 == 0);	//可被四整除
      var ndf2 = ((yy % 400 == 0) - (yy % 100 == 0)) && (((yy > 1582) && (!op)) || op);
      var ndf = ndf1 + ndf2;
      var dom = 30 + ((Math.abs(mm - 7.5) + 0.5) % 2) - (mm == 2) * (2 + ndf);
      if (dd <= 0 || dd > dom) {
        if (ndf == 0 && mm == 2 && dd == 29) {
          alert("此年無閏月");
        }
        else {
          alert("日期超出範圍");
        }
        vd = false;
      }
    }
    if ((yy == 1582 && mm == 10 && dd >= 5 && dd < 15) && !op) {
      alert("此日期不存在");
      vd = false;
    }
    return vd;
  }


  function Jdays(op, yr, mh, dy, hr) {//將年月日時，轉换爲儒略日
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

  function cn(x) {
    var cs = Math.cos(x * 1.74532925199433E-02);  //cn 代表cosine
    return cs;
  }

  function fpart(x) {
    //       returns fractional part of a number
    x = x - Math.floor(x);
    if (x < 0) {
      x = x + 1;
    }
    var fp = x;   //只取小数部份
    return fp;
  }

  function hm(ut) {
    ut = Math.floor(ut * 60 + 0.5) / 60;
    var h = Math.floor(ut);
    var m = Math.floor(60 * (ut - h) + 0.5);
    var hrmn = h + "時" + m + "分";
    return hrmn;
  }

  function ipart(x) {
    var ip = (x / Math.abs(x)) * Math.floor(Math.abs(x));    //只取整数部份
    return ip;
  }

  function lmst(mjd, glong) {
    //    returns the local siderial time for
    //    the mjd and longitude specified
    var mjd0 = ipart(mjd);
    var ut = (mjd - mjd0) * 24;
    var t = (mjd0 - 51544.5) / 36525;
    var gmst = 6.697374558 + 1.0027379093 * ut;
    gmst = gmst + (8640184.812866 + (0.093104 - 0.0000062 * t) * t) * t / 3600;
    var thelmst = 24 * fpart((gmst - glong / 15) / 24);  //取得观测地区的恒星时
    return thelmst;
  }


  function moon(t, ra, dec) {
    // returns ra and dec of Moon to 5 arc min (ra) and 1 arc min (dec)
    // for a few centuries either side of J2000.0
    // Predicts rise and set times to within minutes for about 500 years
    // in past - TDT and UT time diference may become significant for long
    // times
    var p2 = 2 * Math.PI;
    var ARC = 206264.8062;
    var COSEPS = 0.91748;
    var SINEPS = 0.39778;
    var L0 = fpart(0.606433 + 1336.855225 * t);    //mean long Moon in revs
    var L = p2 * fpart(0.374897 + 1325.55241 * t); //mean anomaly of Moon
    var LS = p2 * fpart(0.993133 + 99.997361 * t); //mean anomaly of Sun
    var d = p2 * fpart(0.827361 + 1236.853086 * t); //diff longitude sun and moon
    var F = p2 * fpart(0.259086 + 1342.227825 * t); //mean arg latitude
    // longitude correction terms
    var dL = 22640 * Math.sin(L) - 4586 * Math.sin(L - 2 * d);
    dL = dL + 2370 * Math.sin(2 * d) + 769 * Math.sin(2 * L);
    dL = dL - 668 * Math.sin(LS) - 412 * Math.sin(2 * F);
    dL = dL - 212 * Math.sin(2 * L - 2 * d) - 206 * Math.sin(L + LS - 2 * d);
    dL = dL + 192 * Math.sin(L + 2 * d) - 165 * Math.sin(LS - 2 * d);
    dL = dL - 125 * Math.sin(d) - 110 * Math.sin(L + LS);
    dL = dL + 148 * Math.sin(L - LS) - 55 * Math.sin(2 * F - 2 * d);
    // latitude arguments
    var S = F + (dL + 412 * Math.sin(2 * F) + 541 * Math.sin(LS)) / ARC;
    var h = F - 2 * d;
    // latitude correction terms
    var N = -526 * Math.sin(h) + 44 * Math.sin(L + h) - 31 * Math.sin(h - L) - 23 * Math.sin(LS + h);
    var N = N + 11 * Math.sin(h - LS) - 25 * Math.sin(F - 2 * L) + 21 * Math.sin(F - L);
    var lmoon = p2 * fpart(L0 + dL / 1296000);  //Lat in rads
    var bmoon = (18520 * Math.sin(S) + N) / ARC;     //long in rads
    // convert to equatorial coords using a fixed ecliptic
    var CB = Math.cos(bmoon);
    var x = CB * Math.cos(lmoon);
    var V = CB * Math.sin(lmoon);
    var W = Math.sin(bmoon);
    var y = COSEPS * V - SINEPS * W;
    var Z = SINEPS * V + COSEPS * W;
    var rho = Math.sqrt(1 - Z * Z);
    dec[0] = (360 / p2) * Math.atan(Z / rho);        //算出月球的视赤纬(apparent declination)
    ra[0] = (48 / p2) * Math.atan(y / (x + rho));    //算出月球的视赤经(apparent right ascension)
    if (ra[0] < 0) {
      ra[0] = ra[0] + 24;
    }
  }

  function quad(ym, y0, yp, xe, ye, z1, z2, nz) {
    //  finds a parabola through three points and returns values of
    //  coordinates of extreme value (xe, ye) and zeros if any (z1, z2)
    //  assumes that the x values are -1, 0, +1
    nz[0] = 0;
    var A = 0.5 * (ym + yp) - y0;
    var b = 0.5 * (yp - ym);
    var c = y0;
    xe[0] = -b / (2 * A);              //x coord of symmetry line
    ye[0] = (A * xe[0] + b) * xe[0] + c;     //extreme value for y in interval
    var dis = b * b - 4 * A * c;    //discriminant
    if (dis > 0) {                   //there are zeros
      var dx = 0.5 * Math.sqrt(dis) / Math.abs(A);
      z1[0] = xe[0] - dx;
      z2[0] = xe[0] + dx;
      if (Math.abs(z1[0]) <= 1) { nz[0] = nz[0] + 1; }     //This zero is in interval
      if (Math.abs(z2[0]) <= 1) { nz[0] = nz[0] + 1; }     //This zero is in interval
      if (z1[0] < -1) { z1[0] = z2[0]; }
    }
  }

  function sinalt(iobj, mjd0, hour, glong, cphi, sphi) {
    // returns sine of the altitude of either the sun or the moon given the
    // modified julian day number at midnight UT and the hour of the UT day,
    // the longitude of the observer, and the sine and cosine of the latitude
    // of the observer
    var ra = new Array, dec = new Array;
    ra[0] = 0;
    dec[0] = 0;
    var instant = mjd0 + hour / 24;
    var t = (instant - 51544.5) / 36525;
    if (iobj == 1) {
      moon(t, ra, dec);
    } else {
      sun(t, ra, dec);
    }
    var tau = 15 * (lmst(instant, glong) - ra[0]);   //hour angle of object
    var sial = sphi * sn(dec[0]) + cphi * cn(dec[0]) * cn(tau);
    return sial;
  }

  function sn(x) {
    var se = Math.sin(x * 1.74532925199433E-02);
    return se;
  }

  function sun(t, ra, dec) {
    // Returns RA and DEC of Sun to roughly 1 arcmin for few hundred
    // years either side of J2000.0
    var p2 = 2 * Math.PI;
    var COSEPS = 0.91748;
    var SINEPS = 0.39778;
    var m = p2 * fpart(0.993133 + 99.997361 * t);        //Mean anomaly
    var dL = 6893 * Math.sin(m) + 72 * Math.sin(2 * m);          //Eq centre
    var L = p2 * fpart(0.7859453 + m / p2 + (6191.2 * t + dL) / 1296000);
    // convert to RA and DEC - ecliptic latitude of Sun taken as zero
    var sl = Math.sin(L);
    var x = Math.cos(L);
    var y = COSEPS * sl;
    var Z = SINEPS * sl;
    var rho = Math.sqrt(1 - Z * Z);
    dec[0] = (360 / p2) * Math.atan(Z / rho);
    ra[0] = (48 / p2) * Math.atan(y / (x + rho));
    if (ra[0] < 0) { ra[0] = ra[0] + 24; }
  }

  function risenset(glong, glat, thedate, hmabove, arise, aset, hmrise, hmset) {
    //define the altitudes for each object
    //treat twilight as a separate object 3, so sinalt routine
    //falls through to finding Sun altitude again
    var sinho = new Array(3);
    var sl = sn(glat);
    var cl = cn(glat);
    sinho[1] = sn(8 / 60);         //moonrise - average diameter used
    sinho[2] = sn(-50 / 60);       //sunrise - classic value for refraction
    sinho[3] = sn(-12);             //nautical twilight
    var xe = new Array, ye = new Array, z1 = new Array, z2 = new Array, nz = new Array;
    for (iobj = 1; iobj <= 3; iobj++) {
      var utrise = 0;
      var utset = 0;
      var rise = 0;
      var sett = 0;
      var hour = 1;
      var zero2 = 0;
      // See STEP 1 and 2 of Web page description.
      var ym = sinalt(iobj, thedate, hour - 1, glong, cl, sl) - sinho[iobj];
      if (ym > 0) { above = 1; } else { above = 0; }
      //used later to classify non-risings
      do {
        //STEP 1 and STEP 3 of Web page description
        var y0 = sinalt(iobj, thedate, hour, glong, cl, sl) - sinho[iobj];
        var yp = sinalt(iobj, thedate, hour + 1, glong, cl, sl) - sinho[iobj];
        xe[0] = 0;
        ye[0] = 0;
        z1[0] = 0;
        z2[0] = 0;
        nz[0] = 0;
        //STEP 4 of web page description
        quad(ym, y0, yp, xe, ye, z1, z2, nz);
        switch (nz[0]) {
          //cases depend on values of discriminant - inner part of STEP 4
          case 0:
            break; //nothing  - go to next time slot
          case 1:                      // simple rise / set event

            if (ym < 0) {       // must be a rising event
              utrise = hour + z1[0];
              rise = 1;
            } else {                    // must be setting
              utset = hour + z1[0];
              sett = 1;
            }
            break;
          case 2:                      // rises and sets within interval
            if (ye[0] < 0) {       // minimum - so set then rise
              utrise = hour + z2[0];
              utset = hour + z1[0];
            } else {                    // maximum - so rise then set
              utrise = hour + z1[0];
              utset = hour + z2[0];
            }
            rise = 1;
            sett = 1;
            zero2 = 1;
            break;
        }
        ym = yp;     //reuse the ordinate in the next interval
        hour = hour + 2;
        // STEP 5 of Web page description - have we finished for this object?
      } while (!((hour == 25) || (rise * sett == 1)));

      hmabove[iobj] = above;
      arise[iobj] = rise;
      aset[iobj] = sett;
      hmrise[iobj] = hm(utrise);
      hmset[iobj] = hm(utset);
    }
  }

  function select() {

    with (document.sites.class1) {
      var sel1 = options[selectedIndex].text;

    }
    k = 0;
    for (var i = 0; i < sitesclass1.length; i++) //class1的总个数
    {

      if (sitesclass1[i] == sel1) {
        var now_subtypes = sitesclass2[i].split(split1);
        document.sites.class2.options.length = 0;
        document.sites.class2.options.length = now_subtypes.length; //此为class1内class2的长度


        with (document.all.sites.class2) {
          for (var j = 0; j < now_subtypes.length; j++) {
            options[j].text = now_subtypes[j];			//设置二级下拉列表的显示的文本
            options[j].value = j;		//设置二级下拉列表的显示的值
          }
        }
        break;
      }
      else {
        var past_subtypes = sitesclass2[i].split(split1);
        k = k + past_subtypes.length;

      }
    }
  }

  function initial_select() {
    document.sites.class1.length = sitesclass1.length;
    with (document.sites.class1) {
      for (var i = 0; i < sitesclass1.length; i++) {
        options[i].text = sitesclass1[i];
        options[i].value = i;

      }
      options[selectedIndex].text = sitesclass1[0];
      //options[selectedIndex].value=i;
    }
    var now_subtypes2 = sitesclass2[0].split(split1);
    document.sites.class2.options.length = now_subtypes2.length;
    with (document.sites.class2) {
      for (var j = 0; j < now_subtypes2.length; j++) {
        options[j].text = now_subtypes2[j];
        options[j].value = j;
      }

    }

  }


}
