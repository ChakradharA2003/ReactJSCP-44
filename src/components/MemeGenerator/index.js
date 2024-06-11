import {Component} from 'react'
import {
  MainContainer,
  Heading,
  FormImageContainer,
  FormContainer,
  InputContainer,
  LabelElement,
  TextInput,
  SelectInput,
  GenerateButton,
  MemeContainer,
  ImageText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
    generateMeme: false,
  }

  onChangeImageUrl = event => {
    this.setState({
      imageUrl: event.target.value,
    })
  }

  onChangeTopText = event => {
    this.setState({
      topText: event.target.value,
    })
  }

  onChangeBottomText = event => {
    this.setState({
      bottomText: event.target.value,
    })
  }

  onChangeFontSize = event => {
    this.setState({
      fontSize: event.target.value,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    /*
    this.onChangeImageUrl()
    this.onChangeBottomText()
    this.onChangeFontSize()
    this.onChangeTopText()
    */
    this.setState({
      generateMeme: true,
    })
    const {imageUrl, topText, bottomText, fontSize} = this.state
    console.log(imageUrl, topText, bottomText, fontSize)
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, generateMeme} = this.state
    console.log(generateMeme)
    return (
      <MainContainer>
        <Heading>Meme Generator</Heading>
        <FormImageContainer>
          <FormContainer type="submit" onSubmit={this.onSubmitForm}>
            <InputContainer>
              <LabelElement htmlFor="imageUrl">Image Url</LabelElement>
              <TextInput
                id="imageUrl"
                type="text"
                placeholder="Enter the Image Url"
                onChange={this.onChangeImageUrl}
                value={imageUrl}
              />
            </InputContainer>
            <InputContainer>
              <LabelElement htmlFor="topText">Top Text</LabelElement>
              <TextInput
                id="topText"
                type="text"
                placeholder="Enter the Top Text"
                onChange={this.onChangeTopText}
                value={topText}
              />
            </InputContainer>
            <InputContainer>
              <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
              <TextInput
                id="bottomText"
                type="text"
                placeholder="Enter the Bottom Text"
                onChange={this.onChangeBottomText}
                value={bottomText}
              />
            </InputContainer>
            <InputContainer>
              <LabelElement htmlFor="fontSizes">Font Size</LabelElement>
              <SelectInput
                as="select"
                id="fontSizes"
                onChange={this.onChangeFontSize}
                value={fontSize}
              >
                {fontSizesOptionsList.map(font => (
                  <option key={font.optionId} value={font.optionId}>
                    {font.displayText}
                  </option>
                ))}
              </SelectInput>
            </InputContainer>
            <GenerateButton>Generate</GenerateButton>
          </FormContainer>
          {generateMeme && (
            <MemeContainer data-testid="meme" imgUrl={imageUrl}>
              <ImageText size={fontSize}>{topText}</ImageText>
              <ImageText size={fontSize}>{bottomText}</ImageText>
            </MemeContainer>
          )}
        </FormImageContainer>
      </MainContainer>
    )
  }
}
export default MemeGenerator
/*

          
            
*/
