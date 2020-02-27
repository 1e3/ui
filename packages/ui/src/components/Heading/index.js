import styled, { css } from '@xstyled/styled-components'
import { system } from '@xstyled/system'

const Heading = styled.h1(({ theme: { components: { heading } } }) => {
  const { font } = heading

  return css`
      font-family: '${font.family}', sans-serif;
      font-size: ${font.size};
    `
}, system)

Heading.propTypes = {}

Heading.defaultProps = {}

export default Heading
