var pontuacao = 0;
    var scoreText;
    var ronibus;
    var rmochila;
    var rpipoca;

    var Stage10 = function() {};

    Stage10.prototype = {

        preload: function () {
            game.load.image('fundo', 'Imagens/fundo.png');
            game.load.image('quadro', 'Imagens/imagens1.png');
            game.load.image('resposta', 'Imagens/resposta1.png');
            game.load.image('rmochila', 'Imagens/mochila.png');
            game.load.image('mochila', 'Imagens/rmochila.png');
            game.load.image('rpipoca', 'Imagens/popcorn.png');
            game.load.image('ronibus', 'Imagens/onibus.png');
            game.load.image('botao', 'Imagens/avanca.png');
            game.load.image('sair', 'Imagens/sair.png');

        },

        create: function () {
            game.add.sprite(0, 0, 'fundo');
            game.add.sprite(170, 60, 'resposta');
            game.add.sprite(170, 150, 'quadro');
            game.add.sprite(340, 80, 'mochila');
            rmochila = game.add.sprite(320, 400, 'ronibus');
            ronibus = game.add.sprite(110,390, 'rmochila');
            rpipoca = game.add.sprite(500, 390, 'rpipoca');
            this.playButton = this.game.add.button(680,00, 'botao', this.playTheGame, this);
            this.playButton = this.game.add.button(300,10, 'sair', this.playsair, this);

            rmochila.inputEnabled = true;
            rmochila.input.enableDrag(true);
            ronibus.inputEnabled = true;
            ronibus.input.enableDrag(true);
            rpipoca.inputEnabled = true;
            rpipoca.input.enableDrag(true);

                 text= game.add.text(0, 0, "Cronometro: "); contador = 30;
                 game.time.events.loop(Phaser.Timer.SECOND, this.mostraTempo, this);
        },

        mostraTempo: function () {
            contador--;
            text.setText('Cronometro: ' + contador);
            if (contador == 0) { 
              game.state.start("Game0");  
            }
        },

    update: function () {
    },
        playTheGame: function (button) {
            game.state.start("Fase 6");        
        },
         playsair: function (button) {
            game.state.start("Fase 6");        
        } 
    };