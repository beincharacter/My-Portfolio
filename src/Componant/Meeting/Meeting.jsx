import React, { useState } from 'react';
import './Meeting.scss';
import { MdContacts } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Meeting = () => {
  const [msgDisplay, setMsgDisplay] = useState(false);
  const [popupMsg, setPopupMsg] = useState(true);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [name, setName] = useState("");
  const [meeting, setMeeting] = useState("");
  const [other, setOther] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();

    const time = selectedDateTime.toLocaleDateString() + " " + selectedDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, meeting, other, time })
      });

      if (!response.ok) {
        alert("Notification sending failed");
        throw new Error(`Request failed with status ${response.status}`);
      }
      alert("Notification sent successfully");


      setName('');
      setMeeting("");
      setSelectedDateTime(new Date());
      setOther("");
      console.log("Notification sent successfully");
    } catch (error) {
      alert("Notification sending failed");
      console.error("An error occurred:", error.message);
    }

  }



  return (
    <div className='meeting_'>
      <div onClick={() => setPopupMsg(!popupMsg)}
        className={`msg ${popupMsg ? "block" : "none"} `}>
        You can connect with me from here
        <RxCross2
          onClick={() => setPopupMsg("none")}
          style={{ cursor: "pointer" }} />
      </div>
      <button className='button'><MdContacts size={26}
        onClick={() => setMsgDisplay(!msgDisplay)}
      /></button>

      <div className={`meeting__details  ${msgDisplay ? "block" : "none"}`} >
        <div className='meeting__details_box'>
          <div className='right'>
            <div><SlCalender size={100} /></div>
            <div>Select date to schedule meet or call</div>
            <DatePicker
              showIcon
              closeOnScroll={true}
              selected={selectedDateTime}
              onChange={date => setSelectedDateTime(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="yyyy-MM-dd HH:mm"
              minDate={new Date()}
            />
          </div>
          <div className='left'>
            <table>
              <tbody>
                <tr>
                  <td className='font'>Meet / Call Details</td>
                </tr>
                <tr>
                  <td className='font'>Name :</td>
                  <td><input type="text" placeholder='' onChange={(e) => setName(e.target.value)} /></td>
                </tr>
                <tr>
                  <td className='font'>Any meeting link / contact : </td>
                  <td><input type="text" aria-multiline
                    onChange={(e) => setMeeting(e.target.value)} /></td>
                </tr>
                <tr>
                  <td className='font'>Date & time :</td>
                  <td>{selectedDateTime.toLocaleDateString()}{' '}
                    {selectedDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                </tr>
                <tr>
                  <td className='font'>Any other details ? </td>
                  <td><textarea name="other_detail" cols="30" rows="3"
                    onChange={(e) => setOther(e.target.value)}></textarea></td>
                </tr>
                <tr><button onClick={(e) => handleSend(e)}>Send</button></tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Meeting;
