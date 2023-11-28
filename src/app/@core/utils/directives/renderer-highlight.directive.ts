import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appRendererHighlight]',
})
export class RendererHighlightDirective {
	constructor(private element: ElementRef, private renderer: Renderer2) {}

	linearGradient = `linear-gradient(90deg,
                    rgba(70, 58, 180, 0.9755252442773985) 0%,
                    rgba(166, 54, 180, 1) 14%,
                    rgba(93, 53, 180, 1) 22%,
                    rgba(101, 53, 180, 1) 23%,
                    rgba(103, 52, 180, 1) 26%,
                    rgba(59, 48, 180, 1) 43%,
                    rgba(170, 39, 179, 1) 80%,
                    rgba(69, 79, 252, 1) 100%`;

	@HostListener('mouseenter') onmouseover(event: Event) {
		this.renderer.setStyle(this.element.nativeElement, 'background', this.linearGradient);
	}

	@HostListener('mouseleave') onmouseleave(event: Event) {
		this.renderer.setStyle(this.element.nativeElement, 'background', this.linearGradient);
	}
}
