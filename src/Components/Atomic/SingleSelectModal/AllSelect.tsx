import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Checkbox from '@mui/material/Checkbox'
import { RowContainer } from '../Container'
import { Search } from 'Entity/Model/FilteringSearchType'

// シングルチェッククリック時にisCheckを更新
function singleCheck(
  clickCheckValue: number,
  searchList: Search[],
  list: Search[],
  setList: (list: Search[]) => void,
  changeSelectValue: (selectValue: number | null, index?: number) => void,
  changeStyle: (labelID: string, isSelected: boolean) => void,
  labelID: string,
  isOpenModal: (isOpen: boolean) => void
) {
  list.filter((value) => {
    if (value.value == clickCheckValue) {
      value.isChecked = !value.isChecked
      if (value.isChecked) {
        changeSelectValue(value.value)
      } else {
        changeSelectValue(null)
        value.isChecked = false
      }
      searchList.map((v) => {
        if (v.value != clickCheckValue) {
          v.isChecked = false
        }
      })
    }
    // else {
    //   // クリックしたチェックボックス以外はfalse
    //   value.isChecked = false
    // }
  })

  console.log(list)
  // 選択中のラベルの表示有無
  if (list.filter((val) => val.isChecked).length > 0) {
    changeStyle(labelID, true)
  } else {
    changeStyle(labelID, false)
  }
  setList(list)
  isOpenModal(false)
}

interface Props {
  list: Search[]
  setList: (list: Search[]) => void
  changeStyle: (labelID: string, isSelected: boolean) => void
  labelID: string
  isOpenModal: (isOpen: boolean) => void
  searchList: Search[]
  changeSelectValue: (selectValue: number | null, index?: number) => void
}

export const AllSelect: React.FC<Props> = ({
  list,
  setList,
  changeStyle,
  labelID,
  isOpenModal,
  searchList,
  changeSelectValue,
}) => {
  // 選択したIDの一覧
  const [checked, setChecked] = useState<readonly number[]>([])

  // IDのみを格納したListを作成
  useEffect(() => {
    // CheckLlist
    let checkList: number[] = []

    // isCheckの初期値がtrueのIDを取得
    let defaultCheckList: number[] = []

    console.log(list.length)
    // 業界の中分類のステータスをmapで回す
    list.map((item) => {
      checkList.push(item.value)

      if (item.isChecked) {
        console.log('デフォルトチェック', item.text)
        defaultCheckList.push(item.value)
      }
    })
    setChecked(defaultCheckList)
  }, [list])

  // シングルチェックをクリック
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    singleCheck(
      value,
      searchList,
      list,
      setList,
      changeSelectValue,
      changeStyle,
      labelID,
      isOpenModal
    )
    setChecked(newChecked)
  }

  const customList = (items: readonly Search[]) => (
    <>
      <List
        sx={{
          width: '100%',
          height: 'auto',
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        <RowContainer style={{ flexWrap: 'wrap' }}>
          {items.map((value: Search) => {
            const labelId = `transfer-list-all-item-${value.value}-label`
            return (
              <ListItem
                key={`item${value.value}`}
                role="listitem"
                button
                onClick={handleToggle(value.value)}
                sx={{ width: '50%', padding: '0.5rem' }}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={value.isChecked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      'aria-labelledby': labelId,
                    }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value.text}`} />
              </ListItem>
            )
          })}
        </RowContainer>
        <ListItem />
      </List>
    </>
  )

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ width: '100%' }}
    >
      <Grid item sx={{ width: '100%' }}>
        {customList(list)}
      </Grid>
    </Grid>
  )
}
