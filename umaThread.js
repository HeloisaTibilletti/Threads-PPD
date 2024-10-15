function umaThread() {
    console.log("Iniciando tarefa...");
    setTimeout(() => {
        console.log("Tarefa concluída.");
    }, 1000);
}

umaThread();
