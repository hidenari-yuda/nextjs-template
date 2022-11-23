import { styled as materialStyled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { Search } from 'Entity/Model/FilteringSearchType'
import { useCallback } from 'react'

const BootstrapDialog = materialStyled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    maxWidth: '80%',
    width: 'calc(100% - 64px)',
  },
}))

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

type Props = {
  modalTitle: string
  open: boolean
  isOpenModal: (isOpen: boolean) => void
  children?: React.ReactNode
  searchState: {
    label: string
    list: Search[]
    setList: (list: Search[]) => void
  }[]
  selectList: (number | null)[] // industryTypes
}

export const MultiSelectModal: React.FC<Props> = ({
  modalTitle,
  open,
  isOpenModal,
  children,
  searchState,
  selectList,
}) => {
  const handleClose = useCallback(() => {
    searchState.map((val) => {
      val.list.map((item) => {
        // チェックした項目が0なら全てのチェックを外す
        if (selectList && selectList.length == 0) {
          item.isChecked = false
        } else if (selectList && selectList.length > 0) {
          // チェックした項目が1つでもあれば
          // 選択済みのIDとステータスのIDが一緒ならチェックつける
          selectList.map((val) => {
            if (val == item.value) {
              item.isChecked = true
            }
          })
        }
      })
    })
    isOpenModal(false)
  }, [searchState, selectList])

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {modalTitle}
        </BootstrapDialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </BootstrapDialog>
    </div>
  )
}
