import React, { useState } from 'react';

function ProfileDetail() {
  const [profile, setProfile] = useState({
    name: '',
    billing: {
      email: ''
    }
  })
  const modifyProfile = (event, field, type) => {
    const updatedProfile = {...profile};
    if(type) {
      updatedProfile[type][field] = event.target.value;
    } else {
      updatedProfile[field] = event.target.value;
    }
    setProfile(updatedProfile);
  }
  return (
    <div className="profile-detail">
      <h2 className="label">Billing Details</h2>
      <div className="flex">
        <div className="col">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" autoComplete="email" value={profile ? profile.billing.email : ''} onChange={(e) => modifyProfile(e, 'email', 'billing')} />

        </div>
      </div>
    </div>
  )
}