import { query, map, mappers, adjust } from '@lynx-json/jsua-style';
import view from './view';
import filters from './filters';

export default function set() {
  return [
    view(),
    map(mappers.slot('content'), [
      el => el.style.display = 'grid',
      el => el.style.gridGap = '16px',
      el => el.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))',
      adjust(map(mappers.children(filters.shouldHaveStandingLine()), el => el.style.gridColumn = '1 / -1'))
    ])
  ];
}

set.auto = function () {
  return [
    set(),
    map(mappers.slot('content'), [
      el => el.style.gridTemplateColumns = Array.from(el.children).map(el => "auto").join(" "),
      el => el.style.justifyContent = 'start',
      adjust(function (el) {
        var minimumWidth = el.offsetWidth / 3;
        el.style.gridTemplateColumns = `repeat(auto-fit, minmax(${minimumWidth}px, 1fr))`;
        el.style.justifyContent = 'stretch';
      })
    ])
  ];
}
