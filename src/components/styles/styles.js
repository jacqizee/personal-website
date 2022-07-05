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

// Styling for elements: 0 = Cards, 1 = Paragraphs, 2 = Headlines
export const sharedStyling = [
  // 0 - Cards
  {
    width: { xs: '90%', md: '65%'},
    maxWidth: '1500px',
    borderRadius: 3,
    border: '1px dotted',
    borderColor: 'primary.contrastText',
    px: 2,
    py: 3,
    color: 'primary.contrastText',
    bgcolor: 'background.paper'
  },
  // 1 - Paragraphs
  {
    mb: 1,
  },
  // 2 - Headlines
  {
    bgcolor: 'primary.main',
    color: 'white',
    px: 3,
    py: 1,
    width: 'fit-content',
    borderRadius: 1,
    my: 3
  }
]