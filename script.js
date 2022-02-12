// categoria
(function () {
    document.getElementById('categoria').addEventListener('change', function() {
        let variavel = document.getElementById("categoria").options[document.getElementById("categoria").selectedIndex].value




        // console.log(variavel)

        switch (variavel) {
            case 'automovel':
                console.log('ok')
                // document.getElementById('produto-aut').classList.add('mostar')
                // document.querySelector('select').classList.toggle('sumir')
                break;
            case 'comida':
                console.log('ok')
                break;
            case 'roupa':
                console.log('ok')
                break;
        
            default:
                break;
        }
    })
}) ();

//produtos

    document.getElementById('produto-aut').addEventListener('change', function() {
        let variavel = document.getElementById("produto-aut").options[document.getElementById("produto-aut").selectedIndex].value
        
        switch (variavel) {
            case 'carro':
                document.getElementById('marcas1').classList.add('sumir')
                document.getElementById('marcas').classList.remove('sumir')
                // marcas()

                        let variavel = document.getElementById("marcas").options[document.getElementById("marcas").selectedIndex].value
                        
                        const valor = {
                            ford:[30,30,30,1],
                            VW:[50,80,5,30],
                            ferrari:[20,70,55,20]
                        }
                
                        switch (variavel) {
                            case 'ford':
                
                                for (let i = 0; i < valor.ford.length; i++) {
                                    document.getElementById(`coluna${i+1}`).style.height = `${valor.ford[i]}%`                    
                                }
                                
                                break;
                            case 'VW':
                
                                for (let i = 0; i < valor.VW.length; i++) {
                                    document.getElementById(`coluna${i+1}`).style.height = `${valor.VW[i]}%`                    
                                }
                
                                break;
                            case 'ferrari':
                
                                for (let i = 0; i < valor.ferrari.length; i++) {
                                    document.getElementById(`coluna${i+1}`).style.height = `${valor.ferrari[i]}%`                    
                                }
                
                                break;
                        
                            default:
                                break;
                        }
                
                    
            
                break;
            case 'moto':
                document.getElementById('marcas1').classList.remove('sumir')
                document.getElementById('marcas').classList.add('sumir')
                
                        {
                        let variavel = document.getElementById("marcas1").options[document.getElementById("marcas1").selectedIndex].value
                        
                        const valor = {
                            suzuki:[30,30,30,1],
                            honda:[50,80,5,30],
                            yamaha:[20,70,55,20]
                        }
                
                        switch (variavel) {
                            case 'suzuki':
                                
                                for (let i = 0; i < valor.suzuki.length; i++) {
                                    document.getElementById(`coluna${i+1}`).style.height = `${valor.suzuki[i]}%`                    
                                }
                            
                                break;
                            case 'honda':
                
                                for (let i = 0; i < valor.honda.length; i++) {
                                    document.getElementById(`coluna${i+1}`).style.height = `${valor.honda[i]}%`                    
                                }
                
                                break;
                            case 'yamaha':
                
                                for (let i = 0; i < valor.yamaha.length; i++) {
                                    document.getElementById(`coluna${i+1}`).style.height = `${valor.yamaha[i]}%`
                                }
                
                                break;
                        
                            default:
                                break;
                        }
                
                    }
                break;
        
            default:
                break;
        }

    })



//marcas
    document.getElementById('marcas').addEventListener('change', function() {
        let variavel = document.getElementById("marcas").options[document.getElementById("marcas").selectedIndex].value
        
        const valor = {
            ford:[30,30,30,1],
            VW:[50,80,5,30],
            ferrari:[20,70,55,20]
        }

        switch (variavel) {
            case 'ford':

                for (let i = 0; i < valor.ford.length; i++) {
                    document.getElementById(`coluna${i+1}`).style.height = `${valor.ford[i]}%`                    
                }
                
                break;
            case 'VW':

                for (let i = 0; i < valor.VW.length; i++) {
                    document.getElementById(`coluna${i+1}`).style.height = `${valor.VW[i]}%`                    
                }

                break;
            case 'ferrari':

                for (let i = 0; i < valor.ferrari.length; i++) {
                    document.getElementById(`coluna${i+1}`).style.height = `${valor.ferrari[i]}%`                    
                }

                break;
        
            default:
                break;
        }

    })

    document.getElementById('marcas1').addEventListener('change', function() {
        let variavel = document.getElementById("marcas1").options[document.getElementById("marcas1").selectedIndex].value
        
        const valor = {
            suzuki:[30,30,30,1],
            honda:[50,80,5,30],
            yamaha:[20,70,55,20]
        }

        switch (variavel) {
            case 'suzuki':
                
                for (let i = 0; i < valor.suzuki.length; i++) {
                    document.getElementById(`coluna${i+1}`).style.height = `${valor.suzuki[i]}%`                    
                }
            
                break;
            case 'honda':

                for (let i = 0; i < valor.honda.length; i++) {
                    document.getElementById(`coluna${i+1}`).style.height = `${valor.honda[i]}%`                    
                }

                break;
            case 'yamaha':

                for (let i = 0; i < valor.yamaha.length; i++) {
                    document.getElementById(`coluna${i+1}`).style.height = `${valor.yamaha[i]}%`                    
                }

                break;
        
            default:
                break;
        }

    })

    // ...........
    let x = document.getElementById('marcas')

    
    const valor = {
        ford:[30,30,30,1],
        VW:[50,80,5,30],
        ferrari:[20,70,55,20]
    }


    function select(p) {
        p = valor
        let variavel = document.getElementById("marcas").options[document.getElementById("marcas").selectedIndex].value


        switch (variavel) {
            case 'ford':

                for (let i = 0; i < valor.ford.length; i++) {
                    document.getElementById(`coluna${i+1}`).style.height = `${valor.ford[i]}%`                    
                }

                break;
            case 'VW':

                for (let i = 0; i < valor.VW.length; i++) {
                    document.getElementById(`coluna${i+1}`).style.height = `${valor.VW[i]}%`                    
                }

                break;
            case 'ferrari':

                for (let i = 0; i < valor.ferrari.length; i++) {
                    document.getElementById(`coluna${i+1}`).style.height = `${valor.ferrari[i]}%`                    
                }

                break;

            default:
                break;
        }

    }

    x.addEventListener('load',select())
