import React, { Component } from 'react'
import { connect } from "react-redux";
import moment from 'moment';
import api from '../../api';
import _ from 'lodash'
import { fetchAllMembers, fetchSearchResult } from '../../actions/members'
class AttendancePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.onSearch = this.onSearch.bind(this);
        this.onLoad = this.onLoad.bind(this)
    }

    todaysDate(eer) {
        console.log('todays date', d)
        let d = eer || [{ date: new Date() }]
        const dates = {
            convert: function (d) {
                return (
                    d.constructor === Date ? d :
                        d.constructor === Array ? new Date(d[0], d[1], d[2]) :
                            d.constructor === Number ? new Date(d) :
                                d.constructor === String ? new Date(d) :
                                    typeof d === "object" ? new Date(d.year, d.month, d.date) :
                                        NaN
                );
            },
            inRange: function (d, start, end) {
                return (
                    isFinite(d = this.convert(d).valueOf()) &&
                        isFinite(start = this.convert(start).valueOf()) &&
                        isFinite(end = this.convert(end).valueOf()) ?
                        start <= d && d <= end :
                        NaN
                );
            }
        }

        var start = new Date();
        start.setHours(0, 0, 0, 0);

        var end = new Date();
        end.setHours(23, 59, 59, 999);

        let today = d.filter(e => {
            console.log('filter', e)

            if (dates.inRange(e.date, start, end)) {
                return e
            }
        })


        let returningdate = { entry: 'N/A', exit: 'N/A' };
        if (today.length > 0) {
            returningdate.entry = today[0].entry ? moment(today[0].entry).format('LT') : 'N/A'
            returningdate.exit = today[0].exit ? moment(today[0].exit).format('LT') : 'N/A'

        }



        return returningdate;


    }
    onLoad() {
        const { members } = this.props;
        let data = _.values(members)
        console.log('shit', data)
        let count = 0;
        const listItems = data.map((d) => {
            count++
            let packag;
            if (d.package == '1') packag = "1 Month Package";
            else if (d.package == '3') packag = "3 Month Package";
            else if (d.package == '6') packag = "6 Month Package";
            else if (d.package == '12') packag = "1 Year Package ";
            let details = d.phone
            return < tr key={count}>
                <th scope="row" > {count} </th >
                <td>{d.name}</td>
                <td>{d.phone}</td>
                <td > {this.todaysDate(d.attendance).entry} <button onClick={() => this.entrytime({ time: 'entry', phone: d.phone })}>Set Entry</button> </td>
                <td > {this.todaysDate(d.attendance).exit} <button onClick={() => this.entrytime({ time: 'exit', phone: d.phone })}>Set Exit</button> </td>
            </tr >
        });
        return listItems;
    }
    entrytime(d) {
        const data = { phone: d.phone, time: d.time }
        api.user.attendance(data)
            .then((res) => {
                this.props.fetchAllMembers();
            });
    }

    componentDidMount() {
        this.props.fetchAllMembers();
    }

    onSearch(e) {
        let { value } = e.target;
        if (value.length > 2) {
            this.props.fetchSearchResult(value);
        } else if (value.length == 0) {
            this.props.fetchAllMembers();
        }

    }
    render() {
        console.log('shit', this.props.members)
        return (
            <div className="row">

                <table className="table table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th><h1>Daily Member Attendance</h1></th>

                            <th scope="row"> <input className="form-control"
                                style={{
                                    backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAYeSURBVFhH3VjrU1RlGHeqaab60DRTf0CX733sU9OHBHZhd1HUSkvxEmZpzpRY09iEU8HeF9FMlAR0NQvv5mUQwcsC57ILyFVAzBRYVBQWzu7Cwu4+Pc/hBQUPyOIRm34zv9lz3svz/Pa9PO/znjn/Kyy0V74Qb+LSkh3iWb1V6NaYuSGtmR80OMQ6rYlbkZEBz7Cmsw+tsXJJklXoXV1wxZ9ddgcO1A3AieYwHGsehh0VPbB4++WA3iaWLcpoeJ51mT3obKJpQY47sKdKgtNtUUWevBqBdc6WgN4uHmTdZgdas7Dmg23V0tErQ4rCHuRfrWHAtkG9XfDqrII5znr5JWbmySDJ6HolySJIv9cEFQVNxn01AVjrbB7A0fQsKip6lplTHxoLn75+f8uAkgglyqN8deT5FDJ1V50UZ6pMZebUh8Hh9mx39TwkRImHGkOwdGctfPxrDeyrDshlWy/eBbRRwcypD5zevkMNoYfETGShR4IlKGyvqx1KGrphYY4HDqPgovpBoJ3PzKmPBDMXod05ThCbwuMYXvJ4H6T/0QYp2W4oa+yGUVhPXYPvjlyXN43GzA8zc+oj0cz7DzcNyaPx1YFWMNhFdMhBgokDg02Az/PrYH95B/QFh5m0EbTd8sPCrdVynNSYuCFmTn0Y7O4GGqW0gibYXnId/INhJmFqhIYjoLXwUOiWQG8TbjBz6gOd/PTtkX9CiVYBfIEh5n56oFHefLI9jAJzmTn1obNwWXjuRslZrKA+KTmeqN7K25k59ZFk5QNpu+tlZ7GC+qzMq4VEtMHMqY9ku3jrd/72jAU6uduANrqYOfWhs/I/rHc2BmcqcL2zIYhn8vfMnPqg1AlHoBjjIUSjzPM0QG2pD67fM7OSfhlsvHRXCjH3j0Z3f4jCSz/r/uSxYItYWopH2HRRXHcHFmxxl7Du40BZdzwmv3j6XNDbeB+ONIYi3kfvVD6jrByNGJbnVkvhyKPneRjbLNtRJcUZK/Ws+xg0lvI38TRqSfutVjro6YYa7yC03YvIv/T+KZYn24Xm943iG6zL9DHfIZx3nL4GU0mkOsfpNqC2rNsY4rMq38JEtqew3Bu57ovCZCwo94bxvtMbs8i5Js/LuGEg81grKK1HKvsZ63AEgNqybjJo2vBi1YLOpxQ3ynyXN4x2rsQ83RQ6Ci/epPUFWcdb4ZZvUCY9UxnVURvWfAwJWRWLaVqVxExGmm5MND5iJqaH0XgYDIVhX3k7LPmlSiY9UxlBSSBtAFpjSkImY5H7DszPFsuYCWXQpUdjrFyEqdVhvFK26ywCdPQMyEKU0HFvADAwg84mdGCYOaExcp/oMjwvYlkfbQQlIZOxpnOQQpVysvtexvnnEi3Cl5hR967YXd9vLu4CJ6bxmWc6YV1hPQwMRZik+6CyLzA/zDzTAXQ9NZ/tii7dWefDjLoPc8gI7VYlIZOR2lMIYpLuQ2fzvIq7SEjdVe/f4/GPy6bpIrSx6Bosz60B7mqPPK0BzBHpORXLvsE6avNgH7KBIxFVZQQ1mZdew2ns2HT8ZujUxFT/AeZc6IbV+Y0wzyHK/KygUS5Taktcu7dZjnNKQibjn7gGU7LFUiZt5NzFIFq76diNkJKTxyF9KllTUK8oRIl/I1flXZbis7gPmTz5/rFxRV6Df+IUqUEnTjONdL6rS1HQRO52dWIcFJvG4iAFVlzM0oHa2L4gTIf5Yj9mNW5IP+LFDLsKT4qpReKfCOtsfG+clX9dFkfAQ3rZ6oKmfiUHj8Pcil5Z3ObiHsj1RCD9aFfUYBciq/JqAxTnaCPIZzH+0vtKnFY6QcaJIyTb3SW0TpSczJTbLt5FcR7IPOeTxf2IIrUWQUoy8m/TCUEbgHbpSDYj9NI7rTnF4w0DqzfWD0RT0XbuNszL9oD5fL8sLrPUR9fQQFwW9w5zGRvwXwToiFKDdLE34MjZLvllcZYLEiRaxGCCsXIuc/f0kGQWNszLqfI7yoOyOPulACRZxWCiiUthTZ4u6FPJqLjsigEw2N0BjZFfyaqfPjBUeWnHOlxBXIPVAa2V28Cq/htIMPPvJtqETq2Zl7Qm4WtW/BiYM+dfdNDphX924A0AAAAASUVORK5CYII=)',
                                    margin: '-7px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center right .5625rem',
                                    backgroundSize: '1.125rem 1.125rem'
                                }} type="text" onChange={this.onSearch} placeholder="Search by number" /></th>
                        </tr>
                    </thead>
                </table>
                <table className="table table-hover" style={{ background: '#fff' }}>
                    <thead className="thead-light">
                        <tr>
                            <th scope="row">#</th>
                            <th scope="row">Name</th>
                            <th scope="row">Mobile Number</th>
                            <th scope="row">Entry Time</th>
                            <th scope="row">Exit Time</th>

                        </tr>
                    </thead>
                    <tbody>
                        {console.log('counter', _.size(this.props.members))}
                        {_.size(this.props.members) > 0 && this.onLoad()}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { members } = state
    return {
        members
    };
}

export default connect(mapStateToProps, { fetchAllMembers, fetchSearchResult })(AttendancePage);