import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Col, Divider, Row } from 'antd';
import Marks from './marks';
const style = {
  background: 'pink',
};

const style2 = {
  background: 'lightblue',
};

const App = () => {
  const [girls, setGirls] = React.useState(0);
  const [boys, setBoys] = React.useState(0);

  const updateMarks = ({ type, value, negitive = false }) => {
    if (type === 'boys') {
      !negitive && setBoys((boys) => boys + value);
      negitive && setBoys((boys) => boys - value);
    } else {
      !negitive && setGirls((girls) => girls + value);
      negitive && setGirls((girls) => girls - value);
    }
  };
  return (
    <>
      <Row className="height100" gutter={16}> 
        <Col span={12} style={style} className="height100">
          <Marks
            title="Girls"
            type="girls"
            marks={girls}
            updateMarks={updateMarks}
          />
        </Col>
        <Col span={12} style={style2}>
          <Marks
            title="Boys"
            type="boys"
            marks={boys}
            updateMarks={updateMarks}
          />
        </Col>
      </Row>
    </>
  );
};

export default App;
