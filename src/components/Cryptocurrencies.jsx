import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'



const Cryptocurrencies = ({ simplified }) => {

    const count = simplified ? 10 : 100;
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
    const [ crypto, setCrypto ] = useState(cryptoList?.data?.coins);
    
    console.log(crypto);

  return (
    <>
      <Row gutter={[32, 32]}>
        {crypto.map((c) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={c.id}>
            <Link to={`/crypto/${c.id}`}>
              <Card
                title={`${c.rank}. ${c.name}`}
                hoverable
                bordered={true}
                extra={<img className='crypto-image' src={c.iconUrl} />}
              >
                <p>Price: {millify(c.price)}</p>
                <p>Market Cap: {millify(c.marketCap)}</p>
                <p>Daily Change: {millify(c.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies