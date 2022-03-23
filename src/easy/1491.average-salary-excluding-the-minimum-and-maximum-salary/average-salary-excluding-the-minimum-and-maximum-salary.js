/**
 * @see {@link https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/}
 * @param {number[]} salaries
 * @returns {number}
 */
export const average = (salaries) => {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;

  for (let i = 0; i < salaries.length; i += 1) {
    const salary = salaries[i];
    sum += salary;
    max = Math.max(max, salary);
    min = Math.min(min, salary);
  }

  return (sum - max - min) / (salaries.length - 2);
};
