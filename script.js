function twoOldestAges(ages) {
  return ages
    .sort(function (a, b) {
      return a - b;
    })
    .slice(-2);
}
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
