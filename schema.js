const User = {
  username: {
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
};

const Story = {
  title: {
    type: String,
    required: true,
    default: "",
  },

  admin: {
    type: User,
    required: true,
  },

  collaborators: [
    {
      type: User,
      required: true,
    },
  ],

  turn: {
    type: Number,
    required: true,
    default: 0,
  },

  open: {
    type: Boolean,
    required: true,
    default: true,
  },

  sentences: [String],
};
