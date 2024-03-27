// eslint-disable-next-line import/extensions
import { removeAllChildNodes } from "./RemoveAllChildNodes.js";

describe("remove all child nodes test", () => {
  test("remove all child nodes test", () => {
    // eslint-disable-next-line max-len
    document.body.innerHTML = '<ul id="parent"><li id="child"></li></ul>';
    const parentEl = document.getElementById("parent");

    removeAllChildNodes(parentEl);

    expect(parentEl.childNodes.length).toBe(0);
  });
});
