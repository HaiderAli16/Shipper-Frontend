import React, { useState, useEffect } from 'react';
import { GetSelectedShippersUrl, GetShippersUrl } from '../Contants/Constants';
import Navigation from './Navigation';

function GetShippers() {
  const [shippers, setShippers] = useState([]);
  const [selectedShipper, setSelectedShipper] = useState(null);
  const [shipperData, setShipperData] = useState(null);

  useEffect(() => {
    fetch(GetShippersUrl)
    //fetch('https://run.mocky.io/v3/13fbb8c9-f9ec-4ed0-a78d-71b1e5cf0ff3')
      .then((response) => response.json())
      .then((data) => {
        setShippers(data);
      })
      .catch((error) => {
        console.error('Error fetching shippers:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedShipper) {
      // fetch(
      //   `http://localhost:5006/shipment/GetShippersDetails/${selectedShipper}`
      // )
      fetch(`${GetSelectedShippersUrl}${selectedShipper}`)
        .then((response) => response.json())
        .then((data) => {
          console.log({ data });
          setShipperData(data);
        })
        .catch((error) => {
          console.error('Error fetching shippers:', error);
        });
    }
  }, [selectedShipper]);
  const handleShipperChange = (event) => {
    setSelectedShipper(event.target.value);
  };

  return (
    <><Navigation/>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        backgroundColor: '#f7f7f7',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '5px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          marginBottom: '2rem',
          fontSize: '2rem',
          textAlign: 'center',
          color: '#333',
        }}
      >
        Select a shipper:
      </h2>
      <select
        id='shipper-select'
        onChange={handleShipperChange}
        style={{
          backgroundColor: '#fff',
          border: '2px solid #ccc',
          borderRadius: '5px',
          color: '#333',
          fontSize: '16px',
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '2rem',
        }}
      >
        <option value=''>-- Select a shipper --</option>
        {shippers.map((shipper, index) => (
          <option key={index} value={shipper.shipperId}>
            {shipper.shipperName}
          </option>
        ))}
      </select>
      {shipperData && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <table
            style={{
              borderCollapse: 'collapse',
              width: '100%',
              maxWidth: '800px',
              margin: '2rem 0',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <thead style={{ backgroundColor: '#f5f5f5' }}>
              <tr>
                <th style={{ padding: '1rem', textAlign: 'left' }}>
                  Shipment ID
                </th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>
                  Shipper Name
                </th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>
                  Carrier Name
                </th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>
                  Shipment Weight
                </th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>
                  Shipment Rate Description
                </th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>
                  Shipment Description
                </th>
              </tr>
            </thead>
            <tbody>
              {shipperData.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '1rem' }}>{item.shipmentId}</td>
                  <td style={{ padding: '1rem' }}>{item.shipperName}</td>
                  <td style={{ padding: '1rem' }}>{item.carrierName}</td>
                  <td style={{ padding: '1rem' }}>{item.shipmentWeight}</td>
                  <td style={{ padding: '1rem' }}>
                    {item.shipmentRateDescription}
                  </td>
                  <td style={{ padding: '1rem' }}>
                    {item.shipmentDescription}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </>
  );
}

export default GetShippers;
