import { useCallback, useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import styled from 'styled-components'
import { styled as materialStyled } from '@mui/material/styles'
import { AllSelect } from './AllSelect'
import { Color, TextColor } from 'styles/Enums'

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
  changeSelectValue: (selectValue: number | null, index?: number) => void // チェック値を保存する関数
  selectReset: () => void
}

export const SingleCheckBox: React.FC<Props> = ({
  type,
  searchState,
  isOpenModal,
  changeSelectValue,
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

  const [searchList, setSearchList] = useState<Search[]>([])

  useEffect(() => {
    searchState.map((value, index) => {
      // デフォルトで「選択中」ラベルの表示を切り替える
      const el = document.getElementById(
        `tab-${type}${index}`
      ) as HTMLSpanElement
      if (el) {
        const list = value.list.filter((v) => v.isChecked)
        changeStyle(`tab-${type}${index}`, list.length > 0)
        if (list.length > 0) {
          setValue(index)
        }
      }

      // Search[]をまとめる
      searchList.push(...value.list)
    })
    setSearchList(searchList)
  }, [])

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: '38rem',
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
                  list={val.list}
                  setList={val.setList}
                  changeStyle={changeStyle}
                  labelID={`tab-${type}${index}`}
                  isOpenModal={isOpenModal}
                  searchList={searchList}
                  changeSelectValue={changeSelectValue}
                />
              </TabPanel>
            )
          })}
        </>
      </Box>
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
  background-color: ${Color.Main2};
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
