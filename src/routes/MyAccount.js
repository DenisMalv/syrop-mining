import React, { useEffect,useState,useRef } from 'react'
import { useSelector,useDispatch  } from 'react-redux';
import { getPersonalInfo ,getPassword, getSshKey,personalInfo,password,sshKey} from '../redux/my account/my-account-slice';

const MyAccount = () => {
    const dispatch = useDispatch()
    const personalInfoSelector = useSelector(getPersonalInfo)
    const passwordSelector = useSelector(getPassword)
    const sshKeySelector = useSelector(getSshKey)
    const sshInput = useRef(null)
    const newPassForm = useRef(null)
    
    // ===== STATE 
    const [uploadImage,setUploadImage] = useState()
    const [personalInfoValue,setPersonalInfoValue] = useState({fullName:personalInfoSelector.full_name,email:personalInfoSelector.email,phone:personalInfoSelector.phone})
    const [passwordValue,setPasswordValue] = useState({currentPassword:passwordSelector.password,newPassword:'',confirmPassword:''})
    const [sshKeyValue,setSshKeyValue] = useState(sshKeySelector.ssh_key)
    const [error,setError] = useState({
        fullName:false,
        email:false,
        phone:false,
        currentPassword:false,
        newPassword:false,
        confirmPassword:false,
        sshKey:false,
    })
    const [imgBase64, setImgBase64] = useState(false);

    // ===== METHODS

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const handleChangeImage = async (e)=>{
        const newImage = e.target.files
        setUploadImage(newImage[0])

        setImgBase64(await toBase64(e.target.files[0]));
    }


    const handleSubmitPersonalInfo = (e)=>{
        // console.log("e.target.name",e.target.name)
        // console.log("e.target.value",e.target.value)
        if(error.fullName || error.phone || error.email){
            console.log("SomeErrors",error)
            return
        }else{
            console.log("cool change Personal info")
        }
        dispatch(personalInfo({...personalInfoValue, full_name:personalInfoValue.fullName, phone:normalisePhone(personalInfoValue.phone)}))
    }

    const handleSubmitPassword = (e)=>{
        // console.log("e.target.name",e.target.name)
        // console.log("e.target.value",e.target.value)
        if(passwordValue.currentPassword != passwordSelector.password){
            console.log("current password must === old password")
            
            return
        }else if(passwordValue.newPassword !== passwordValue.confirmPassword){
            console.log("new password must === confirm password")
            return
        }else {
            console.log("cool change password")
        }
        // console.log("NEWPASS",{password:passwordValue.newPassword})
        dispatch(password({password:passwordValue.newPassword}))
        reset()
    }

    const handleSubmitSshKey = ()=>{
        if(error.sshKey){
            console.log("SomeErrors",error)
            return
        }else{
            console.log("cool change sshKey")
        }
        dispatch(sshKey({ssh_key:sshKeyValue}))
    }

    const handleChangePersonalInfo = (e)=>{
        validation(e.target)
        setPersonalInfoValue({...personalInfoValue, [e.target.name]:e.target.value})
    }
    const handleChangePassword = (e)=>{
        validation(e.target)
        setPasswordValue({...passwordValue, [e.target.name]:e.target.value})
    }

    const validation = (input)=>{
        if(input.value === ''){
            setError({...error,[input.name]:true})
        }else{
            setError({...error,[input.name]:false})
        }
    }

    const normalisePhone = (phone) =>{
        const country = phone.slice(0,3)
        const firstPiese = phone.slice(3,6)
        const secondPiese = phone.slice(6,10)

       return `(${country}) ${firstPiese}-${secondPiese}`
    }

    const reset =()=>{
        setPasswordValue({currentPassword:'',newPassword:'',confirmPassword:''})
    }


    // ====== EFFECTS 
    useEffect(()=>{
        setPersonalInfoValue({fullName:personalInfoSelector.full_name,email:personalInfoSelector.email,phone:personalInfoSelector.phone})

    },[personalInfoSelector])

    
    return (
        <div className="flex-content">
            <div className="content-body p-30 w-100 max-w-800 my-account-page">
                <h2 className="heading heading-h2 mb-8">MY ACCOUNT</h2>
                <p className="subheading opacity-50 mb-30 color-50">Change your profile and account settings</p>
                {/* =========================  photo block start ==================================== */}
                <div className="user-avatar-block">
                    <div className="user-avatar" style={{ backgroundImage: imgBase64 ? `url(${imgBase64})` : '', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        {!imgBase64 && <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.6666 46.6667V44.9167C46.6666 39.4398 42.2267 35 36.7499 35H19.2499C13.7731 35 9.33325 39.4398 9.33325 44.9167V46.6667" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <circle cx="28.0001" cy="16.3333" r="9.33333" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
                        </svg> }
                    </div>
                    <div className="upload-photo-group">
                        <label htmlFor="file">Upload Photo</label>
                        <input type="file" id="file" name="file" onChange={handleChangeImage}/>
                    </div>
                </div>
                {/* =========================  photo block end ======================================= */}
                {/* =========================  personal info block start ============================= */}
                <div className="d-flex flex-wrap justify-content-between align-items-center w-100">
                    <h4 className="heading heading-h4 mb-15 mr-15 ff-main">Personal Info</h4>
                    <a href="#" className="btn btn-primary btn--sm mb-15" onClick={handleSubmitPersonalInfo}>Save Changes</a>
                </div>
                <div className="row">
                    <div className="input-custom col-12 mb-15 col-sm-6">
                        <label className="input-custom__label">Full name</label>
                        <div className="input-custom__wrap-input">
                            <input className="input-custom__input" type="text" value={personalInfoValue.fullName} name='fullName' onInput={handleChangePersonalInfo}/>
                        </div>
                    </div>
                </div>
                <div className="row border-bottom-30">
                    <div className="input-custom col-12 col-sm-6 mb-sm-15">
                        <label className="input-custom__label">Email address</label>
                        <div className="input-custom__wrap-input">
                            <input className="input-custom__input" type="email" value={personalInfoValue.email} name='email' onChange={handleChangePersonalInfo}/>
                        </div>
                    </div>
                    <div className="input-custom col-12 col-sm-6 mb-sm-15">
                        <label className="input-custom__label">Phone number</label>
                        <div className="input-custom__wrap-input">
                            {/* <input className="input-custom__input" type="phone" value={personalInfoValue.phone} name='phone' onChange={handleChangePersonalInfo}/> */}
                            <input className="input-custom__input" type="tel" value={personalInfoValue.phone} name='phone' onChange={handleChangePersonalInfo}/>
                        </div>
                    </div>
                </div>
                {/* ============================  personal info block end ============================= */}
                {/* ============================  password block start ============================= */}
                <div className="d-flex flex-wrap justify-content-between align-items-center w-100">
                    <h4 className="heading heading-h4 mb-15 mr-15 ff-main">Change password</h4>
                    <a href="#" className="btn btn-primary btn--sm mb-15 nowrap" onClick={handleSubmitPassword}>Update Password</a>
                </div>
                <form className="row">
                    <div className="input-custom col-12 col-sm-6 mb-15">
                        <label className="input-custom__label">Current password</label>
                        <div className="input-custom__wrap-input">
                            <input className="input-custom__input" 
                                type="password"
                                autoComplete='off' 
                                value={passwordValue.currentPassword} 
                                name='currentPassword' 
                                onChange={handleChangePassword}
                            />
                        </div>
                    </div>
                </form>
                <form className="row border-bottom-30" ref={newPassForm}>
                    <div className="input-custom col-12 col-sm-6 mb-sm-15">
                        <label className="input-custom__label">New password</label>
                        <div className="input-custom__wrap-input">
                            <input className="input-custom__input"
                                type="password"
                                autoComplete='off'
                                value={passwordValue.newPassword} 
                                name='newPassword' 
                                onChange={handleChangePassword}
                            />
                        </div>
                    </div>
                    <div className="input-custom col-12 col-sm-6 mb-sm-15">
                        <label className="input-custom__label">Confirm new password</label>
                        <div className="input-custom__wrap-input">
                            <input className="input-custom__input" 
                                type="password" 
                                autoComplete='off'
                                value={passwordValue.confirmPassword} 
                                name='confirmPassword' 
                                onChange={handleChangePassword}
                            />
                        </div>
                    </div>
                </form>
                {/* ============================  password block end ============================= */}
                {/* ============================  ssh key block start ============================= */}
                <div className="d-flex flex-wrap justify-content-between align-items-center w-100">
                        <h4 className="heading heading-h4 mb-15 ff-main">Change SSH Key</h4>
                        <a href="#" className="btn btn-primary btn--sm mb-15" onClick={handleSubmitSshKey}>Save Changes</a>
                </div>
                <div className="row">
                    <div className="input-custom col-12 col-sm-6 mb-sm-15">
                        <label className="input-custom__label">SSH Key</label>
                        <div className="input-custom__wrap-input">
                            <input ref={sshInput} className="input-custom__input" type="text" value={sshKeyValue} onChange={(e)=>setSshKeyValue(e.currentTarget.value)}/>
                        </div>
                    </div>
                </div>
                {/* ============================  ssh key block end ============================= */}
            </div>
        </div>
    )
}

export default MyAccount