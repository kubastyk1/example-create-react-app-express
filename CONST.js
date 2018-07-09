module.exports = Object.freeze({
  HEAD_SCRIPT_1: `Add-Type -AssemblyName System.Speech
  $SpeechSynthesizer = New-Object System.Speech.Synthesis.SpeechSynthesizer
  $SpeechSynthesizer.Rate = 0  # -10 is slowest, 10 is fastest

  $WavFileOut = Join-Path -Path (Get-Item -Path ".\").FullName "`,
  HEAD_SCRIPT_2: `"
  $SpeechSynthesizer.SetOutputToWaveFile($WavFileOut)

  $RecordedText = '
    <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">`,
  FOOT_SCRIPT: `  </speak>
  '
  $SpeechSynthesizer.SpeakSsml($RecordedText)
  $SpeechSynthesizer.Dispose()
  `,
  PROSODY_START: `<prosody pitch="high" rate="slow">`,
  PROSODY_END: `</prosody>`,
  SLEEP_BETWEAN_WORDS: `<break time="500ms" />`,
  SLEEP_BETWEAN_TRANSLATIONS: `<break time="2000ms" />`,
});
