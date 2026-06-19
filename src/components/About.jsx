import React from 'react'

export default function About(props) {
    const myStyle = {
        backgroundColor: props.mode === "dark" ? "#1e293b" : "white",
        color: props.mode === "dark" ? "white" : "black"
      };

  return (
    <>
    <div className="container">
        <h3 className='my-4'>About Us</h3>

        <div className="accordion my-2" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    About TextForge
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextForge AI</strong> is an intelligent text productivity platform that combines powerful text-processing utilities with AI-driven assistance. It enables users to transform, analyze, refine, and generate content through a clean, responsive, and user-friendly interface. Whether you're drafting content, improving writing quality, or extracting insights from text, TextForge helps streamline the entire workflow.
                    </div>
                </div>
            </div>

            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Why Use TextForge?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    • Instantly transform text with Uppercase, Lowercase, Inverse Case, and Capitalization tools.<br/>
                    • Analyze content using real-time word, character, sentence, paragraph, reading-time, and speaking-time statistics.<br/>
                    • Improve writing with AI-powered grammar correction, professional rewriting, casual rewriting, and simplified explanations.<br/>
                    • Extract key information quickly through intelligent summarization and keyword generation.<br/>
                    • Interact with text using custom AI prompts for flexible and personalized content generation.<br/>
                    • Enjoy a responsive experience with modern UI design and Dark/Light Mode support.
                    </div>
                </div>
            </div>

            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    Built With
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    TextForge AI is built using <strong>React.js</strong>, <strong>JavaScript (ES6+)</strong>, <strong>Bootstrap 5</strong>, and modern component-based architecture principles. AI capabilities are powered by the <strong>Groq API</strong> using large language models, enabling fast and efficient text generation, rewriting, summarization, and analysis. The application follows a modular structure with reusable components, utility modules, and service-based API integration.
                    </div>
                </div>
            </div>

            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={myStyle}>
                    Privacy & Security
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    User privacy is a core priority. Text entered into TextForge is processed only to perform the requested operation. AI-powered features securely communicate with external AI services to generate responses, and no user content is intentionally stored, shared, or retained beyond the active session. Sensitive information should still be handled responsibly when using any cloud-based AI service.
                    </div>
                </div>
            </div>

            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={myStyle}>
                    Performance
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    TextForge is optimized for speed, responsiveness, and usability. Traditional text transformations and analytics are processed instantly on the client side, while AI-powered operations leverage Groq's high-performance inference infrastructure to deliver low-latency responses and a seamless user experience across devices.
                    </div>
                </div>
            </div>

            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={myStyle}>
                    Developer Information
                </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Developed by <strong>Naman Jain</strong>, a Computer Science student at IIIT Sonepat with a passion for software engineering, artificial intelligence, and full-stack development. This project showcases practical implementation of React.js, API integration, responsive UI design, state management, routing, and AI-powered productivity features.
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
