import { createDOMElement } from './render';

export abstract class Component<T> {
  protected element: HTMLElement | null = null;
  protected eventListeners: Array<{
    element: HTMLElement;
    type: string;
    listener: EventListener;
  }> = [];

  constructor(protected data: T) {}

  protected abstract getTemplate(): string;

  protected setEvents(): void {}

  public getElement(): HTMLElement {
    this.element ??= createDOMElement(this.getTemplate());
    return this.element;
  }

  protected addEventListener(
    element: HTMLElement | null,
    type: string,
    listener: EventListener
  ): void {
    if (element) {
      element.addEventListener(type, listener);
      this.eventListeners.push({ element, type, listener });
    }
  }

  protected removeElement(): void {
    this.eventListeners.forEach(({ element, type, listener }) => {
      element.removeEventListener(type, listener);
    });
    this.eventListeners = [];
    this.element = null;
  }
}

export default Component;
