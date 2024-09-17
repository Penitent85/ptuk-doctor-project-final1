const users = [
  {
    id: 1,
    username: 'ali',
    email: 'ali@gmail.com',
    password: '$2b$10$95qWnd9GjoQGhj3kL8w8T.zkM2KNdVjPpJER87dzgRmnajBgXnZdC',
    isAdmin: false,
    isVerified: false,
    isDoctor: false,
    like: 0,
    // password: 1
  },
  {
    id: 2,
    username: 'mahdi',
    email: 'mahdi@gmail.com',
    password: '$2b$10$3R.ZRw9y/Z9x38j9uYoZley5X3lu20XqeG3ltWBJHa6HwHx/NzEu2',
    isAdmin: true,
    isVerified: false,
    isDoctor: false,
    like: 0,
    // password: 2
  },
  {
    id: 3,
    username: 'anan',
    email: 'anan@gmail.com',
    password: '$2b$10$sq/DsV/mExbrfYE5.w3BTOzUM2HWUOO.xcMl.GbjHpo6iHQ8EKwye',
    isAdmin: false,
    isVerified: false,
    isDoctor: true,
    like: 0,
    // password : 3
  },
];

module.exports = users;
