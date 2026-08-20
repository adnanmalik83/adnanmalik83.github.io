/* =========================================================
   AILABS — AI ASSISTANT
   Website Product Assistant
   ========================================================= */

console.log("AILabs website loaded.");


/* =========================================================
   AILABS KNOWLEDGE BASE
   ========================================================= */

const knowledgeBase = {

    cybershield: `
        CyberShield is an Android-focused cybersecurity application
        designed to help users understand mobile security risks,
        permissions and potential threats.
    `,

    smsFraud: `
        AI SMS Fraud Operations Center is an AI-powered platform
        for analysing A2P SMS traffic, identifying suspicious activity
        and supporting fraud operations.

        Technology includes Python, XGBoost, Streamlit and AI.
    `,

    cyberFraud: `
        AI Cyber Fraud Detection is a machine-learning platform
        designed to detect suspicious cyber and fraud events and
        classify potential attack activity.

        Technology includes Python, XGBoost, Random Forest and ML.
    `,

    smartRecruit: `
        SmartRecruit AI is an AI-powered recruitment assistant that
        analyses resumes and helps rank candidates against job
        requirements.

        Technology includes Python, NLP, Sentence Transformers and AI.
    `,

    seo: `
        AI SEO Optimizer Pro is an AI-assisted SEO analysis platform
        that crawls websites, evaluates pages and generates actionable
        optimization insights.

        Technology includes Python, AI, web crawling and Streamlit.
    `,

    dataAnalyst: `
        Autonomous AI Data Analyst is an AI-powered data analysis
        application that automates dataset exploration, statistical
        analysis and visual insight generation.

        Technology includes Python, AI, data analytics and Streamlit.
    `,

    ransomware: `
        Ransomware Canary & Log Analyzer is a defensive security system
        using decoy files, suspicious activity detection, security logs
        and risk scoring to identify potential ransomware behaviour.

        The project is currently part of the AILabs development portfolio.
    `,

    researcher: `
        Local-First AI Researcher is a research automation project
        designed to investigate information, process sources and
        generate structured research outputs.

        Technology includes Python, AI and research automation.
    `,

    ailabs: `
        AILabs is an independent AI software initiative focused on
        building practical AI solutions for real-world problems.

        Areas include cybersecurity, fraud detection, analytics,
        recruitment, SEO, research automation and intelligent
        software systems.
    `,

    adnan: `
        Adnan Malik is the creator of AILabs and a technology
        professional with more than two decades of experience across
        telecommunications, revenue assurance, fraud management and
        technology systems.
    `
};


/* =========================================================
   GET ASSISTANT ELEMENTS
   ========================================================= */

const assistantInput =
    document.querySelector(".assistant-input input");

const assistantButton =
    document.querySelector(".assistant-input button");

const assistantMessage =
    document.querySelector(".assistant-message");


/* =========================================================
   FIND ANSWER
   ========================================================= */

