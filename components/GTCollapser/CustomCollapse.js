import React from 'react';
import { Collapse } from 'antd';
import './style.css';

const { Panel } = Collapse;

const CustomCollapse = ({
  customExpandIcon,
  activeKey,
  handlePanelChange,
  id,
  title,
  description,
}) => {
  return (
    <Collapse
      collapsible='header'
      ghost
      accordion
      expandIcon={customExpandIcon}
      expandIconPosition='end'
      activeKey={activeKey}
      defaultActiveKey={[1]}
      onChange={handlePanelChange}
    >
      <Panel key={id} header={title}>
        <p>{description}</p>
      </Panel>

      {id !== '4' && <div className='border'></div>}
    </Collapse>
  );
};

export default CustomCollapse;
