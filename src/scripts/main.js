AOS.init();

const data_evento = new Date("Dec 12, 2023 19:00:00");
const timestamp_evento = data_evento.getTime();

const contar_tempo = setInterval(function() {
    const agora = new Date();
    const timestamp_agora = agora.getTime();

    // milissegundos até o dia do evento
    const tempo_ate_evento = timestamp_evento - timestamp_agora;

    if (tempo_ate_evento <= 0) {
        clearInterval(contar_tempo);
        document.getElementById('contador').innerHTML = 'Evento expirado!';
    } else {
        const dia_em_ms = 1000 * 60 * 60 * 24;
        const hora_em_ms = 1000 * 60 * 60;
        const minuto_em_ms = 1000 * 60;
    
        // a parte inteira de dias que faltam pro evento
        const dias_ate_evento = Math.floor(tempo_ate_evento / dia_em_ms);
    
        // resto da divisão (a parte fragmentada dos dias)
        const horas_ate_evento = Math.floor((tempo_ate_evento % dia_em_ms) / hora_em_ms);
    
        const minutos_ate_evento = Math.floor((tempo_ate_evento % hora_em_ms) / minuto_em_ms);
    
        const segundos_ate_evento = Math.floor((tempo_ate_evento % minuto_em_ms) / 1000);
    
        document.getElementById('contador').innerHTML = `${dias_ate_evento}d ${horas_ate_evento}h ${minutos_ate_evento}m ${segundos_ate_evento}s`;
    }

}, 1000);