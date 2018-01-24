import { component, slot, map, mappers, filter, filters, when, setState } from '@lynx-json/jsua-style';

export default function view() {
  var innerHTML = `
    <div role="presentation" data-jsua-style-slot="content" style="flex-grow: 1"></div>
  `
  return [
    filter(filters.not(filters.has(mappers.slot('content'))), [
      component('material-view', innerHTML),
      el => el.style.flexDirection = 'column',
      el => el.style.alignItems = 'stretch',
      when('normal', el => el.style.display = 'flex'),
      when('visibility', 'hidden', el => el.style.display = 'none'),
      setState('normal')
    ])
  ];
}
