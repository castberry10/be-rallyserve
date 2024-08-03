import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = async (ctx, next) => {
  const authHeader = ctx.headers['authorization'];
  if (!authHeader) {
    ctx.status = 401;
    ctx.body = { message: 'Authorization header missing' };
    return;
  }

  const token = authHeader.split(' ')[1]; // 'Bearer <token>' 형식에서 토큰 추출
  if (!token) {
    ctx.status = 401;
    ctx.body = { message: 'Token missing' };
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    ctx.state.user = decoded; // 토큰에서 user 정보 추출
    await next();
  } catch (err) {
    ctx.status = 401;
    ctx.body = { message: 'Invalid token' };
  }
};
export default auth;  