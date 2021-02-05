import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Picture = styled.div<{ url: string }>`
  background-image: url('${(props) => props.url}');
  width: 100vw;
  height: 70vh;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const BackdropContent = styled.div`
  width: 80%;

  & p {
    margin-top: 80px;
    text-align: left;
  }
`

export const TitleContainer = styled.div`
  z-index: 20;
`
