export function ValidationComparisonTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>
            Validating <i>after</i> interaction
          </th>
          <th>
            Validating <i>before</i> interaction
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div style={{ maxWidth: 300 }}>
              <label htmlFor="lazy" style={{ fontSize: '14px' }}>
                The user will see feedback after they click "Mint".
              </label>
            </div>
          </td>
          <td>
            <div style={{ maxWidth: 300 }}>

              <label htmlFor="eager" style={{ fontSize: '14px' }}>
                The user will eagerly see feedback when they focus out of the
                input.
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
