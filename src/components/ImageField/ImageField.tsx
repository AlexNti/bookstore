import React, {HTMLAttributes} from 'react'

import styled from '@emotion/styled'
//TODO ADD AVATAR

interface ImageWrapperProps extends HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
}
const ImageWrapper = styled('div')<ImageWrapperProps>(
  {
    backgroundColor: '#F4F2F2',
    padding: '1px',
    display: 'flex',
    boxSizing: 'border-box',
    borderRadius: '5px',
  },
  ({width, height}) => ({width, height})
)
const ImageContainer = styled('div')({
  height: '100%',
  width: '100%',
  border: '1px solid white',
})

const Image = styled('img')({
  height: '100%',
  width: '100%',
  borderRadius: '5px',
})

interface Props {
  imageUrl?: string
  width?: string
  height?: string
}

const ImageField = ({imageUrl, width, height}: Props): JSX.Element => {
  return (
    <ImageWrapper width={width} height={height}>
      <ImageContainer>
        <Image src={imageUrl}></Image>
      </ImageContainer>
    </ImageWrapper>
  )
}

export default ImageField
