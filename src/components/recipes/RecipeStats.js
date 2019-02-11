import React, { Component } from 'react';

class RecipeStats extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Prep Time</th>
              <td>{this.props.prep.value} {this.props.prep.kind}</td>
            </tr>
            <tr>
              <th>Cook Time</th>
              <td>{this.props.cook.value} {this.props.cook.kind}</td>
            </tr>
            <tr>
              <th>Yield</th>
              <td>{this.props.yield.value} {this.props.yield.kind}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default RecipeStats;
