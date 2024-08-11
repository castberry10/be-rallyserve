import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import Member from '../../models/member.js';
import MemberPoint from "../../models/memberPoint.js";
import MemberStar from "../../models/memberStar.js";

dotenv.config();

// import User from '../../models/user';

/*
POST /api/auth/register
{
  username: 'A',
  password: 'B'
}
*/
const JWT_SECRET = process.env.JWT_SECRET;

export const register = async ctx => {
  const { id, password } = ctx.request.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const member = await Member.create({ userid: id, password: hashedPassword });
    await MemberPoint.create({ memberId: member.id, points: 0 });
    await MemberStar.create({ memberId: member.id, star: 0 });
    const token = jwt.sign({ id: member.id }, JWT_SECRET, { expiresIn: '6h' });
    ctx.body = { token };
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      ctx.status = 409;
      ctx.body = { error: 'User ID already exists' };
    } else {
      ctx.status = 500;
      ctx.body = { error: 'Registration failed', details: error.message };
    }
  }
};

export const login = async ctx => {
  const { id, password } = ctx.request.body;

  try {
    const member = await Member.findOne({ where: { userid: id } });

    if (member && await bcrypt.compare(password, member.password)) {
      const token = jwt.sign({ id: member.id }, JWT_SECRET, { expiresIn: '6h' });
      ctx.body = { token };
    } else {
      ctx.status = 401;
      ctx.body = { error: 'Invalid credentials' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Login failed', error };
  }
};

// export const check = async ctx => {
//   ctx.body = { message: 'Logged out' };
// };

/*
POST /api/auth/logout
*/
export const logout = async ctx => {
  ctx.body = { message: 'Logged out' };
};