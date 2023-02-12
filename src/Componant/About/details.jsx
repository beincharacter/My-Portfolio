import React from 'react'

const Details = () => {
    return (
        <div>
            <table style={{border: "1px solid black", bordeCollapse: "collapse"}}>
                <tbody>
                    <tr>
                        <td style={{border: "1px solid black", padding: "8px"}}>Name</td>
                        <td style={{border: "1px solid black", padding: "8px"}}>Shubham</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black", padding: "8px"}}>email</td>
                        <td style={{border: "1px solid black", padding: "8px"}}>shubhampalatwork@gmail.com</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black", padding: "8px"}}>Located</td>
                        <td style={{border: "1px solid black", padding: "8px"}}>Ludhiana, Punjab</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Details