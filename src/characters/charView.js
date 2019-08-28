import styled from 'styled-components';

export default {
  Char: styled.div`
  display: flex;
  font-weight: bold;
  margin: 15px;
  flex-direction: column;
}
  
  `,
  CharImg: styled.img`
  width: 10%;
  height:10%;
  margin: 10px;
  `,
  Span: styled.span`
  display: inline-block;
  position: relative;
  left: 20px;
  `,
  Button: styled.button`
  width: 80px;
  margin: 5px;
  font-weight: bold;
  `
}