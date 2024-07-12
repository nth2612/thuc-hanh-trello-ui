import { Box } from '@mui/material'
import TrelloCard from './TrelloCard/TrelloCard'
import AddACard from './AddACard/AddACard'
import { useState } from 'react'

function ListCard({ headerHeight, cards, cardOrderIds, boardBarHeight, isAddingCard, setIsAddingCard }) {
  const [rawCard, setRawCard] = useState(cards)
  const cardOrdered = cardOrderIds.map(id => rawCard.find(card => card._id === id))
  return (
    <Box sx={{
      p: '2px 4px',
      mx: '4px',
      overflowX: 'hidden',
      overflowY: 'auto',
      flexDirection: 'column',
      rowGap: '8px',
      display: 'flex',
      flex: '1 1 auto',
      scrollbarWidth: 'thin',
      scrollbarColor: '#091e4224 #091e420f',
      maxHeight: (theme) => `calc(${theme.trello.cardHeight} - ${boardBarHeight}px - ${headerHeight}px)`
    }} >
      {/* Trello Card */}
      {cardOrdered.map(card => <TrelloCard key={card._id} cardName={card.title} />)}
      {isAddingCard && <AddACard setIsAddingCard={setIsAddingCard} setRawCard={setRawCard} cardOrderIds={cardOrderIds} />}
    </Box>
  )
}

export default ListCard
