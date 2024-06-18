import React,{useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import './EditMember.css';
import bg_img from '../Home/Images/gym_bg.webp';
import axios from "axios";


export default function EditMember(){
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [phone, setPhone] = useState("");
    var [expiry, setExpiry] = useState();
    var [doj, setDoj] = useState();
    var [member,setMember] = useState(null);

    const {memberId} = useParams()
    var navigate = useNavigate();

    var user = {};

    useEffect(()=>{
        axios.get(`https://localhost:7999/api/Member/GetMember/memberId?memberId=${memberId}`)
        .then(function(res){
            console.log(res.data);
            setMember(res.data)
            setName(res.data.name)
            setEmail(res.data.email)
            setPhone(res.data.phone)
            setExpiry(res.data.membershipExpiry)
            setDoj(res.data.doj)
        }).catch(function(err){
            console.log(err);
        })
    },[memberId])

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const minDateTime = currentDate.toISOString().slice(0, 16);


    function edit(e)
    {
        e.preventDefault();

        user.memberId = memberId;
        user.name = name;
        user.email = email;
        user.phone = phone;
        user.expiry = expiry;
        user.doj = doj;

        var RequestOption = {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
          }
      
          fetch("https://localhost:7999/api/Member", RequestOption)
          .then(res => res.json())
          .then(res => {
            console.log(res)
            alert("Member updated successfully")
            navigate('/admin/get-members')
          })
          .catch(err => {
            console.log(err)
            alert("Error updating the member")
          })
    }
   

    return(
        <div className="edit-member-page">
            <img src={bg_img} className="img-bg"/> 
            <div className="form-container">
                <h2>Edit Member</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiry">Membership Expiry</label>
                        <input type="datetime-local" id="expiry" name="expiry" value={expiry} min={minDateTime} onChange={(e) => setExpiry(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="doj">DOJ</label>
                        <input type="datetime-local" id="doj" name="doj" min={minDateTime} value={doj} onChange={(e) => setDoj(e.target.value)} />
                    </div>
                    <button type="submit" onClick={edit}>Update</button>
                </form>
            </div>
        </div>
    )
}