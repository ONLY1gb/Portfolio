document.addEventListener('DOMContentLoaded', () => {
    const projectDetails = {
        myntra: {
            screenshots: ['Myntra1.png', 'Myntra2.png', 'Myntra.png', 'Myntra4.png', 'Myntra5.png', 'Myntra6.png', 'Myntra7.png', 'Myntra8.png'],
            description: 'I developed a fully functional Myntra clone using React.js, implementing key features like a product catalog, shopping bag, and user authentication. The application allows users to add items to their shopping bag, proceed to checkout, and complete payments through card or QR code options. The project includes a responsive design, a smooth login flow with OTP authentication, and dynamic payment processing, offering a seamless e-commerce experience similar to the original Myntra platform.'
        },
        netflix: {
            screenshots: ['Netflix.png', 'Netflix2.png', 'Netflix3.png', 'Netflix4.png', 'Netflix5.png', 'Netflix6.png', 'Netflix7.png'],
            description: 'A responsive Netflix clone using HTML, CSS, and JavaScript, as part of my Bharat Internship. This project mirrors the sleek design and functionality of the popular streaming platform, offering a seamless user experience. From dynamic content display to responsive layouts, I have implemented key features like video streaming, user authentication, and intuitive navigation. Through this project, I have honed my web development skills and gained practical insights into frontend technologies. It showcases my passion for creating engaging user interfaces and demonstrates my proficiency in the fundamental web development trio: HTML, CSS, and JavaScript.'
        },
        stopwatch: {
            screenshots: ['stopwatch.png', 'stopwatch2 (2).png'],
            description: 'Using HTML for structure, CSS for styling, and JavaScript for functionality, I built a timer and stopwatch app. With intuitive user interface and smooth transitions, its perfect for tracking time.'
        },
        temperature: {  // Corrected key
            screenshots: ['Tempreture.png', 'Tempreture2.png'],
            description: 'I have developed a user-friendly temperature converter as part of my project for Bharat Intern. This innovative tool, created using HTML, CSS, and JavaScript, allows users to effortlessly convert temperatures between Celsius, Fahrenheit, and Kelvin scales. The intuitive design ensures seamless navigation, while the robust JavaScript backend ensures accurate and instant conversions. This project not only showcases my proficiency in front-end technologies but also demonstrates my ability to create practical, functional applications. Its a testament to my skills and creativity, reflecting my commitment to delivering efficient solutions in the world of web development.'
        },
        whatsapp: {  // Corrected key and value to lowercase
            screenshots: ['Whatsapp1.png', 'whatsapp2.png'],
            description: 'A WhatsApp clone web application built using HTML5, CSS, and JavaScript.'
        }
    };

    document.querySelectorAll('.view-project-btn').forEach(button => {
        button.addEventListener('click', () => {
            const projectKey = button.getAttribute('data-project').toLowerCase(); // Ensures lowercase key matching
            const project = projectDetails[projectKey];

            if (project) {  // Check if project exists in projectDetails
                const carouselInner = document.getElementById('carouselInner');
                const projectDescription = document.getElementById('projectDescription');

                // Clear the previous project’s content
                carouselInner.innerHTML = ''; 
                projectDescription.innerText = ''; 

                // Clear previously appended screenshot container
                const modalBody = document.querySelector('.modal-body');
                const existingScreenshotContainer = modalBody.querySelector('.screenshot-container');
                if (existingScreenshotContainer) {
                    existingScreenshotContainer.remove(); // Remove old screenshots
                }

                // Create a new container for the screenshots
                const screenshotContainer = document.createElement('div');
                screenshotContainer.classList.add('screenshot-container');

                project.screenshots.forEach((screenshot) => {
                    const img = document.createElement('img');
                    img.src = screenshot;
                    img.classList.add('img-fluid', 'mb-3'); // Add classes for styling
                    screenshotContainer.appendChild(img);
                });

                // Append screenshots to modal body
                modalBody.appendChild(screenshotContainer);

                // Set the description after the images
                projectDescription.innerText = project.description;

                // Show the modal
                $('#projectModal').modal('show');
            } else {
                console.error('Project not found:', projectKey);
            }
        });
    });

    document.getElementById('downloadBtn').addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = 'Gautam_2310.pdf'; // Update with your resume path
        link.download = 'Gautam_Bhawsar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
