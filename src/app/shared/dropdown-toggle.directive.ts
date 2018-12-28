import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appDropdownToggle]'
})
export class DropdownToggleDirective {
	@HostBinding('class.open') isOpen = false;

	@HostListener('click') toggleOpen() {
		this.isOpen = !this.isOpen;
	}
}
