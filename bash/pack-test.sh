# !/bin/bash

rm -rf ./aun-dist/*
npm run test
echo "establish done"
cd aun-dist
cTim=$(date +"%Y-%m-%d_%H-%M-%S")
zip -q -r --exclude=*.DS_Store* ../aun-release/$cTim.zip *
git tag -a "打测试包$cTim" -m "pack"
echo "pack in aun-release/$cTim.zip"
