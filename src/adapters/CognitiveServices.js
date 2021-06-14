import * as sdk from "microsoft-cognitiveservices-speech-sdk";

export function synthesizeSpeech(message) {
    const speechConfig = sdk.SpeechConfig.fromSubscription("a48520a51a764d968078ef960898b5ce", "eastus")

    const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();

    const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
    synthesizer.speakTextAsync(
        message,
        result => {
            if (result) {
                synthesizer.close();
                return result.audioData;
            }
        },
        error => {
            console.log(error);
            synthesizer.close();
        });
}
