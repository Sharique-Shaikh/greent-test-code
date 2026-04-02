import { Collapse, Space } from 'antd';
import UpArrow from '../../public/assets/icons/upArrow.svg';
import DownArrow from '../../public/assets/icons/downArrow.svg';
import Image from 'next/image';
import './style.css';
import { useState } from 'react';

const text =
  'We facilitate by identifying discrepancies and establishing customer-focused objectives for your loyalty initiatives. Subsequently, we devise a customized approach incorporating compelling digital material, overseeing brand-aligned communication distribution across various platforms, all finely tailored to your individual clientele';

const customExpandIcon = (panelProps) => {
  const { isActive } = panelProps;
  return <Image src={isActive ? UpArrow : DownArrow} alt='arrow-icon' />;
};

export default function GTCollapser({ title, description, id }) {
  const [activeKey, setActiveKey] = useState(1);

  const handlePanelChange = (key) => {
    setActiveKey(key);
  };
  return (
    <Space direction='vertical'>
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
        <Collapse.Panel key={id} header={title}>
          <p>{description}</p>
        </Collapse.Panel>
      </Collapse>
    </Space>
  );
}
