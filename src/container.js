import { map, mappers } from '@lynx-json/jsua-style';
import view from './view';

export default function container() {
  return [
    view(),
    map(mappers.slot('content'), [
      el => el.style.display = 'grid',
      el => el.style.gridGap = '16px',
      el => el.style.gridTemplateColumns = '1fr',
      el => el.style.alignContent = 'start'
    ])
  ];
}
