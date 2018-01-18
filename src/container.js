import { map, mappers } from '@lynx-json/jsua-style';
import view from './view';

export default function container() {
  return [
    view(),
    map(mappers.slot('material-layout'), [
      el => el.style.display = 'grid',
      el => el.style.gridGap = '16px',
      el => el.style.gridTemplateColumns = '1fr',
      // Experimental
      el => el.style.alignContent = 'start'
    ])
  ];
}
