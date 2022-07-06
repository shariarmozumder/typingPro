const Text = ((_) => {
  const para = [
    "This World Shall Know Pain",
    "To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have.",

    "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
    "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be.",

    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",

    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",

    "When to use iterative development? You should use iterative development only on projects that you want to succeed.",

    "Religion, ideology, resources, land, spite, love or just because… No matter how pathetic the reason, it's enough to start war. War will never cease to exist… reasons can be thought up after the fact… Human nature pursues strife.",

    "Thinking you're no-good and worthless is the worst thing you can do.",
    "Don't give up, there's no shame in falling down! True shame is to not stand up again!",
    "People's lives don't end when they die. It ends when they lose faith.",
    "Life is not a game of luck. If you wanna win, work hard.",
    "Because people don't have wings, they look for ways to fly.",
    " Do you think that someday, the real stars will ever come back?",
    "Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain.",
  ];

  const randomPara = (_) => {
    const pick = Math.floor(Math.random() * para.length);
    return para[pick];
  };
  return {
    randomPara,
  };
})();
export default Text;
