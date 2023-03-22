// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

function VendingMachine() {
  return {
    till: { 10: 0, 50: 0, 100: 0, 500: 0 },
    insertCoin(num) {
      let a = Math.floor(num / 500);
      let r = num % 500;
      let b = Math.floor(r / 100);
      let s = r % 100;
      let c = Math.floor(s / 50);
      let t = s % 50;
      let d = Math.floor(t / 10);
      this.till[500] += a;
      this.till[100] += b;
      this.till[50] += c;
      this.till[10] += d;
      this.balance =
        500 * this.till[500] +
        100 * this.till[100] +
        50 * this.till[50] +
        10 * this.till[10];
    },
    balance: 0,
  };
}

module.exports = VendingMachine;
