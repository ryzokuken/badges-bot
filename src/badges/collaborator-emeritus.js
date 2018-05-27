const Badge = require('../models/badge');

const coreEmeritusBadge = new Badge(
  'core-emeritus',
  'member',
  'removed',
  payload => {
    console.log();
    console.log(
      `${payload.member.login} has been issued the core-emeritus badge.`
    );
  }
);

module.exports = coreEmeritusBadge;
