var merge1 = function (nums1, m, nums2, n) {
  const total = m + n;
  const ret = [];

  let i = 0;
  let x = 0;
  let y = 0;
  while (i < total) {
    if (x >= m || nums2[y] < nums1[x]) {
      ret.push(nums2[y]);
      y++;
    } else {
      ret.push(nums1[x]);
      x++;
    }
    i++;
  }

  for (let i = 0; i < total; i++) {
    nums1[i] = ret[i];
  }
  return nums1;
}



var merge = function (nums1, m, nums2, n) {
  let x = m - 1;
  let y = n - 1;
  let z = m + n - 1;

  while (y >= 0) {
    if (x >= 0 && nums1[x] > nums2[y]) {
      nums1[z--] = nums1[x--];
    } else {
      nums1[z--] = nums2[y--];
    }
    console.log(nums1);
  }
}
let test1 = merge([1,2,3,0,0,0],3, [2,5,6], 3);
console.log(test1);
