import { query, map, mappers, adjust } from '@lynx-json/jsua-style';
import view from './view';
import filters from './filters';

export default function set() {
  return [
    view(),
    map(mappers.slot('material-layout'), [
      el => el.style.display = 'grid',
      el => el.style.gridGap = '16px',
      el => el.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))',
      adjust(map(mappers.children(filters.shouldHaveStandingLine()), el => el.style.gridColumn = '1 / -1'))
    ])
  ];
}

set.auto = function () {
  return [
    set(),
    map(mappers.slot('material-layout'), [
      el => el.style.gridTemplateColumns = Array.from(el.children).map(el => "auto").join(" ")
    ]),
    adjust([
      map(mappers.slot('material-layout'), function (el) {
        var maxNaturalWidth = Array.from(el.children)
          .filter(el => !filters.shouldHaveStandingLine()(el))
          .map(el => el.offsetWidth).reduce((acc, cur) => Math.max(acc, cur), 0);
        el.style.gridTemplateColumns = `repeat(auto-fill, minmax(${maxNaturalWidth}px, 1fr))`;
      })
    ])
  ];
}

// set.auto = function () {
//   return [
//     set(),
//     map(mappers.slot('material-layout'), [
//       el => el.style.display = 'flex',
//       el => el.style.flexDirection = 'row',
//       el => el.style.flexWrap = 'nowrap'
//     ]),
//     adjust([
//       map(mappers.slot('material-layout'), function (el) {
//         var maxNaturalWidth = Array.from(el.children)
//           .map(el => el.offsetWidth).reduce((acc, cur) => Math.max(acc, cur), 0);
//         el.style.display = 'grid',
//         el.style.gridGap = '16px',
//         el.style.gridTemplateColumns = `repeat(auto-fill, minmax(${maxNaturalWidth}px, 1fr))`;
//       })
//     ])
//   ];
// }
