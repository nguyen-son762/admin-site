import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme:Theme) => ({
  main: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    background: 'rgb(238, 242, 246)',
    minHeight: 'calc(100vh - 64px)',
    borderRadius: '12px 12px 0px 0px',
    padding: theme.spacing(5),
    transition: 'all 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
  },
  active :{
    marginLeft: 260,
    transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'
  }
}))
