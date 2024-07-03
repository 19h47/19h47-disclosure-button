import { dispatchEvent } from './utils';

const toggleDisplay = ($el: HTMLElement) => {
	const style = $el.getAttribute('style');

	if (style && -1 !== style.indexOf('display')) {
		if ('block' === $el.style.display) {
			return $el.style.setProperty('display', 'none');
		}
		if ('none' === $el.style.display) {
			return $el.style.setProperty('display', 'block');
		}
	}
};

const toggleAriaHidden = ($el: HTMLElement) => {
	if (false === JSON.parse($el.getAttribute('aria-hidden') as string)) {
		$el.setAttribute('aria-hidden', 'true');
		$el.classList.remove('is-active');

		return $el.style.setProperty('pointer-events', 'none');
	}

	if (true === JSON.parse($el.getAttribute('aria-hidden') as string)) {
		$el.setAttribute('aria-hidden', 'false');
		$el.classList.add('is-active');

		return $el.style.setProperty('pointer-events', 'auto');
	}
};

/**
 * DisclosureButton
 *
 * @see https://www.w3.org/TR/wai-aria-practices-1.1/#disclosure
 */
class DisclosureButton {
	el: HTMLElement;
	elements: HTMLElement[] = [];
	ids: string[] = [];

	constructor(el: HTMLElement | null) {
		this.el = el as HTMLElement;
	}

	init() {
		// @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls
		this.ids = (this.el.getAttribute('aria-controls') as string)
			.trim()
			.split(' ')
			.map((id: string) => `#${id.trim()}`);

		this.elements = [...document.querySelectorAll<HTMLElement>(this.ids.join(','))];

		this.initEvents();
	}

	initEvents() {
		this.el.addEventListener('click', this.onClick);
		this.el.addEventListener('focus', this.onFocus);
		this.el.addEventListener('blur', this.onBlur);
	}

	onClick = () => this.toggle();

	onFocus = () => this.el.classList.add('focus');

	onBlur = () => this.el.classList.remove('focus');

	toggle(): boolean {
		if ('true' === this.el.getAttribute('aria-expanded')) {
			this.close();

			return dispatchEvent(
				this.el,
				{ ids: this.ids, elements: this.elements, el: this.el },
				'close',
			);
		}

		this.open();

		return dispatchEvent(
			this.el,
			{ ids: this.ids, elements: this.elements, el: this.el },
			'open',
		);
	}

	close() {
		this.el.setAttribute('aria-expanded', 'false');

		this.elements.forEach($el => {
			toggleDisplay($el);
			toggleAriaHidden($el);
		});
	}

	open() {
		this.el.setAttribute('aria-expanded', 'true');

		this.elements.forEach($el => {
			toggleDisplay($el);
		});
	}

	destroy() {
		this.el.removeEventListener('click', this.onClick);
		this.el.removeEventListener('focus', this.onFocus);
		this.el.removeEventListener('blur', this.onBlur);
	}
}

export default DisclosureButton;
