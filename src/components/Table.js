import React from 'react'

function Table({data}) {
    return (
        <table>
            <tr>
                {data.headers.map(header => (
                    <th><code>{header}</code></th>
                ))}
            </tr>
            {data.rows.map(row => (
                <tr>
                    {row.data.map(data => (
                        <td><code>{data.toString()}</code></td>
                    ))}
                </tr>
            ))}
        </table>
    )
}

export default Table