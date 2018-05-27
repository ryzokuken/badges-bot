const Badge = require('../models/badge');

const coreCollaboratorBadge = require('./core-collaborator');
const collaboratorEmeritus = require('./collaborator-emeritus');

const badges = [coreCollaboratorBadge, collaboratorEmeritus];

function handlePayload(opts) {
  badges.forEach(badge => badge.evaluate(opts));
}

module.exports = { handlePayload };
