import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/authOptions';

export const getSessionUser = async (req) => {
  try {
    const session = await getServerSession(req, authOptions);

    if (!session || !session.user) {
      return null;
    }

    const { user } = session;

    return {
      user,
      email: user.email,
      userId: user.userId,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
