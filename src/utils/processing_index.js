export const randomIdString = () => {
    let text;
    let number = "";
    let letters = "";

    const numbersPossible = "1234567890"
    const lettersPossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    function random (value, possible, target) {
        for (let i = 0; i < value; i++)
            target += possible.charAt(Math.floor(Math.random() * possible.length));

        return target
    }

    text = random(15, numbersPossible, number) + "." + random(10, lettersPossible, letters)

    return text;
}

export const scrollUp = () => {
    window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth',
    })
}

export const checkTopScroll = (callBack) => {
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        callBack(scrollTop)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};

export const copyObject = ({object, type = "json", id}) => {
    let copyText

    if (type === "text") {
        const codeBlock = document.getElementById(id);
        copyText = codeBlock.innerText;
    } else {
        copyText = JSON.stringify(object, null, 2);
    }

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(copyText)
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = copyText;
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";

        document.body.prepend(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (error) {
            console.error(error);
        } finally {
            textArea.remove();
        }
    }
}