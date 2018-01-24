import { map, mappers } from '@lynx-json/jsua-style';
import view from './view';

export default function list() {
  return [
    view(),
    map(mappers.slot('content'), [
      el => el.style.display = 'grid',
      el => el.style.gridGap = '0px',
      el => el.style.gridTemplateColumns = '1fr',
      el => el.style.alignContent = 'start'
    ])
  ];
}
