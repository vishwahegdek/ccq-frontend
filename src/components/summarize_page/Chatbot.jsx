
// import React, { useState, useEffect } from 'react';
// import './Chatbot.css';

// function Header() {
//     return (
//         <header className="chatbot-header">
//             <div className="chatbot-logo-container">
//                 <img 
//                     src="https://dashboard.codeparrot.ai/api/assets/Z0liNINVQVcR8-QJ" 
//                     alt="Logo" 
//                     className="chatbot-logo"
//                 />
//                 <h1 className="chatbot-title">Core-Clip Query</h1>
//             </div>
//         </header>
//     );
// }

// const VideoSection = () => {
//   return (
//     <div className="video-section">
//       <div className="play-button">
//         <div className="play-icon"></div>
//       </div>
//     </div>
//   );
// };

// const SummarySection = () => {
//   const [summary, setSummary] = useState('');
  
//   // Dummy summary data
//   const summaryList = [
//     "AI and the Future of Work is a talk by Dr. Marie Curie, an expert in AI ethics, during the 2023 Tech for Good Conference.",
//     "She discusses the challenges and opportunities that AI presents for the labor market.",
//     "Key points include the importance of reskilling programs, AI's potential to enhance human creativity, and the ethical implications of automation.",
//     "Dr. Curie highlights the role of government, industry, and civil society in shaping a future where AI serves the common good."
//   ];

//   // Simulate fetching summary from backend
//   useEffect(() => {
//     const fetchSummary = async () => {
//       // Simulate a delay as if calling an API
//       setTimeout(() => {
//         const fetchedSummary = summaryList.join(' ');
//         setSummary(fetchedSummary);
//       }, 1000); // Simulates 1 second fetch delay
//     };

//     fetchSummary();
//   }, []);

//   return (
//     <div className="summary-section">
//       <h1 className="summary-title">Summary</h1>
//       {summary ? (
//         <p className="summary-text">{summary}</p>
//       ) : (
//         <p className="summary-loading">Loading summary...</p>
//       )}
//     </div>
//   );
// };

