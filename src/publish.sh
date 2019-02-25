npm run docs:build

CUR_PATH=$(cd "$(dirname "$0")";pwd)
DIST=${CUR_PATH}"/docs/.vuepress/dist/*"
TAR=${CUR_PATH}"/../"
cp -rv $DIST $TAR 
