import React, { useState } from 'react';

const preferences = ['business', 'health', 'science', 'sports', 'technology']
const PreferenceSelector = ({ setPreferences, setChoosingPreferences }) => {
  const [selectedPreferences, setSelectedPreferences] = useState([] as string[]);


  const handleTogglePreference = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences((prevSelected) => prevSelected.filter((p) => p !== preference));
    } else if (selectedPreferences.length < 3) {
      setSelectedPreferences((prevSelected) => [...prevSelected, preference]);
    }
  };

  const handleSubmit = () => {
    setPreferences(selectedPreferences);
    setChoosingPreferences(false);
  };

  const handleNotNow = () => {
    setPreferences([]);
    setChoosingPreferences(false);
  };

  return (
    <div className="font-bold mb-4 fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800">
      <div className=" bg-[var(--background)] p-8 w-full md:w-[75vw]">
        <div className="text-active">
            <h3 className="mb-4">Hi 👋, we have some news for you 🤭 </h3>
            <h5>Select up to 3 Preferences </h5>
        </div >
        <div className='text-gray-500 flex justify-center mt-[5vw] md:mt-[2vw]'>   
            <ul className='w-[95%] md:w-[40%]'>
            {preferences.map((preference) => (
                <li className={`cursor-pointer inline-block mr-4 ${selectedPreferences.includes(preference) ? 'text-active' : 'text-gray-500'}`}
                    key={preference}
                    onClick={() => handleTogglePreference(preference)}
                >
                    {preference}
                </li>
            ))}
            </ul>
        </div>
        <div className="flex justify-center gap-[4vw] mt-[8vw] md:mt-[4vw]">
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
          <button onClick={handleNotNow} className="text-gray-500">
            Not Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferenceSelector;
