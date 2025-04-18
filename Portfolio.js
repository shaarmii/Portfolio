window.onload = function() {
    document.getElementById("b").onclick = function () {
        document.getElementById('h1').style.display = 'none';
        document.getElementById('h2').style.display = 'none';
        document.getElementById('h3').style.display = 'none';
        document.getElementById('visible').style.display = 'block';
    
        content.innerHTML = `
            <h2>About Me</h2>
            <p>
                I'm Shaarmi, a Computer Science student at Panimalar Engineering College </p> <p>with a passion for Machine Learning, Generative AI, and Web Development.</p>
                <p>I interned at Innomatics Research Lab where I worked on a Machine Learning Tutor Bot</p><p> and an Image Description App using Gemini LLM and LangChain.</p>
                <p>I've also built websites and predictive ML models for heart and kidney diseases, </p><p>and hold certifications in AI, Python, and Web Technologies.
            </p>
        `;
    };
    

    document.getElementById('home').onclick = function(){
        document.getElementById('h1').innerHTML="Shaarmi";
        document.getElementById('h2').innerHTML="Welcome to my portfolio";
        document.getElementById('h3').innerHTML="Machine Learning & Web Development Enthusiast";
    
        document.getElementById('h1').style.display = 'block';
        document.getElementById('h2').style.display = 'block';
        document.getElementById('h3').style.display = 'block';
        
        document.getElementById('visible').style.display = 'block';
        document.getElementById('content').innerHTML = ""; // Clear project section
    };
    

        const content = document.getElementById("content");
    
        document.getElementById("projects").onclick = function () {
            document.getElementById('h1').style.display='none';
            document.getElementById('h2').style.display='none';
    
            document.getElementById('h3').style.display='none';
            document.getElementById('visible').style.display = 'block';
            content.innerHTML = `
                <h2>Projects</h2>
                <div class="project">
                    <h3>Machine Learning Tutor Bot</h3>
                    <p>Built using Gemini LLM and LangChain to help users learn ML topics interactively.</p>
                </div>
                <div class="project">
                    <h3>GenAI Image Description App</h3>
                    <p>Describes uploaded images, identifies obstacles, and converts text to audio.</p>
                </div>
                <div class="project">
                    <h3>Resume Analyzer (Ollama LLM)</h3>
                    <p>Analyzes resumes using DeepSeek model to assist in shortlisting candidates.</p>
                </div>
                <div class="project">
                    <h3>Vehicle Parts Company Website</h3>
                    <p>Developed a full website using HTML, CSS, JS to showcase company products.</p>
                </div>
                <div class="project">
                    <h3>Disease Prediction Models</h3>
                    <p>Built ML models to predict heart and kidney diseases using patient data.</p>
                </div>
                <div class="project">
                    <h3>Pneumonia Detection (Patent)</h3>
                    <p>Used deep learning on X-ray images to automate pneumonia diagnosis.</p>
                </div>
            `;
        };

        // SKILLS section
document.getElementById("skills").onclick = function () {
    document.getElementById('h1').style.display = 'none';
    document.getElementById('h2').style.display = 'none';
    document.getElementById('h3').style.display = 'none';
    document.getElementById('visible').style.display = 'block';

    content.innerHTML = `
        <h2>Skills</h2>
        <ul>
            <li>Programming: Java, Python</li>
            <li>Web Development: HTML5, CSS3, JavaScript</li>
            <li>Machine Learning: Scikit-learn, Pandas, NumPy</li>
            <li>Generative AI: Gemini LLM, LangChain, Ollama</li>
            <li>Tools: GitHub, VS Code</li>
        </ul>
    `;
};

// EXPERIENCE section
document.getElementById("experience").onclick = function () {
    document.getElementById('h1').style.display = 'none';
    document.getElementById('h2').style.display = 'none';
    document.getElementById('h3').style.display = 'none';
    document.getElementById('visible').style.display = 'block';

    content.innerHTML = `
        <h2>Experience</h2>
        <div class="experience">
            <h3>Intern - Innomatics Research Lab</h3>
            <p>Worked on Generative AI projects like a ML tutor bot and an image description app .</p>
        </div>
        <div class="experience">
            <h3>Workshop - Ollama & DeepSeek</h3>
            <p>Participated in a workshop where I built a resume analyzer using LLM models.</p>
        </div>
    `;
};


    
    
}
