import { query, map, mappers, adjust } from '@lynx-json/jsua-style';
import view from './view';
import filters from './filters';

export default function table() {
  return [
    view(),
    map(mappers.slot('content'), [
      el => el.style.display = 'grid',
      el => el.style.gridGap = '16px'
    ])
  ];
}

table.auto = function () {
  return [
    table(),
    adjust(adjustAlignment())
  ];
}

function getColumnFraction(initialProportion) {
  if (initialProportion > .8) return 9;
  if (initialProportion > .7) return 8;
  if (initialProportion > .6) return 7;
  if (initialProportion > .5) return 6;
  if (initialProportion > .4) return 5;
  if (initialProportion > .3) return 4;
  if (initialProportion > .2) return 3;
  if (initialProportion > .1) return 2;
  return 1;
}

function adjustAlignment() {
  return function (tableElement) {
    var maxCellProportions = [];
    var maxWidths = [];
    var minWidths = [];
    var rows = query(tableElement).map(mappers.realChildren('*', '[data-lynx-hints~=content]')).toArray();

    rows.forEach(function measureRow(row) {
      var cells = query(row).map(mappers.slot('content')).map(mappers.children()).toArray();
      if (cells.length < 2) return;

      var totalWidth = cells.map(cell => cell.offsetWidth).reduce((acc, cur) => acc + cur, 0);

      cells.forEach(function measureCell(cell, index) {
        maxCellProportions[index] = Math.max(maxCellProportions[index] || 0, cell.offsetWidth / totalWidth);
        maxWidths[index] = Math.max(maxWidths[index] || 0, cell.offsetWidth);
        minWidths[index] = Math.min(minWidths[index] || cell.offsetWidth, cell.offsetWidth);
      });
    });

    var templateColumns = maxCellProportions.map(getColumnFraction).map((fr, index) => {
      if (maxWidths[index] === minWidths[index]) {
        return 'auto';
      }
      return `${fr}fr`;
    }).join(' ');

    rows.forEach(row => query(row).map(mappers.slot('content')).each([
      el => el.style.justifyContent = 'stretch',
      el => el.style.gridTemplateColumns = templateColumns
    ]));
  }
}
