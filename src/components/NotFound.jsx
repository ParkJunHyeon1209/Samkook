import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NotFoundPage = styled.main`
  min-height: 100svh;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 24px;
  padding: 24px;
  text-align: center;
  background: #f5f7f9;

  & h1 {
    margin: 0;
    color: #172b3c;
    font-size: clamp(32px, 7vw, 64px);
  }
`;

const HomeLink = styled(Link)`
  padding: 12px 24px;
  border-radius: 6px;
  background: #1768e5;
  color: #fff;
  font-weight: 700;

  &:hover {
    background: #1256bd;
  }
`;

export default function NotFound() {
  return (
    <NotFoundPage>
      <h1>404 Not Found</h1>
      <HomeLink to="/" replace>홈 화면으로 돌아가기</HomeLink>
    </NotFoundPage>
  );
}
