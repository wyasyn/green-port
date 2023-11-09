import './Resume.scss'

export default function Resume() {
  return (
    <div className="resume-container container">
        <div className="col-1 col">
            <h3>Education</h3>
            <div className="resume-content">
                <div className="content-item">
                    <h4>
                        Bachelor of Computer Science
                    </h4>
                    <div className="resume-info">
                        <h5>
                            Cavendish University, [2022]
                        </h5>
                        <p>
                            Acquired skills in software development, database management, and system design. Collaborated on group projects, enhancing teamwork and problem-solving abilities.
                        </p>
                    </div>
                </div>
                <div className="content-item">
                    <h4>
                        Bachelor of Science with Education (Mathematics & Physics)
                    </h4>
                    <div className="resume-info">
                        <h5>
                            Makerere University, [2015]
                        </h5>
                        <p>
                            Completed a comprehensive program that combined the fields of mathematics, physics, and education. Developed effective teaching methodologies to convey complex concepts in an understandable way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-1 col">
            <h3>Experience</h3>
            <div className="resume-content">
                <div className="content-item">
                    <h4>
                        Primates Code
                    </h4>
                    <div className="resume-info">
                        <h5>
                            Chief Engineer, [2017 - Present]
                        </h5>
                        <p>
                            Create and maintain websites and web applications, focusing on design, functionality, and user experience. Oversee the management, security, and integrity of databases, ensuring data availability and optimal performance.
                        </p>
                    </div>
                </div>
                <div className="content-item">
                    <h4>
                        Mathematics & Physics Teacher
                    </h4>
                    <div className="resume-info">
                        <h5>
                            Kawempe Muslim SS, [2015 - 2017]
                        </h5>
                        <p>
                            Developed and delivered engaging lesson plans for mathematics and physics. Utilized technology and multimedia resources to enhance student learning.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
