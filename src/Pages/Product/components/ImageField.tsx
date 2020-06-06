import React from 'react'

import styled from '@emotion/styled'

const ImageWrapper = styled('div')({
  height: '300px',
  width: '200px',
  backgroundColor: '#F4F2F2',
  padding: '1px',
  display: 'flex',
  boxSizing: 'border-box',
})
const ImageContainer = styled('div')({
  height: '100%',
  width: '100%',
  border: '1px solid white',
})

const Image = styled('img')({
  height: '100%',
  width: '100%',
})

interface Props {
  imageUrl?: string
}

const ImageField = ({imageUrl}: Props): JSX.Element => {
  return (
    <ImageWrapper>
      <ImageContainer>
        <Image src={imageUrl}></Image>
      </ImageContainer>
    </ImageWrapper>
  )
}

export default ImageField
