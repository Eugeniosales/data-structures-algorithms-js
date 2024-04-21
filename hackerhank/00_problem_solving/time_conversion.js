/*

Target:
.Convert AM/PM format to 24h

Entries
.Input: 07:05:45PM
.Output: 19:05:45

Walkthrough
.Aproach 1
1.Loop through string and split into h, m, s and AM/PM
2.Set h as mod 12 and add 12 in case ap is PM
3.return string joining with ':'
*/

const pad = (s) => s.toString().padStart(2, "0");

function timeConversion(s) {
  // Write your code here

  // Initialization
  let timeStr = "";
  let ap = s[s.length-2];

  for (let i = 0; i < s.length - 2; i++) timeStr += s[i];

  let [hour, minute, seconds] = timeStr.split(":");

  hour = parseInt(hour, 10) % 12;
  if (ap.includes("P")) {
    hour = hour + 12;
  }
  return `${pad(hour)}:${minute}:${seconds}`;
}

console.log(timeConversion("12:45:54PM"));

console.log(11 % 12)