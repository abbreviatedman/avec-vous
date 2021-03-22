const User = {
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  stories: [Story],
};

const Story = {
  title: {
    type: String,
  },

  sentences: [Sentence],
};

const Sentence = {
  text: {
    type: String,
    required: true,
  },
};
