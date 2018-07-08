
Add-Type -AssemblyName System.Speech
$SpeechSynthesizer = New-Object System.Speech.Synthesis.SpeechSynthesizer
$SpeechSynthesizer.Rate = 0  # -10 is slowest, 10 is fastest

$WavFileOut = Join-Path -Path (Get-Item -Path ".\").FullName "\SampleSound.wav"
$SpeechSynthesizer.SetOutputToWaveFile($WavFileOut)

$RecordedText = '
  <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">

    <prosody pitch="high" rate="slow"> Kot </prosody>
    <break time="500ms" />
    <prosody pitch="high" rate="slow"> Cat </prosody>
    <break time="2000ms" />

    <prosody pitch="high" rate="slow"> Pies </prosody>
    <break time="500ms" />
    <prosody pitch="high" rate="slow"> Dog </prosody>
    <break time="2000ms" />

    <prosody pitch="high" rate="slow"> Ptak </prosody>
    <break time="500ms" />
    <prosody pitch="high" rate="slow"> Bird </prosody>
    <break time="2000ms" />

  </speak>
'

$SpeechSynthesizer.SpeakSsml($RecordedText)
$SpeechSynthesizer.Dispose()
Add-Type -AssemblyName System.Speech
  $SpeechSynthesizer = New-Object System.Speech.Synthesis.SpeechSynthesizer
  $SpeechSynthesizer.Rate = 0  # -10 is slowest, 10 is fastest

  $WavFileOut = Join-Path -Path (Get-Item -Path ".").FullName "SampleSound.wav"
  $SpeechSynthesizer.SetOutputToWaveFile($WavFileOut)

  $RecordedText = '
    <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><prosody pitch="high" rate="slow">Kot</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Cat</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">Pies</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Dog</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">Ptak</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Bird</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">gggg</prosody><break time="500ms" /><prosody pitch="high" rate="slow">hhh</prosody><break time="2000ms" />  </speak>
  '

  $SpeechSynthesizer.SpeakSsml($RecordedText)
  $SpeechSynthesizer.Dispose()
  Add-Type -AssemblyName System.Speech
  $SpeechSynthesizer = New-Object System.Speech.Synthesis.SpeechSynthesizer
  $SpeechSynthesizer.Rate = 0  # -10 is slowest, 10 is fastest

  $WavFileOut = Join-Path -Path (Get-Item -Path ".").FullName "SampleSound.wav"
  $SpeechSynthesizer.SetOutputToWaveFile($WavFileOut)

  $RecordedText = '
    <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><prosody pitch="high" rate="slow">Kot</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Cat</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">Pies</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Dog</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">Ptak</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Bird</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">gggg</prosody><break time="500ms" /><prosody pitch="high" rate="slow">hhh</prosody><break time="2000ms" />  </speak>
  '

  $SpeechSynthesizer.SpeakSsml($RecordedText)
  $SpeechSynthesizer.Dispose()
  Add-Type -AssemblyName System.Speech
  $SpeechSynthesizer = New-Object System.Speech.Synthesis.SpeechSynthesizer
  $SpeechSynthesizer.Rate = 0  # -10 is slowest, 10 is fastest

  $WavFileOut = Join-Path -Path (Get-Item -Path ".").FullName "SampleSound.wav"
  $SpeechSynthesizer.SetOutputToWaveFile($WavFileOut)

  $RecordedText = '
    <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><prosody pitch="high" rate="slow">Kot</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Cat</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">Pies</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Dog</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">Ptak</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Bird</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">gggg</prosody><break time="500ms" /><prosody pitch="high" rate="slow">hhh</prosody><break time="2000ms" />  </speak>
  '

  $SpeechSynthesizer.SpeakSsml($RecordedText)
  $SpeechSynthesizer.Dispose()
  Add-Type -AssemblyName System.Speech
  $SpeechSynthesizer = New-Object System.Speech.Synthesis.SpeechSynthesizer
  $SpeechSynthesizer.Rate = 0  # -10 is slowest, 10 is fastest

  $WavFileOut = Join-Path -Path (Get-Item -Path ".").FullName "SampleSound.wav"
  $SpeechSynthesizer.SetOutputToWaveFile($WavFileOut)

  $RecordedText = '
    <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><prosody pitch="high" rate="slow">Kot</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Cat</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">Pies</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Dog</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">Ptak</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Bird</prosody><break time="2000ms" />  </speak>
  '

  $SpeechSynthesizer.SpeakSsml($RecordedText)
  $SpeechSynthesizer.Dispose()
  Add-Type -AssemblyName System.Speech
  $SpeechSynthesizer = New-Object System.Speech.Synthesis.SpeechSynthesizer
  $SpeechSynthesizer.Rate = 0  # -10 is slowest, 10 is fastest

  $WavFileOut = Join-Path -Path (Get-Item -Path ".").FullName "SampleSound.wav"
  $SpeechSynthesizer.SetOutputToWaveFile($WavFileOut)

  $RecordedText = '
    <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><prosody pitch="high" rate="slow">Kot</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Cat</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">Pies</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Dog</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">Ptak</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Bird</prosody><break time="2000ms" />  </speak>
  '

  $SpeechSynthesizer.SpeakSsml($RecordedText)
  $SpeechSynthesizer.Dispose()
  Add-Type -AssemblyName System.Speech
  $SpeechSynthesizer = New-Object System.Speech.Synthesis.SpeechSynthesizer
  $SpeechSynthesizer.Rate = 0  # -10 is slowest, 10 is fastest

  $WavFileOut = Join-Path -Path (Get-Item -Path ".").FullName "SampleSound.wav"
  $SpeechSynthesizer.SetOutputToWaveFile($WavFileOut)

  $RecordedText = '
    <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><prosody pitch="high" rate="slow">Kot</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Cat</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">Pies</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Dog</prosody><break time="2000ms" /><prosody pitch="high" rate="slow">Ptak</prosody><break time="500ms" /><prosody pitch="high" rate="slow">Bird</prosody><break time="2000ms" />  </speak>
  '

  $SpeechSynthesizer.SpeakSsml($RecordedText)
  $SpeechSynthesizer.Dispose()
  