function getAssistantResponse(question) {

    const query = question.toLowerCase().trim();


    /* Empty question */

    if (!query) {

        return "Please ask me something about AILabs or one of our AI products.";

    }


    /* =====================================================
       GREETINGS
       ===================================================== */

    if (
        query.includes("hello") ||
        query.includes("hi") ||
        query.includes("hey")
    ) {

        return `
            Hello! 👋 I'm the AILabs AI Assistant.

            Ask me about our AI products, cybersecurity,
            fraud detection, analytics, automation or
            the projects created by AILabs.
        `;

    }


    /* =====================================================
       PRODUCTS / PORTFOLIO
       IMPORTANT: THIS MUST COME BEFORE GENERAL AILABS
       ===================================================== */

    if (
        query.includes("products") ||
        query.includes("product") ||
        query.includes("projects") ||
        query.includes("project") ||
        query.includes("portfolio") ||
        query.includes("what do you build") ||
        query.includes("what does ailabs build")
    ) {

        return `
            AILabs currently has a growing portfolio of AI software
            products and projects:

            🛡️ CyberShield
            Android-focused cybersecurity application.

            📱 AI SMS Fraud Operations Center
            AI-powered A2P SMS fraud analysis and detection.

            🔐 AI Cyber Fraud Detection
            Machine-learning based cyber and fraud event detection.

            👥 SmartRecruit AI
            AI-powered resume analysis and candidate ranking.

            🔎 AI SEO Optimizer Pro
            AI-assisted website SEO analysis and optimization.

            📊 Autonomous AI Data Analyst
            Automated data exploration, analysis and visualization.

            🚨 Ransomware Canary & Log Analyzer
            Defensive ransomware detection and security monitoring.

            🧠 Local-First AI Researcher
            AI-powered research automation and structured research.

            Visit the Products page to explore the complete portfolio
            and available live demonstrations.
        `;

    }


    /* =====================================================
       CYBERSHIELD
       ===================================================== */

    if (
        query.includes("cybershield") ||
        query.includes("cyber shield")
    ) {

        return knowledgeBase.cybershield;

    }


    /* =====================================================
       SMS FRAUD
       ===================================================== */

    if (
        query.includes("sms fraud") ||
        query.includes("a2p") ||
        query.includes("sms")
    ) {

        return knowledgeBase.smsFraud;

    }


    /* =====================================================
       CYBER FRAUD
       ===================================================== */

    if (
        query.includes("cyber fraud") ||
        query.includes("fraud detection") ||
        query.includes("fraud system")
    ) {

        return knowledgeBase.cyberFraud;

    }


    /* =====================================================
       SMARTRECRUIT
       ===================================================== */

    if (
        query.includes("smartrecruit") ||
        query.includes("smart recruit") ||
        query.includes("recruitment") ||
        query.includes("resume") ||
        query.includes("candidate")
    ) {

        return knowledgeBase.smartRecruit;

    }


    /* =====================================================
       SEO
       ===================================================== */

    if (
        query.includes("seo") ||
        query.includes("search engine") ||
        query.includes("website optimization")
    ) {

        return knowledgeBase.seo;

    }


    /* =====================================================
       DATA ANALYST
       ===================================================== */

    if (
        query.includes("data analyst") ||
        query.includes("data analysis") ||
        query.includes("analytics") ||
        query.includes("dataset")
    ) {

        return knowledgeBase.dataAnalyst;

    }


    /* =====================================================
       RANSOMWARE
       ===================================================== */

    if (
        query.includes("ransomware") ||
        query.includes("canary") ||
        query.includes("log analyzer")
    ) {

        return knowledgeBase.ransomware;

    }


    /* =====================================================
       RESEARCHER
       ===================================================== */

    if (
        query.includes("researcher") ||
        query.includes("research automation") ||
        query.includes("research")
    ) {

        return knowledgeBase.researcher;

    }


    /* =====================================================
       TECHNOLOGY
       ===================================================== */

    if (
        query.includes("technology") ||
        query.includes("technologies") ||
        query.includes("python") ||
        query.includes("machine learning") ||
        query.includes("what ai") ||
        query.includes("what technology")
    ) {

        return `
            AILabs uses practical AI and modern software technologies
            including Python, machine learning, XGBoost, Random Forest,
            NLP, Streamlit, data analytics, web technologies and
            AI-assisted automation.
        `;

    }


    /* =====================================================
       FOUNDER
       ===================================================== */

    if (
        query.includes("adnan") ||
        query.includes("founder") ||
        query.includes("creator") ||
        query.includes("who created")
    ) {

        return knowledgeBase.adnan;

    }


    /* =====================================================
       CONTACT
       ===================================================== */

    if (
        query.includes("contact") ||
        query.includes("email") ||
        query.includes("phone") ||
        query.includes("linkedin")
    ) {

        return `
            You can contact Adnan Malik through the Contact page.

            Email:
            adnanmalik83.ai@gmail.com

            Phone:
            +973 33011246

            LinkedIn:
            linkedin.com/in/adnan-malik-30240928/
        `;

    }


    /* =====================================================
       GITHUB
       ===================================================== */

    if (
        query.includes("github") ||
        query.includes("source code") ||
        query.includes("code")
    ) {

        return `
            AILabs projects are available on GitHub:

            github.com/adnanmalik83

            Visit the Products page to find the GitHub repository
            for each individual project.
        `;

    }


    /* =====================================================
       GENERAL AILABS
       THIS IS INTENTIONALLY NEAR THE END
       ===================================================== */

    if (
        query.includes("ailabs") ||
        query.includes("ai labs") ||
        query.includes("company") ||
        query.includes("platform")
    ) {

        return knowledgeBase.ailabs;

    }


    /* =====================================================
       DEFAULT RESPONSE
       ===================================================== */

    return `
        I'm currently the AILabs website assistant, so I can answer
        questions about our products, projects, technologies and
        founder.

        Try asking:

        • What products does AILabs have?
        • What is CyberShield?
        • Tell me about the SMS fraud platform.
        • What does the Cyber Fraud Detection system do?
        • Who created AILabs?
        • What technologies do you use?
        • How can I contact AILabs?
        • Where can I find the GitHub projects?
    `;

}


/* =========================================================
   SHOW RESPONSE
   ========================================================= */

function showAssistantResponse(question) {

    const response = getAssistantResponse(question);

    assistantMessage.textContent = response;

}


/* =========================================================
   BUTTON CLICK
   ========================================================= */

if (
    assistantButton &&
    assistantInput &&
    assistantMessage
) {

    assistantButton.addEventListener("click", function () {

        const question = assistantInput.value;

        showAssistantResponse(question);

        assistantInput.value = "";

    });


    /* =====================================================
       ENTER KEY
       ===================================================== */

    assistantInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            const question = assistantInput.value;

            showAssistantResponse(question);

            assistantInput.value = "";

        }

    });

}