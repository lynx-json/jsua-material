import { map, mappers } from '@lynx-json/jsua-style';
import view from './view';
import elevation from './elevation';
import background from './background';
import padding from './padding';
import borderRadius from './border-radius';

export default function card() {
  return [
    view(),
    map(mappers.slot('content'), [
      el => el.style.display = 'grid',
      el => el.style.gridGap = '16px',
      el => el.style.gridTemplateColumns = '1fr',
      el => el.style.alignContent = 'start'
    ]),
    elevation.card(),
    background.card(),
    padding('16px'),
    borderRadius('2px')
  ];
}
