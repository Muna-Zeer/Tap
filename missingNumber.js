
//function to find missing number in the array of consecutive integers
const missingNumber = (nums) => {
 let missNum;
  
    for (let i = 1; i <= nums.length; i++) {
  
  //check if the current number is not missing in the array
      if (!nums.includes(i)) {
      missNum=i;
      console.log('missNum',missNum);
      }
    }
  //return  missing Number 
    return missNum;
  };
  

  //Test Cases
  const nums1 =[3,0,1];
  console.log("Missing Numbers of nums1:", missingNumber(nums1));

  const nums2 = [9,6,4,2,3,5,7,0,1];
  console.log("Missing Numbers of nums2:", missingNumber(nums2));

  const nums3 =[0,1];
  console.log("Missing Numbers of nums3:", missingNumber(nums3));
  