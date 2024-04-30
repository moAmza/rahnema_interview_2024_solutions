class BrowserHistory {
  constructor(homepage: string) {}

  visit(url: string): void {}

  undo(steps: number): string {}

  redo(steps: number): string {}
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.undo(steps)
 * var param_3 = obj.redo(steps)
 */
