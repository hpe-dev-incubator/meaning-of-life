import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Grommet, Box, Stack, Heading, Button, Text } from 'grommet';
import Lines from './Lines';
import { hpeDesign } from './theme';

const scaleUpAnim = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const ScaleUp = styled.span`
  display: inline-block;
  padding-right: ${({ paddingRight }) => paddingRight || '36'}px;
  opacity: 0;
  transform: scale(0);
  animation:  ${scaleUpAnim} ${({ duration }) => duration || '0.75'}s ease-out;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
  transform-origin: ${({ from }) => from};
`;

const dropOutAnim = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100px);
    opacity: 0;
  }
`;

const AnswerHolder = styled(Box)`
  filter: drop-shadow(5px 5px 12px #1F2532);
`; 

const StyledButton = styled(Button)``; // Styled components can target
const StyledHeading = styled(Heading)``; // Styled components can target

const TextHolder = styled(Box)`
  position: relative;
  min-width: 100vw;
  max-width: 100vw;
  max-height: 100vh;

  &.enlightened {
    ${StyledHeading} {
      animation:  ${dropOutAnim} 0.25s ease-out;
      animation-fill-mode: forwards;
      animation-delay: 0.25s;
    }

    ${StyledButton} {
      animation:  ${dropOutAnim} 0.25s ease-out;
      animation-fill-mode: forwards;
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedOnce: false,
      enlightened: false,
    }
  }
  render() {
    const wordArray = 'what is the meaning of life?'.split(' ');
    return (
      <Grommet theme={hpeDesign}  style={{ minHeight: '100vh' }}>
        <Box
          flex
          background={{ color: 'neutral-1' }}
          style={{ position: 'relative',  minHeight: '100vh' }}
          align="center"
          justify="center"
        >
          <Stack fill anchor="center">
            <Box
              style={{
                minHeight: '100vh',
                opacity: !this.state.enlightened ? 0.25 : 1,
                filter: `brightness(${!this.state.enlightened ? 50 : 100}%)`,
                transition: 'opacity 0.3s linear, filter 0.3s linear',
                transitionDelay: '0.65s'
              }}
              justify="center"
              align="center"
            >
              <Box alignSelf="center" fill="horizontal" height="medium">
                <Lines layout="horizontal" />
              </Box>
            </Box>
            { this.state.enlightened &&
              <AnswerHolder>
                <Heading
                  size="xlarge"
                  textAlign="center"
                  margin="none"
                  style={{ lineHeight: '360px' }}
                >
                  {[4, 2].map((number, index) =>
                    <ScaleUp key={`number-${index}`} delay={(index * 1) + 1.75} from="bottom">
                      {number}
                    </ScaleUp>)
                  }
                </Heading>
                <Heading
                  size="medium"
                  textAlign="center"
                  style={{ lineHeight: '0.9' }}
                >
                  {'the answer to life, the universe and everything.'.split(' ').map((number, index) =>
                    <ScaleUp
                      key={`number-${index}`}
                      delay={(index * 0.25) + 3.6}
                      from="top"
                      paddingRight={12}
                      duration={0.25}
                    >
                      {number}
                    </ScaleUp>)
                  }
                </Heading>
              </AnswerHolder>
            }
            <TextHolder className={this.state.enlightened ? 'enlightened' : ''} pad="small" align="center">
              <StyledHeading size="large" textAlign="center" style={{ lineHeight: 0.8 }}>
                {wordArray.map((word, index) =>
                  <ScaleUp key={index} delay={index/3} from="bottom">
                    {word}
                  </ScaleUp>)
                }
              </StyledHeading>
              <Box direction="row">
                <ScaleUp delay={2.2} from="top">
                  <StyledButton onClick={() => {
                      if (this.state.clickedOnce) return this.setState({ enlightened: true });
                      return this.setState({ clickedOnce: true });
                    }}
                  >
                    <Box
                      background={{ color: 'brand' }}
                      pad={{
                        vertical: 'small',
                        horizontal: 'large',
                      }}
                      round="large"
                    >
                      <Text
                        weight="bold"
                        color="purple"
                        size="xlarge"
                      >
                        {this.state.clickedOnce
                          ? 'are you sure?'
                          : 'tell me!'
                        }
                      </Text>
                    </Box>
                  </StyledButton>
                </ScaleUp>
              </Box>
            </TextHolder>
          </Stack>
        </Box>
      </Grommet>
    );
  }
}

export default App;
