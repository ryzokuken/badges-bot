const Badge = require('../models/badge');

const coreCollaboratorBadge = new Badge(
  'core-collaborator',
  'member',
  'added',
  payload => {
    console.log();
    console.log(
      `${payload.member.login} has been issued the core-collaborator badge.`
    );
  }
);

module.exports = coreCollaboratorBadge;
