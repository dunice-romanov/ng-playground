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
    animate(500),
  ]),
  transition(':leave', [
    animate(500, style({opacity: 0})),
  ]),
]);

const animations = [flyInOut];

export default animations;