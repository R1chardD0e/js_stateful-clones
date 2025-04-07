'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const states = [];
  const currentState = { ...state };

  // write code here
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(currentState, obj.extraData);
        states.push({ ...currentState });
        break;
      case 'removeProperties':
        for (const toDelete of obj.keysToRemove) {
          delete currentState[toDelete];
        }
        states.push({ ...currentState });
        break;
      case 'clear':
        Object.keys(currentState).forEach((key) => delete currentState[key]);
        states.push({ ...currentState });
        break;
    }
  }

  return states;
}

module.exports = transformStateWithClones;
