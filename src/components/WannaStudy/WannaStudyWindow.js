import styled from "styled-components";
import bitcoin from "./bitcoin.png";
import WannaStudy from "./WannaStudy.jpg";

function WannaStudyWindow({
    className,
    remainLoseTime,
    remainRaiseTime,
    onDecrypt,
    onCheck,
    onCopy,
    raiseDeadline,
    loseDeadline,
    onExit,
}) {
    return (
        <div className={className}>
            <div className="container">
                <header>
                    <img
                        src={
                            "https://cdn-icons-png.flaticon.com/512/732/732397.png"
                        }
                        alt="icon"
                    />
                    <span>Wana Decrypt0r 2.0</span>
                    <div className="window-controls">
                        <button className="control-button minimize" />
                        <button className="control-button maximize" />
                        <button
                            onClick={onExit}
                            className="control-button close"
                            id="exit"
                        />
                    </div>
                </header>
                <div className="content">
                    <section className="left">
                        <div className="logo">
                            <img src={WannaStudy} alt="WannaStudy" />
                        </div>
                        <div className="infos-container">
                            <div className="infos-title">
                                Test will be raised on
                            </div>
                            <div className="infos-content">
                                <div className="infos">
                                    <div className="info">{raiseDeadline}</div>
                                    <div className="info" />
                                    <div className="info">Time Left</div>
                                    <div className="info">
                                        <span className="time">
                                            {remainRaiseTime}
                                        </span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="bar-color">
                                        <div
                                            style={{ height: 10 }}
                                            className="bar-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="infos-container">
                            <div className="infos-title">
                                Your memories will be lost on
                            </div>
                            <div className="infos-content">
                                <div className="infos">
                                    <div className="info">{loseDeadline}</div>
                                    <div className="info" />
                                    <div className="info">Time Left</div>
                                    <div className="info">
                                        <span className="time">
                                            {remainLoseTime}
                                        </span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="bar-color">
                                        <div
                                            style={{ height: 60 }}
                                            className="bar-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="right">
                        <div className="top-bar">
                            <div className="announcement">
                                Ooops, your head has been encrypted!
                            </div>
                            <div className="lang">
                                <select>
                                    <option>English</option>
                                </select>
                            </div>
                        </div>
                        <div className="manuals">
                            <div className="manual">
                                <div className="title">
                                    What Happened to My Head?
                                </div>
                                <p>
                                    <strong>Y</strong>our important memories are
                                    encrypted.
                                </p>
                                <p>
                                    Many of your thoughts, memories, study
                                    notes, and mental files are no longer
                                    accessible because your head has been
                                    encrypted. Maybe you're panicking and trying
                                    to restore them, but don’t even try. No one
                                    can unlock your head without our cheat code.
                                </p>
                            </div>
                            <div className="manual">
                                <div className="title">
                                    Can I recover my memories?
                                </div>
                                <p>
                                    <strong>S</strong>ure. We guarantee that you
                                    can recover all your memories stored in your
                                    head—safely and easily. But you don’t have
                                    much time left. The exam is already loading.
                                </p>
                                <p>
                                    You can unlock a few of your memories for
                                    free. Click &lt;Decrypt&gt; to see if any
                                    lecture content survived.
                                </p>
                                <p>
                                    But if you want full memory access, you need
                                    to study. You have 3 days to grind—after
                                    that, your stress will double.
                                </p>
                                <p>
                                    And if you don’t study within 7 days, your
                                    memories will be lost forever.
                                </p>
                                <p>
                                    We may host free cram sessions for students
                                    who’ve been brain-dead for over 6 months.
                                </p>
                            </div>
                            <div className="manual">
                                <div className="title">How Do I Study?</div>
                                <p>
                                    <strong>S</strong>tudying is accepted in
                                    dedicated focus hours only. For more info,
                                    click &lt;About plans&gt;.
                                </p>
                                <p>
                                    Please check your current stress level and
                                    prepare some caffeine. For a guide, click
                                    &lt;How to stay awake&gt;.
                                </p>
                                <p>
                                    Then follow the study schedule written on
                                    your desk or wall. Stick to it.
                                </p>
                                <p>
                                    After your study session, click &lt;Check
                                    Progress&gt;. Best time to check: 9:00am –
                                    11:00am (when your brain isn’t fried).
                                </p>
                                <p>
                                    Once your focus is verified, your memories
                                    will start decrypting automatically.
                                </p>
                            </div>
                            <div className="manual">
                                <div className="title">Help</div>
                                <p>
                                    If you need assistance, cry for help by
                                    clicking &lt;Contact Ur Friend&gt;.
                                </p>
                            </div>

                            <div className="manual">
                                <p className="darkred">
                                    We strongly recommend you do not delete this
                                    recovery program, and avoid anything that
                                    may interfere with the process until your
                                    memories are fully restored. If this
                                    software is removed—intentionally or
                                    automatically—you won’t be able to retrieve
                                    your memories, even if you study later.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <footer>
                    <div className="left">
                        <div className="contacts">
                            <a
                                className="contact underline"
                                href="https://letmegooglethat.com/?q=How+can+I+make+a+study+plan%3F"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                About plans
                            </a>
                            <a
                                className="contact underline"
                                href="https://letmegooglethat.com/?q=How+do+I+stay+awake%3F"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                How to stay awake
                            </a>
                            <a
                                className="contact underline"
                                href="https://letmegooglethat.com/?q=mythical+creature"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <strong>Contact to Ur Friend</strong>
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="bitcoins">
                            <img src={bitcoin} alt="bitcoin" />
                            <div className="text">
                                <div className="hint yellow">
                                    Send 4 hours worth of focused studying to
                                    the location shown below. <br />
                                    No cheating. No skipping. This is the only
                                    way to restore your memories.
                                </div>
                                <div className="inputs">
                                    <input
                                        type="text"
                                        value="Y0uR_De5k"
                                        disabled="disabled"
                                    />
                                    <button onClick={onCopy} id="copy">
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                            <button onClick={onCheck} id="check">
                                Check <span className="underline">P</span>
                                rogress
                            </button>
                            <button onClick={onDecrypt} id="decrypt">
                                <span className="underline">D</span>ecrypt
                            </button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default styled(WannaStudyWindow)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: auto;
    @media (max-width: 800px) {
        & {
            justify-content: flex-start;
            align-items: flex-start;
        }
    }
    .container {
        background: darkred;
        border-radius: 0; /* 테두리 모서리를 제거 */
        border: none; /* 테두리 제거 */
        font-family: sans-serif;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* 윈도우 10 스타일의 그림자 추가 */
        overflow: hidden; /* 내용이 넘치지 않도록 */
    }
    header {
        height: 32px;
        border-bottom: none; /* 선 제거 */
        background: #2b2b2b; /* 다크 모드 배경색 */
        display: flex;
        align-items: center;
        padding: 0 2px;
        img {
            margin: 2px 4px;
            width: 15px;
            height: 15px;
            filter: grayscale(100%) brightness(1.8); /* 회색 아이콘으로 변경 */
        }
        span {
            flex-grow: 1;
            font-family: "Segoe UI", Arial, sans-serif; /* Windows 10 기본 폰트 */
            color: #e1e1e1; /* 밝은 회색 텍스트 */
            margin-left: 5px;
            font-size: 12px; /* 조금 더 작은 폰트 사이즈 */
            font-weight: 400; /* 중간 두께 */
        }
        .window-controls {
            display: flex;
            height: 100%;
        }
        .control-button {
            border: none;
            background: transparent;
            width: 46px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;
            position: relative;
            outline: none;
            transition: background-color 0.1s ease;
        }
        .minimize:hover {
            background-color: #404040; /* 다크 모드 호버 색상 */
        }
        .maximize:hover {
            background-color: #404040; /* 다크 모드 호버 색상 */
        }
        .close:hover {
            background-color: #e81123; /* 닫기 버튼 붉은색 유지 */
        }
        .minimize::before {
            content: "";
            width: 10px;
            height: 1px;
            background: #a0a0a0; /* 회색 아이콘 */
            position: absolute;
        }
        .maximize::before {
            content: "";
            width: 10px;
            height: 10px;
            border: 1px solid #a0a0a0; /* 회색 아이콘 */
            position: absolute;
            background: transparent;
        }
        .close::before,
        .close::after {
            content: "";
            position: absolute;
            width: 14px;
            height: 1px;
            background: #a0a0a0; /* 회색 아이콘 */
        }
        .close:hover::before,
        .close:hover::after {
            background: white; /* 호버 시 흰색으로 변경 */
        }
        .close::before {
            transform: rotate(45deg);
        }
        .close::after {
            transform: rotate(-45deg);
        }
    }
    .content {
        display: flex;
        padding-bottom: 10px;
    }
    .left {
        width: 280px;
    }
    .right {
        display: flex;
        flex-direction: column;
        width: 600px;
    }
    .top-bar {
        position: relative;
        margin: 10px 0 10px 10px;
        display: flex;
    }
    .logo {
        width: 100%;
        margin-top: 7px;
        text-align: center;
        img {
            border: 3px solid lightgray;
            border-right-color: #868788;
            border-bottom-color: darkgray;
            border-radius: 2px;
            width: 150px;
            height: 150px;
        }
    }
    .infos-container {
        border: 2px solid lightgray;
        margin: 10px 10px 0;
        padding: 10px 3px;
        font-weight: 700;
    }
    .infos-content {
        display: flex;
    }
    .infos-title {
        text-align: center;
        color: yellow;
        margin-bottom: 5px;
        font-size: 1rem;
    }
    .infos {
        padding-top: 5px;
        flex-grow: 1;
    }
    .info {
        text-align: center;
        color: #fff;
        min-height: 1em;
    }
    .time {
        font-size: 2em;
        height: 40px;
        font-weight: 100;
    }
    .bar {
        &-color {
            height: 100%;
            width: 20px;

            border: 1px solid gray;
            border-right-color: lightgray;
            border-bottom-color: lightgray;
            background: linear-gradient(to bottom, #0ad700, red);
            position: relative;
        }
        &-cover {
            position: absolute;
            width: 100%;
            height: 0;
            background: darkred;
        }
    }

    .announcement {
        color: #fff;
        font-size: 1.2em;
        flex-grow: 1;
        text-align: center;
        font-weight: 700;
    }
    .lang {
        border: rgb(90, 90, 90) 2px solid;
        border-right-color: lightgray;
        border-bottom-color: lightgray;
        select {
            background: transparent;
            width: 150px;
            height: 22px;
            color: #fff;
        }
    }
    .manuals {
        font-family: "Times New Roman", Times, serif;
        background: #fff;
        flex-grow: 1;
        overflow-y: scroll;
        height: 300px;
        border: 2px solid gray;
        border-right: 0;
    }
    .manual {
        .title {
            font-size: 1.2em;
            font-weight: 900;
        }
    }
    .manual:not(:last-child) {
        margin-bottom: 20px;
    }
    footer {
        display: flex;
    }
    .contacts {
        padding: 27px;
    }
    .contact {
        cursor: pointer;
        color: #7be2e2;
        display: block;
        strong {
            font-size: 1.1em;
            color: #7bdfdf;
        }
    }
    .contact:not(:last-child) {
        margin-bottom: 20px;
    }

    .bitcoins {
        display: flex;
        border: 2px solid lightgray;
        padding: 10px 5px 10px 0;
        img {
            border: 2px solid lightgray;
            width: 170px;
            height: 66px;
        }
        .text {
            margin-left: 10px;
            flex-grow: 1;
            .hint {
                font-size: 0.8em;
                margin-bottom: 15px;
                font-weight: 700;
            }
            .inputs {
                height: 50%;
                display: flex;
                input {
                    border: rgb(90, 90, 90) 3px solid;
                    border-right-color: lightgray;
                    border-bottom-color: lightgray;
                    color: #fff;
                    background: darkred;
                    margin-right: 3px;
                    flex-grow: 1;
                    padding: 3px 0 10px 5px;
                    font-size: 1em;
                    font-weight: 700;
                    pointer-events: none;
                }
                button {
                    background: lightgray;
                }
            }
        }
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        button {
            background: lightgray;
            font-weight: 700;
            font-size: 1.2em;
            height: 35px;
            width: calc(50% - 20px);
        }
    }

    .yellow {
        color: yellow;
    }

    .darkred {
        color: darkred;
    }

    .underline {
        text-decoration: underline;
    }
`;
