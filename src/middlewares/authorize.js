import createHttpError from 'http-errors';

export const authorize = async (req, res, next) => {
  const { user } = req;
  if (!user) {
    next(createHttpError(401));
    return;
  }

  next();
};
