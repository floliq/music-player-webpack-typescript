import Component from './Component';

export const createDOMElement = (html: string): HTMLElement => {
  const template = document.createElement('div');
  template.innerHTML = html.trim();
  return template.firstChild as HTMLElement;
};


export const append = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parent: Component<any> | HTMLElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  child: Component<any> | HTMLElement
): void => {
  const parentEl = parent instanceof Component ? parent.getElement() : parent;
  const childEl = child instanceof Component ? child.getElement() : child;
  parentEl.appendChild(childEl);
};

export const prepend = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parent: Component<any> | HTMLElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  child: Component<any> | HTMLElement
): void => {
  const parentEl = parent instanceof Component ? parent.getElement() : parent;
  const childEl = child instanceof Component ? child.getElement() : child;
  parentEl.prepend(childEl);
};
