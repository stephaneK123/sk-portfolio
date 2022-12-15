import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);

const texts = ["buoyant", "captivated", "cheerful", "cheery", "Cucumber", "chipper", "chirpy", "chuffed", "content", "contented", "delighted", "ecstatic", "elated", "energetic", "entertained", "enthusiastic", "excited", "exhilarated", "exuberant"];

const paragraphs = [
    "Quis commodo velit quis cupidatat non amet aliqua sint veniam labore. Culpa ea laboris consequat mollit proident Lorem cupidatat officia fugiat. Tempor sunt non ullamco irure in proident. Laboris minim esse qui non id et anim commodo. Esse id do irure ut eiusmod aliqua irure dolor in est ullamco culpa enim. ",
    "Quis deserunt tempor consectetur id ea. Aute sunt eu minim nostrud officia excepteur duis et tempor do dolor culpa. Cillum nostrud quis magna consequat.",
    "Aute in id ullamco laboris aute tempor magna dolore ad laborum.",
    "Exercitation ullamco qui occaecat dolore ex cillum exercitation commodo magna Lorem in laborum do do. Laboris ad mollit adipisicing ad occaecat fugiat tempor commodo irure magna culpa. Culpa eiusmod nisi sit non ipsum."
];

class DancingText extends Component {
    state = {
        number: randomNumber(),
        textIndex: 0,
        textFastIndex: 0,
        paragraphIndex: 0,
        customIndex: 0
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                number: randomNumber(),
                textIndex: this.state.textIndex + 1,
                paragraphIndex: this.state.paragraphIndex + 1
            });
        }, 4000);
        setInterval(() => {
            this.setState({
                textFastIndex: this.state.textFastIndex + 1
            });
        }, 600);
    }

    render() {
        return (
            <React.Fragment>
                <section>
                    <section className="inline">
                        <ReactTextTransition
                            children={"You are " + texts[this.state.textIndex % texts.length]}
                            springConfig={presets.gentle}
                            className="big"
                            delay={100}
                            inline
                        />
                    </section>
                </section>
            </React.Fragment>
        );
    }
}

export default DancingText;
