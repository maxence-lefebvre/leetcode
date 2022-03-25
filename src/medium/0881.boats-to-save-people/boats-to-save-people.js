/**
 * @see {@link https://leetcode.com/problems/boats-to-save-people/}
 * @param {number[]} people
 * @param {number} limit
 * @returns {number}
 */
export const numRescueBoats = (people, limit) => {
  people.sort((a, b) => a - b);

  let boats = 0;

  for (
    let start = 0, end = people.length - 1;
    start <= end;
    end -= 1, boats += 1
  ) {
    if (people[start] + people[end] <= limit) {
      start += 1;
    }
  }

  return boats;
};

// Discussions said that heaviest should be paired with lightest.
// Solution with second possible heaviest:
//
// const pair = (people, limit) => {
//   const heaviest = people.shift();
//
//   for (let i = 0; i < people.length; i += 1) {
//     if (heaviest + people[i] <= limit) {
//       people.splice(i, 1);
//       return;
//     }
//   }
// };
//
// export const numRescueBoats = (people, limit) => {
//   people.sort((a, b) => b - a);
//
//   let boats = 0;
//   while (people.length > 0) {
//     pair(people, limit);
//     boats += 1;
//   }
//   return boats;
// };
