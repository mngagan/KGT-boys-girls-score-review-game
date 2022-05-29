import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Col, Divider, Row } from 'antd';
import { Typography, Button } from 'antd';

const { Title } = Typography;
const Marks = (props) => {
  const handleButtonClick = () => {};

  let buttonsConfig = [
    {
      value: 1000,
      negitive: false,
    },
    {
      value: 2000,
      negitive: false,
    },
    {
      value: 5000,
      negitive: false,
    },
    {
      value: 10000,
      negitive: false,
    },
    {
      value: 1000,
      negitive: true,
    },
    {
      value: 2000,
      negitive: true,
    },
    {
      value: 5000,
      negitive: true,
    },
    {
      value: 10000,
      negitive: true,
    },
  ];

  const titleStyle = {
    textAlign: 'center',
  };
  const marksStyle = {
    textAlign: 'center',
    fontSize: '120px',
  };

  return (
    <>
      <Title style={titleStyle}>{props.title}</Title>
      <Title style={marksStyle}>{props.marks}</Title>
      <Row gutter={16}>
        {buttonsConfig.map((conf) => {
          return (
            <Col span={6} style={{ paddingTop: '16px' }}>
              <Button
                size={'large'}
                block
                onClick={() => props.updateMarks({ ...conf, type: props.type })}
                type={conf.negitive ? 'danger' : 'primary'}
              >
                {/* {!conf.negitive ? '' : '-'} */}
                {conf.value}
              </Button>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Marks;
