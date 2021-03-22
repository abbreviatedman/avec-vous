const users = [
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

const stories = [
  {
    title: "story?",
    admin: ObjectId("6059151a23b09211812fd2d0"),
    collaborators: [
      ObjectId("6059151a23b09211812fd2cd"),
      ObjectId("6059151a23b09211812fd2ce"),
    ],
    turn: 0,
    isOpen: true,
    sentences: ["i went to  the store", "and it was sweet"],
  },
  {
    title: "story!",
    admin: ObjectId("6059151a23b09211812fd2cf"),
    collaborators: [
      ObjectId("6059151a23b09211812fd2ce"),
      ObjectId("6059151a23b09211812fd2d0"),
    ],
    turn: 1,
    isOpen: false,
    sentences: ["i went to  the beach", "and it was NOT sweet"],
  },
];

const invites = [
  {
    story: ObjectId("6059151a23b09211812fd2d0"),
    user: ObjectId("6059151a23b09211812fd2ce"),
  },

  {
    story: ObjectId("605916a723b09211812fd2d1"),
    user: ObjectId("6059151a23b09211812fd2cf"),
  },
];
