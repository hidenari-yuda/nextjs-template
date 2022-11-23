import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import CardHeader from '@mui/material/CardHeader'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import { Search } from 'Entity/Model/FilteringSearchType'
import { RowContainer } from '../Container'

// オールチェックをクリックした時にisCheckを全てfalseにする
function not(
  a: readonly number[],
  b: readonly number[],
  list: Search[],
  setList: (list: Search[]) => void,
  changeStyle: (labelID: string, isSelected: boolean) => void,
  labelID: string
) {
  list.filter((value) => {
    if (value.isChecked) {
      value.isChecked = false
    }
  })
  setList(list)

  // 選択中のラベルの表示有無
  changeStyle(labelID, false)
  return a.filter((value) => b.indexOf(value) === -1)
}

// オールチェックをクリックした時にisCheckを全てtrueにする
function union(
  a: readonly number[],
  b: readonly number[],
  list: Search[],
  setList: (list: Search[]) => void,
  changeStyle: (labelID: string, isSelected: boolean) => void,
  labelID: string
) {
  const notList = not(b, a, list, setList, changeStyle, labelID)

  list.filter((value) => {
    if (!value.isChecked) {
      value.isChecked = true
    }
  })
  setList(list)

  // 選択中のラベルの表示有無
  changeStyle(labelID, true)
  return [...a, ...notList]
}

// シングルチェッククリック時にisCheckを更新
function singleCheck(
  id: number,
  list: Search[],
  setList: (list: Search[]) => void,
  changeStyle: (labelID: string, isSelected: boolean) => void,
  labelID: string
) {
  list.filter((value) => {
    if (value.value == id) {
      value.isChecked = !value.isChecked
    }
  })

  // 選択中のラベルの表示有無
  if (list.filter((val) => val.isChecked).length > 0) {
    changeStyle(labelID, true)
  } else {
    changeStyle(labelID, false)
  }
  setList(list)
}

function intersection(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) !== -1)
}

interface Props {
  title: string
  list: Search[]
  setList: (list: Search[]) => void
  changeStyle: (labelID: string, isSelected: boolean) => void
  labelID: string
}

export const AllSelect: React.FC<Props> = ({
  title,
  list,
  setList,
  changeStyle,
  labelID,
}) => {
  // 選択対象のID一覧
  const [checkIdList, setCheckIdList] = useState<readonly number[]>([])

  // 選択したIDの一覧
  const [checked, setChecked] = useState<readonly number[]>([])

  // IDのみを格納したListを作成
  useEffect(() => {
    // CheckLlist
    let checkList: number[] = []

    // isCheckの初期値がtrueのIDを取得
    let defaultCheckList: number[] = []

    // 業界の中分類のステータスをmapで回す
    list.map((item) => {
      checkList.push(item.value)

      if (item.isChecked) {
        defaultCheckList.push(item.value)
      }
    })
    setCheckIdList(checkList)
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
    singleCheck(value, list, setList, changeStyle, labelID)
    setChecked(newChecked)
  }

  const numberOfChecked = (items: readonly number[]) => {
    return intersection(checked, items).length
  }

  /** AllCheck */
  const handleToggleAll = (items: readonly number[]) => () => {
    if (numberOfChecked(items) === items.length) {
      // 全てのチェック外す
      setChecked(not(checked, items, list, setList, changeStyle, labelID))
    } else {
      // 全てチェック
      setChecked(union(checked, items, list, setList, changeStyle, labelID))
    }
  }

  const customList = (title: React.ReactNode, items: readonly Search[]) => (
    <>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(checkIdList)}
            checked={
              numberOfChecked(checkIdList) === items.length &&
              items.length !== 0
            }
            indeterminate={
              numberOfChecked(checkIdList) !== items.length &&
              numberOfChecked(checkIdList) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(checkIdList)}/${checkIdList.length
          } selected`}
      />
      <Divider />
      <List
        sx={{
          width: '100%',
          height: '28rem',
          bgcolor: 'background.paper',
          overflow: 'scroll',
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
        {customList(title, list)}
      </Grid>
    </Grid>
  )
}
