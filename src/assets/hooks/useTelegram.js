
const tg =  window.Telegram.WebApp;

export function useTelegram() {
    const close =() => {
        tg.close()
    }

    return {
        tg,
        close,
        queryId: tg.initDataUnsafe?.query_id
    }
}
