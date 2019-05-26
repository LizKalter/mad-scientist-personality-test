import {
  trigger,
  style,
  animate,
  transition,
  query,
  group,
  animateChild
} from '@angular/animations';

export const routeTransitions =
  trigger('routeAnimations', [
    transition('* => IntroPage', [
      style({ 
        position: 'relative',
        width: '100%',
        left: '-100px',
        opacity: 0 }),
      animate('.3s ease-out', style({ left: '0%', opacity: 1}))
    ]),
    transition('IntroPage => QuestionsPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100px', opacity: 0})
      ]),
      group([
        query(':leave', [
          animate('.3s ease-out', style({ left: '100px', opacity: 0}))
        ]),
        query(':enter', [
          animate('.3s ease-out', style({ left: '0%', opacity: 1}))
        ])
      ]),
    ]),
  ]);