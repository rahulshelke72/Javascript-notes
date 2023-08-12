const fetchTabs = () => {
    return fetch('https://course-api.com/react-tabs-project')
    .then((resp) => 
      resp.json()
    );
};

export default fetchTabs;