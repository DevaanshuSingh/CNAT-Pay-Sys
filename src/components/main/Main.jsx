import styles from './main.module.css';

const Main = () => {
    return (
        <main className={styles.mainArea}>
            <div className={styles.contentWrapper}>
                <div className={styles.placeholderCard}>
                    Mr. Sukanta Hui is a seasoned full-stack developer and programming expert with over 20 years of experience guiding learners from beginner to professional level. With deep expertise in modern programming languages and software development, he has mentored engineers from diverse organizations and guided countless B.Tech and M.Tech students throughout their academic and professional journeys. Beyond technical mastery, Mr. Sukanta is a passionate educator with vast insight into the education system, a dedicated career guide, and a motivational speaker who inspires future technologists to achieve excellence. A true problem solver at heart, he continues to shape the next generation of software engineers through his mentorship and leadership.
                </div>
                <div className={styles.placeholderCard}>
                    Ms. Tanusree Hui is an accomplished educator and programming instructor with over 18 years of experience teaching a wide range of programming languages and mathematical concepts. With a strong command over complex algorithms and a deep understanding of how students learn, she excels at guiding learners from the fundamentals to advanced problem-solving. As a dedicated high school computer teacher and co-founder of Coder & AccoTax, Ms. Tanusree has developed a unique approach that bridges academic knowledge with real-world application. Her expertise in both mathematics and computer science, combined with her insights into modern education systems, makes her a highly respected mentor who empowers students to build confidence and achieve excellence in technology and learning.
                </div>
                <div className={styles.placeholderCard}>
                    Ms. Mounita Bhandari ensures practical knowledge through lab-based learning, supporting students step-by-step. Ms. Ritaja Ghosh guides students in lab sessions with patience and precision, helping them gain real-world skills. She encourages hands-on practice and ensures every student is confident with the tools. Ms. Sreeparna Das simplifies complex DSA topics and focuses on logic building with hands-on coding sessions.
                </div>
                <div className={styles.placeholderCard}>
                    <strong>Coder & AccoTax</strong> is Barrackpore's premier ISO 9001:2015 certified training institute. We offer comprehensive, industry-aligned courses in Full Stack Web Development, Python, Java, Data Analysis, Accounting, and GST. With state-of-the-art lab facilities, 1-on-1 doubt clearing sessions, and a proud 92% student success rate, we bridge the gap between academic learning and real-world software engineering expectations.
                </div>
                <div className={styles.placeholderCard}>
                    Our commitment goes beyond the classroom. From foundational logic building to advanced algorithms, Coder & AccoTax provides extensive career guidance, resume building, and mock interviews to make students job-ready. Whether you are a high school student, an engineering graduate, or a working professional seeking flexible batch timings, our expert mentors are here to elevate your technical journey.
                </div>
            </div>
        </main>
    );
};

export default Main;
