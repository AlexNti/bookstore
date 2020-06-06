import React from 'react'

import styled from '@emotion/styled'

const ImageWrapper = styled('div')({
  height: '200px',
  width: '100px',
  backgroundColor: '#F7F8F9',
  border: '1px  double ',
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
      <Image src={imageUrl}></Image>
    </ImageWrapper>
  )
}

export default ImageField
