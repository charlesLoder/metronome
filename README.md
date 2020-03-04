# metronome
A web based musical metronome app

## What it is
This is web based musical metronome designed with basic frontend languages (i.e. HTML, CSS, JS).

## Getting Started
Simply download the repository and open index.html in the browser

## Features
* Set the beats per minute (bpm) from 40bpm to 220bpm
* Add or subtract beats per bar (bpb)
* Select which beat is to be accented by clicking on that beat and changing its color:
  * this is a feature not common in most metronomes

## Personal Goals
In this project I attempted to set some personal goals:
1. make another project
2. use vanilla javascript, no JQuery
3. learn more about HTML ```<audio>```

## Issues
1. sometimes the first "measure" seems to have inaccurate timing, then it works fine
2. there is one global variable– ```let tempo;``` at line 1. I cannot figure out how to make the app work without it
