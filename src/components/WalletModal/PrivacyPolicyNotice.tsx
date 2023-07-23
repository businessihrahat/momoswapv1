import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'
import { ExternalLink, ThemedText } from 'theme'

const StyledLink = styled(ExternalLink)`
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
`

const LastUpdatedText = styled.span`
  color: ${({ theme }) => theme.textTertiary};
`

const LAST_UPDATED_DATE = '11.17.22'

export default function PrivacyPolicyNotice() {
  return (
    <ThemedText.Caption color="textSecondary"> 
    </ThemedText.Caption>
  )
}
