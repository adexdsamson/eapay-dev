import { Badge } from 'react-bootstrap'

const ComingSoon = ({ label }) => {
  return (
    <Badge pill variant="primary-eapay text-uppercase">
      {label}
    </Badge>
  )
}

export default ComingSoon;