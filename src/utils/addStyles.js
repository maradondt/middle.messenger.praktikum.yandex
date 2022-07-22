export const addStylesToHtml = (style) => {
  document.querySelector('head')?.appendChild(style);
};

const createStyleVariablesFromObject = (prefix, vars) => {
  const style = document.createElement('style');

  style.textContent = `
  :root {
    ${Object.entries(vars)
      .map(([name, value]) => `--${prefix}-${name}: ${value}`)
      .join(';')}
  }
  `;
  return style;
};

export const addVarsInRoot = (prefix = '', vars = {}) => {
  const style = createStyleVariablesFromObject(prefix, vars);
  addStylesToHtml(style);
};
