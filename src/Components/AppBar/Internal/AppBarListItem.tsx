import React from 'react'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import { TextColor } from 'styles/Enums'
import { useRouter } from 'next/router'

type Props = {
  itemIndex: number
  appBarItem: {
    label: string
    link: string
  }
  drawerOpen: boolean
}

export const AppBarListItem: React.FC<Props> = ({
  itemIndex,
  appBarItem,
  drawerOpen,
}) => {
  /*********************************************/
  // useRouter
  //
  const router = useRouter()

  return (
    <Tooltip
      title={appBarItem.label}
      placement={'right'}
      disableHoverListener={drawerOpen ? true : false}
    >
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: drawerOpen ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={() => router.push(appBarItem.link)}
        >
          <ListItemIcon
            sx={{
              color: TextColor.White,
              minWidth: 20,
              mr: drawerOpen ? '10px' : 'auto',
              justifyContent: 'center',
            }}
          >
            {itemIndex == 0 ? (
              <WysiwygOutlinedIcon />
            ) : itemIndex == 1 ? (
              <BusinessIcon />
            ) : itemIndex == 2 ? (
              <PeopleOutlinedIcon />
            ) : (
              <AccountTreeOutlinedIcon />
            )}
          </ListItemIcon>
          <ListItemText
            primary={appBarItem.label}
            sx={{ opacity: drawerOpen ? 1 : 0 }}
          />
        </ListItemButton>
      </ListItem>
    </Tooltip>
  )
}
