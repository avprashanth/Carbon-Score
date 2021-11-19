import React from 'react'
import { useLocation } from 'react-router';
import { backgroundStyle } from './Landing'
import Plot from 'react-plotly.js';

export default function Dashboard() {
    let location = useLocation();
    const { data } = location.state;
    const config = {mapboxAccessToken: process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN}

    return (
        <div style={backgroundStyle}>
            <header>
                <p>
                    Dashboard
                </p>
            </header>
            <Plot
                config={config}
                data={
                    [{
                        type: "choroplethmapbox", name: "US states", geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json", locations: [ "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY" ],
                       z: [ 141, 140, 155, 147, 132, 146, 151, 137, 146, 136, 145, 141, 149, 151, 138, 158, 164, 141, 146, 145, 142, 150, 155, 160, 156, 161, 147, 164, 150, 152, 155, 167, 145, 146, 151, 154, 161, 145, 155, 150, 151, 162, 172, 169, 170, 151, 152, 173, 160, 176 ],
                       zmin: 25, zmax: 280, colorbar: {y: 0, yanchor: "bottom", title: {text: "US states", side: "right"}}
                    }]
                }
                layout={ {mapbox: {style: "dark", center: {lon: -110, lat: 50}, zoom: 0.8}, width: 600, height: 400, margin: {t: 0, b: 0}} }
            />
            <br />
        </div>
    )
}
