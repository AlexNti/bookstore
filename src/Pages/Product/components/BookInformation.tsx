import React, {HTMLAttributes} from 'react'
import styled from '@emotion/styled'

import BaseButton from '../../../components/BaseButton'

const BookInformationWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
})
const BookTitle = styled('h1')({
  fontSize: '30px',
  marginBottom: '20px',
})

const BookDescription = styled('p')({
  fontSize: '18px',
  marginBottom: '20px',
})

const FavoriteButton = styled(BaseButton)(({disabled}) => ({
  border: '1px solid black',
  width: '100px',
  height: '30',
  borderRadius: '5px',
  ':active': {
    boxShadow: disabled
      ? undefined
      : 'rgba(0,0,0,.2) 0px 3px 5px -1px, rgba(0,0,0,.14) 0px 5px 8px 0px, rgba(0,0,0,.12) 0px 1px 14px 0px',
  },
}))

const ShareButton = styled(FavoriteButton)({
  marginLeft: '10px',
})

const ButtonFieldContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '10px',
  marginTop: '10px',
})

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  mb?: number
  mt?: number
}

const BookSpecification = styled('p')<ParagraphProps>(
  {
    fontSize: '15px',
  },
  ({mb, mt}) => ({
    marginBottom: mb,
    marginTop: mt,
  })
)

const BuyButton = styled(BaseButton)(({disabled}) => ({
  border: '1px solid black',
  width: '200px',
  height: '35px',
  borderRadius: '5px',
  alignSelf: 'center',
  marginTop: '20px',
  ':active': {
    boxShadow: disabled
      ? undefined
      : 'rgba(0,0,0,.2) 0px 3px 5px -1px, rgba(0,0,0,.14) 0px 5px 8px 0px, rgba(0,0,0,.12) 0px 1px 14px 0px',
  },
}))

interface BookInformationProps {
  title: string
  description: string
  category: string
  year: number
  numberOfPages: number
  publisher: string
  isbn10: string
  isbn13: string
  handleClickFavorite?: () => void
  handleClickShare?: () => void
  handleClickBuy?: () => void
}

const BookInformation = ({
  title,
  description,
  category,
  year,
  numberOfPages,
  publisher,
  isbn10,
  isbn13,
  handleClickFavorite,
  handleClickShare,
  handleClickBuy,
}: BookInformationProps): JSX.Element => (
  <BookInformationWrapper>
    <BookTitle>{title}</BookTitle>
    <BookDescription>{description}</BookDescription>
    <ButtonFieldContainer>
      <FavoriteButton>Favorite</FavoriteButton>
      <ShareButton>Share</ShareButton>
    </ButtonFieldContainer>
    <BookSpecification>Category: {category}</BookSpecification>
    <BookSpecification>Year: {year}</BookSpecification>
    <BookSpecification>Number of Pages: {numberOfPages}</BookSpecification>
    <BookSpecification mt={10} mb={10}>
      Publisher: {publisher}
    </BookSpecification>
    <BookSpecification>ISBN-10: {isbn10}</BookSpecification>
    <BookSpecification>ISBN-13: {isbn13}</BookSpecification>
    <BuyButton>Buy</BuyButton>
  </BookInformationWrapper>
)

export default React.memo(BookInformation)
