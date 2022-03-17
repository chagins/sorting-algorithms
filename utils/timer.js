beforeEach(function() {
  if (!this.currentTest.parent.timerStart) {
    this.currentTest.parent.timerIndex = 0;
    this.currentTest.parent.timerStart = Date.now();
  }
});

afterEach(function() {
  if (this.currentTest.parent.timerStart &&
    ++this.currentTest.parent.timerIndex ===
    this.currentTest.parent.tests.length) {
    console.error(`  Suite "${this.currentTest.parent.fullTitle()}" Elapsed: ${Date.now() -
    this.currentTest.parent.timerStart}ms`);
  }
});