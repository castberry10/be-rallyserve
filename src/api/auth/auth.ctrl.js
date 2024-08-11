import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import Member from '../../models/member.js';
import sequelize from '../../models/index.js'; // sequelize 인스턴스를 가져옴

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async ctx => {
  const { id, password } = ctx.request.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const t = await sequelize.transaction(); // 트랜잭션 시작

  try {
    const member = await Member.create(
        { userid: id, password: hashedPassword },
        { transaction: t }
    );

    const token = jwt.sign({ id: member.id }, JWT_SECRET, { expiresIn: '6h' });

    await t.commit();
    ctx.body = { token };
  } catch (error) {
    await t.rollback();
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

export const logout = async ctx => {
  ctx.body = { message: 'Logged out' };
};
