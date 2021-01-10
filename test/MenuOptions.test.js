import menuOptionsObj from '../src/app/components/MenuOptions'

it('Returns', () => {
  expect(menuOptionsObj.changeMode('people')).toEqual('people')
  expect(menuOptionsObj.changeMode('vehicles')).toEqual('vehicles')
  expect(menuOptionsObj.changeMode('starships')).toEqual('starships')
})