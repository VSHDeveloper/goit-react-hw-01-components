import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar, Name } from './FriendList.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendItem>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt={name} width="60" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
