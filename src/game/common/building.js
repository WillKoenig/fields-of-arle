const upgradedBuilding = {
  forest: 'park',
  stall: 'depot',
  stable: 'doubleStall',
  moorNorth: 'dmoorNorth',
  moorSouth: 'dmoorSouth',
}

export const flipBuilding = building => {
  if (upgradedBuilding[building.type] === undefined) return building
  return {
    ...building,
    type: upgradedBuilding[building.type],
  }
}

export default { flipBuilding }
