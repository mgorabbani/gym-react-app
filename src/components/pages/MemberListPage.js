import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import FindMemberPage from './FindMemberPage';
import MemberDetailsPage from './MemberDetailsPage'
const MemberListPage = () => (
    <div>
        <Switch>
            <Route exact path="/dashboard/members" component={FindMemberPage} />
            <Route path="/dashboard/members/:id" component={MemberDetailsPage} />
        </Switch>
    </div>
)

export default MemberListPage;