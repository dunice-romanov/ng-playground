import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const flyInOut = trigger('flyInOut', [
  transition(':enter', [
    style({transform: 'translateX(-200%)'}),
    animate(300),
  ]),
  transition(':leave', [
    animate(300, style({opacity: 0})),
  ]),
]);

const animations = [flyInOut];

export default animations;