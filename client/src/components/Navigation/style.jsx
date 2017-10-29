import styled from 'styled-components';

export const Navigation = styled.div`
  background-color: #f1f1f1;
  margin-bottom: 120px;
  font-size: 0.9em;
`;

export const Nav = styled.nav`
  min-height: 80px;
  line-height: 3;
`;

export const NavUl = styled.ul`
  flex-direction: row;
`;

export const NavLi = styled.li`
  margin-left: 22px;
`;

export const HideTabOnXS = styled.li`
  margin-left: 22px;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

export const HideTabOnXSActive = styled.li`
  margin-left: 22px;
  border-bottom: 5px solid #007BCE;
  margin-bottom: -5px;

  @media (max-width: 768px) {
    display: none !important;
  }
`;
