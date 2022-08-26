import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { Button, Popover, List, ListItem, ListSubheader } from '@mui/material'

import styles from './LanguageSelect.module.css'

const languageMap = {
  en: { label: 'English', dir: 'ltr', active: true },
  hi: { label: 'Hindi', dir: 'ltr', active: false },
  te: { label: 'Telugu', dir: 'ltr', active: false }
}

const LanguageSelect = () => {
  const selected = localStorage.getItem('i18nextLng') || 'en'
  const { t } = useTranslation()

  const [menuAnchor, setMenuAnchor] = useState(null)
  useEffect(() => {
    document.body.dir = languageMap[selected]?.dir
  }, [menuAnchor, selected])

  return (
    <div className={styles.language}>
      <Button
        onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}
        sx={{ margin: '0px 15px', padding: '0px' }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/language.svg`}
          height="80px"
          width="80px"
        />
      </Button>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <div>
          <List>
            <ListSubheader>{t('SELECT_LANGUAGE')}</ListSubheader>
            {Object.keys(languageMap)?.map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item)
                  setMenuAnchor(null)
                }}
              >
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  )
}

export default LanguageSelect
