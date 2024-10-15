class Thread {
    constructor(id) {
        this.id = id;
    }

    run() {
        console.log(`Thread ${this.id} iniciada.`);
        setTimeout(() => {
            console.log(`Thread ${this.id} concluída.`);
        }, Math.random() * 1000); 
    }
}

function threadClasse(n) {
    let threads = [];
    for (let i = 1; i <= n; i++) {
        let thread = new Thread(i);
        threads.push(thread);
        thread.run();
    }
}

threadClasse(10);
