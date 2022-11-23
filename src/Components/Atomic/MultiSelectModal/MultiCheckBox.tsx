import { useCallback, useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import styled from 'styled-components'
import { styled as materialStyled } from '@mui/material/styles'
import { AllSelect } from './AllSelect'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { Color, FontWeight, Radius, TextColor } from 'styles/Enums'
import Divider from '@mui/material/Divider'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

type Search = {
  text: string
  value: number
  isChecked: boolean
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: '100%' }}
    >
      {value === index && (
        <Box>
          <Container sx={{ padding: '0px!important' }}>{children}</Container>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

interface Props {
  type: string
  searchState: {
    label: string
    list: Search[]
    setList: (list: Search[]) => void
  }[] // チェックボックスの選択肢関連のリスト
  isOpenModal: (isOpen: boolean) => void // モーダル閉じる関数
  changeSelectList: (selectList: number[]) => void // チェック値を保存する関数
  selectReset: () => void
}

export const MultiCheckBox: React.FC<Props> = ({
  type,
  searchState,
  isOpenModal,
  changeSelectList,
  selectReset,
}) => {
  const [value, setValue] = useState(0)

  // タブの切り替え
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event.target)
    setValue(newValue)
  }

  // 「選択中」ラベルの表示を切り替える関数
  const changeStyle = useCallback((labelID: string, isSelected: boolean) => {
    const el = document.getElementById(labelID) as HTMLSpanElement
    if (isSelected) {
      // 一つでも選択されている場合
      el.style.display = 'inline'
    } else {
      // 選択されていない場合
      el.style.display = 'none'
    }
  }, [])

  // デフォルトで「選択中」ラベルの表示を切り替える
  useEffect(() => {
    searchState.map((value, index) => {
      const el = document.getElementById(
        `tab-${type}${index}`
      ) as HTMLSpanElement
      if (el) {
        changeStyle(
          `tab-${type}${index}`,
          value.list.filter((v) => v.isChecked).length > 0
        )
      }
    })
  }, [])

  // 「選択する」をクリック
  const setCheckStatus = () => {
    const checkList: number[] = []

    searchState.map((state) => {
      return state.list
        .filter((val) => val.isChecked)
        .map((val) => {
          checkList.push(val.value)
        })
    })

    // 業界一覧から選択したチェックボックスの値をセット
    changeSelectList(checkList)

    // モーダル閉じる
    isOpenModal(false)
  }

  // 「選択解除」をクリック
  const deselection = () => {
    searchState.map((_, index) => {
      const el = document.getElementById(
        `tab-${type}${index}`
      ) as HTMLSpanElement
      if (el) {
        changeStyle(`tab-${type}${index}`, false)
      }
    })
    // isCheckを全てfalseにする
    selectReset()

    // 選択中の値をリセット
    changeSelectList([])

    // モーダル閉じる
    isOpenModal(false)
  }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: '32rem',
        }}
      >
        <>
          <VerticalTabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            {searchState.map((val, index) => {
              return (
                <Tab
                  key={`tab-${type}${index}`}
                  label={
                    <SelectContent>
                      <LabelTitle>{val.label}</LabelTitle>
                      <SelectLabel id={`tab-${type}${index}`}>
                        選択中
                      </SelectLabel>
                    </SelectContent>
                  }
                  {...a11yProps(index)}
                />
              )
            })}
          </VerticalTabs>
          {searchState.map((val, index) => {
            return (
              <TabPanel
                value={value}
                index={index}
                key={`tab-panel-${type}${index}`}
              >
                {/* オールセレクト */}
                <AllSelect
                  title={val.label}
                  list={val.list}
                  setList={val.setList}
                  changeStyle={changeStyle}
                  labelID={`tab-${type}${index}`}
                />
              </TabPanel>
            )
          })}
        </>
      </Box>
      <Divider />
      <DialogActions sx={{ justifyContent: 'space-between' }}>
        <ResetButton onClick={() => deselection()}>選択解除</ResetButton>
        <Submit autoFocus onClick={() => setCheckStatus()}>
          選択する
        </Submit>
      </DialogActions>
    </>
  )
}

const SelectContent = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
`

const LabelTitle = styled.span`
  width: 100%;
  text-align: left;
`

const SelectLabel = styled.span`
  width: 80px;
  background-color: ${Color.Main};
  color: ${TextColor.White};
  padding: 2px 8px;
  display: none;
`

const VerticalTabs = materialStyled(Tabs)(() => ({
  width: '35%!important',
  '& .Mui-selected': {
    color: `${Color.Main}!important`,
  },
  '& .MuiTabs-indicator ': {
    backgroundColor: `${Color.Main}!important`,
  },
}))

const Submit = materialStyled(Button)`
  background: ${Color.Main};
  color: ${TextColor.White};
  border-radius: ${Radius.Px4};
  width: fit-contents;
  font-size: 12px;
  font-weight: ${FontWeight.Bold};
  padding: 8px;
  &:hover {
    background: ${Color.MainHover};
  }
`

const ResetButton = materialStyled(Button)`
  color: ${Color.Main};
  border-radius: ${Radius.Px4};
  &:hover {
    background-color: transparent;
  }
`
