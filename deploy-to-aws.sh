rm -r build/
rm -f package-lock.json
rm -f yarn.lock

npm install

npm run build

aws s3 cp build/ s3://www.rolf.fit/ --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --recursive

aws s3 cp build/ s3://rolf.fit/ --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --recursive

aws cloudfront create-invalidation --distribution-id  E2CNVWEOPPNRPF --paths "/*"

aws cloudfront create-invalidation --distribution-id  E16YEIOTF03SKE --paths "/*"