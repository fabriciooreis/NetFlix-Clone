const config = {
    type: 'carousel',
    startAt: 0,
    perView: 6,
    peek: 5,
    breakpoints: {
        900:{
            perView: 5
        },
        750:{
            perView: 4
        },
        650: {
        perView: 3
        },
        450:{
            perView: 2
        },
        300:{
            perView: 1
        }
    }
  }
new Glide('.glide', config).mount();