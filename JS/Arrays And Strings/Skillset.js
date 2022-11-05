const endorsements = [
  { name: "Bob", skill: "JS" },
  { name: "David", skill: "JS" },
  { name: "Bob", skill: "HTML" },
  { name: "James", skill: "HTML" },
  { name: "James", skill: "JS" },
  { name: "James", skill: "CSS" },
];

// Output
const skillset = [
  { skill: "JS", people: ["Bob", "David", "James"], count: 3 },
  { skill: "HTML", people: ["Bob", "James"], count: 2 },
  { skill: "CSS", people: ["James"], count: 1 },
];

const getSkillSet = (endorsements) => {
  const res = [];
  for (let i = 0; i < endorsements.length; i++) {
    let found = false;
    for (let j = 0; j < res.length; j++) {
      if (res[j].skill === endorsements[i].skill) {
        found = true;
        res[j].people.push(endorsements[i].name);
        res[j].count = res[j].count + 1;
        break;
      }
    }
    if (!found) {
      res.push({
        skill: endorsements[i].skill,
        people: [endorsements[i].name],
        count: 1,
      });
    }
  }

  return res;
};

const getSkillSetOptimized = (endorsements) => {
  const res = {};
  for (let i = 0; i < endorsements.length; i++) {
    if (res[endorsements[i].skill]) {
      res[endorsements[i].skill][0].push(endorsements[i].name);
      res[endorsements[i].skill][1] = res[endorsements[i].skill][1] + 1;
    } else {
      res[endorsements[i].skill] = [[endorsements[i].name], 1];
    }
  }
  const output = [];
  for (let i in res) {
    output.push({
      skill: i,
      people: res[i][0],
      count: res[i][1],
    });
  }
  console.log(res);
  console.log(output);
};

// console.log(getSkillSet(endorsements));
console.log(getSkillSetOptimized(endorsements));
