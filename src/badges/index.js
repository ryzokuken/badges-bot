const Badge = require('../models/badge');

const testBadge = new Badge('test-badge', 'member', 'added', payload => {
  console.log(`test-badge alloted to ${payload.member.login}`);
});

const badges = [testBadge];

function handlePayload(opts) {
  badges.forEach(badge => badge.evaluate(opts));
}

module.exports = { handlePayload };
