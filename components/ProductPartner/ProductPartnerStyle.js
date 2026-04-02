import styled from 'styled-components';
import { device } from '@/styles/theme';

export const PartnerWithWrap = styled.div`
  background-color: #dde9fb;
  border-radius: 24px;
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1;
  padding: 5rem 2rem;
`;

export const TopImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  z-index: -1;
`;

export const BottomImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  thead {
    text-align: center;
  }

  th,
  td {
    padding: 2rem;
    border-bottom: 1px solid #ccc;
    text-align: left;
    position: relative;
  }

  th {
    position: sticky;
    top: 0;
    z-index: 2;
  }

  tbody {
    background-color: white;
    border-radius: 24px;
    overflow: auto;
    display: block;
    max-height: 400px;
    padding: 0 2rem;
  }

  tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  td:first-child,
  th:first-child {
    position: sticky;
    left: 0;
    z-index: 1;
  }

  td {
    background-color: white;
    vertical-align: middle;
  }

  tr:first-child th,
  tr:last-child td {
    border-bottom: none;
  }
`;

export const TableContOne = styled.div`
  color: #222222;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;

  @media ${device.laptop} {
    font-size: 18px;
    line-height: 23.44px;
  }
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 23.44px;
  }
`;

export const TableContTwo = styled.div`
  color: #222222;
  font-size: 11px;
  font-weight: 500;
  line-height: 20px;
  margin-left: 10px;

  @media ${device.laptop} {
    font-size: 16px;
    line-height: 24px;
  }
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ScrollableContainer = styled.div`
  overflow-x: auto;
  margin: 0 -2rem;

  @media ${device.mobileL} {
    padding: 0 2rem;
  }
`;
