const Badge = require('../models/badge');

const coreCollaboratorBadge = require('./core-collaborator');

const badges = [coreCollaboratorBadge];

function handlePayload(opts) {
  badges.forEach(badge => badge.evaluate(opts));
}

module.exports = { handlePayload };
