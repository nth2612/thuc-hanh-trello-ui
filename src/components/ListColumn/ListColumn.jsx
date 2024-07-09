import { Box } from '@mui/material'
import Column from './Column/Column'
import { mockData } from '~/apis/mock-data.js'

function ListColumn({ boardBarHeight }) {
  // const textareaRef = useRef(null)
  // // const headerRef = useRef(null)
  // const h2Ref = useRef(0)
  // const [editText, setEditText] = useState(false)
  // const [initText, setInitText] = useState('Mất tích trong đám đông giao thừa, pháo hoa cháy trong mưa, soi hết đoàn người')
  // const [h2Height, setH2Height] = useState(0)
  // const [headerHeight, setHeaderHeight] = useState(0)
  // const handleClickH2 = () => {
  //   setEditText(true)
  //   setH2Height(h2Ref.current.offsetHeight)
  // }
  // const handleChangeEditText = (e) => {
  //   setInitText(e.target.value)
  // }
  // const handleBlur = () => {
  //   setEditText(false)
  // }
  // const handleKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     setEditText(false)
  //   }
  // }
  // useEffect(() => {
  //   if (textareaRef.current) {
  //     textareaRef.current.select()
  //     setHeaderHeight(calHeight('head-card'))
  //   }
  // }, [editText])
  // useEffect(() => {
  //   if (h2Ref.current) {
  //     console.log(h2Ref.current)
  //   }
  // }, [initText])
  const { board } = mockData
  const { columnOrderIds, columns } = board
  const orderedColumns = columnOrderIds.map(id => columns.find(column => column._id === id))
  return (
    <Box sx={{ mt: '12px', flexGrow: 1 }} >
      <Box sx={{ height: '100%' }} >
        <Box sx={{ padding: '2px 6px 8px', height: '100%', display: 'flex', flexDirection: 'row' }} >
          {/* Column */}
          {orderedColumns.map(col => <Column key={col._id} columnName={col.title} cards={col.card} cardOrderIds={col.cardOrderIds} boardBarHeight={boardBarHeight} />)}
        </Box>
      </Box>
    </Box>
  )
}

export default ListColumn
