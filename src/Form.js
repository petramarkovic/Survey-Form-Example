import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render(){
        return(
            <div className="wrapper">
                <form>
                    <label htmlFor="name">Your name:</label>
                    <input name="name" type="text"></input>
                    <label htmlFor="training">Training/Course:</label>
                    <input name="training" type="text"></input>
                    <hr></hr>
                    <label>Overall, how statisfied were you with this training program?</label>
                    <table>
                        <thead>
                            <th colSpan="2"></th>
                            <th>Very Unsatisfied</th>
                            <th>Unsatisfied</th>
                            <th>Neutral</th>
                            <th>Satisfied</th>
                            <th>Very Satisfied</th>
                        </thead>
                        <tbody>
                            <tr>
                                <th colSpan="2">Overall Satisfaction</th>
                                <td><input name="overall" className="radio-input" type="radio"></input></td>
                                <td><input name="overall" className="radio-input" type="radio"></input></td>
                                <td><input name="overall" className="radio-input" type="radio"></input></td>
                                <td><input name="overall" className="radio-input" type="radio"></input></td>
                                <td><input name="overall" className="radio-input" type="radio"></input></td>
                            </tr>
                        </tbody>
                    </table>
                    <hr></hr>
                    <p>Have you attended this training before?</p>
                    <label htmlFor="attendance">Yes</label>
                    <input name="attendance" type="radio"></input>
                    <label htmlFor="attendance">No</label>
                    <input name="attendance" type="radio"></input>
                    <hr></hr>
                    <p>For what reasons did you attend this training?</p>
                    <textarea rows="6"></textarea>
                    <hr></hr>
                    <p>How statisfied were you with the following?</p>
                    <table>
                    <thead>
                            <th colSpan="2"></th>
                            <th>Very Unsatisfied</th>
                            <th>Unsatisfied</th>
                            <th>Neutral</th>
                            <th>Satisfied</th>
                            <th>Very Satisfied</th>
                        </thead>
                        <tbody>
                            <tr>
                                <th colSpan="2">Training venue</th>
                                <td><input name="training-venue" className="radio-input" type="radio"></input></td>
                                <td><input name="training-venue" className="radio-input" type="radio"></input></td>
                                <td><input name="training-venue" className="radio-input" type="radio"></input></td>
                                <td><input name="training-venue" className="radio-input" type="radio"></input></td>
                                <td><input name="training-venue" className="radio-input" type="radio"></input></td>
                            </tr>
                            <tr>
                                <th colSpan="2">Ease of registration</th>
                                <td><input name="registration" className="radio-input" type="radio"></input></td>
                                <td><input name="registration" className="radio-input" type="radio"></input></td>
                                <td><input name="registration" className="radio-input" type="radio"></input></td>
                                <td><input name="registration" className="radio-input" type="radio"></input></td>
                                <td><input name="registration" className="radio-input" type="radio"></input></td>
                            </tr>
                            <tr>
                                <th colSpan="2">Date of training</th>
                                <td><input name="date" className="radio-input" type="radio"></input></td>
                                <td><input name="date" className="radio-input" type="radio"></input></td>
                                <td><input name="date" className="radio-input" type="radio"></input></td>
                                <td><input name="date" className="radio-input" type="radio"></input></td>
                                <td><input name="date" className="radio-input" type="radio"></input></td>
                            </tr>
                            <tr>
                                <th colSpan="2">Quality of presenters</th>
                                <td><input name="presenters" className="radio-input" type="radio"></input></td>
                                <td><input name="presenters" className="radio-input" type="radio"></input></td>
                                <td><input name="presenters" className="radio-input" type="radio"></input></td>
                                <td><input name="presenters" className="radio-input" type="radio"></input></td>
                                <td><input name="presenters" className="radio-input" type="radio"></input></td>
                            </tr>
                            <tr>
                                <th colSpan="2">Quality of food</th>
                                <td><input name="food" className="radio-input" type="radio"></input></td>
                                <td><input name="food" className="radio-input" type="radio"></input></td>
                                <td><input name="food" className="radio-input" type="radio"></input></td>
                                <td><input name="food" className="radio-input" type="radio"></input></td>
                                <td><input name="food" className="radio-input" type="radio"></input></td>
                            </tr>
                            <tr>
                                <th colSpan="2">Quality of accommodations</th>
                                <td><input name="accommodations" className="radio-input" type="radio"></input></td>
                                <td><input name="accommodations" className="radio-input" type="radio"></input></td>
                                <td><input name="accommodations" className="radio-input" type="radio"></input></td>
                                <td><input name="accommodations" className="radio-input" type="radio"></input></td>
                                <td><input name="accommodations" className="radio-input" type="radio"></input></td>
                            </tr>
                            <tr>
                                <th colSpan="2">Registration fees</th>
                                <td><input name="fees" className="radio-input" type="radio"></input></td>
                                <td><input name="fees" className="radio-input" type="radio"></input></td>
                                <td><input name="fees" className="radio-input" type="radio"></input></td>
                                <td><input name="fees" className="radio-input" type="radio"></input></td>
                                <td><input name="fees" className="radio-input" type="radio"></input></td>
                            </tr>
                        </tbody>
                    </table>
                    <hr></hr>
                    <p>Would you recommend this training to others?</p>
                    <label htmlFor="recommend">Yes</label>
                    <input name="recommend" type="radio"></input>
                    <label htmlFor="recommend">No</label>
                    <input name="recommend" type="radio"></input>
                    <hr></hr>
                    <p>Comments:</p>
                    <textarea rows="6"></textarea>
                    <br></br>
                    <input className="submit" name="submit" type="submit"></input>
                </form>
            </div>
        );
    }
}

export default Form;