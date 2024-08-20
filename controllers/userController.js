const User = require('../models/User');

exports.updateProfile = async (req, res) => {
  try {
    const { name, email, profile } = req.body;
    const user = await User.findByIdAndUpdate(req.user.userId, { name, email, profile }, { new: true });
    res.json({ message: 'Profile updated', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error });
  }
};
