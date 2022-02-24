// 問1.このままのコードでは値段の表示が上手くいかないので、テンプレートリテラルを使わずに修正してください。


    const itemName = "みかん";
    const itemPrice = 170;
    const itemName2 = "りんご";
    const itemPrice2 = 120;
    const TAX = 1.1;
    const msg = itemName + "と" + itemName2 + "の合計は" + ((itemPrice + itemPrice2) * TAX) + "円(税込)です。 税抜(" + (itemPrice + itemPrice2) + "円)"
    console.log(msg);


// 問2.問1のコードをテンプレートリテラルで記述しなおしてください。

    // const itemName = "みかん";
    // const itemPrice = 170;
    // const itemName2 = "りんご";
    // const itemPrice2 = 120;
    // const TAX = 1.1;

    const msg2 = `${itemName}と${itemName2}の合計は${(itemPrice + itemPrice2) * TAX}円(税込)です。 税抜(${itemPrice + itemPrice2}円)`
    console.log(msg2);


// 問3. document.body.innerHTMLに値を代入するとhtmlのbody要素の中に値を挿入することができます。
//          body要素の中にh1要素で「佐藤さん、こんにちは！」と表示させるコードを記述してください。
//          また、ベタ打ちするのではなく変数traineeNameを必ず使用してください。

    const traineeName = "佐藤";
    document.body.innerHTML = `<h1>${traineeName}さん、こんにちは！</h1>`;


// 問4(★). 二次方程式 x^2 -5x + 4 = 0　の解を計算し、コンソールへ表示するコードを記述してください。
//          コンソールへ表示する文章は「二次方程式 x^2 -5x + 4 = 0 の解は x = 1 , 4 です。」とすること。
// 　　　　　平方根の計算はMath.sqrt()を使用します。　例）　Math.sqrt(4);　->  2



