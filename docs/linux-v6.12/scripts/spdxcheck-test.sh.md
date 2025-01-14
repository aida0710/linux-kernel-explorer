---
sidebar_position: 139
---
# spdxcheck-test.sh

### ファイル情報

- パス: `linux-v6.12/scripts/spdxcheck-test.sh`

### コンテンツ

```sh
#!/bin/sh

# run check on a text and a binary file
for FILE in Makefile Documentation/images/logo.gif; do
	python3 scripts/spdxcheck.py $FILE
	python3 scripts/spdxcheck.py - < $FILE
done

# run check on complete tree to catch any other issues
python3 scripts/spdxcheck.py > /dev/null

```
