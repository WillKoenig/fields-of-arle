import { popWorker, bumpMonth } from '../common/'

const homeBoard = {
  travelExperience: 0,

  goods: {
    food1: 5,
    wool: 4,
    flax: 3,
    hides: 2,
    grain: 1,
    food2: 0,
  },
  tokens: [
    // { type: 'wood' },
    // { type: 'clay' },
    // { type: 'timber' },
    // { type: 'bricks' },
    // 'peat'
    // 'horse'
  ],
  land: [
    [ null, null, null ],
    [ null, null, null ],
    [ null, null, null ],
    [
      null,
      null,
      { type: 'wheat', contents: [] },
    ],
    [
      { type: 'stall', contents: [ 'horse' ] },
      { type: 'boardwalk', contents: ['peat', 'peat', 'peat', 'peat' ] },
      { type: 'flax', contents: [] },
    ],
    [
      { type: 'north_moor', contents: [] },
      { type: 'north_moor', contents: [] },
      { type: 'north_moor', contents: [] },
    ],
    [
      { type: 'south_moor', contents: [] },
      { type: 'south_moor', contents: [] },
      { type: 'south_moor', contents: [] },
    ],
  ],
  dikes: [
    [ null, null, null ],
    [ null, null, null ],
    [
      { type: 'dike', with: [] },
      { type: 'dike', with: [] },
      null
    ],
    [
      { type: 'dike', with: [] },
      { type: 'dike', with: [] },
      { type: 'dike', with: [] },
    ],
  ]
}

const initialState = {
  round: 1,
  month: 0, // really this is the index into the preparations array.
  wood: 0,
  workshop: 0,
  master: 0,
  preparations: [
    [ 0, 1 ],
    [ 0, 1 ],
    [ 0, 1 ],
    [ 0, 1 ],
    [ ],
    [ ],
    [ ],
    [ ],
  ],
  actions: {
    summer: {
      fisherman: null,
      grocer: null,
      woolWeaver: null,
      colonist: null,
      peatCutter: null,
      dikeBuilder: null,
      clayWorker: null,
      farmer: null,
      forester: null,
      woodcutter: null,
      master: null,
      carpenter: null,
      builder: null,
      warden: null,
      laborer: null,
    },
    winter: {
      peatBoatman: null,
      tanner: null,
      linenWeaver: null,
      butcher: null,
      cattleTrader: null,
      grocer: null,
      buildersMerchant: null,
      potter: null,
      baker: null,
      woodTrader: null,
      master: null,
      wainwright: null,
      dikeWarden: null,
      carpenter: null,
      laborer: null,
    }
  },
  tools: {
    fishTraps: [ 0, 0 ],
    fleshingBeams: [ 0, 0 ],
    weavingLooms: [ 0, 0 ],
    slaughteringTables: [ 0, 0 ],
    spades: [ 0, 0 ],
    shovelPairs: [ 0, 0 ],
    potteryWheels: [ 0, 0 ],
    ovens: [ 0, 0 ],
    axes: [ 0, 0 ],
    workbenches: [ 0, 0 ],
  },
  homeBoards: [
    { ...homeBoard, startingPlayer: true },
    { ...homeBoard, startingPlayer: false },
  ],
  availableMoves: [
    'woodcutter',
    'workshop',
    'master',
  ],
}

const actions = (state = initialState, action) => {
  switch(action.type) {
    case 'endTurn':
      return { ...state,
        month: bumpMonth(state),
        availableMoves: [
          'woodcutter',
          'workshop',
          'master',
        ],
      }
    case 'woodcutter':
    case 'workshop':
    case 'master':
      return { ...state,
        availableMoves: [],
        preparations: popWorker(state)
      }
    default:
      return state
  }
}

export default actions;