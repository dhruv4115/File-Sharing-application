function checkRole(roles) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: 'Unauthenticated' });

    const hasAccess = Array.isArray(roles)
      ? roles.includes(req.user.role)
      : req.user.role === roles;

    if (!hasAccess) {
      return res.status(403).json({ message: 'Access denied' });
    }

    next();
  };
}

module.exports = checkRole;
