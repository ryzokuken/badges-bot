class Badge {
  constructor(name, hook, action, callback) {
    this.name = name;
    this.hook = hook;
    this.action = action;
    this.callback = callback;

    // TODO: Add a custom prerequisite callback
    // TODO: Keep a list of recipients
  }

  evaluate(opts) {
    if (opts.hook !== this.hook || opts.action !== this.action) {
      return false;
    }
    this.callback(opts.payload);
    return true;
  }
}

module.exports = Badge;
