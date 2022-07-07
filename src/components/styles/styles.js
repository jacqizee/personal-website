export const flexCenterRow = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const flexCenterCol = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

export const sectionStyling = {
  ...flexCenterCol,
  width: '100%',
  mt: -1,
  pt: 3,
  pb: 6,
  bgcolor: 'background.default'
}

export const cardStyling = {
  width: { xs: '90%', md: '75%'},
  maxWidth: '1500px',
  borderRadius: 3,
  border: '1px dotted',
  borderColor: 'primary.contrastText',
  px: 2,
  py: 3,
  color: 'primary.contrastText',
  bgcolor: 'background.paper'
}

export const paragraphStyling = {
  mb: 1,
  textAlign: 'center',
  width: '95%'
}

export const headlineStyling = {
  color: 'primary.light',
  borderBottom: 'double',
  py: 1,
  width: 'fit-content',
  my: 3
}