import React from 'react'
import PropTypes from 'prop-types'
import { afford } from '../../game/common'

class WeavingMill extends React.Component {
  constructor(props) {
    super()
    this.state = {
      cost1: 'bricks',
      cost2: null,
    }
  }

  handleCost1 = cost1 => e => {
    this.setState({ cost1 })
  }

  handleCost2 = cost2 => e => {
    this.setState({ cost2 })
  }

  handlePay = e => {
    this.props.moves.option({ cost: [this.state.cost1, this.state.cost2] })
  }

  render() {
    const { inventory, goods } = this.props
    return (
      <div>
        How to pay for this?
        <hr />
        <b>Cost 1</b>
        <br />
        <input
          type="radio"
          name="cost1"
          id="cost1-bricks"
          value="bricks"
          onClick={this.handleCost1('bricks')}
          disabled={!afford(inventory, ['bricks', 'bricks'])}
          defaultChecked={this.state.cost1 === 'bricks'}
        />
        <label htmlFor="cost1-bricks">Bricks</label>
        <hr />
        <b>Cost 2</b>
        <br />
        <input
          type="radio"
          name="cost2"
          id="cost2-flax"
          value="flax"
          onClick={this.handleCost2('flax')}
          disabled={goods.flax >= 10}
          defaultChecked={this.state.cost2 === 'flax'}
        />
        <label htmlFor="cost2-flax">8 Flax</label>
        <br />
        <input
          type="radio"
          name="cost2"
          id="cost2-woolen"
          value="woolen"
          onClick={this.handleCost2('woolen')}
          disabled={goods.woolen >= 10}
          defaultChecked={this.state.cost2 === 'woolen'}
        />
        <label htmlFor="cost2-woolen">8 Woolen</label>
        <hr />
        <button
          type="submit"
          disabled={this.state.cost1 === null || this.state.cost2 === null}
          onClick={this.handlePay}
        >
          Pay
        </button>
      </div>
    )
  }
}

WeavingMill.propTypes = {
  inventory: PropTypes.array.isRequired,
  goods: PropTypes.object.isRequired,
  moves: PropTypes.any.isRequired,
}

export default WeavingMill
