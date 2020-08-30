/*
{

}
 */

import Chance from "chance";

const chance = new Chance();


export default [
  {
    name: "Mountain trips",
    avatar: "https://picsum.photos/200",
    description: chance.paragraph({ sentences: 2 }),
    count: 140,
    inGroup: false,
  },
  {
    name: "Bike lovers",
    avatar: "https://picsum.photos/200",
    count: 64,
    description: chance.paragraph({ sentences: 2 }),
    inGroup: true,
  },
  {
    name: "Deployments",
    avatar: "https://picsum.photos/200",
    description: chance.paragraph({ sentences: 2 }),
    count: 20,
    inGroup: true,
  },
  {
    name: "Weekly newsletter",
    avatar: "https://picsum.photos/200",
    description: chance.paragraph({ sentences: 2 }),
    count: 140,
    inGroup: false,
  },
]