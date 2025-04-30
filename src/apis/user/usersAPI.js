import axios from "axios";
//---Registration---
export const registerAPI = async(userData) =>{
    const response = await axios.post('http://localhost:5000/api/tut/users/register',{
        email: userData?.email,
        password: userData?.password,
        username: userData?.username,
        role: userData?.role,
    },
    {
        withCredentials: true,
    }
);
return response?.data;
};

//---Login---
export const loginAPI = async(userData) =>{
    const response = await axios.post('http://localhost:5000/api/tut/users/login',{
        email: userData?.email,
        password: userData?.password,
        role: userData?.role,
    },
    {
        withCredentials: true,
    }
);
return response?.data;
};

//---Check Auth---
export const checkUserAuthStatusAPI = async() =>{
    const response = await axios.get('http://localhost:5000/api/tut/users/auth/check',
    {
        withCredentials: true,
    }
);
return response?.data;
};

//---Tutor Registration---
export const registerTutorAPI = async(userData) => {
    const response = await axios.post('http://localhost:5000/api/tut/users/registertutor',
        {
            name: userData?.name,
            email: userData?.email,
            phone: userData?.phone,
            location: userData?.location,
            subject: userData?.subject,
        },
        {
            withCredentials: true
        },
    );
    return response?.data;
};

//---Logout---
export const logoutAPI = async() =>{
    const response = await axios.post('http://localhost:5000/api/tut/users/logout',
    {},
    {
        withCredentials: true,
    }
);
return response?.data;
};