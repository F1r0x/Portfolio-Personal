import PropTypes from 'prop-types';
export const email = 'patrickschonewolf@hotmail.com';
export const featuredProjects = featuredProjects;
export const projects = projects;
import { Side } from '@components';
import { StyledLinkWrapper } from './styles';

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
