 var typed = new Typed(".multiple-text", {
        strings: ["Front end developer", "Web developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
    const btn = document.querySelector(".btn");

    btn.onclick = () => {
     
        const link = document.createElement('a');
        link.href='./New Uploaded Resume.pdf'
        link.download = './New Uploaded Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