// const ChatBotSection = () => {
//   const [userInput, setUserInput] = useState('');
//   const [messages, setMessages] = useState([
//     {
//       user: 'You',
//       message: 'What are the key points of the talk?',
//       senderImg: 'https://dashboard.codeparrot.ai/api/assets/Z0liNINVQVcR8-QK',
//     },
//     {
//       user: 'Core-Clip Query',
//       message: 'Dr. Marie Curie emphasizes the importance of proactive policies to mitigate job displacement and create new avenues for meaningful work. She underscores the role of reskilling programs, the potential for AI to enhance human creativity and problem-solving, and the ethical implications of automation. Dr. Curie also highlights the need for collaboration among government, industry, and civil society to shape a future where AI serves the common good.',
//       senderImg: 'https://dashboard.codeparrot.ai/api/assets/Z0liNINVQVcR8-QL',
//     },
//     {
//       user: 'You',
//       message: 'What are the implications of AI on the labor market?',
//       senderImg: 'https://dashboard.codeparrot.ai/api/assets/Z0liNYNVQVcR8-QM',
//     },
//     {
//       user: 'Core-Clip Query',
//       message: 'AI presents both challenges and opportunities for the labor market. Automation may lead to job displacement, particularly for routine tasks that can be easily performed by AI systems. However, AI can also create new job categories and enhance human productivity in complex problem-solving and creative tasks. The implications of AI on the labor market depend on various factors such as the pace of technological advancement, workforce reskilling efforts, and ethical considerations around AI deployment.',
//       senderImg: 'https://dashboard.codeparrot.ai/api/assets/Z0liNYNVQVcR8-QN',
//     },
//   ]);

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSendClick = () => {
//     if (userInput.trim() === '') return;

//     const newMessage = {
//       user: 'You',
//       message: userInput,
//       senderImg: 'https://dashboard.codeparrot.ai/api/assets/Z0liNINVQVcR8-QK',
//     };

//     setMessages([...messages, newMessage]);
//     setUserInput('');
//   };

//   return (
//     <div className="chatbot-chatbot-section">
//       <h2>CCQ Chat Bot</h2>
//       <div className="chatbot-messages">
//         {messages.map((msg, index) => (
//           <div key={index} className="chatbot-message">
//             <img src={msg.senderImg} alt={msg.user} width="40" height="40" />
//             <div className="chatbot-message-content">
//               <strong>{msg.user}</strong>
//               <p>{msg.message}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="chatbot-chat-input">
//         <input 
//           type="text" 
//           placeholder="Ask me anything..." 
//           value={userInput} 
//           onChange={handleInputChange} 
//         />
//         <button onClick={handleSendClick}>Send</button>
//       </div>
//     </div>
//   );
// };

// function Chatbot() {
//   return (
//     <div className="chatbot">
//       <Header />
//       <div className="chatbot-main-content">
//         <div className="chatbot-left-section">
//           <VideoSection />
//           <SummarySection />
//         </div>
//         <div className="chatbot-right-section">
//           <ChatBotSection />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chatbot;
import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import axios from 'axios';


function Header() {
    return (
        <header className="chatbot-header">
            <div className="chatbot-logo-container">
                <img 
                    src="https://dashboard.codeparrot.ai/api/assets/Z0liNINVQVcR8-QJ" 
                    alt="Logo" 
                    className="chatbot-logo"
                />
                <h1 className="chatbot-title">Core-Clip Query</h1>
            </div>
        </header>
    );
}

// Video Section with YouTube-like Format
const VideoSection = () => {
  const videoContainerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '800px',
    aspectRatio: '16/9',
    margin: '0 auto',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>Watch the Talk</h2>
      <div style={videoContainerStyle}>
        {/* Replace the src below with your YouTube video link */}
        <iframe 
          style={iframeStyle}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const SummarySection = () => {
  // const [summary, setSummary] = useState('');
  
  // // Dummy summary data
  // const summaryList = [
  //   "AI and the Future of Work is a talk by Dr. Marie Curie, an expert in AI ethics, during the 2023 Tech for Good Conference.",
  //   "She discusses the challenges and opportunities that AI presents for the labor market.",
  //   "Key points include the importance of reskilling programs, AI's potential to enhance human creativity, and the ethical implications of automation.",
  //   "Dr. Curie highlights the role of government, industry, and civil society in shaping a future where AI serves the common good."
  // ];

  // // Simulate fetching summary from backend
  // useEffect(() => {
  //   const fetchSummary = async () => {
  //     setTimeout(() => {
  //       const fetchedSummary = summaryList.join(' ');
  //       setSummary(fetchedSummary);
  //     }, 1000); // Simulates 1 second fetch delay
  //   };

  //   fetchSummary();
  // }, []);

 
  const [youtubeLink, setYouTubeLink] = useState('');
  const [summary, setSummary] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedLink = localStorage.getItem('youtubeLink');
    if (storedLink) {
      setYouTubeLink(storedLink);
      callApi(storedLink); // Call the API with the link
    }
  }, []);

  const callApi = async (link) => {
    setLoading(true); // Show loading spinner or message
    setError(''); // Clear previous errors

    try {
      const response = await axios.post('http://192.168.29.250:8000/api/submit-link', {
        video_link: link, // Payload for the API
      });

      // Extract data from response
      setSummary(response.data.summary);
      setVideoUrl(response.data['video-url']);
    } catch (err) {
      console.error('API call failed:', err);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    <div className="summary-section">
      <h1 className="summary-title">Summary</h1>
      {summary ? (
        <p className="summary-text">{summary}</p>
      ) : (
        <p className="summary-loading">Loading summary...</p>
      )}
    </div>
  );
};

const ChatBotSection = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    {
      user: 'You',
      message: 'What are the key points of the talk?',
      senderImg: 'https://dashboard.codeparrot.ai/api/assets/Z0liNINVQVcR8-QK',
    },
    {
      user: 'Core-Clip Query',
      message: 'Dr. Marie Curie emphasizes the importance of proactive policies to mitigate job displacement and create new avenues for meaningful work. She underscores the role of reskilling programs, the potential for AI to enhance human creativity and problem-solving, and the ethical implications of automation. Dr. Curie also highlights the need for collaboration among government, industry, and civil society to shape a future where AI serves the common good.',
      senderImg: 'https://dashboard.codeparrot.ai/api/assets/Z0liNINVQVcR8-QL',
    },
    {
      user: 'You',
      message: 'What are the implications of AI on the labor market?',
      senderImg: 'https://dashboard.codeparrot.ai/api/assets/Z0liNYNVQVcR8-QM',
    },
    {
      user: 'Core-Clip Query',
      message: 'AI presents both challenges and opportunities for the labor market. Automation may lead to job displacement, particularly for routine tasks that can be easily performed by AI systems. However, AI can also create new job categories and enhance human productivity in complex problem-solving and creative tasks. The implications of AI on the labor market depend on various factors such as the pace of technological advancement, workforce reskilling efforts, and ethical considerations around AI deployment.',
      senderImg: 'https://dashboard.codeparrot.ai/api/assets/Z0liNYNVQVcR8-QN',
    },
  ]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendClick = () => {
    if (userInput.trim() === '') return;

    const newMessage = {
      user: 'You',
      message: userInput,
      senderImg: 'https://dashboard.codeparrot.ai/api/assets/Z0liNINVQVcR8-QK',
    };

    setMessages([...messages, newMessage]);
    setUserInput('');
  };

  return (
    <div className="chatbot-chatbot-section">
      <h2>CCQ Chat Bot</h2>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chatbot-message">
            <img src={msg.senderImg} alt={msg.user} width="40" height="40" />
            <div className="chatbot-message-content">
              <strong>{msg.user}</strong>
              <p>{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="chatbot-chat-input">
        <input 
          type="text" 
          placeholder="Ask me anything..." 
          value={userInput} 
          onChange={handleInputChange} 
        />
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
};

function Chatbot() {
  return (
    <div className="chatbot">
      <Header />
      <div className="chatbot-main-content">
        <div className="chatbot-left-section">
          <VideoSection />
          <SummarySection />
        </div>
        <div className="chatbot-right-section">
          <ChatBotSection />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
