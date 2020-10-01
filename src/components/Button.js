import styled from "styled-components";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.PRIMARY};
  color: ${COLORS.PRIMARY};
  font-size: 22px;
  padding: ${PADDINGS.MEDUIM};
  border-radius: ${BORDER_RADIUS.DEFAULT};
`;

export default Button;
