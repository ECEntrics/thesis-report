# Concordia White Paper
> A decentralized social network that supports democratic polls

This repository contains the Latex code for the final report of the diploma thesis "Autonomous social network based on distributed technologies". This report doubles as the white paper for Concordia, the proof of concept application developed during the research part of the thesis. Unfortunately, the report is only available in Greek.

## How to compile

Make sure you have xelatex and pygmentized installed. In windows run:

```bash
xelatex.exe -synctex=1 -interaction=nonstopmode -shell-escape "thesis".tex
```

In linux (with latexmk):

```shell
latexmk -bibtex -synctex=1 -interaction=nonstopmode -shell-escape -xelatex thesis.tex
```
