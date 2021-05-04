const minJump = function (...arr) {
    let count = 0;
    let jumper = 0;
    let currentIndex = [0];
    let nums = [arr[0]];
    for (let index in arr) {
      let potential = [];
      let values = [];
      new Array(nums[index]).fill("").forEach((_, i) => {
        potential.push(i + 1);
        values.push(arr[potential[i] + Number(currentIndex[index])]);
      });
      let indexArr = values.map((curr, i) => {
        return curr + potential[i];
      });
      let maxNum = Math.max(...indexArr);
      let i = indexArr.lastIndexOf(+maxNum);
      jumper += potential[i];
      currentIndex.push(potential[i]);
      nums.push(arr[jumper]);
      if (jumper >= index && jumper <= arr.length - 1) {
        count++;
      }
      if (arr[jumper] > arr.length - 1) {
        count++;
      }
    //   console.log(potential);
    //   console.log(values);
    //   console.log(jumper, i);
    //   console.log(jumper);
    //   console.log("---------------");
    //   //add values and indexes
    }
    console.log(count)
};
  minJump(1,3,2,4,1,4,2);
   
  
  
  