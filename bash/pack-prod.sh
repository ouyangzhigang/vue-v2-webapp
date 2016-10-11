# !/bin/bash

rm -rf ./aun-dist/*
npm run build
echo "establish done"
cd aun-dist
cTim=$(date +"%Y-%m-%d_%H-%M-%S")
zip -q -r --exclude=*.DS_Store* ../aun-release/$cTim.zip *
git tag -a "打生产包$cTim" -m "pack"
echo "pack in aun-release/$cTim.zip"
