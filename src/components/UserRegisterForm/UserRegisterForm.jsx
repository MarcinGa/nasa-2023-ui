import React, { useState, useEffect } from 'react';
import './UserRegisterForm.scss';
import { useAuth } from '../AuthContext/AuthContext'; // Importuj hook useAuth

function UserForm() {
    const { token, login } = useAuth();
    
    const [academicTitle, setAcademicTitle] = useState([]);
    const [countries, setCountries] = useState([]);
    const [cities, setCity] = useState([]);
    const [education, setEducation] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [fieldsOfScience, setFieldsOfScience] = useState([]);
    const [newFieldsOfScience, setNewFieldsOfScience] = useState('');
    const [fieldsOfScienceEntities, setFieldsOfScienceEntities] = useState([]);

    // FIELDS
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [userCities, setUserCity] = useState("");
    const [userEducation, setUserEducation] = useState([]);
    const [userAcademicTitle, setUserAcademicTitle] = useState([]);
    const [userWorkExperience, setUserWorkExperience] = useState("");
    const [userLanguage, setUserLanguage] = useState([]);
    const [userDescription, setUserDescription] = useState('');
    const [moreUserFieldsOfScience, setMoreUserFieldsOfScience] = useState([]);
    const [dswe, changeDswe] = useState([]);

    useEffect(() => {
        async function fetchAcademicTitles() {
            try {
                const response = await fetch('https://nasa-2023-server.onrender.com/user/config/academic-title', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setAcademicTitle(data.message[0]);
                } else {
                    throw new Error('Nieudane żądanie');
                }
            } catch (error) {
                console.error(error);
            }
        }

        async function fetchCountries() {
            try {
                const response = await fetch('https://nasa-2023-server.onrender.com/user/config/country', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setCountries(data.message[0]);
                } else {
                    throw new Error('Nieudane żądanie');
                }
            } catch (error) {
                console.error(error);
            }
        }

        async function fetchCities() {
            try {
                const response = await fetch('https://nasa-2023-server.onrender.com/user/config/city', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setCity(data.message[0]);
                } else {
                    throw new Error('Nieudane żądanie');
                }
            } catch (error) {
                console.error(error);
            }
        }

        async function fetchEducation() {
            try {
                const response = await fetch('https://nasa-2023-server.onrender.com/user/config/education', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setEducation(data.message[0]);
                } else {
                    throw new Error('Nieudane żądanie');
                }
            } catch (error) {
                console.error(error);
            }
        }

        async function fetchLanguages() {
            try {
                const response = await fetch('https://nasa-2023-server.onrender.com/user/config/languages', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setLanguages(data.message[0]);
                } else {
                    throw new Error('Nieudane żądanie');
                }
            } catch (error) {
                console.error(error);
            }
        }

        async function fetchFieldsOfScience() {
            try {
                const response = await fetch('https://nasa-2023-server.onrender.com/user/config/fields-of-science', { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setFieldsOfScience(data.message[0]);
                } else {
                    throw new Error('Nieudane żądanie');
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchAcademicTitles();
        fetchCountries();
        fetchCities();
        fetchEducation();
        fetchLanguages();
        fetchFieldsOfScience();
    }, []);

    useEffect(() => {
        async function fetchFieldsOfScience() {
            try {
                const response = await fetch(`https://nasa-2023-server.onrender.com/user/config/fields-of-science/${newFieldsOfScience}`, { method: 'GET' });
                if (response.status === 200) {
                    const data = await response.json();
                    setFieldsOfScienceEntities(data.message[0]);
                } else {
                    throw new Error('Nieudane żądanie');
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchFieldsOfScience();
    }, [newFieldsOfScience])

    function getAcademicTitles() {
        let titles = [];
        for(const property in academicTitle) {
            titles.push(<option key={property}>{property}</option>);
        }
        return titles;
    }

    function getCountries() {
        let countriesTab = [];
        for(const property in countries) {
            countriesTab.push(<option value={property} key={property}>{property}</option>);
        }
        return countriesTab;
    }

    function getCities() {
        let citiesTab = [];
        for(const property in cities) {
            citiesTab.push(<option value={cities[property]} key={property}>{cities[property]}</option>);
        }
        return citiesTab;
    }

    function getEducation() {
        let educationTab = [];
        for(const property in education) {
            educationTab.push(<option value={property} key={property}>{property}</option>);
        }
        return educationTab;
    }

    function getLanguages() {
        let languagesTab = [];
        for(const property in languages) {
            languagesTab.push(<option value={property} key={property}>{property}</option>);
        }
        return languagesTab;
    }

    function getFieldsOfScience() {
        let fieldsOfScienceTab = [];
        for(const property in fieldsOfScience) {
            fieldsOfScienceTab.push(<option value={fieldsOfScience[property]} key={property}>{fieldsOfScience[property]}</option>);
        }
        return fieldsOfScienceTab;
    }

    function getFieldsOfScienceEntities() {
        let newFieldsOfScienceTab = [];
        for(const property in fieldsOfScienceEntities) {
            newFieldsOfScienceTab.push(<option value={fieldsOfScienceEntities[property]} key={property}>{fieldsOfScienceEntities[property]}</option>);
        }
        return newFieldsOfScienceTab;
    }

    function checkFieldsOfScience(e) {
        let fieldsOfScience = e.target.value;
        // setUserEducation(e.target.value);
        setMoreUserFieldsOfScience(e.target.value);
        setNewFieldsOfScience(fieldsOfScience.replace(/\s+/g, '-').toLowerCase());
    }

    function addDswe(e) {
        let options = e.target.options;
        let value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
            value.push(options[i].value);
            }
        }
        changeDswe(value);
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('https://nasa-2023-server.onrender.com/user/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // Dodaj token do nagłówka żądania
                },
                body: JSON.stringify({
                    username: name,
                    password: password,
                    email: email,
                    phoneNumber: phone,
                    country: country,
                    city: userCities,
                    education: userEducation,
                    fieldsOfScience: moreUserFieldsOfScience,
                    academicTitle: userAcademicTitle,
                    workExperience: userWorkExperience,
                    primaryLanguage: userLanguage,
                    description: userDescription
                })
            });
            let resJson = await res.json(); // Parse the response as JSON
            if (res.status === 201) {
                // Access the parsed JSON data
                console.log(JSON.stringify(resJson.token));
                // localStorage.setItem("JWT", JSON.stringify(resJson.token)); // Assuming 'token' is a property in the JSON response
                login(resJson.token);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return <>
        <div className="container">
            <form className="user-register-form" onSubmit={handleSubmit}>
                <label htmlFor="username">User Name</label>
                <input type="text" name="username" id="username" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="phoneNumber">Phone number</label>
                <input type="text" name="phoneNumber" id="phoneNumber" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label htmlFor="countries">Country</label>
                <select name="countries" id="countries" defaultValue="Poland" onChange={(e) => setCountry(e.target.value)}>
                    {getCountries()}
                </select>
                <label htmlFor="cities">City</label>
                <select name="cities" id="cities" onChange={(e) => setUserCity(e.target.value)}>
                    {getCities()}
                </select>
                <label htmlFor="education">
                <select name="education" id="education" multiple onChange={(e) => setUserEducation(e.target.value)}>
                    {getEducation()};
                </select>
                </label>
                <label htmlFor="fieldOfScience">Scientific field</label>
                {/* <select name="fieldOfScience" id="fieldOfScience" multiple onChange={(e) => setUserEducation(e.target.value)}> */}
                <select name="fieldOfScience" id="fieldOfScience" multiple onChange={(e) => checkFieldsOfScience(e)}>
                    {getFieldsOfScience()}
                </select>
                    {fieldsOfScienceEntities == {} ?
                    ''
                    : 
                    <>
                        <label htmlFor="fieldOfScienceEntity">Fields of science entity</label>
                        <select name="fieldOfScienceEntities" id="fieldOfScienceEntity" onChange={(e) => addDswe(e)}>
                            {getFieldsOfScienceEntities()}
                        </select>
                    </>
                }
                <label htmlFor="academicTitles">Academic Title</label>
                <select name="academicTitles" id="academicTitles" multiple defaultValue={["Bachelor"]} onChange={(e) => setUserAcademicTitle(e.target.value)}>
                    {getAcademicTitles()}
                </select>
                <label htmlFor="workExperience">Work experience</label>
                <input type="number" name="workExperience" id="workExperience" onChange={(e) => setUserWorkExperience(parseInt(e.target.value))}/>
                <label htmlFor="primaryLanguage">Language</label>
                <select name="" id="primaryLanguage" defaultValue="Polish" onChange={(e) => setUserLanguage(e.target.value)}>
                    {getLanguages()}
                </select>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10" defaultValue={''} onChange={(e) => setUserDescription(e.target.value)}></textarea>
                <button>Send</button>
            </form>
        </div>
    </>
}

export default UserForm;