import React, {useState, useEffect } from 'react';
import './CreateProjectForm.scss';
import { useAuth } from '../AuthContext/AuthContext'; // Importuj hook useAuth

function CreateProjectForm() {
    const [user, setUser] = useState({});
    const { token } = useAuth();

    const [academicTitle, setAcademicTitle] = useState([]);
    const [countries, setCountries] = useState([]);
    const [cities, setCity] = useState([]);
    const [languages, setLanguages] = useState([]);

    // FIELDS
    const [progress, setProgress] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [userCities, setUserCity] = useState("");
    const [userEducation, setUserEducation] = useState([]);
    const [userAcademicTitle, setUserAcademicTitle] = useState([]);
    const [userLanguage, setUserLanguage] = useState([]);
    const [startDate, setStartDate] = useState([]);
    const [endDate, setEndDate] = useState([]);
    const [projectDescription, setProjectDescription] = useState('');


    useEffect(() => {        
        async function fetchUser() {
            try {
                const response = await fetch('https://nasa-2023-server.onrender.com/user/users/65217eff4d6d8a38cd4b7c6f', { 
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer ${token}` // Dodaj token do nagłówka żądania
                    },
                });
                if (response.status === 200) {
                    const data = await response.json();
                    console.log(data);
                    setUser(data);
                } else {
                    throw new Error('Nieudane żądanie');
                }
            } catch (error) {
                console.error(error);
            }
        }

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

        fetchAcademicTitles();
        fetchCountries();
        fetchCities()
        fetchUser();
        fetchLanguages();
    }, []);

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

    function getLanguages() {
        let languagesTab = [];
        for(const property in languages) {
            languagesTab.push(<option value={property} key={property}>{property}</option>);
        }
        return languagesTab;
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('https://nasa-2023-server.onrender.com/post/create', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    status: progress,
                    placeWhereProjectTakePlace: email,
                    placeWhereUserCanParticipateInProject: phone,
                    projectStartingDate: startDate,
                    projectEndingDate: endDate,
                    projectDescription: userEducation,
                    personalDescription: userAcademicTitle,
                })
            });
            let resJson = await res.json(); // Parse the response as JSON
            if (res.status === 201) {
                // Access the parsed JSON data
                // console.log(JSON.stringify(resJson.token));
                // localStorage.setItem("JWT", JSON.stringify(resJson.token)); // Assuming 'token' is a property in the JSON response
                // login(resJson.token);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return <>
        <section className="create-project">
            <div className="container">
                <div className="create-project-inner">
                    <h1>Create Project</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="first-section">
                            <label htmlFor="">Progress</label>
                            <div><input type="radio" name="progress" value="not started" onChange={(e) => setProgress(e.target.value)} /> not started</div>
                            <div><input type="radio" name="progress" value="in progress" onChange={(e) => setProgress(e.target.value)}/> in progress</div>
                            <div><input type="radio" name="progress" value="completed" onChange={(e) => setProgress(e.target.value)}/> completed</div>
                        </div>
                        <div className="second-section">
                            <label htmlFor="title">Title of project</label>
                            <input type="text" id="title" onChange={(e) => setTitle(e.target.value)}/>
                            <label htmlFor="author">Author</label>
                            <input type="text" id="author" value={user.username} onChange={(e) => setAuthor(e.target.value)}/>
                            <label htmlFor="projectDescription">Project description</label>
                            <textarea name="projectDescription" id="projectDescription" cols="30" rows="10" defaultValue={''} onChange={(e) => setProjectDescription(e.target.value)}></textarea>
                        </div>
                        <div className="third-section flexed">
                            <div className="half">
                                Fields of science

                            </div>
                            <div className="half">

                            </div>
                        </div>
                        <div className="fourt-section">
                            <h2>Looking for</h2>
                            <label htmlFor="academicTitles">Academic Title</label>
                            <select name="academicTitles" id="academicTitles" multiple defaultValue={["Bachelor"]} onChange={(e) => setUserAcademicTitle(e.target.value)}>
                                {getAcademicTitles()}
                            </select>
                            <label htmlFor="countries">Country</label>
                            <select name="countries" id="countries" defaultValue="Poland" onChange={(e) => setCountry(e.target.value)}>
                                {getCountries()}
                            </select>
                            <label htmlFor="cities">City</label>
                            <select name="cities" id="cities" onChange={(e) => setUserCity(e.target.value)}>
                                {getCities()}
                            </select>
                            <label htmlFor="primaryLanguage">Language</label>
                            <select name="" id="primaryLanguage" defaultValue="Polish" onChange={(e) => setUserLanguage(e.target.value)}>
                                {getLanguages()}
                            </select>
                        </div>
                        <div className="fifth-section">
                            <h2>Date</h2>
                            <label htmlFor="">Start date: <input type="date" name="startDate" min={new Date().toJSON().slice(0, 10)} onChange={(e) => setStartDate(e.target.value)}/></label>
                            <label htmlFor="">Start date: <input type="date" name="endDate" min={new Date().toJSON().slice(0, 10)} onChange={(e) => setEndDate(e.target.value)}/></label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        
    </>
}

export default CreateProjectForm;