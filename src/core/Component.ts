import { createDOMElement } from "./render";


export abstract class Component<T> {
  protected element: HTMLElement | null = null;

  constructor(protected data: T) {}

  protected abstract getTemplate(): string;

  public getElement(): HTMLElement {
    this.element ??= createDOMElement(this.getTemplate());
    return this.element;
  }

  protected removeElement(): void {
    this.element = null;
  }
}

export default Component;
