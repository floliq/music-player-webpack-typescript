export const createDOMElement = (html: string): HTMLElement => {
  const template = document.createElement('div');
  template.innerHTML = html.trim();
  return template.firstChild as HTMLElement;
};
