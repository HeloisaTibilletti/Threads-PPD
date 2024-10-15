function dezThreads(n) {
    for (let i = 1; i <= n; i++) {
        setTimeout(() => {
            console.log(`Tarefa ${i} iniciada.`);
            setTimeout(() => {
                console.log(`Tarefa ${i} concluída.`);
            }, Math.random() * 1000);
        }, 0);
    }
}

dezThreads(10);  // 10 threads
