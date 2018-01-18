import { component, slot, map, mappers, when, setState } from '@lynx-json/jsua-style';

export default function view() {
  var innerHTML = `
    <div role="presentation" data-jsua-style-slot="material-layout"></div>
  `
  return [
    component('material-view', innerHTML),
    slot('material-layout', mappers.children(':not([data-jsua-style-slot=material-layout])')),
    el => el.style.alignItems = 'stretch',
    el => el.style.justifyItems = 'stretch',
    when('normal', el => el.style.display = 'grid'),
    when('visibility', 'hidden', el => el.style.display = 'none'),
    setState('normal')
  ];
}
