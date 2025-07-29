// src/FeedbackForm.js

import React, { useState } from 'react';
import './FeedbackForm.css';

const initialFormData = {
  name: '',
  travel: '',
  lohagad: '',
  weather: '',
  food: '',
  pawana: '',
  sleep: '',
  games: '',
  party: '',
  maps: '',
  verdict: '',
  sequel: ''
};

function FeedbackForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions([...submissions, { ...formData, id: Date.now() }]);
    setFormData(initialFormData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Your Epic Adventure Debrief! 🚀</h1>
        <p className="intro-text">
          The credits have rolled, the dust has settled... now spill the beans!
        </p>

        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Who's filling this out?"
          required
        />

        <label htmlFor="travel">
          Let's rate our travel. But let's be real, the main event was the Lohagad ghat.
        </label>
        <textarea
          id="travel"
          name="travel"
          value={formData.travel}
          onChange={handleChange}
          placeholder="What's your honest opinion on the journey?"
        />

        <label htmlFor="lohagad">
          Time for a post-trek diagnosis. How would you rate the epic Lohagad trek, and on a scale from 'Ready for another!' to 'My legs have officially filed for divorce from my body,' what's the current status?
        </label>
        <textarea
          id="lohagad"
          name="lohagad"
          value={formData.lohagad}
          onChange={handleChange}
          placeholder="How are those legs feeling?"
        />

        <label htmlFor="weather">
          What did you think of the weather? And about that rain—did it feel like a gentle monsoon shower, or more like a cloud decided to personally dump its entire contents directly on top of us?
        </label>
        <textarea
          id="weather"
          name="weather"
          value={formData.weather}
          onChange={handleChange}
          placeholder="How was the shower?"
        />

        <label htmlFor="food">
          Time for your food critic review. What were your thoughts on the dinner, with a special, detailed analysis on the structural integrity and emotional impact of that magnificent Pizza Hut pizza?
        </label>
        <textarea
          id="food"
          name="food"
          value={formData.food}
          onChange={handleChange}
          placeholder="Give me that delicious review."
        />

        <label htmlFor="pawana">
          What did you think of Pawana Lake
        </label>
        <textarea
          id="pawana"
          name="pawana"
          value={formData.pawana}
          onChange={handleChange}
          placeholder="Serene, stunning, or just... wet?"
        />

        <label htmlFor="sleep">
          How was your sleep during the trip?
        </label>
        <textarea
          id="sleep"
          name="sleep"
          value={formData.sleep}
          onChange={handleChange}
          placeholder="Quality Zs or a series of naps?"
        />

        <label htmlFor="games">
          How fun were our games overall, and more importantly, where does my legendary comeback rank in the history of great sporting upsets? 🏆
        </label>
        <textarea
          id="games"
          name="games"
          value={formData.games}
          onChange={handleChange}
          placeholder="Be honest, but also... be kind."
        />

        <label htmlFor="party">
          So, about that party you owe me... 😉
        </label>
        <textarea
          id="party"
          name="party"
          value={formData.party}
          onChange={handleChange}
          placeholder="Don't think I forgot!"
        />

        <label htmlFor="maps">
          Let's talk about our trusty navigator, Google Maps. Was it the MVP (Most Valuable Program) of our trip, or should it be fired for 'creative map-making'?
        </label>
        <textarea
          id="maps"
          name="maps"
          value={formData.maps}
          onChange={handleChange}
          placeholder="Hero or villain?"
        />

        <label htmlFor="verdict">
          And now for the grand finale. Putting it all together—the epic views, the questionable roads, the non-stop laughter, the soggy clothes, and that legendary pizza—what's your final verdict on our adventure?
        </label>
        <textarea
          id="verdict"
          name="verdict"
          value={formData.verdict}
          onChange={handleChange}
          placeholder="The final word..."
        />

        <label htmlFor="sequel">
          The credits have rolled on our last adventure... but I'm sensing a blockbuster sequel. So, the big question is: Are we ready for 'The Next Trip'?
        </label>
        <textarea
          id="sequel"
          name="sequel"
          value={formData.sequel}
          onChange={handleChange}
          placeholder="Yes or... heck yes?"
        />

        <button type="submit">Submit Your Debrief!</button>
      </form>

      <div className="submissions-container">
        <h2>Submitted Debriefs 📝</h2>
        {submissions.length === 0 ? (
          <p>No feedback submitted yet. Be the first!</p>
        ) : (
          submissions.map((sub) => (
            <div key={sub.id} className="submission-card">
              <h3>Debrief by: {sub.name}</h3>
              {Object.keys(sub).map(key => {
                if (key !== 'name' && key !== 'id' && sub[key]) {
                  const titleMap = {
                    travel: "Travel & Ghats 🚗",
                    lohagad: "Lohagad Trek Diagnosis ⛰️",
                    weather: "Weather Report ☔",
                    food: "Food & Pizza Analysis 🍕",
                    pawana: "Pawana Lake Vibes 🏞️",
                    sleep: "Sleep Report 😴",
                    games: "Games & Upsets 🏆",
                    party: "About That Party... 😉",
                    maps: "Google Maps MVP? 🗺️",
                    verdict: "The Grand Finale Verdict 🌟",
                    sequel: "Sequel Status? 🎬"
                  };
                  return (
                    <div key={key} className="submission-item">
                      <strong>{titleMap[key]}:</strong>
                      <p>{sub[key]}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FeedbackForm;
