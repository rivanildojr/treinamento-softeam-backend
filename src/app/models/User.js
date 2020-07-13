const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function bCryptPassword(next) {
  if (!this.isModified("password")) next();

  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
  comparePassword(password) {
    return bcrypt.compare(password, this.password);
  },

  createToken() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: 300000,
    });
  },
};

module.exports = mongoose.model("User", UserSchema);
