import { query, map, mappers } from '@lynx-json/jsua-style';
import view from './view';

export default function tableRow() {
  return [
    view(),
    map(mappers.slot('content'), [
      el => el.style.display = 'grid',
      el => el.style.gridGap = '16px',
      el => el.style.alignItems = 'start',
      el => el.style.gridTemplateColumns = query(el).map(mappers.children()).toArray().map(el => "1fr").join(" ")
    ])
  ];
}

tableRow.auto = function autoSizedTableRow() {
  return [
    view(),
    map(mappers.slot('content'), [
      el => el.style.display = 'grid',
      el => el.style.gridGap = '16px',
      el => el.style.alignItems = 'start',
      el => el.style.justifyContent = 'start',
      el => el.style.gridTemplateColumns = query(el).map(mappers.children()).toArray().map(el => "auto").join(" ")
    ])
  ];
}
