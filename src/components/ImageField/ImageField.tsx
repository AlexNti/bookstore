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
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  border: '1px solid white',
})

const Image = styled('img')({
  flex: '1',
  objectFit: 'cover',
  width: '100%',
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
