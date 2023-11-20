import Lines from "@/components/Lines"
import About from "@/components/Portfolio/About";
import Education from "@/components/Portfolio/Education";
import Experience from "@/components/Portfolio/Experience";
import Resources from "@/components/Portfolio/Resources";
import SideProjects from "@/components/Portfolio/SideProjects";
import StatusBar from "@/components/StatusBar";
import { useEffect } from "react"

function Portfolio() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/lines.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div id="editor">
            <div id="code">
                <Lines />
                <div id="code-content">
                    <About />
                    <br />
                    <Experience />
                    <br />
                    <Education />
                    <br />
                    <SideProjects />
                    <br />
                    <Resources />
                </div>
            </div>
            <StatusBar />
        </div>
    )
}

export default Portfolio