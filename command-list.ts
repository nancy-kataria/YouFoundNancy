export function Skills(){
    const element = document.getElementById("command-block");

    // create an element
    const childElement = document.createElement("p");
    // add the element to the DOM
    element?.appendChild(childElement);

    // Assign id, classname and text
    childElement.id = `skills`;
    childElement.className = "prompt-response clear";
    childElement.textContent = `[HTML, CSS, JavaScript, TypeScript, React, Python]`;
}

export function TellmeMore(){
    const element = document.getElementById("command-block");

    // create an element
    const childElement = document.createElement("pre");
    // add the element to the DOM
    element?.appendChild(childElement);

    // Assign id, classname and text
    childElement.id = `tell-me-more`;
    childElement.className = "prompt-response clear";
    childElement.textContent = `
  .-----------------------------------------------------------------------------.
  ||Es| |F1 |F2 |F3 |F4 |F5 | |F6 |F7 |F8 |F9 |F10|                  C= AMIGA   |
  ||__| |___|___|___|___|___| |___|___|___|___|___|                             |
  | _____________________________________________      ________    ___________  |
  ||~  |! |@ |§ |$ |% |& |/ |( |) |= |? | || |<- |    |Del|Help| |{ |} |/ |* |  |
  ||__|1_|2_|3_|4_|5_|6_|7_|8_|9_|0_|ß_|_| \\|_|__|    |___|____| |[ |]_|__|__|  |
  ||<-  |Q |W |E |R |T |Z |U |I |O |P |Ü |* |   ||               |7 |8 |9 |- |  |
  ||->__|__|__|__|__|__|__|__|__|__|__|__|+_|_  ||               |__|__|__|__|  |
  ||Ctr|oC|A |S |D |F |G |H |J |K |L |Ö |Ä |^ |<'|               |4 |5 |6 |+ |  |
  ||___|_L|__|__|__|__|__|__|__|__|__|__|__|#_|__|       __      |__|__|__|__|  |
  ||^    |> |Y |X |C |V |B |N |M |; |: |_ |^     |      |A |     |1 |2 |3 |E |  |
  ||_____|<_|__|__|__|__|__|__|__|,_|._|-_|______|    __||_|__   |__|__|__|n |  |
  |   |Alt|A  |                       |A  |Alt|      |<-|| |->|  |0    |. |t |  |
  |   |___|___|_______________________|___|___|      |__|V_|__|  |_____|__|e_|  |
  \\                                                                             /
   -----------------------------------------------------------------------------

  I'm so glad that you would like to know more about me. 


  I am a small-town girl who discovered the world of coding back in ninth grade. 
  My teacher sparked my love for it by assigning weekly coding challenges, and 
  I still remember the thrill of printing my first “Hello, World!” in Java. 
  Later, my brother became my mentor, guiding me as I honed my skills. What truly 
  fascinated me was how even the simplest websites I created could connect with 
  people across the globe through the internet —---- it felt like magic!


  I continued my learning journey by joining an NGO, where I worked under 
  experienced engineers who challenged me and helped me grow. After that, 
  I interned at a health tech company, contributing to digitizing cancer 
  health records. Collaborating with the biomedicine team taught me the 
  value of teamwork and sharpened my problem-solving skills. In 2023, 
  I graduated and in 2024, I took the exciting leap of moving to the 
  United States to pursue my master’s degree.

`;
}

// export function Projects(){

// }

export function DevLink(){
    const element = document.getElementById("command-block");

    // create an element
    const childElement = document.createElement("a");
    // add the element to the DOM
    element?.appendChild(childElement);

    // Assign id, classname and text
    childElement.id = `dev`;
    childElement.className = "prompt-response clear";
    childElement.href = 'https://dev.to/nancy_kataria'
    childElement.target = "_blank"
    childElement.textContent = `[Dev.to/nancy_kataria]`;
}