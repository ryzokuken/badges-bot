class Badge {
  constructor(name, hook, action, callback) {
    this.name = name;
    this.hook = hook;
    this.action = action;
    this.callback = callback;

    // TODO: Add a custom prerequisite callback
    // TODO: Keep a list of recipients
  }

  evaluate(raw) {
    if (raw.hook !== this.hook || raw.action !== this.action) {
      return false;
    }
    this.callback(raw);
    return true;
  }
}
