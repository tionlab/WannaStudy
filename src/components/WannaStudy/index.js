import { useEffect, useState } from "react";

import { CountDowner, twoDigits } from "../../lib";
import WannaStudyWindow from "./WannaStudyWindow";

function WannaStudy({ raiseDate, loseDate, history }) {
    const raiseDateObj = new Date(raiseDate);
    const loseDateObj = new Date(loseDate);

    const [raiseDeadline] = useState(formatDeadline(raiseDateObj));
    const [loseDeadline] = useState(formatDeadline(loseDateObj));

    const [remainRaiseTime, setRemainRaiseTime] = useState(
        formatDisplay([0, 0, 0, 0])
    );
    const [remainLoseTime, setRemainLoseTime] = useState(
        formatDisplay([0, 0, 0, 0])
    );

    function onCheck() {
        alert(`You didn't study!`);
    }
    function onDecrypt() {
        alert(`Decryption failed! Keep studying!`);
    }
    function onCopy() {
        try {
            document.execCommand("copy");
        } catch {
        } finally {
            alert("Content copied Successfully!");
        }
    }
    function onExit() {
        history.push("/");
    }
    useEffect(() => {
        const raiseTimer = new CountDowner(raiseDateObj);
        const loseTimer = new CountDowner(loseDateObj);

        raiseTimer.on("second", (arr) => {
            setRemainRaiseTime(formatDisplay(arr));
        });
        loseTimer.on("second", (arr) => {
            setRemainLoseTime(formatDisplay(arr));
        });
        setRemainRaiseTime(formatDisplay(raiseTimer.getLast()));
        setRemainLoseTime(formatDisplay(loseTimer.getLast()));
        document.addEventListener("copy", setClipboardData);

        return () => {
            document.removeEventListener("copy", setClipboardData);
            raiseTimer.clear();
            loseTimer.clear();
        };
    }, []);

    return (
        <div
            style={{
                height: "100%",
                background: "#000",
            }}
        >
            <WannaStudyWindow
                remainLoseTime={remainLoseTime}
                remainRaiseTime={remainRaiseTime}
                onDecrypt={onDecrypt}
                onCheck={onCheck}
                onCopy={onCopy}
                onExit={onExit}
                raiseDeadline={raiseDeadline}
                loseDeadline={loseDeadline}
            />
        </div>
    );
}

export function formatDisplay(array) {
    return array.map(twoDigits).join(":");
}

export function formatProgress(p) {
    return `${p * 100}%`;
}

export function formatDeadline(date) {
    const y = date.getFullYear();
    const M = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const dateStr = [M, d, y].map(twoDigits).join("/");
    const timeStr = [h, m, s].map(twoDigits).join(":");
    return `${dateStr} ${timeStr}`;
}

export function setClipboardData(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData(
            "text/plain",
            "Go to study RIGHT NOW! ლ(́◉◞౪◟◉‵ლ)"
        );
    }
}

// TODO : adjust default props to future dates when needed
// WannaStudy.defaultProps = {
//     raiseDate: "2025-04-17T18:00:00",
//     loseDate: "2025-04-12T10:00:00",
// };
WannaStudy.defaultProps = {
    raiseDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    loseDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
};

export default WannaStudy;
