import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/usersSlice';

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{
      display: 'flex', gap: '5px', marginTop: '200px', padding: '100px',
    }}
    >
      {users
        && users.map((user) => (
          <div key={user.uuid} style={{ border: '1px solid black', padding: '10px' }}>
            <img src={user.picture} alt={`${user.name}`} />
            <p>
              Name:
              {`${user.name}`}
            </p>
            <p>
              Email:
              {user.email}
            </p>
          </div>
        ))}
    </div>
  );
};

export default UsersList;
