const User = require("./models/User");
const Story = require("./models/Story");
const Invite = require("./models/Invite");
require("./models");

const seed = async () => {
  const dummyUsers = [
    {
      username: "55",
      password: "55",
      email: "colin.jaffe@gmail.com",
    },
    {
      username: "a",
      password: "a",
      email: "colin.jaffe@ms.com",
    },
    {
      username: "b",
      password: "b",
      email: "colin.fake@gmail.com",
    },
    {
      username: "c",
      password: "c",
      email: "fake@fake.com",
    },
  ];

  const users = await User.insertMany(dummyUsers);
  const dummyStories = [
    {
      title: "story?",
      admin: users[0],
      collaborators: [users[0], users[1]],
      turn: 0,
      isOpen: true,
      sentences: ["i went to  the store", "and it was sweet"],
    },
    {
      title: "story!",
      admin: users[1],
      collaborators: [users[1], users[2], users[3]],
      turn: 1,
      isOpen: false,
      sentences: ["i went to  the beach", "and it was NOT sweet"],
    },
  ];

  const stories = await Story.insertMany(dummyStories);
  const dummyInvites = [
    {
      story: stories[0],
      user: users[1],
    },

    {
      story: stories[1],
      user: users[2],
    },
  ];

  await Invite.insertMany(dummyInvites);
  console.log("Seeded!");
  process.exit(0);
};

seed();
