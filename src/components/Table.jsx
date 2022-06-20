export default function Table() {
    return (<div className="font-roboto w-1/2 h-full">
        <table className="table-auto w-full"
        //  style={{margin: "0 auto"}}
         >
            <tbody>

                {table.map((t, index) => {
                    return (<tr>
                        <td>{t.head}</td>
                        <td className="text-end">{t.val}</td>
                    </tr>)
                })}

                {/* <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                </tr>
                <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
                </tr> */}
            </tbody>
            </table>
    </div>)
}

const table = [
    {
        head: "TOTAL SIZE",
        val: "2,391 Sq Ft"
    },
    {
        head: "MAIN HOUSE SIZE",
        val: "2,045 Sq Ft"
    },
    {
        head: "ADU SIZE",
        val: "351 Sq Ft"
    },
    {
        head: "PRINT MATERIAL",
        val: "Lavacrete"
    },
    {
        head: "REINFORCEMENT",
        val: "Structural Steel"
    },
    {
        head: "WOOD FEATURES",
        val: "Douglas Fir"
    },
    {
        head: "APPLIANCES",
        val: "Jennar & Viking"
    },
    {
        head: "HVAC",
        val: "Mitsubishi"
    },
    {
        head: "ROBOT VERSION",
        val: "​Vulcan Construction System"
    },
    {
        head: "WALL SYSTEM PRINT TIME",
        val: "10 days"
    },
    {
        head: "PRINT COMPLETE",
        val: "June 2021"
    },
    {
        head: "FINISH OUT COMPLETE",
        val: "February 2022"
    },
]
