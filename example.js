console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
    });
    
    h1.textContent = 'Hola<br> World!';
    // console.log(h1.getAttribute('class'));
    // 1.setAttribute('class', 'verde')
    
    // h1.classList.add('rojo')
    // h1.classList.remove('title')
    
    // input.value = '456'
    
    // console.log(document.createElement('span'));
    
    const img = document.createElement('img');
    img.setAttribute('src', 'https://i.pinimg.com/564x/d4/20/bc/d420bcb4f1b83ed78c4057fe2f6eb1c3.jpg')
    
    console.log(img);
    pid.innerHTML = "";
    pid.append(img);