import mongoose, { Schema } from 'mongoose';
import { IUser } from '../user.types.js';

const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      require: [true, 'Name is require'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
      select: false, // Пароль не повертається при запитах
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true, // Додає поля createdAt та updatedAt автоматично
    strict: false,
  },
);

const UserModel = mongoose.model<IUser>('User', userSchema);
export default UserModel;
