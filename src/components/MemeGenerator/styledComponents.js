// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 100px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding: 10px;
    justify-content: flex-start;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 30px;
  order: -1;
`

export const FormImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  order: 0;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    order: 0;
    display: flex;
    flex-direction: column;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  order: -1;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    order: 0;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3px;
  margin-bottom: 2px;
`

export const LabelElement = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 16px;
  margin-bottom: 2px;
`
export const TextInput = styled.input`
  background-color: #ffffff;
  border: 2px solid #d7dfe9;
  color: #1e293b;
  border-radius: 8px;
  width: 350px;
  padding: 10px;
  outline: none;
`
export const SelectInput = styled.select`
  background-color: #ffffff;
  border: 2px solid #d7dfe9;
  color: #1e293b;
  border-radius: 8px;
  width: 350px;
  padding: 10px;
  outline: none;
  font-weight: 500;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 18px;
  padding: 8px 25px 8px;
  text-align: center;
  font-size: 16px;
  border-width: 0px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 8px;
`

export const MemeContainer = styled.div`
  background-image: url('${props => props.imgUrl}');
  background-size: cover;
  height: 250px;
  width: 400px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  order: 0;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    order: -1;
    height: 180px;
    width: 95%;
    align-self: center;
    margin-left: 2px;
    margin-bottom: 10px;
  }
`

export const ImageText = styled.p`
  font-size: ${props => props.size}px;
  color: #ffffff;
  font-family: 'Open Sans';
`
