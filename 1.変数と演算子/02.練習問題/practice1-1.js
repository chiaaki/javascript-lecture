// スラッシュを2つ入力するとその行はコメントアウト（命令文として認識されなくなる）されます。
// ショートカットキー　：　Ctrl ＋ / 　 


//ウォーミングアップ　それぞれの変数bの値はいくつになるでしょうか。
//　　　　　　　　　  予想してから実行してください。

let a = 0;
let b = a;
console.log(b);
b = 5;
console.log(b);
b = b + 5;
console.log(b);


// 問1.このままのコードではエラーが出てしまうので修正してください。
//     修正後の変数名は自由に決めてください。


const triangleArea;
const let = 3;
const height = 2;
triangleArea = let * height / 2;
console.log(triangleArea);


// 問2.以下のコードには無駄な記述があります。効率のよいコードに書き換えてください。

let circleArea;
let num1 = 5;
let num2 = 5;

circleArea = num1 * num2 * 3.14;
console.log(circleArea);


// 問3.円錐の面積(coneVolume)を計算してください。
// 　　計算式は円の面積(BottomArea) × 高さ(height) ÷ 3です。

let coneVolume;
let BottomArea = 100;
let height = 50;


console.log(coneVolume);


// 問4(★).連立方程式 x-3y=-7 ,x+5y=9 の解を計算するコードを記述してください。
//   　  　解はx=-1 ,y=2です。
// 
// ヒント：クラメルの公式を使うと二元一次連立方程式の解を計算することができます。
// 
//                       ad−bc          ad−bc
// ​ax+by=p         　x = ――――――    　y= ―――――― 
// cx+dy=q  の解は、　    pd−bq　　,     aq−pc


let x,y;

    console.log(x,y);
