import React, { useEffect, useState } from 'react';
import yaml from 'js-yaml';

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch('./links.yaml');
        const text = await response.text();
        const parsedLinks = yaml.load(text);
        setLinks(parsedLinks);
      } catch (error) {
        console.error('Error loading links:', error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <div>
      {links.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          {links.map((link, index) => (
            <div>
              <h1>{link.title}</h1>
              <iframe
                key={index}
                title={link.title}
                height="500px"
                width="1000px"
                src={link.link}
                allowFullScreen
              ></iframe>
              <br/>
            </div>
        ))}
        </div>
      )}
    </div>
  );
};

export default App;