import { Box } from '@mui/material'
import TrelloCard from './TrelloCard/TrelloCard'

function ListCard({ headerHeight, cards, cardOrderIds }) {
  const cardOrdered = cardOrderIds.map(id => cards.find(card => card._id === id))
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
      maxHeight: (theme) => `calc(${theme.trello.cardHeight} - ${headerHeight}px)`
    }} >
      {/* Trello Card */}
      {cardOrdered.map(card => <TrelloCard key={card._id} cardName={card.title} />)}
    </Box>
  )
}

export default ListCard
