import {

  useState

} from "react";

function Practice() {

  const [message,
  setMessage] =

  useState("");

  const [step,
  setStep] =

  useState(1);

  const sendMessage = () => {

    if(message.trim() !== ""){

      setStep(2);
    }
  };

  return (

    <div className="practice-page">

      <div className="practice-header">

        <h1>

          Interactive Practice

        </h1>

        <p>

          Learn safely through
          app simulations

        </p>

      </div>

      {/* Simulated Chat App */}

      <div className="simulation-card">

        <div className="chat-header">

          SafeChat Demo

        </div>

        <div className="chat-box">

          <div className="bot-message">

            👋 Welcome!

            Send your first message.

          </div>

          {

            step >= 2 && (

              <div className="user-message">

                {message}

              </div>
            )
          }

          {

            step >= 2 && (

              <div className="bot-message success">

                ✅ Great Job!

                You learned how
                messaging works.

              </div>
            )
          }

        </div>

        <div className="chat-input">

          <input

            type="text"

            placeholder=
            "Type message..."

            value={message}

            onChange={(e)=>

              setMessage(
                e.target.value
              )
            }
          />

          <button
            onClick={sendMessage}
          >

            Send

          </button>

        </div>

      </div>

      {/* Learning Progress */}

      <div className="progress-card">

        <h3>

          Learning Progress

        </h3>

        <div className="progress-bar">

          <div
            className="progress-fill"
          >

          </div>

        </div>

        <p>

          25% Completed

        </p>

      </div>

    </div>
  );
}

export default Practice;