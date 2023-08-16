import React from 'react'
import Table from './Table'

function RoutePage({data}) {

    if (data)
        return (
            <div className='router-page'>
                <h1>{data.title}</h1>
                <h2>{data.path} - {data.method}</h2>
                <h4>Input</h4>
                <pre>{JSON.stringify(data.input_example,"\n","    ")}</pre>
                <h4>Output</h4>
                <pre>{data.output_example}</pre>
                <Table data={data.input_properties_table} />
            </div>
        )
}

export default RoutePage